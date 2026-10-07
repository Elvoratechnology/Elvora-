import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { ServiceItem } from '../components/ServiceItem';
import { ProjectCard } from '../components/ProjectCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { SERVICES } from '../data/services';
import { PROCESS_STEPS } from '../data/process';
import { SELECTED_WORK } from '../data/selectedWork';
import { PRINCIPLES } from '../data/principles';
import { FAQS } from '../data/faqs';

export const Home: React.FC = () => {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[94vh] flex flex-col items-center justify-center text-center px-6 border-b border-white/[0.08] bg-[#050505] bg-dot-grid overflow-hidden py-16">

        {/* Subtle radial fade over the dot grid */}
        <div className="absolute inset-0 hero-vignette pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 border border-white/10 bg-[#0A0A0A]/90 rounded-full px-4 py-1.5 mb-8 sm:mb-10 shadow-sm backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
            <span className="font-mono text-[11px] sm:text-xs text-zinc-300 tracking-wide font-normal">
              Available for new projects
            </span>
          </div>

          {/* Main headline */}
          <div className="leading-none text-center select-none w-full">
            <h1
              className="font-heading font-black text-white tracking-tight uppercase"
              style={{
                fontSize: 'clamp(4.5rem, 15vw, 13rem)',
                letterSpacing: '-0.02em',
                lineHeight: '0.9',
              }}
            >
              ELVORA
            </h1>
            <h2
              className="font-heading font-black text-outline tracking-tight uppercase"
              style={{
                fontSize: 'clamp(4rem, 13.5vw, 11.5rem)',
                letterSpacing: '-0.02em',
                lineHeight: '0.92',
                marginTop: '0.04em',
              }}
            >
              TECHNOLOGY
            </h2>
          </div>

          {/* Centered Small Divider */}
          <div className="w-12 h-px bg-white/20 mx-auto my-7 sm:my-8" />

          {/* Tagline */}
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.3em] text-zinc-500 uppercase mb-8 font-medium">
            BUILDING WHAT'S NEXT.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14 sm:mb-16 w-full max-w-md">
            <a
              href="#selected-work"
              className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-semibold text-black bg-white rounded-sm hover:bg-zinc-200 transition-colors shadow-sm text-center"
            >
              View Our Work
            </a>
            <a
              href="/planner.html"
              className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-transparent border border-white/20 rounded-sm hover:bg-white/[0.06] hover:border-white/40 transition-colors text-center"
            >
              Configure Your Website
            </a>
          </div>

          {/* Bottom strip divider & feature badges */}
          <div className="w-full max-w-4xl mx-auto pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="text-zinc-600 font-bold text-sm">&lt;/&gt;</span>
              <span>Clean Code</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-600 font-bold text-sm">⚡</span>
              <span>High Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-600 font-bold text-sm">📱</span>
              <span>Fully Responsive</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-24 sm:py-32 px-6 border-b border-white/[0.07] max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6B6B6B] mb-5">
              Who we are
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
              Technology should make your business feel simpler.
            </h2>
          </div>
          <div className="space-y-5 pt-1">
            <p className="text-[15px] text-[#B0B0B0] leading-relaxed">
              ELVORA is a digital technology studio. We build websites, web applications, and custom software for businesses that want something built properly—not assembled from a template.
            </p>
            <p className="text-[15px] text-[#6B6B6B] leading-relaxed">
              We work directly with clients. No account managers, no layers of bureaucracy. Just a focused team that cares about getting the details right.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Button href="/portfolio.html" variant="secondary">
                See our work
              </Button>
              <Button href="/contact.html" variant="outline">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 sm:py-32 px-6 border-b border-white/[0.07] bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="What we build"
            heading="From first idea to finished product."
          />
          <div>
            {SERVICES.map((service, index) => (
              <ServiceItem key={service.number} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 sm:py-32 px-6 border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="How we work"
            heading="Simple process. Serious execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07]">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="bg-[#0C0C0C] p-8">
                <span className="font-mono text-[11px] text-[#6B6B6B] block mb-5">
                  {step.step}
                </span>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section id="selected-work" className="py-24 sm:py-32 px-6 border-b border-white/[0.07] bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <SectionHeading
              label="Selected work"
              heading="Built for real-world use."
            />
            <a href="/portfolio.html" className="text-sm text-[#6B6B6B] hover:text-white transition-colors mb-14 shrink-0 ml-8">
              View all →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SELECTED_WORK.map((project) => (
              <ProjectCard key={project.id} project={project} totalCount={SELECTED_WORK.length} />
            ))}
          </div>

          <p className="mt-8 text-[12px] font-mono text-[#555] text-center">
            Featuring live web applications deployed on production infrastructure.
          </p>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="py-24 sm:py-32 px-6 border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Why Elvora"
            heading="Good technology should feel effortless."
          />

          <div className="space-y-0 divide-y divide-white/[0.07]">
            {PRINCIPLES.map((p) => (
              <div key={p.number} className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10">
                <div className="lg:col-span-1">
                  <span className="font-mono text-[12px] text-[#6B6B6B]">{p.number}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-heading text-xl font-semibold text-white">{p.title}</h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-[15px] text-[#6B6B6B] leading-relaxed">{p.elaboration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 sm:py-32 px-6 border-b border-white/[0.07] bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="Questions" heading="Things clients usually ask." align="center" />
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 sm:py-40 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6B6B6B] mb-6">
            Next steps
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Have something worth building?
          </h2>
          <p className="text-[15px] text-[#6B6B6B] leading-relaxed mb-10 max-w-md mx-auto">
            Tell us what you're working on. We'll be straightforward about what's possible and what it'll cost.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/planner.html" variant="primary" size="lg" icon>
              Start a Project
            </Button>
            <Button href="/portfolio.html" variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
