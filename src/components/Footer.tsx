import React from 'react';
import { navLinks } from './Navbar';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050505] relative overflow-hidden">
      {/* Subtle top laser border accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand & Telemetry */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="ELVORA TECHNOLOGY"
                className="h-10 w-10 object-contain"
              />
              <div>
                <span className="font-heading font-bold text-base tracking-[0.2em] text-white block">ELVORA</span>
                <span className="font-mono text-[9px] tracking-[0.32em] text-[#71717A] uppercase block mt-0.5">Technology</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-xs font-sans">
              High-performance digital architecture and tailored web systems engineered with precision.
            </p>
            <div className="inline-flex items-center gap-2 pt-1 font-mono text-[10px] text-zinc-400 border border-white/10 px-2.5 py-1 rounded-full bg-white/[0.02]">
              <span className="led-emerald" />
              <span>STATION: MANILA // LIVE</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-cyan-400/90 mb-5 font-semibold">
              // INDEX
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-mono text-zinc-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-cyan-400/90 mb-5 font-semibold">
              // PROTOCOLS
            </h3>
            <ul className="space-y-3 text-xs font-mono text-zinc-400">
              {['Web Systems Architecture', 'Cloud Web Applications', 'Interface Engineering', 'High-Speed API Backends', 'Performance Hardening'].map((s) => (
                <li key={s}>
                  <a href="/index.html#services" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dispatch Uplink */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-cyan-400/90 mb-5 font-semibold">
              // TRANSMIT
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Ready to engineer your system? Initialize the Project Planner.
            </p>
            <a
              href="mailto:hello@yourdomain.com"
              className="block font-mono text-xs text-zinc-300 mb-4 hover:text-cyan-300 transition-colors"
            >
              hello@yourdomain.com
            </a>
            <a
              href="/planner.html"
              className="cyber-btn-primary inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider px-4 py-2.5 rounded-sm"
            >
              <span>LAUNCH PLANNER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-[11px] text-zinc-500">
            © 2026 ELVORA TECHNOLOGY LABS. ALL SYSTEMS AUDITED.
          </span>
          <div className="flex items-center gap-6 font-mono text-[11px] text-zinc-500">
            <a href="https://github.com/Elvoratechnology/Elvora-" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors">GitHub</a>
            <a href="#" className="hover:text-cyan-300 transition-colors">Discord Node</a>
            <a href="#" className="hover:text-cyan-300 transition-colors">X / Intel</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
