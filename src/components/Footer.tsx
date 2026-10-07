import React from 'react';
import { navLinks } from './Navbar';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="ELVORA TECHNOLOGY"
                className="h-11 w-11 object-contain"
              />
              <div>
                <span className="font-heading font-bold text-base tracking-[0.18em] text-white block">ELVORA</span>
                <span className="font-mono text-[9px] tracking-[0.3em] text-[#6B6B6B] uppercase block mt-0.5">Technology</span>
              </div>
            </div>
            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-xs">
              Digital experiences built with purpose.
            </p>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span className="font-mono text-[11px] text-[#6B6B6B]">Available for new work</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#6B6B6B] mb-5">
              Pages
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#6B6B6B] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#6B6B6B] mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-[#6B6B6B]">
              {['Website Development', 'Web Applications', 'UI/UX Design', 'Business Websites', 'Custom Solutions'].map((s) => (
                <li key={s}>
                  <a href="/index.html#services" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Start a project */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#6B6B6B] mb-5">
              Get in touch
            </h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">
              Ready to build something? Use our planner to scope your project.
            </p>
            {/* TODO: Replace with real email before going live */}
            <a
              href="mailto:hello@yourdomain.com"
              className="block text-sm text-white mb-4 hover:text-[#B0B0B0] transition-colors"
            >
              hello@yourdomain.com
              <span className="ml-1.5 font-mono text-[10px] text-[#6B6B6B]">(placeholder)</span>
            </a>
            <a
              href="/planner.html"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-black bg-white px-4 py-2 rounded-sm hover:bg-[#E8E8E8] transition-colors"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-[12px] text-[#6B6B6B]">
            © 2026 ELVORA. All rights reserved.
          </span>
          <div className="flex items-center gap-6 font-mono text-[12px] text-[#6B6B6B]">
            {/* TODO: Add real social links */}
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
