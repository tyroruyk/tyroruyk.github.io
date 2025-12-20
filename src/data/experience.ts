export type ExperienceEntry = {
  title: string;
  start: string;
  end?: string;
  description?: string;
  bullets?: string[];
};

export type Institution = {
  institution: string;
  link?: string;
  entries: ExperienceEntry[];
};

export const experience: Institution[] = [
  {
    institution: 'NSU Computer & Engineering Club',
    link: 'https://nsucec.com/',
    entries: [
      {
        title: 'In-Charge',
        start: 'Oct 2025',
        end: 'Present',
        description:
          'Promoted to In-Charge for active contribution and leadership within the club. Responsible for supervising member activities, coordinating with the Sub-Executive Body, and supporting event and project execution. Actively involved in planning technical initiatives, fostering collaboration, and ensuring smooth club operations.',
      },
      {
        title: 'Probationary Member',
        start: 'Jun 2025',
        end: 'Oct 2025',
        description:
          'Actively participated in club events, workshops, and projects focused on advancing computer science and engineering skills. Collaborated with peers on technical initiatives, helped organize coding competitions, and engaged in hands-on activities to enhance practical knowledge in technology and innovation.',
      },
    ],
  },
  {
    institution: 'CSE4ALL',
    link: 'https://cse4all.org/',
    entries: [
      {
        title: 'Platform Manager',
        start: 'May 2025',
        end: 'Present',
        description:
          'Manage platform operations and execution at CSE For All—an initiative to teach Computer Science to everyone, regardless of academic background. Ensure delivery of a complete CS curriculum combining self-paced videos, live sessions, assignments, and certification.',
      },
    ],
  },
  {
    institution: 'Neune Labs',
    link: 'https://neunelabs.com/',
    entries: [
      {
        title: 'Founder & Managing Director',
        start: 'December 2023',
        end: 'Present',
        description:
          'Lead the transformation of bold ideas into real-world impact by overseeing strategy, execution, and growth across teams developing cutting-edge AI and robotics solutions.',
        bullets: [
          'Manage cross-functional teams and streamline workflows across engineering, design, and business units.',
          'Drive product roadmap and strategic execution for AI and robotics initiatives.',
          'Research system architecture for AI-driven applications.',
          'Explore optimization techniques for low-resource processing.',
          'Work on distributed computing systems for scalable AI applications.',
        ],
      },
    ],
  },
  {
    institution: 'Encode',
    entries: [
      {
        title: 'Director of Education (Bangladesh)',
        start: 'May 2025',
        end: 'August 2025',
        description:
          'Led initiatives to make AI education accessible, ethical, and globally inclusive. Focused on building learning programs that empower young people to understand, engage with, and shape the future of AI.',
        bullets: [
          'Designed educational frameworks connecting AI with human rights, democracy, and the Sustainable Development Goals (SDGs).',
          'Ensured learners are equipped to address societal challenges and opportunities created by AI.',
        ],
      },
    ],
  },
  {
    institution: 'Mind Splash Magazine',
    entries: [
      {
        title: 'Executive Designer',
        start: 'November 2021',
        end: 'March 2022',
        description:
          'Created visually compelling layouts and illustrations for articles and features, enhancing visual appeal and reader engagement through innovative design solutions.',
      },
    ],
  },
];
