import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Planner } from './pages/Planner';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Team } from './pages/Team';

interface PageMeta {
  title: string;
  description: string;
}

const PAGE_METAS: Record<string, PageMeta> = {
  home: {
    title: 'ELVORA | Digital Experiences & Technology Solutions',
    description: 'ELVORA designs and builds modern websites, web applications, and digital solutions that help businesses create a stronger digital presence.',
  },
  portfolio: {
    title: 'ELVORA | Portfolio',
    description: 'Explore architectural demonstration models and case study systems engineered by ELVORA digital technology studio.',
  },
  planner: {
    title: 'ELVORA | Website Planner',
    description: 'Configure your digital project scope and calculate an instant, transparent investment estimate in Philippine Peso (PHP / ₱).',
  },
  contact: {
    title: 'ELVORA | Contact',
    description: 'Get in touch with the ELVORA engineering team to discuss your web application, corporate site, or custom digital system.',
  },
  blog: {
    title: 'ELVORA | Blog',
    description: 'Strategic technical journal covering web development costs in the Philippines, modern frontend architectures, and digital growth.',
  },
  team: {
    title: 'ELVORA | Team',
    description: 'Meet the product architects and engineering team behind ELVORA digital technology studio.',
  },
};

export const App: React.FC = () => {
  // Determine initial page from root attribute or window location
  const getInitialPage = (): string => {
    if (typeof window === 'undefined') return 'home';

    const rootAttr = document.getElementById('root')?.getAttribute('data-page');
    if (rootAttr && PAGE_METAS[rootAttr]) return rootAttr;

    const path = window.location.pathname.toLowerCase();
    if (path.includes('portfolio')) return 'portfolio';
    if (path.includes('planner')) return 'planner';
    if (path.includes('contact')) return 'contact';
    if (path.includes('blog')) return 'blog';
    if (path.includes('team')) return 'team';
    return 'home';
  };

  const [activePage, setActivePage] = useState<string>(getInitialPage());

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const meta = PAGE_METAS[activePage] || PAGE_METAS.home;

  const renderContent = () => {
    switch (activePage) {
      case 'portfolio':
        return <Portfolio />;
      case 'planner':
        return <Planner />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog />;
      case 'team':
        return <Team />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <Layout
      currentPath={`/${activePage === 'home' ? 'index' : activePage}.html`}
      title={meta.title}
      description={meta.description}
    >
      {renderContent()}
    </Layout>
  );
};
