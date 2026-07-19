export type ExperienceEntry = {
  institution: string;
  link?: string;
  title: string;
  start: string;
  end?: string;
  description?: string;
  bullets?: string[];
  featured?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    institution: 'Office of Student Affairs, North South University',
    title: 'Student Worker',
    start: 'May 2026',
    end: 'Present',
    description: 'Provide administrative and operational support, including institutional record-keeping, documentation, and data management. Maintain digital archives for accuracy and accessibility. Assist with website and digital content updates. Support coordination of co-curricular and extracurricular activities.',
    featured: true,
  },
  {
    institution: 'NSU Computer & Engineering Club',
    link: 'https://nsucec.com/',
    title: 'In-Charge',
    start: 'Oct 2025',
    end: 'Present',
    description: 'Lead technical operations, launching scalable platforms like GAMEWAVE 2.0 (1,000+ participants) and Cybernauts 2026 (5,000+ participants, 1,000+ teams). Drive Corporate & Outreach by preparing proposals and negotiating partnerships. Support operations across Admin & HR, PR, and Event Logistics.',
    bullets: [
      'Promoted to In-Charge for active contribution and leadership within the club.',
      'Launched platforms serving 5,000+ participants across multiple events.',
      'Drive corporate partnerships and outreach initiatives.',
    ],
    featured: true,
  },
  {
    institution: 'CSE4ALL',
    link: 'https://cse4all.org/',
    title: 'Platform Manager',
    start: 'May 2025',
    end: 'Present',
    description: 'Manage platform operations delivering Computer Science education without formal prerequisites. Oversee a curriculum combining self-paced video instruction, live sessions, assignments, and certification for learners across Bangladesh.',
    featured: true,
  },
  {
    institution: 'Neune Labs',
    link: 'https://neunelabs.com/',
    title: 'Founder & Managing Director',
    start: 'Dec 2023',
    end: 'Present',
    description: 'Lead the transformation of bold ideas into real-world impact by overseeing strategy, execution, and growth across teams developing cutting-edge AI and robotics solutions.',
    bullets: [
      'Manage cross-functional teams and streamline workflows across engineering, design, and business units.',
      'Drive product roadmap and strategic execution for AI and robotics initiatives.',
      'Research system architecture for AI-driven applications and distributed computing.',
      'Explore optimization techniques for low-resource processing.',
    ],
  },
  {
    institution: 'Encode',
    title: 'Director of Education (Bangladesh)',
    start: 'May 2025',
    end: 'Aug 2025',
    description: 'Led initiatives to make AI education accessible, ethical, and globally inclusive. Designed educational frameworks connecting AI with human rights, democracy, and the Sustainable Development Goals (SDGs).',
  },
  {
    institution: 'Mind Splash Magazine',
    title: 'Executive Designer',
    start: 'Nov 2021',
    end: 'Mar 2022',
    description: 'Created visually compelling layouts and illustrations for articles and features, enhancing visual appeal and reader engagement through innovative design solutions.',
  },
];
