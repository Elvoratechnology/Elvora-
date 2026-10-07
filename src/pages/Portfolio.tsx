import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { SELECTED_WORK } from '../data/selectedWork';
import { ArrowUpRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 sm:py-28 relative">
      <SectionHeading
        label="[ DEPLOYED REPOSITORY // PRODUCTION ]"
        heading="Selected live applications."
        description="Interactive production web systems engineered and deployed by ELVORA. Real-time live previews running directly below."
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {SELECTED_WORK.map((project) => (
          <ProjectCard key={project.id} project={project} totalCount={SELECTED_WORK.length} />
        ))}
      </div>

      {/* Bottom Futuristic CTA Card */}
      <div className="mt-20 cyber-card cyber-corners rounded-sm p-10 sm:p-14 bg-[#0A0A0C]/90 text-center relative">
        <div className="inline-flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-400">
          <span className="led-cyan" />
          <span>INITIALIZE ARCHITECTURE</span>
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
          Ready to engineer your custom system?
        </h3>
        <p className="text-zinc-400 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          We architect ultra-fast, production-hardened web environments with modern infrastructure and zero template bloat.
        </p>
        <a
          href="/planner.html"
          className="cyber-btn-primary inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-sm text-black"
        >
          <span>Launch Project Planner</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
