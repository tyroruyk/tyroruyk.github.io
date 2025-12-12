import { ExternalLink, Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const navActive = false;

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      {/* Navbar, with just the site title */}
      {/* <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-black text-white text-center">Studio 101</h1>
        </div>
      </div> */}

      {/* A horizontal line */}
      <div className="border-b border-slate-700 py-2"></div>

      {/* Hero Section with Image and About */}
      <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Avishek Dutta"
                  className="w-auto h-auto"
                />
              </div>
            </div>

            {/* About */}
            <div>
                <h1 className="text-5xl font-black text-white mb-3">Avishek Dutta</h1>
              <p className="text-xl text-blue-400 mb-6">Computer Science Student & AI Enthusiast</p>
              
              <div className="space-y-3 mb-8 text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <a href="mailto:avishek.dutta.252@northsouth.edu" className="hover:text-blue-400 transition-colors">
                    avishek.dutta.252@northsouth.edu
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>+880 1791-396000</span>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <a href="https://www.instagram.com/tyroruyk" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/duttavishek" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/tyroruyk" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://twitter.com/tyroruyk" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="https://www.facebook.com/tyroruyk" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook size={24} />
                </a>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg">
                My academic journey has been marked by a commitment to excellence and a drive to push the boundaries of 
                what is possible with technology. I have developed a range of projects that demonstrate my ability to 
                apply theoretical knowledge to practical problems, particularly in the areas of natural language 
                processing and system optimization. I am eager to continue my education and research in a challenging 
                and dynamic environment where I can contribute to the advancement of technology and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {navActive && (
        <>
          {/* Navigation Tabs */}
          <div className="border-b border-slate-700 sticky top-0 bg-slate-950 z-10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex gap-1 overflow-x-auto">
                {['experience', 'education', 'projects', 'skills', 'interests'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm uppercase tracking-wide transition-colors whitespace-nowrap hover:cursor-pointer ${
                      activeTab === tab
                        ? 'text-blue-400 border-b-2 border-blue-400'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="max-w-7xl mx-auto px-6 py-12">
            
          {/* Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-12">
              <div>
                <div className="flex items-baseline gap-4 mb-3">
                  <h2 className="text-2xl font-light text-white">Director of Education</h2>
                  <span className="text-blue-400">Encode</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">May 2025 - Present</p>
                <p className="text-gray-300 leading-relaxed mb-3">
                  As Director of Education at Encode, I lead initiatives to make AI education accessible, ethical, and 
                  globally inclusive. My focus is on building learning programs that empower young people to 
                  understand, engage with, and shape the future of AI.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I design frameworks that connect AI to critical global issues like human rights, democracy, and the 
                  Sustainable Development Goals (SDGs), ensuring the next generation is ready to tackle the challenges 
                  and opportunities of AI.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-4 mb-3">
                  <h2 className="text-2xl font-light text-white">Platform Manager</h2>
                  <span className="text-blue-400">CSE4ALL</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">May 2025 - Present</p>
                <p className="text-gray-300 leading-relaxed">
                  I manage the platform operations and execution at CSE For All - an initiative to teach Computer 
                  Science to everyone, regardless of academic background. I ensure the platform delivers a complete CS 
                  curriculum, blending self-paced videos, live sessions, assignments, and certification.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-4 mb-3">
                  <h2 className="text-2xl font-light text-white">Managing Director</h2>
                  <span className="text-blue-400">Neune Labs</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">December 2023 - Present</p>
                <p className="text-gray-300 leading-relaxed mb-3">
                  At Neune Labs, I lead the charge in turning bold ideas into real-world impact. As Managing Director, 
                  I oversee strategy, execution, and growth across teams working on cutting-edge AI and robotics 
                  solutions.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I manage cross-functional teams, streamline workflows, and drive our product roadmap, working 
                  closely with engineering, design, and business teams.
                </p>
                <div className="border-l-2 border-slate-700 pl-4">
                  <p className="text-gray-400 text-sm mb-2">Research areas:</p>
                  <ul className="space-y-1 text-gray-300">
                    <li>• System architecture for AI-driven applications</li>
                    <li>• Optimization techniques for low-resource processing</li>
                    <li>• Distributed computing systems for AI applications</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-4 mb-3">
                  <h2 className="text-2xl font-light text-white">Executive Designer</h2>
                  <span className="text-blue-400">Mind Splash Magazine</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">November 2021 - March 2022</p>
                <p className="text-gray-300 leading-relaxed">
                  Created visually compelling layouts and illustrations for various articles and features. Enhanced 
                  the magazine's visual appeal and reader engagement through innovative design solutions.
                </p>
              </div>
            </div>
          )}

          {/* Education */}
          {activeTab === 'education' && (
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-light text-white mb-2">Bachelor of Science</h2>
                <p className="text-blue-400 mb-1">North South University</p>
                <p className="text-gray-300 mb-1">Department of Electrical and Computer Engineering</p>
                <p className="text-gray-300 mb-1">Major: Computer Science and Engineering</p>
                <p className="text-gray-400 text-sm">2024 - 2029</p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-white mb-2">Higher Secondary</h2>
                <p className="text-blue-400 mb-1">Cantonment College, Cumilla Cantonment</p>
                <p className="text-emerald-400 mb-1">GPA: 5.00/5.00 (Science)</p>
                <p className="text-gray-400 text-sm">2023 - 2024</p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-white mb-2">Secondary</h2>
                <p className="text-blue-400 mb-1">Feni Government Pilot High School, Feni</p>
                <p className="text-emerald-400 mb-1">GPA: 5.00/5.00 (Science)</p>
                <p className="text-gray-400 text-sm">2017 - 2022</p>
              </div>

              <div className="border-t border-slate-700 pt-10 mt-10">
                <h3 className="text-xl font-light text-white mb-6">Certifications</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg text-white mb-1">Open Researcher and Contribution ID</h4>
                    <p className="text-blue-400 mb-2">ORCID • Feb 2024</p>
                    <a href="https://orcid.org/0000-0002-8328-8649" target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 text-sm inline-flex items-center gap-1">
                      View Credential <ExternalLink size={14} />
                    </a>
                  </div>
                  <div>
                    <h4 className="text-lg text-white mb-1">Ready Player 50</h4>
                    <p className="text-blue-400 mb-2">CS50, Harvard University • Oct 2023</p>
                    <a href="https://cs50.harvard.edu/certificates/bb77190a-dfdd-4884-9ecf-b5eef9ec1de9" 
                      target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 text-sm inline-flex items-center gap-1">
                      View Credential <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-10">
                <h3 className="text-xl font-light text-white mb-6">Volunteering</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg text-white mb-1">Contributing Writer</h4>
                    <p className="text-blue-400 mb-2">Banger Chatar Biggan • 2022 - Present</p>
                    <p className="text-gray-300">
                      Authoring modern science articles for general audiences with accessible explanations of complex 
                      scientific concepts.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg text-white mb-1">Training & Development Executive</h4>
                    <p className="text-blue-400 mb-2">FGPHS ICT Club • 2020 - 2022</p>
                    <p className="text-gray-300">
                      Organized training sessions on ICT topics and mentored students in developing their technical 
                      skills through hands-on projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  name: 'NSU CGPA Calculator', 
                  desc: 'A user-friendly CGPA calculator built specifically for North South University students. Track semester-wise progress and calculate cumulative GPA with accuracy.', 
                  url: 'https://tyroruyk.github.io/nsu-cgpa' 
                },
                { 
                  name: 'BanglaCode', 
                  desc: 'C Programming in Bangla Syntax - A meme programming language that mimics C syntax using Bangla characters. Demonstrates language parser and interpreter creation.', 
                  url: 'https://banglacode.pages.dev/' 
                },
                { 
                  name: 'KothonAI', 
                  desc: 'Bengali Generative AI Tool with novel architecture for morphologically rich languages. Regularly used by students across Bangladesh.', 
                  url: 'https://ai.pathgriho.com/' 
                },
                { 
                  name: 'RoktoJog', 
                  desc: 'End-to-end blood donation system with donor registration, blood inventory management, and appointment scheduling.', 
                  url: 'http://roktojog.org/' 
                },
                { 
                  name: 'Everyday One Taka Fund', 
                  desc: 'A micro donation platform with member management system to streamline user management and improve experience.', 
                  url: 'https://everyday1takafund.com/' 
                },
                { 
                  name: 'XCalc', 
                  desc: 'A simple command-line interface calculator using Rust and Bash supporting basic arithmetic operations.', 
                  url: 'https://github.com/tyroruyk/xcalc' 
                },
                { 
                  name: 'Basic System Kernel (BSK)', 
                  desc: 'A basic system kernel using Assembly and C demonstrating fundamental operating system concepts.', 
                  url: 'https://gitlab.com/tyroruyk/bsk' 
                },
                { 
                  name: 'Ufetch', 
                  desc: 'A system fetch tool using Rust and Bash displaying detailed hardware and software configuration information.', 
                  url: 'https://github.com/tyroruyk/ufetch' 
                },
                { 
                  name: 'BDIX Server Checker', 
                  desc: 'Server monitoring tool using Python and JavaScript providing real-time status updates for BDIX servers.', 
                  url: 'https://github.com/tyroruyk/bdix' 
                },
                { 
                  name: 'PAPT', 
                  desc: 'Post-APT tool using Bash to automate post-installation tasks and system configuration.', 
                  url: 'https://github.com/tyroruyk/papt' 
                },
                { 
                  name: 'Triplex', 
                  desc: 'A simple CLI puzzle game using C++ challenging players with various puzzles.', 
                  url: 'https://github.com/tyroruyk/triplex' 
                },
                { 
                  name: 'DeWin', 
                  desc: 'Windows debloating utility using PowerShell to remove unnecessary bloatware and optimize system performance.', 
                  url: 'https://github.com/tyroruyk/dewin' 
                }
              ].map((project, idx) => (
                <div key={idx} className="border-b border-slate-700 pb-6">
                  <h3 className="text-xl font-light text-white mb-2">{project.name}</h3>
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed">{project.desc}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-1">
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {activeTab === 'skills' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg text-gray-400 uppercase tracking-wide mb-3">Programming Languages</h3>
                <p className="text-gray-300">Python, C, C++, Rust, Java, JavaScript, Bash, PowerShell, Assembly</p>
              </div>
              <div>
                <h3 className="text-lg text-gray-400 uppercase tracking-wide mb-3">AI & Machine Learning</h3>
                <p className="text-gray-300">Pandas, OpenCV, LangChain, Prompt Engineering</p>
              </div>
              <div>
                <h3 className="text-lg text-gray-400 uppercase tracking-wide mb-3">Web Development</h3>
                <p className="text-gray-300">Flask, Node.js, REST APIs, SQL, PostgreSQL, Git, Linux, Windows</p>
              </div>
              <div>
                <h3 className="text-lg text-gray-400 uppercase tracking-wide mb-3">Systems & Tools</h3>
                <p className="text-gray-300">Operating Systems, Systems Programming, Software Testing, Scripting, Interpreter Development</p>
              </div>
              <div>
                <h3 className="text-lg text-gray-400 uppercase tracking-wide mb-3">Design & Visualization</h3>
                <p className="text-gray-300">Adobe Illustrator, Figma, Blender, SolidWorks, UI Design, Data Visualization, LaTeX, Overleaf, Matplotlib</p>
              </div>
              <div>
                <h3 className="text-lg text-gray-400 uppercase tracking-wide mb-3">Additional Skills</h3>
                <p className="text-gray-300">Project Management, Platform Management, Teamwork, Training & Development, Communication, Research, Writing</p>
              </div>
            </div>
          )}

          {/* Interests */}
          {activeTab === 'interests' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light text-white mb-3">Scientific Research & Writing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Engaging in research and contributing to advancements in AI, quantum computing, and robotics. Served 
                  as a beta reader for the mathematically rigorous book "Cha Coffee and General Relativity" on general 
                  relativity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light text-white mb-3">Graphic Design & Data Visualization</h3>
                <p className="text-gray-300 leading-relaxed">
                  Creating technical illustrations, infographics, and presentations for academic and professional 
                  projects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light text-white mb-3">Technical Reading</h3>
                <p className="text-gray-300 leading-relaxed">
                  Engaging with research papers, scientific journals, and advanced textbooks on AI, machine learning, 
                  and computational sciences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light text-white mb-3">Nature Photography</h3>
                <p className="text-gray-300 leading-relaxed">
                  Capturing landscapes, wildlife, and environmental changes to document the beauty and science of 
                  nature.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light text-white mb-3">Music & Cognitive Science</h3>
                <p className="text-gray-300 leading-relaxed">
                  Exploring the intersection of music and neuroscience, focusing on its impact on learning and 
                  creativity. I love to listen and play classical music, and I play instruments such as the harmonium, 
                  tabla, and guitar.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light text-white mb-3">Games & Sports</h3>
                <p className="text-gray-300 leading-relaxed">
                  Enjoy playing video games, as well as chess and football. These activities help in developing 
                  strategic thinking, teamwork, and physical fitness.
                </p>
              </div>
            </div>
          )}
        </div>

        </>
      )}

      {/* Footer */}
      <div className="border-t border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Avishek Dutta.
        </div>
      </div>
    </div>
  );
};

export default App;
