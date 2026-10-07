import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { SELECTED_WORK } from '../data/selectedWork';
import { ArrowUpRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading
        label="Portfolio"
        heading="Selected live applications."
        description="Featured production web applications built by ELVORA. Previews are running live below."
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {SELECTED_WORK.map((project) => (
          <ProjectCard key={project.id} project={project} totalCount={SELECTED_WORK.length} />
        ))}
      </div>

      {/* Bottom CTA Card */}
      <div className="mt-16 border border-white/[0.08] rounded-sm p-10 bg-[#0A0A0A] text-center">
        <h3 className="font-heading text-xl font-bold text-white mb-2">Have a project in mind?</h3>
        <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          We engineer fast, production-ready web applications with modern architecture and clean design.
        </p>
        <a
          href="/planner.html"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-black bg-white rounded-sm hover:bg-[#E8E8E8] transition-colors"
        >
          <span>Start with Project Planner</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
