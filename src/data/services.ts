export interface ServiceItemData {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  idealFor: string;
}

export const SERVICES: ServiceItemData[] = [
  {
    number: '01',
    title: 'Website Development',
    description: 'Fast, clean websites built with modern frameworks and proper code structure. Works on every browser, every screen.',
    capabilities: ['Static & Dynamic Sites', 'Core Web Vitals', 'Semantic Markup', 'Cross-browser'],
    idealFor: 'Companies that want something built properly, not assembled from a template.',
  },
  {
    number: '02',
    title: 'Business Websites',
    description: 'Corporate websites that communicate your value clearly and make it easy for the right clients to reach you.',
    capabilities: ['Brand & Messaging', 'Service Pages', 'Lead Capture', 'Content Management'],
    idealFor: 'Consultancies, law firms, financial services, and established local businesses.',
  },
  {
    number: '03',
    title: 'Landing Pages',
    description: 'Single-page builds focused on one goal: getting visitors to take action. High-conversion layout and copy structure.',
    capabilities: ['Conversion-led Layout', 'Product Launches', 'Campaign Pages', 'A/B Test Ready'],
    idealFor: 'Product launches, marketing campaigns, and event announcements.',
  },
  {
    number: '04',
    title: 'Web Applications',
    description: 'Custom-built web apps with user authentication, databases, dashboards, and interactive workflows.',
    capabilities: ['SaaS Platforms', 'Client Portals', 'Data Dashboards', 'Admin Interfaces'],
    idealFor: 'Startups and businesses automating manual processes with software.',
  },
  {
    number: '05',
    title: 'UI/UX Design',
    description: 'Interface design that is clear, fast, and genuinely pleasant to use. No guesswork about what to click next.',
    capabilities: ['Design Systems', 'Interactive Prototypes', 'User Flows', 'Design-to-Code'],
    idealFor: 'Products that need to earn trust the moment someone opens them.',
  },
  {
    number: '06',
    title: 'Custom Solutions',
    description: 'API integrations, custom calculators, automation scripts, and tools that do exactly what your business needs.',
    capabilities: ['API Integrations', 'Automation Pipelines', 'Custom Tools', 'Performance Audits'],
    idealFor: 'Businesses with problems that off-the-shelf software cannot solve.',
  },
];
