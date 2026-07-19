import type { GameCallbacks, Difficulty } from './types';
import { ACCENT } from './types';

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  trail: { x: number; y: number }[];
}

interface TrailPoint {
  x: number;
  y: number;
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  life: number;
  maxLife: number;
  size: number;

  constructor(x: number, y: number, vx: number, vy: number, color: string, life: number) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.life = life;
    this.maxLife = life;
    this.size = Math.random() * 3 + 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
    this.vy += 0.1;
    this.vx *= 0.99;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const alpha = this.life / this.maxLife;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class PowerUp {
  x: number;
  y: number;
  type: string;
  size: number;
  rotation: number;
  pulsePhase: number;
  collected: boolean;
  colors: Record<string, string>;

  constructor(x: number, y: number, type: string) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.size = 20;
    this.rotation = 0;
    this.pulsePhase = 0;
    this.collected = false;
    this.colors = {
      bigPaddle: '#34D399',
      fastPaddle: '#8B5CF6',
      slowBall: '#F59E0B',
      multiball: '#F43F5E',
    };
  }

  update() {
    this.rotation += 0.05;
    this.pulsePhase += 0.1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const pulse = Math.sin(this.pulsePhase) * 0.2 + 1;
    const size = this.size * pulse;
    const color = this.colors[this.type];

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.shadowBlur = 20;
    ctx.shadowColor = color;
    ctx.fillStyle = color;
    ctx.fillRect(-size / 2, -size / 2, size, size);

    ctx.fillStyle = '#000';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const symbols: Record<string, string> = {
      bigPaddle: '▬',
      fastPaddle: '►',
      slowBall: '●',
      multiball: '◆',
    };

    ctx.fillText(symbols[this.type] || '?', 0, 0);
    ctx.restore();
  }

  checkCollision(ballObj: Ball, ballSize: number) {
    const dx = this.x - (ballObj.x + ballSize / 2);
    const dy = this.y - (ballObj.y + ballSize / 2);
    return Math.sqrt(dx * dx + dy * dy) < this.size / 2 + ballSize / 2;
  }
}

export class PongGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private callbacks: GameCallbacks;
  private animationId: number | null = null;

  private paddleWidth = 0;
  private paddleHeight = 0;
  private paddleMargin = 0;
  private ballSize = 0;

  private baseBallSpeed: number;
  private baseAiSpeed = 4;
  private winningScore = 10;
  private currentLevel = 1;
  private speedMultiplier = 1.0;
  private difficulty: Difficulty;
  private playerScore = 0;
  private aiScore = 0;
  private playerY = 0;
  private aiY = 0;
  private ball!: Ball;
  private balls: Ball[] = [];
  private particles: Particle[] = [];
  private powerups: PowerUp[] = [];
  private gamePaused = false;
  private gameRunning = false;
  private soundMuted = false;
  private keys: Record<string, boolean> = {};
  private countdownText = '';
  private countdownVisible = false;

  private playerPowerups = {
    bigPaddle: 0,
    fastPaddle: 0,
    slowBall: 0,
    multiball: false,
  };

  constructor(canvas: HTMLCanvasElement, difficulty: Difficulty, callbacks: GameCallbacks) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.difficulty = difficulty;
    this.callbacks = callbacks;
    this.baseBallSpeed = this.isMobileDevice() ? 3 : 6;
    this.resizeCanvas();
    this.bindInputs();
  }

  private isMobileDevice(): boolean {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  private createBeep(frequency: number, duration: number, volume = 0.3) {
    if (this.soundMuted) return;
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.frequency.value = frequency;
      oscillator.type = 'square';
      gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch {
      // audio not available
    }
  }

  resizeCanvas() {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    const containerWidth = parent.clientWidth;
    const aspectRatio = 800 / 500;
    this.canvas.width = Math.min(containerWidth, 800);
    this.canvas.height = this.canvas.width / aspectRatio;

    this.paddleWidth = this.canvas.width * 0.012;
    this.paddleHeight = this.canvas.height * 0.15;
    this.paddleMargin = this.canvas.width * 0.03;
    this.ballSize = this.canvas.width * 0.015;
  }

  private bindInputs() {
    this.canvas.addEventListener('mousemove', this.handleMouseMove);
    this.canvas.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('resize', this.resizeCanvas);
  }

  private unbindInputs() {
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
    this.canvas.removeEventListener('touchmove', this.handleTouchMove);
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('resize', this.resizeCanvas);
  }

  private handleMouseMove = (e: MouseEvent) => {
    if (!this.gameRunning || this.gamePaused) return;
    const rect = this.canvas.getBoundingClientRect();
    let mouseY = (e.clientY - rect.top) * (this.canvas.height / rect.height);
    const speed = this.playerPowerups.fastPaddle > 0 ? 1 : 0.7;
    this.playerY += (mouseY - this.paddleHeight / 2 - this.playerY) * speed;
    this.playerY = Math.max(0, Math.min(this.playerY, this.canvas.height - this.paddleHeight));
  };

  private handleTouchMove = (e: TouchEvent) => {
    if (!this.gameRunning || this.gamePaused) return;
    e.preventDefault();
    const rect = this.canvas.getBoundingClientRect();
    let touchY = (e.touches[0].clientY - rect.top) * (this.canvas.height / rect.height);
    const speed = this.playerPowerups.fastPaddle > 0 ? 1 : 0.7;
    this.playerY += (touchY - this.paddleHeight / 2 - this.playerY) * speed;
    this.playerY = Math.max(0, Math.min(this.playerY, this.canvas.height - this.paddleHeight));
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    if (!this.gameRunning) return;
    const k = e.key;
    if (
      k === 'ArrowUp' || k === 'ArrowDown' ||
      k.toLowerCase() === 'w' || k.toLowerCase() === 's' ||
      k.toLowerCase() === 'a' || k.toLowerCase() === 'd' ||
      k === 'Escape'
    ) {
      this.keys[k] = true;
      e.preventDefault();
      if (k === 'Escape') {
        this.togglePause();
      }
    }
  };

  private handleKeyUp = (e: KeyboardEvent) => {
    const k = e.key;
    if (this.keys[k]) this.keys[k] = false;
  };

  start() {
    this.initGame();
    this.gameRunning = true;
    this.gameLoop();
  }

  stop() {
    this.gameRunning = false;
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.unbindInputs();
  }

  togglePause() {
    if (!this.gameRunning) return;
    this.gamePaused = !this.gamePaused;
    this.callbacks.onPause(this.gamePaused);
    if (!this.gamePaused) this.gameLoop();
  }

  toggleMute() {
    this.soundMuted = !this.soundMuted;
    return this.soundMuted;
  }

  getMuted() {
    return this.soundMuted;
  }

  setDifficulty(d: Difficulty) {
    this.difficulty = d;
  }

  private initGame() {
    this.playerScore = 0;
    this.aiScore = 0;
    this.currentLevel = 1;
    this.speedMultiplier = 1.0;
    this.playerY = (this.canvas.height - this.paddleHeight) / 2;
    this.aiY = (this.canvas.height - this.paddleHeight) / 2;
    this.playerPowerups = { bigPaddle: 0, fastPaddle: 0, slowBall: 0, multiball: false };
    this.balls = [];
    this.particles = [];
    this.powerups = [];
    this.gamePaused = false;

    this.callbacks.onScoreUpdate(0, 0);
    this.callbacks.onLevelChange(1, 1.0);

    this.resetBall(Math.random() > 0.5 ? 1 : -1);
  }

  private resetBall(direction: number) {
    const speed = this.baseBallSpeed * this.speedMultiplier;
    this.ball = {
      x: this.canvas.width / 2 - this.ballSize / 2,
      y: this.canvas.height / 2 - this.ballSize / 2,
      vx: 0,
      vy: 0,
      trail: [],
    };

    if (this.balls.length === 0) {
      this.balls = [this.ball];
    }

    const onlyGo = !(this.playerScore === 0 && this.aiScore === 0);
    this.showCountdown(() => {
      this.ball.vx = speed * direction;
      this.ball.vy = speed * (Math.random() * 2 - 1) * 0.5;
    }, onlyGo);
  }

  private showCountdown(callback: () => void, onlyGo = false) {
    const steps = onlyGo ? ['Go!'] : ['3', '2', '1', 'Go!'];
    let i = 0;

    const nextStep = () => {
      this.countdownText = steps[i];
      this.countdownVisible = true;
      i++;
      if (i < steps.length) {
        setTimeout(nextStep, 700);
      } else {
        setTimeout(() => {
          this.countdownVisible = false;
          callback();
        }, 500);
      }
    };

    nextStep();
  }

  private spawnPowerUp() {
    if (this.powerups.length < 2 && Math.random() < 0.3) {
      const types = ['bigPaddle', 'fastPaddle', 'slowBall', 'multiball'];
      const type = types[Math.floor(Math.random() * types.length)];
      const x = this.canvas.width * 0.3 + Math.random() * this.canvas.width * 0.4;
      const y = 50 + Math.random() * (this.canvas.height - 100);
      this.powerups.push(new PowerUp(x, y, type));
    }
  }

  private activatePowerUp(type: string) {
    switch (type) {
      case 'bigPaddle':
        this.playerPowerups.bigPaddle = 300;
        break;
      case 'fastPaddle':
        this.playerPowerups.fastPaddle = 300;
        break;
      case 'slowBall':
        this.playerPowerups.slowBall = 200;
        break;
      case 'multiball':
        if (!this.playerPowerups.multiball && this.balls.length === 1) {
          this.playerPowerups.multiball = true;
          for (let i = 0; i < 2; i++) {
            const newBall: Ball = {
              x: this.ball.x,
              y: this.ball.y,
              vx: this.ball.vx * (0.8 + Math.random() * 0.4),
              vy: (Math.random() - 0.5) * this.baseBallSpeed * this.speedMultiplier,
              trail: [],
            };
            this.balls.push(newBall);
          }
        }
        break;
    }
    this.createBeep(800, 0.2, 0.5);
  }

  private addParticles(x: number, y: number, color: string) {
    if (this.isMobileDevice()) return;
    for (let i = 0; i < 15; i++) {
      this.particles.push(new Particle(
        x + (Math.random() - 0.5) * 20,
        y + (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        color,
        30 + Math.random() * 20,
      ));
    }
  }

  private getDifficultyMultiplier(): number {
    const multipliers: Record<Difficulty, number> = {
      easy: 0.6,
      medium: 0.8,
      hard: 1.0,
      insane: 1.3,
    };
    return multipliers[this.difficulty] || 0.8;
  }

  private endGame(message: string) {
    this.gameRunning = false;

    const isPlayerWin = message.includes('You');
    const color = isPlayerWin ? '#34D399' : '#F43F5E';

    for (let i = 0; i < 100; i++) {
      this.particles.push(new Particle(
        this.canvas.width / 2 + (Math.random() - 0.5) * this.canvas.width,
        this.canvas.height / 2 + (Math.random() - 0.5) * this.canvas.height,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        color,
        60 + Math.random() * 40,
      ));
    }

    this.createBeep(isPlayerWin ? 800 : 200, 1.0, 0.8);

    this.callbacks.onGameEnd(message, {
      playerScore: this.playerScore,
      aiScore: this.aiScore,
      level: this.currentLevel,
      speedMultiplier: this.speedMultiplier,
      difficulty: this.difficulty,
    });
  }

  private update() {
    if (this.gamePaused) return;

    const upPressed = this.keys['ArrowUp'] || this.keys['w'] || this.keys['W'] || this.keys['a'] || this.keys['A'];
    const downPressed = this.keys['ArrowDown'] || this.keys['s'] || this.keys['S'] || this.keys['d'] || this.keys['D'];

    if (upPressed || downPressed) {
      const base = Math.max(4, this.canvas.height * 0.02);
      const speedFactor = this.playerPowerups.fastPaddle > 0 ? 1.3 : 1.0;
      const moveAmount = base * speedFactor;
      if (upPressed) this.playerY -= moveAmount;
      if (downPressed) this.playerY += moveAmount;
      const paddleH = this.playerPowerups.bigPaddle > 0 ? this.paddleHeight * 1.5 : this.paddleHeight;
      this.playerY = Math.max(0, Math.min(this.playerY, this.canvas.height - paddleH));
    }

    Object.keys(this.playerPowerups).forEach(key => {
      const val = (this.playerPowerups as any)[key];
      if (typeof val === 'number' && val > 0) {
        (this.playerPowerups as any)[key]--;
      }
    });

    this.particles = this.particles.filter(p => {
      p.update();
      return p.life > 0;
    });

    this.powerups.forEach(p => p.update());

    if (Math.random() < 0.002) this.spawnPowerUp();

    this.balls.forEach((ballObj, ballIndex) => {
      ballObj.trail.push({ x: ballObj.x, y: ballObj.y });
      if (ballObj.trail.length > 10) ballObj.trail.shift();

      const ballSpeed = this.playerPowerups.slowBall > 0 ? 0.5 : 1;
      ballObj.x += ballObj.vx * ballSpeed;
      ballObj.y += ballObj.vy * ballSpeed;

      // Wall collisions
      if (ballObj.y <= 0) {
        ballObj.y = 0;
        ballObj.vy = Math.abs(ballObj.vy);
        this.createBeep(300, 0.1);
        this.addParticles(ballObj.x + this.ballSize / 2, ballObj.y + this.ballSize / 2, ACCENT);
      }
      if (ballObj.y + this.ballSize >= this.canvas.height) {
        ballObj.y = this.canvas.height - this.ballSize;
        ballObj.vy = -Math.abs(ballObj.vy);
        this.createBeep(300, 0.1);
        this.addParticles(ballObj.x + this.ballSize / 2, ballObj.y + this.ballSize / 2, ACCENT);
      }

      const paddleH = this.playerPowerups.bigPaddle > 0 ? this.paddleHeight * 1.5 : this.paddleHeight;

      // Player paddle collision
      if (
        ballObj.x <= this.paddleMargin + this.paddleWidth &&
        ballObj.x + this.ballSize >= this.paddleMargin &&
        ballObj.y + this.ballSize > this.playerY &&
        ballObj.y < this.playerY + paddleH &&
        ballObj.vx < 0
      ) {
        ballObj.x = this.paddleMargin + this.paddleWidth + 1;
        ballObj.vx = Math.abs(ballObj.vx) * 1.05;

        const hitPos = (ballObj.y + this.ballSize / 2 - (this.playerY + paddleH / 2)) / (paddleH / 2);
        const maxVy = this.baseBallSpeed * this.speedMultiplier * 0.7;
        ballObj.vy = Math.max(-maxVy, Math.min(maxVy, this.baseBallSpeed * this.speedMultiplier * hitPos * 0.7));

        this.createBeep(600, 0.15);
        this.addParticles(ballObj.x, ballObj.y + this.ballSize / 2, ACCENT);

        this.powerups.forEach((powerup, index) => {
          if (powerup.checkCollision(ballObj, this.ballSize)) {
            this.activatePowerUp(powerup.type);
            this.powerups.splice(index, 1);
            this.addParticles(powerup.x, powerup.y, powerup.colors[powerup.type]);
          }
        });
      }

      // AI paddle collision
      if (
        ballObj.x + this.ballSize >= this.canvas.width - this.paddleMargin - this.paddleWidth &&
        ballObj.x <= this.canvas.width - this.paddleMargin &&
        ballObj.y + this.ballSize > this.aiY &&
        ballObj.y < this.aiY + this.paddleHeight &&
        ballObj.vx > 0
      ) {
        ballObj.x = this.canvas.width - this.paddleMargin - this.paddleWidth - this.ballSize - 1;
        ballObj.vx = -Math.abs(ballObj.vx) * 1.05;

        const hitPos = (ballObj.y + this.ballSize / 2 - (this.aiY + this.paddleHeight / 2)) / (this.paddleHeight / 2);
        const maxVy = this.baseBallSpeed * this.speedMultiplier * 0.7;
        ballObj.vy = Math.max(-maxVy, Math.min(maxVy, this.baseBallSpeed * this.speedMultiplier * hitPos * 0.7));

        this.createBeep(400, 0.15);
        this.addParticles(ballObj.x + this.ballSize, ballObj.y + this.ballSize / 2, ACCENT);
      }

      // Scoring
      if (ballObj.x < -this.ballSize) {
        this.aiScore++;
        this.createBeep(200, 0.5);
        this.balls.splice(ballIndex, 1);

        if (this.balls.length === 0) {
          this.playerPowerups.multiball = false;
          if (this.aiScore >= this.winningScore) {
            this.endGame('AI Wins!');
            return;
          }
          this.resetBall(1);
        }
      }

      if (ballObj.x > this.canvas.width) {
        this.playerScore++;
        this.createBeep(800, 0.5);
        this.balls.splice(ballIndex, 1);

        if (this.balls.length === 0) {
          this.playerPowerups.multiball = false;
          if (this.playerScore >= this.winningScore) {
            this.endGame('You Win!');
            return;
          }

          if (this.playerScore % 3 === 0) {
            this.currentLevel++;
            this.speedMultiplier += 0.05;
            this.callbacks.onLevelChange(this.currentLevel, this.speedMultiplier);
          }

          this.resetBall(-1);
        }
      }
    });

    // AI logic
    const targetBall = this.balls.reduce((closest, b) => {
      const distToBall = Math.abs(b.x - (this.canvas.width - this.paddleMargin - this.paddleWidth));
      const distToClosest = Math.abs(closest.x - (this.canvas.width - this.paddleMargin - this.paddleWidth));
      return distToBall < distToClosest ? b : closest;
    }, this.balls[0] || this.ball);

    if (targetBall) {
      const aiCenter = this.aiY + this.paddleHeight / 2;
      const ballCenter = targetBall.y + this.ballSize / 2;
      const aiSpeed = this.baseAiSpeed * this.getDifficultyMultiplier();

      if (Math.abs(aiCenter - ballCenter) > 5) {
        if (aiCenter < ballCenter) this.aiY += aiSpeed;
        else this.aiY -= aiSpeed;
      }

      this.aiY = Math.max(0, Math.min(this.aiY, this.canvas.height - this.paddleHeight));
    }

    this.callbacks.onScoreUpdate(this.playerScore, this.aiScore);
  }

  private draw() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Background
    const gradient = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    gradient.addColorStop(0, 'rgba(15,15,17,0.3)');
    gradient.addColorStop(1, 'rgba(15,15,17,0.8)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    // Grid
    ctx.strokeStyle = 'rgba(52,211,153,0.06)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Center line
    ctx.strokeStyle = 'rgba(52,211,153,0.25)';
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2, h);
    ctx.stroke();
    ctx.setLineDash([]);

    // Particles
    this.particles.forEach(p => p.draw(ctx));

    // Power-ups
    this.powerups.forEach(p => p.draw(ctx));

    // Paddles
    const playerPaddleH = this.playerPowerups.bigPaddle > 0 ? this.paddleHeight * 1.5 : this.paddleHeight;

    ctx.shadowBlur = 20;
    ctx.shadowColor = ACCENT;
    ctx.fillStyle = this.playerPowerups.bigPaddle > 0 ? '#34D399' : ACCENT;
    ctx.fillRect(this.paddleMargin, this.playerY, this.paddleWidth, playerPaddleH);

    ctx.fillStyle = ACCENT;
    ctx.fillRect(w - this.paddleMargin - this.paddleWidth, this.aiY, this.paddleWidth, this.paddleHeight);

    // Balls
    this.balls.forEach(ballObj => {
      ballObj.trail.forEach((point, index) => {
        const alpha = index / ballObj.trail.length;
        ctx.save();
        ctx.globalAlpha = alpha * 0.5;
        ctx.fillStyle = ACCENT;
        ctx.beginPath();
        ctx.arc(point.x + this.ballSize / 2, point.y + this.ballSize / 2, (this.ballSize / 2) * alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      ctx.shadowBlur = 15;
      ctx.shadowColor = ACCENT;
      ctx.fillStyle = ACCENT;
      ctx.beginPath();
      ctx.arc(ballObj.x + this.ballSize / 2, ballObj.y + this.ballSize / 2, this.ballSize / 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(ballObj.x + this.ballSize / 2, ballObj.y + this.ballSize / 2, this.ballSize / 4, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.shadowBlur = 0;

    // Countdown overlay
    if (this.countdownVisible) {
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = ACCENT;
      ctx.font = 'bold 96px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowBlur = 30;
      ctx.shadowColor = ACCENT;
      ctx.fillText(this.countdownText, w / 2, h / 2);
      ctx.shadowBlur = 0;
    }
  }

  private drawPauseOverlay() {
    const ctx = this.ctx;
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.fillStyle = ACCENT;
    ctx.font = '48px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('PAUSED', this.canvas.width / 2, this.canvas.height / 2 - 10);

    ctx.font = '16px sans-serif';
    ctx.fillText('Press ESC or click Resume to continue', this.canvas.width / 2, this.canvas.height / 2 + 45);
  }

  private gameLoop = () => {
    if (!this.gameRunning) return;

    if (!this.gamePaused) {
      this.update();
    }

    this.draw();

    if (this.gamePaused) {
      this.drawPauseOverlay();
    }

    this.animationId = requestAnimationFrame(this.gameLoop);
  };
}
