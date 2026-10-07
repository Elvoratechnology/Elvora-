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
      <div className="cyber-card cyber-corners overflow-hidden flex flex-col justify-between group transition-all duration-300">
        
        {/* Top High-Tech Console Header */}
        <div className="px-4 py-2.5 bg-[#08080A] border-b border-white/[0.08] flex items-center justify-between text-xs select-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#00F0FF]" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981]" />
            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_6px_#8B5CF6]" />
            <span className="ml-2 font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
              NODE://PROD-0{project.index}
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>200 OK</span>
          </div>
        </div>

        {/* Top Preview Banner — LIVE EMBEDDED WEBSITE IFRAME */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A0A0C] border-b border-white/[0.08]">
          
          {/* Fallback / Loading Skeleton while iframe initializes */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070709] text-zinc-500 z-0">
              <div className="w-5 h-5 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mb-2" />
              <span className="font-mono text-[11px] tracking-wider text-zinc-500">
                Synchronizing live node...
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

          {/* Clickable Overlay to open live site */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            title={`Open ${project.title} live website`}
            className="absolute inset-0 z-10 bg-black/0 hover:bg-black/15 transition-colors cursor-pointer"
          />

          {/* Status Badge Pinned on Top-Left */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A1612]/90 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>LIVE SYSTEM</span>
            </span>
          </div>

          {/* Direct Live Preview Indicator on Top-Right */}
          <div className="absolute top-4 right-4 z-20">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-zinc-300 hover:text-white bg-black/80 hover:bg-black border border-white/15 rounded-sm backdrop-blur-md transition-all shadow-md"
            >
              <span>Console</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            {/* Index Counter: . 01 / 03 . */}
            <p className="font-mono text-[11px] text-cyan-400/80 uppercase tracking-widest mb-2 font-medium">
              // TELEMETRY 0{project.index} OF {formattedTotal} //
            </p>

            {/* Title */}
            <h3 className="font-heading text-2xl font-black text-white tracking-tight mb-2.5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2 group/title"
              >
                <span>{project.title}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/title:opacity-100 text-cyan-400 transition-opacity" />
              </a>
            </h3>

            {/* Description */}
            <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Bottom Actions Row */}
          <div className="border-t border-white/[0.08] pt-5 mt-6 flex items-center justify-between">
            {/* Tag Badge */}
            <span className="px-3 py-1 rounded-sm border border-white/10 bg-white/[0.02] text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              {project.tag}
            </span>

            {/* Visit Site Button */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="cyber-btn-secondary inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-[11px] font-mono font-bold tracking-wider"
            >
              <span>ACCESS DEPLOYMENT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
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
