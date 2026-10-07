import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentPath?: string;
}

export const navLinks = [
  { name: 'Home', href: '/index.html', route: '/' },
  { name: 'Portfolio', href: '/portfolio.html', route: '/portfolio' },
  { name: 'Planner', href: '/planner.html', route: '/planner' },
  { name: 'Contact', href: '/contact.html', route: '/contact' },
  { name: 'Blog', href: '/blog.html', route: '/blog' },
  { name: 'Team', href: '/team.html', route: '/team' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(true);

  const path = currentPath || (typeof window !== 'undefined' ? window.location.pathname : '/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);

    // Initialize theme from localStorage or document
    try {
      const savedTheme = localStorage.getItem('elvora-theme');
      if (savedTheme === 'light') {
        setIsDark(false);
        document.documentElement.classList.add('light');
      } else {
        setIsDark(true);
        document.documentElement.classList.remove('light');
      }
    } catch (e) {}

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    if (!nextIsDark) {
      document.documentElement.classList.add('light');
      localStorage.setItem('elvora-theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('elvora-theme', 'dark');
    }
  };

  const isActive = (item: typeof navLinks[0]) => {
    const current = path.toLowerCase();
    if (item.route === '/' || item.href === '/index.html') {
      return current === '/' || current === '/index.html' || current.endsWith('/elvora/') || current === '';
    }
    const cleanHref = item.href.replace('/', '').replace('.html', '');
    return current.includes(cleanHref);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-[#050505]/95 backdrop-blur-sm border-b border-white/[0.08]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo with uploaded official mark */}
          <a href="/index.html" id="nav-brand-logo" className="flex items-center gap-3 group select-none">
            <img
              src="/logo.png"
              alt="ELVORA TECHNOLOGY Logo"
              className="h-10 w-10 object-contain group-hover:opacity-80 transition-opacity"
            />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-black text-base tracking-[0.22em] text-white group-hover:opacity-90 transition-opacity">
                ELVORA
              </span>
              <span className="font-mono text-[8px] tracking-[0.38em] text-[#71717A] uppercase mt-1">
                TECHNOLOGY
              </span>
            </div>
          </a>

          {/* Center Navigation Links matching reference */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] tracking-wide transition-colors duration-150 ${
                    active ? 'text-white font-medium' : 'text-[#71717A] hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area: Night / Light Mode Toggle on the LEFT of Start a Project */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button (Night / Light Mode) */}
            <button
              onClick={toggleTheme}
              type="button"
              id="theme-toggle-btn"
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Night Mode'}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Night Mode'}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border border-white/15 bg-white/[0.03] hover:border-white/30 transition-all text-xs font-mono select-none"
            >
              <Sun className={`w-3.5 h-3.5 transition-colors ${!isDark ? 'text-amber-500 font-bold' : 'text-zinc-600'}`} />
              <span className="text-zinc-600">/</span>
              <Moon className={`w-3.5 h-3.5 transition-colors ${isDark ? 'text-zinc-200 font-bold' : 'text-zinc-500'}`} />
            </button>

            {/* Start a Project Button */}
            <a
              href="/planner.html"
              id="nav-cta-button"
              className="inline-flex items-center px-5 py-2 text-[13px] font-semibold text-black bg-white rounded-sm hover:bg-[#E8E8E8] transition-colors duration-150 shadow-sm"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle theme"
              className="p-2 text-[#71717A] hover:text-white transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-300" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              id="mobile-menu-toggle"
              className="text-[#71717A] hover:text-white transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505] border-b border-white/[0.08] px-6 py-6 space-y-4">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm py-1 transition-colors ${
                  active ? 'text-white font-medium' : 'text-[#71717A] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-4 border-t border-white/[0.08] space-y-3">
            <a
              href="/planner.html"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 text-sm font-semibold text-black bg-white rounded-sm"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
