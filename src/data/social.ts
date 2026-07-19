export const socialLinks = [
  { href: 'https://github.com/tyroruyk', label: 'GitHub', key: 'Github', major: true, description: 'Open-source projects and contributions.' },
  { href: 'https://www.linkedin.com/in/duttavishek', label: 'LinkedIn', key: 'Linkedin', major: true, description: 'Professional profile and network.' },
  { href: 'https://x.com/ADuttaDG', label: 'Twitter', key: 'Twitter', major: true, description: 'Thoughts on tech, research, and more.' },
  { href: 'https://www.instagram.com/avishekdutta.0', label: 'Instagram', key: 'Instagram', major: false, description: 'Personal moments and photography.' },
  { href: 'https://www.facebook.com/avishekdutta.0', label: 'Facebook', key: 'Facebook', major: false, description: 'Connect on social.' },
];

export type SocialLink = (typeof socialLinks)[number];
