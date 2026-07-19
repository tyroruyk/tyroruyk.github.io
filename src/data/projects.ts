export type Project = {
  name: string;
  desc: string;
  url: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'NSU CEC Cybernauts 2026',
    desc: 'Built a high-performance frontend handling registration and coordination for a national-level event with asynchronous processing, zero downtime, and near-zero infrastructure investment. Multi-role admin panel, Google OAuth secure authentication, dynamic registration forms, and layered security.',
    url: 'https://cybernauts.nsucec.com/',
    featured: true,
  },
  {
    name: 'Arrhythmia Detection System',
    desc: 'Trained a CNN on the MIT-BIH Arrhythmia Database to classify cardiac arrhythmias with 98.65% accuracy. Integrated into a mobile app via REST API for real-time inference using Keras, NumPy, and Flask.',
    url: '#',
    featured: true,
  },
  {
    name: 'NSU Student Affairs Internal Management System',
    desc: 'Developed an internal platform for the Office of Student Affairs to streamline document/paper tracking, structured volunteer data submission from student clubs, automated ID card generation, and automated document generation.',
    url: '#',
    featured: true,
  },
  {
    name: 'NSU CEC GAMEWAVE 2.0',
    desc: 'Independently built a full-stack event platform for NSU\'s flagship gaming event, engineered for high traffic during peak participation. Handles frontend, backend, registration system, admin panel, and DevOps deployment.',
    url: 'https://gamewave.nsucec.com/',
    featured: true,
  },
  {
    name: 'RoktoJog',
    desc: 'Designed system architecture for an end-to-end blood donation platform encompassing donor registration, blood inventory tracking, appointment scheduling, and emergency request handling with secure authentication.',
    url: 'http://roktojog.org/',
    featured: true,
  },
  {
    name: 'CPawnX',
    desc: 'Built a chess engine from scratch in TypeScript using a magic bitboard architecture for move generation without external chess libraries. Verified correctness via perft testing across multiple search depths.',
    url: 'https://cpawnx-engine.vercel.app/',
    featured: true,
  },
  {
    name: 'NSU CEC Website & Management System',
    desc: 'Official website and management system for North South University Computer and Engineering Club (NSU CEC). Features event management, member registration, and role-based access control.',
    url: 'https://nsucec.com/',
  },
  {
    name: 'CYBER PONG',
    desc: 'A futuristic browser-based Pong game featuring power-ups, particle effects, and fast-paced arcade gameplay. Fully playable with mouse or touch controls.',
    url: 'https://tyroruyk.github.io/pong',
  },
  {
    name: 'NSU Sobers Website',
    desc: 'Official website for NSU Sobers, the Mars Rover team of North South University. Showcasing the team and probable rover design in 3D with technical details.',
    url: 'https://nsu-sobers.pages.dev/',
  },
  {
    name: 'NSU CGPA Calculator',
    desc: 'A user-friendly CGPA calculator built specifically for North South University students. Track semester-wise progress and calculate cumulative GPA with accuracy.',
    url: 'https://tyroruyk.github.io/nsu-cgpa',
  },
  {
    name: 'BanglaCode',
    desc: 'An experimental programming language mimicking C syntax using Bangla characters. Built with a custom lexer, parser, and runtime environment for language design and interpreter construction.',
    url: 'https://banglacode.pages.dev/',
  },
  {
    name: 'KothonAI',
    desc: 'Bengali Generative AI Tool with novel architecture for morphologically rich languages. Regularly used by students across Bangladesh.',
    url: 'https://ai.pathgriho.com/',
  },
  {
    name: 'Everyday One Taka Fund',
    desc: 'A micro donation platform with member management system integrating secure payment gateway processing, automated donation tracking, and a member dashboard with contribution history.',
    url: 'https://everyday1takafund.com/',
  },
  {
    name: 'Basic System Kernel (BSK)',
    desc: 'A basic system kernel using Assembly and C demonstrating fundamental operating system concepts including bootloader implementation, memory management, and interrupt handling.',
    url: 'https://gitlab.com/tyroruyk/bsk',
  },
  {
    name: 'XCalc',
    desc: 'A simple command-line interface calculator using Rust and Bash supporting basic arithmetic operations.',
    url: 'https://github.com/tyroruyk/xcalc',
  },
  {
    name: 'Ufetch',
    desc: 'A system fetch tool using Rust and Bash displaying detailed hardware and software configuration information.',
    url: 'https://github.com/tyroruyk/ufetch',
  },
  {
    name: 'BDIX Server Checker',
    desc: 'Server monitoring tool using Python and JavaScript providing real-time status updates for BDIX servers.',
    url: 'https://github.com/tyroruyk/bdix',
  },
  {
    name: 'DeWin',
    desc: 'Windows debloating utility using PowerShell to remove unnecessary bloatware and optimize system performance.',
    url: 'https://github.com/tyroruyk/dewin',
  },
];
