export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  type: string;
  category: 'Websites' | 'Web Applications' | 'UI/UX';
  tag: 'WEB APP';
  tagline: string;
  description: string;
  status: 'LIVE';
  techStack: string[];
  year: string;
  highlights: string[];
  liveUrl: string;
}

export const SELECTED_WORK: ProjectItem[] = [
  {
    id: 'worklane',
    index: '01',
    title: 'Worklane',
    type: 'Smart Project Management',
    category: 'Web Applications',
    tag: 'WEB APP',
    tagline: 'Smart Project Management platform for teams.',
    description: 'Worklane is a powerful Kanban-style project management tool for teams. Organize work with boards, cards, comments, attachments, and due-date notifications.',
    status: 'LIVE',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    year: '2026',
    highlights: [
      'Interactive Kanban boards and task lists',
      'Card workflows with attachments & comments',
      'Due-date notifications and activity history',
      'Responsive dark and light themes',
    ],
    liveUrl: 'https://worklane-five.vercel.app/',
  },
  {
    id: 'inky',
    index: '02',
    title: 'Inky',
    type: 'Automated E-signatures',
    category: 'Web Applications',
    tag: 'WEB APP',
    tagline: 'Automated E-signatures & digital document workflows.',
    description: 'Inky is a personal digital signature app. Sign, send, and receive PDF documents beautifully with cursive script generation, hand-drawn signatures, and client-side processing.',
    status: 'LIVE',
    techStack: ['React', 'TypeScript', 'PDF.js', 'PWA', 'Tailwind CSS'],
    year: '2026',
    highlights: [
      'In-browser PDF signing and field placement',
      'Multiple calligraphy scripts and draw tool',
      'Client-side instant export with zero delay',
      'Progressive Web App (PWA) ready',
    ],
    liveUrl: 'https://inky-tan.vercel.app/',
  },
  {
    id: 'resiboss',
    index: '03',
    title: 'Resiboss 2.0',
    type: 'Personal Spending Intelligence Platform',
    category: 'Web Applications',
    tag: 'WEB APP',
    tagline: 'Personal Spending Intelligence Platform.',
    description: 'Resiboss 2.0 is an AI-powered receipt scanning and expense intelligence platform that turns every receipt into smarter spending decisions with purchase memory and price history.',
    status: 'LIVE',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'PWA', 'Analytics'],
    year: '2026',
    highlights: [
      'Automated receipt parsing and purchase memory',
      'Price inflation and longitudinal variance tracking',
      'Category-level financial breakdown charts',
      'Mobile-first PWA architecture',
    ],
    liveUrl: 'https://resiboss.vercel.app/#',
  },
];
