import { ExternalLink, Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useState } from 'react';

import { certifications, education, volunteering } from './data/education';
import { experience } from './data/experience';
import { interests } from './data/interests';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { socialLinks } from './data/social';

const App = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const navActive = true;

  const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>> = {
    Instagram,
    Linkedin,
    Github,
    Twitter,
    Facebook,
  };

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
      <div className="border-b border-slate-700 hero-bg">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className='profile-frame'>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-auto h-auto"
                />
              </div>
            </div>

            {/* About */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">{profile.name}</h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-400 mb-6">{profile.title}</p>
              
              <div className="space-y-3 mb-8 text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <a href={`mailto:${profile.email}`} className="hover:text-blue-400 transition-colors">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>{profile.phone}</span>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                {socialLinks.map(({ href, label, key }) => {
                  const Icon = iconMap[key] ?? ExternalLink;
                  return (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>

              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                {profile.bio}
              </p>
            </div>
          </div>
        </div>
      </div>

      {navActive && (
        <div>
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
                {experience.map((inst) => (
                  <div key={inst.institution}>
                    <div className="flex items-baseline gap-4 mb-4">
                      <h2 className="text-2xl font-light text-blue-400">{inst.institution}</h2>
                      {/* <span className="text-blue-400">{inst.entries[0]?.title}</span> */}
                      {inst.link && (
                        <a href={inst.link} target="_blank" rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 text-sm inline-flex items-center gap-1">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>

                    {inst.entries.map((e, idx) => (
                      <div key={idx} className={idx === 0 ? '' : 'pt-4'}>
                        {e.title && <h3 className="text-lg text-white mb-1">{e.title}</h3>}
                        <p className="text-gray-400 text-sm mb-4">{e.start}{e.end ? ` - ${e.end}` : ''}</p>
                        {e.description && <p className="text-gray-300 leading-relaxed mb-2">{e.description}</p>}
                        {e.bullets && (
                          <div className="border-l-2 border-slate-700 pl-4">
                            <ul className="space-y-1 text-gray-300">
                              {e.bullets.map((b, bi) => (
                                <li key={bi}>• {b}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {activeTab === 'education' && (
              <div className="space-y-10">
                {education.map((ed, idx) => (
                  <div key={idx}>
                    <h2 className="text-2xl font-light text-white mb-2">{ed.degree}</h2>
                    <p className="text-blue-400 mb-1">{ed.institution}</p>
                    {ed.department && <p className="text-gray-300 mb-1">{ed.department}</p>}
                    {ed.major && <p className="text-gray-300 mb-1">Major: {ed.major}</p>}
                    <p className="text-gray-400 text-sm">{ed.range}</p>
                  </div>
                ))}

                <div className="border-t border-slate-700 pt-10 mt-10">
                  <h3 className="text-xl font-light text-white mb-6">Certifications</h3>
                  <div className="space-y-6">
                    {certifications.map((c, i) => (
                      <div key={i}>
                        <h4 className="text-lg text-white mb-1">{c.name}</h4>
                        <p className="text-blue-400 mb-2">{c.issuer} • {c.date}</p>
                        {c.url && (
                          <a href={c.url} target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 text-sm inline-flex items-center gap-1">
                            View Credential <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-10">
                  <h3 className="text-xl font-light text-white mb-6">Volunteering</h3>
                  <div className="space-y-6">
                    {volunteering.map((v, i) => (
                      <div key={i}>
                        <h4 className="text-lg text-white mb-1">{v.title}</h4>
                        <p className="text-blue-400 mb-2">{v.org} • {v.range}</p>
                        <p className="text-gray-300">{v.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Projects */}
            {activeTab === 'projects' && (
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                  <div key={idx} className="border-b border-slate-700 pb-6">
                    <h3 className="text-xl font-light text-white mb-2">{project.name}</h3>
                    <p className="text-gray-300 mb-2 text-sm sm:text-base leading-relaxed">{project.desc}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm sm:text-base inline-flex items-center gap-1">
                      View Project <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {activeTab === 'skills' && (
              <div className="space-y-8">
                {skills.map((s, i) => (
                  <div key={i}>
                    <h3 className="text-lg text-gray-400 uppercase tracking-wide mb-2">{s.category}</h3>
                    <p className="text-gray-300">{s.items.join(', ')}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Interests */}
            {activeTab === 'interests' && (
              <div className="space-y-8">
                {interests.map((it, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-light text-white mb-2">{it.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{it.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}

      {/* Footer */}
      <div className="border-t border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {profile.name}.
        </div>
      </div>
    </div>
  );
};

export default App;
