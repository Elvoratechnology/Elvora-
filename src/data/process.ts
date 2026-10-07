export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Understand the business and requirements.',
    description: 'We initiate every partnership by dissecting your commercial goals, user personas, technical constraints, and competitive positioning before writing a single line of code.',
    deliverables: ['Requirements specification', 'User journey outlines', 'Technical stack recommendations'],
  },
  {
    step: '02',
    title: 'Plan',
    subtitle: 'Define the structure, features, and technical direction.',
    description: 'We blueprint the architectural schematic, page structures, database schemas, third-party integrations, and milestone timelines to guarantee predictable delivery.',
    deliverables: ['Information architecture', 'Milestone delivery roadmap', 'Feature scope matrix'],
  },
  {
    step: '03',
    title: 'Design',
    subtitle: 'Create the visual system and user experience.',
    description: 'We craft high-fidelity interface layouts, design token libraries, interactive prototypes, and typography hierarchies tailored to your brand personality.',
    deliverables: ['Component design system', 'Interactive prototype', 'Responsive view specifications'],
  },
  {
    step: '04',
    title: 'Build',
    subtitle: 'Develop the website or application.',
    description: 'Clean, production-grade engineering using modern React, TypeScript, and semantic standards. High performance, modularity, and maintainability are baked in from day one.',
    deliverables: ['Production code repository', 'Responsive implementation', 'API & state integrations'],
  },
  {
    step: '05',
    title: 'Refine',
    subtitle: 'Test, optimize, and improve.',
    description: 'Comprehensive cross-device validation, accessibility checks, Core Web Vitals stress tests, security auditing, and design fidelity refinements before public release.',
    deliverables: ['Cross-browser test report', 'Performance & SEO audit', 'Client feedback iterations'],
  },
  {
    step: '06',
    title: 'Launch',
    subtitle: 'Deploy and hand over the finished product.',
    description: 'Zero-downtime deployment, DNS provisioning, analytical setup, documentation handover, and ongoing post-launch operational confidence.',
    deliverables: ['Production cloud deployment', 'Domain & SSL setup', 'Documentation & training walk-through'],
  },
];
