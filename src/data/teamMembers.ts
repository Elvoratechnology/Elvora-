export interface TeamMemberPlaceholder {
  id: string;
  name: string; // clearly marked placeholder e.g. "Team Member — [Name Placeholder]"
  role: string;
  discipline: string;
  shortBio: string;
  specialties: string[];
}

export const TEAM_MEMBERS: TeamMemberPlaceholder[] = [
  {
    id: 'lead-architect',
    name: 'Team Member',
    role: 'Lead Technical Architect & Founder',
    discipline: 'Systems & Architecture',
    shortBio: 'Directs overall technical architecture, engineering standards, and full-stack system scalability. Focused on clean code and reliable infrastructure.',
    specialties: ['Cloud Architecture', 'React / TypeScript', 'API Design'],
  },
  {
    id: 'design-lead',
    name: 'Team Member',
    role: 'Design Systems & UI/UX Lead',
    discipline: 'Design & Interaction',
    shortBio: 'Shapes product aesthetics, visual hierarchy, ergonomic user journeys, and component design tokens. Champions dark-mode precision and typographic restraint.',
    specialties: ['Design Systems', 'Micro-Interactions', 'Ergonomics'],
  },
  {
    id: 'fullstack-engineer',
    name: 'Team Member',
    role: 'Senior Full-Stack Engineer',
    discipline: 'Frontend & Backend Systems',
    shortBio: 'Bridges interface precision with performant database schemas, caching layers, and third-party API orchestrations. Focused on sub-second execution.',
    specialties: ['Node.js / Databases', 'State Management', 'Web Performance'],
  },
  {
    id: 'delivery-lead',
    name: 'Team Member',
    role: 'Digital Strategist & Project Lead',
    discipline: 'Delivery & Client Success',
    shortBio: 'Coordinates project milestones, client communication, requirements grooming, and post-launch quality assurance to ensure seamless delivery.',
    specialties: ['Agile Sprints', 'Client Onboarding', 'Quality Assurance'],
  },
];
