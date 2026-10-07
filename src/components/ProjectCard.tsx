import React, { useState } from 'react';
import { ArrowUpRight, X, CheckCircle2, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../data/selectedWork';

interface ProjectCardProps {
  project: ProjectItem;
  totalCount?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, totalCount = 3 }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const formattedTotal = totalCount < 10 ? `0${totalCount}` : `${totalCount}`;

  return (
    <>
      <div className="group border border-white/[0.08] bg-[#0A0A0A] overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-200">
        
        {/* Top Preview Banner — LIVE EMBEDDED WEBSITE IFRAME */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0F0F11] border-b border-white/[0.08]">
          
          {/* Fallback / Loading Skeleton while iframe initializes */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0C0C0E] text-zinc-500 z-0">
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mb-2" />
              <span className="font-mono text-[11px] tracking-wider text-zinc-500">
                Loading live preview...
              </span>
            </div>
          )}

          {/* Scaled Live Website Iframe */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div
              className="origin-top-left"
              style={{
                width: '1280px',
                height: '800px',
                transform: 'scale(0.42)',
                pointerEvents: 'none',
              }}
            >
              <iframe
                src={project.liveUrl}
                title={`${project.title} Live Preview`}
                onLoad={() => setIframeLoaded(true)}
                className="w-full h-full border-0 bg-white"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          {/* Clickable Overlay to open live site or details */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            title={`Open ${project.title} live website`}
            className="absolute inset-0 z-10 bg-black/0 hover:bg-black/10 transition-colors cursor-pointer"
          />

          {/* Status Badge Pinned on Top-Left */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A2012]/95 text-[#22C55E] border border-[#22C55E]/40 text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-sm shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] inline-block animate-pulse" />
              <span>LIVE</span>
            </span>
          </div>

          {/* Direct Live Preview Indicator on Top-Right */}
          <div className="absolute top-4 right-4 z-20">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-zinc-300 hover:text-white bg-black/70 hover:bg-black/90 border border-white/15 rounded-sm backdrop-blur-sm transition-all"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            {/* Index Counter: . 01 / 03 . */}
            <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-2 font-medium">
              . {project.index} / {formattedTotal} .
            </p>

            {/* Title */}
            <h3 className="font-heading text-2xl font-black text-white tracking-tight mb-2.5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-200 transition-colors inline-flex items-center gap-2 group/title"
              >
                <span>{project.title}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/title:opacity-100 transition-opacity" />
              </a>
            </h3>

            {/* Description starting with period bullet */}
            <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed">
              <span className="text-zinc-600 mr-2 font-bold select-none">.</span>
              {project.description}
            </p>
          </div>

          {/* Bottom Actions Row */}
          <div className="border-t border-white/[0.08] pt-5 mt-6 flex items-center justify-between">
            {/* Tag Badge */}
            <span className="px-3 py-1 rounded-sm border border-white/10 text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              {project.tag}
            </span>

            {/* Visit Site Button */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-btn-visit inline-flex items-center gap-1.5 px-4 py-2 border border-white/20 rounded-sm text-[11px] font-mono font-bold text-white uppercase tracking-wider hover:bg-white hover:text-black transition-all"
            >
              <span>VISIT SITE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Technical Detail Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#111111] border border-white/[0.1] rounded-sm p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-[#6B6B6B] hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-[11px] text-[#6B6B6B] uppercase tracking-widest">
                {project.type} · {project.year}
              </span>
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-sm border border-emerald-500/20">
                LIVE APP
              </span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-sm text-[#888] leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="space-y-2 mb-6">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2.5 text-sm text-[#CCCCCC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white/40 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((t) => (
                <span key={t} className="font-mono text-[11px] text-[#777] border border-white/[0.08] px-2.5 py-1 rounded-sm">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-black bg-white px-5 py-2.5 rounded-sm hover:bg-[#E8E8E8] transition-colors"
              >
                <span>Launch Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="/planner.html"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-sm font-medium text-white border border-white/20 px-5 py-2.5 rounded-sm hover:bg-white/[0.05] transition-colors"
              >
                <span>Build something similar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
