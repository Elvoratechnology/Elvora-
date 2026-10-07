import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentPath?: string;
  title?: string;
  description?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  currentPath,
  title = 'ELVORA | Digital Experiences & Technology Solutions',
  description = 'ELVORA is a digital technology studio that builds websites, web applications, and custom software for modern businesses.',
}) => {
  React.useEffect(() => {
    if (title) document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }, [title, description]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] flex flex-col">
      <Navbar currentPath={currentPath} />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
