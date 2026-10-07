export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'cost',
    question: 'How much does a website cost?',
    answer: 'Website investment depends on the scale, custom functionality, and technical depth of the build. For instance, high-impact landing pages typically start around ₱18,000, tailored multi-page corporate websites start around ₱32,000, and full-featured e-commerce or web applications start from ₱58,000 to ₱98,000+. You can use our interactive Project Planner to customize your pages and features for an immediate, transparent estimate.',
    category: 'Pricing & Scoping',
  },
  {
    id: 'timeline',
    question: 'How long does a project take?',
    answer: 'A focused landing page is typically designed and launched in 1 to 2 weeks. Comprehensive corporate websites require 3 to 4 weeks across discovery, design, development, and testing. Custom web applications and systems generally span 1 to 2+ months depending on backend architecture, API integrations, and iteration cycles.',
    category: 'Delivery',
  },
  {
    id: 'types',
    question: 'What types of websites do you build?',
    answer: 'We build modern business websites, high-converting product landing pages, creative portfolios, e-commerce stores, client portals, internal dashboards, and custom web applications. Every build is engineered without clunky page-builder bloat, using clean modern web technologies like React, TypeScript, and modern semantic frameworks.',
    category: 'Capabilities',
  },
  {
    id: 'international',
    question: 'Do you work with international clients?',
    answer: 'Yes. While we are based in the Philippines and provide transparent local billing (PHP / ₱), our engineering processes and asynchronous communication tools accommodate clients across the Asia-Pacific region, North America, Europe, and Australia.',
    category: 'Collaboration',
  },
  {
    id: 'custom-web-apps',
    question: 'Can you build custom web applications?',
    answer: 'Absolutely. Beyond informational websites, we specialize in single-page and multi-page web applications with real-time state, custom database models, role-based authorization, payment gateways, and custom API backends.',
    category: 'Capabilities',
  },
  {
    id: 'maintenance',
    question: 'Do you provide maintenance?',
    answer: 'Yes. Every project includes post-launch deployment verification and warranty. We also offer dedicated ongoing retainers covering continuous cloud monitoring, security patch deployments, performance audits, content updates, and incremental feature enhancements.',
    category: 'Support',
  },
  {
    id: 'before-starting',
    question: 'What do you need before starting?',
    answer: 'To get started effectively, we discuss your primary business objectives, target audience, any brand assets you possess (logo, typography, guidelines), and a general outline of the pages or features you envision. If your branding or copy isn’t finalized, we can assist in shaping both.',
    category: 'Getting Started',
  },
  {
    id: 'how-to-start',
    question: 'How do we start a project?',
    answer: 'The most direct way is to configure your scope in our interactive Project Planner or submit an inquiry through our Contact page. We review your specifications, respond within 24 hours with clarifying questions or a preliminary proposal, and schedule an alignment call.',
    category: 'Getting Started',
  },
];
