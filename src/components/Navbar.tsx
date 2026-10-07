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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.1] shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo with uploaded official mark & futuristic cyber title */}
          <a href="/index.html" id="nav-brand-logo" className="flex items-center gap-3.5 group select-none">
            <div className="relative">
              <img
                src="/logo.png"
                alt="ELVORA TECHNOLOGY Logo"
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -inset-1 bg-cyan-400/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-base tracking-[0.24em] text-white group-hover:text-cyan-300 transition-colors">
                  ELVORA
                </span>
                <span className="hidden sm:inline-block text-[9px] font-mono text-cyan-400/80 px-1.5 py-0.2 rounded border border-cyan-400/30 bg-cyan-400/5">
                  SYS
                </span>
              </div>
              <span className="font-mono text-[8px] tracking-[0.38em] text-[#71717A] uppercase mt-1">
                TECHNOLOGY
              </span>
            </div>
          </a>

          {/* Center Navigation Links with Futuristic Active Status */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] tracking-wide transition-all duration-200 relative py-1 flex items-center gap-1.5 ${
                    active ? 'text-white font-medium' : 'text-[#71717A] hover:text-white'
                  }`}
                >
                  {active && <span className="led-cyan" />}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Area: Telemetry + Mode Toggle + Start a Project */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Live Node Telemetry Indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-mono text-zinc-400 select-none">
              <span className="led-emerald" />
              <span className="tracking-wider">SYS.ONLINE</span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-500">MNL:24ms</span>
            </div>

            {/* Theme Toggle Button (Night / Light Mode) */}
            <button
              onClick={toggleTheme}
              type="button"
              id="theme-toggle-btn"
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Night Mode'}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Night Mode'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-white/15 bg-white/[0.03] hover:border-cyan-400/50 hover:bg-white/[0.06] transition-all text-xs font-mono select-none"
            >
              <Sun className={`w-3.5 h-3.5 transition-colors ${!isDark ? 'text-amber-500 font-bold' : 'text-zinc-600'}`} />
              <span className="text-zinc-600">/</span>
              <Moon className={`w-3.5 h-3.5 transition-colors ${isDark ? 'text-cyan-300 font-bold' : 'text-zinc-500'}`} />
            </button>

            {/* Start a Project Button */}
            <a
              href="/planner.html"
              id="nav-cta-button"
              className="cyber-btn-primary inline-flex items-center px-5 py-2 text-[13px] rounded-sm font-semibold tracking-wide"
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
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-300" />}
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
