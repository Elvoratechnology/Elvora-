// Student Package Pricing Configuration
export interface StudentAddOn {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
}

export const STUDENT_BASE_PRICE = 2500;
export const STUDENT_BASE_DETAILS = {
  title: 'Student Starter Package',
  subtitle: '1-page website · Mobile responsive · 1 revision · Basic deployment',
  price: STUDENT_BASE_PRICE,
};

export const STUDENT_ADDONS: StudentAddOn[] = [
  { id: 'additional-page', name: 'Additional Page', price: 1000, priceLabel: '+₱1,000 per page' },
  { id: 'contact-form', name: 'Contact Form', price: 500, priceLabel: '+₱500' },
  { id: 'portfolio-gallery', name: 'Portfolio / Gallery Section', price: 1500, priceLabel: '+₱1,500' },
  { id: 'blog-setup', name: 'Blog Setup', price: 1000, priceLabel: '+₱1,000' },
  { id: 'animations', name: 'Animations & Interactions', price: 1000, priceLabel: '+₱1,000' },
  { id: 'custom-domain', name: 'Custom Domain Setup', price: 700, priceLabel: '+₱700' },
  { id: 'logo-branding', name: 'Logo / Branding Design', price: 2500, priceLabel: '+₱2,500' },
  { id: 'extra-revision', name: 'Extra Revision Round', price: 800, priceLabel: '+₱800 per round' },
  { id: 'rush-delivery', name: 'Rush Delivery (under 2 weeks)', price: 2500, priceLabel: '+₱2,500' },
];

// Professional Planner Options
export interface ProServiceOption {
  id: string;
  title: string;
  iconType: 'code' | 'layers' | 'user' | 'building' | 'palette' | 'system' | 'webapp' | 'mobile' | 'desktop' | 'cloud';
}

export const PROFESSIONAL_SERVICES: ProServiceOption[] = [
  { id: 'website-development', title: 'WEBSITE DEVELOPMENT', iconType: 'code' },
  { id: 'landing-page', title: 'LANDING PAGE DEVELOPMENT', iconType: 'layers' },
  { id: 'portfolio-websites', title: 'PORTFOLIO WEBSITES', iconType: 'user' },
  { id: 'business-websites', title: 'BUSINESS WEBSITES', iconType: 'building' },
  { id: 'ui-ux-design', title: 'UI/UX DESIGN', iconType: 'palette' },
  { id: 'system-development', title: 'SYSTEM DEVELOPMENT', iconType: 'system' },
  { id: 'web-app-development', title: 'WEB APP DEVELOPMENT', iconType: 'webapp' },
  { id: 'mobile-app-development', title: 'MOBILE APP DEVELOPMENT', iconType: 'mobile' },
  { id: 'desktop-app-development', title: 'DESKTOP APPLICATION DEVELOPMENT', iconType: 'desktop' },
  { id: 'cloud-solutions', title: 'CLOUD SOLUTIONS', iconType: 'cloud' },
];

export interface ProBudgetOption {
  id: string;
  tier: string;
  range: string;
  description: string;
  isPopular?: boolean;
}

export const PROFESSIONAL_BUDGETS: ProBudgetOption[] = [
  {
    id: 'starter',
    tier: 'STARTER',
    range: '₱10k – ₱30k',
    description: 'Small sites & simple builds',
  },
  {
    id: 'growth',
    tier: 'GROWTH',
    range: '₱30k – ₱60k',
    description: 'Custom design & full-featured sites',
    isPopular: true,
  },
  {
    id: 'enterprise',
    tier: 'ENTERPRISE',
    range: '₱60k+',
    description: 'Complex projects & large-scale builds',
  },
];

export interface ProTimelineOption {
  id: string;
  title: string;
  duration: string;
}

export const PROFESSIONAL_TIMELINES: ProTimelineOption[] = [
  { id: 'rush', title: 'RUSH', duration: '2–4 weeks' },
  { id: 'standard', title: 'STANDARD', duration: '1–2 months' },
  { id: 'relaxed', title: 'RELAXED', duration: '3+ months' },
];

// Project types for contact forms and general reference
export interface ProjectTypeItem {
  id: string;
  name: string;
}

export const PROJECT_TYPES: ProjectTypeItem[] = [
  { id: 'business-website', name: 'Business Website' },
  { id: 'landing-page', name: 'Landing Page' },
  { id: 'portfolio-website', name: 'Portfolio Website' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'web-application', name: 'Web Application' },
  { id: 'student-package', name: 'Student Starter Package (₱2,500)' },
  { id: 'custom-system', name: 'Custom System' },
];

export function formatPHP(amount: number): string {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(amount);
}
