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
import { ArrowUpRight, Cpu, ShieldCheck, Zap, Activity } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[96vh] flex flex-col items-center justify-center text-center px-6 border-b border-white/[0.08] bg-[#050505] bg-cyber-grid overflow-hidden pt-28 pb-20">

        {/* Ambient Glowing Cyber Aura behind headline */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-cyber-pulse" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero Vignette for seamless fade */}
        <div className="absolute inset-0 hero-vignette pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center">
          
          {/* Futuristic Status Pill */}
          <div className="inline-flex items-center gap-2.5 border border-white/15 bg-white/[0.03] rounded-full px-4 py-1.5 mb-8 sm:mb-10 shadow-[0_0_20px_rgba(0,240,255,0.06)] backdrop-blur-md">
            <span className="led-cyan" />
            <span className="font-mono text-[11px] sm:text-xs text-zinc-300 tracking-wider">
              PROTOCOL v2.6 // AVAILABLE FOR SELECT DEPLOYMENTS
            </span>
          </div>

          {/* Main Headline */}
          <div className="leading-none text-center select-none w-full relative">
            <h1
              className="font-heading font-black text-white tracking-tight uppercase transition-all duration-300 drop-shadow-[0_0_35px_rgba(255,255,255,0.15)]"
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

          {/* Centered Futuristic Laser Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto my-7 sm:my-8 shadow-[0_0_8px_#00F0FF]" />

          {/* High-Tech Subtitle & Telemetry */}
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.35em] text-zinc-400 uppercase mb-8 font-medium">
            // NEXT-GEN DIGITAL ARCHITECTURE & SYSTEMS // 14.5995° N, 120.9842° E
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20 w-full max-w-md">
            <a
              href="#selected-work"
              className="cyber-btn-primary w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold text-black rounded-sm tracking-wide text-center"
            >
              Explore Architecture
            </a>
            <a
              href="/planner.html"
              className="cyber-btn-secondary w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold text-white rounded-sm tracking-wide text-center flex items-center justify-center gap-2"
            >
              <span>Configure Project</span>
              <span className="font-mono text-[10px] text-cyan-400">[₱]</span>
            </a>
          </div>

          {/* Futuristic 4-Column Telemetry Matrix */}
          <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 text-left">
            
            <div className="cyber-card cyber-corners p-4 sm:p-5 rounded-sm">
              <div className="flex items-center justify-between mb-3 text-cyan-400">
                <Activity className="w-4 h-4" />
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">01 // UPTIME</span>
              </div>
              <div className="font-heading text-xl sm:text-2xl font-bold text-white mb-0.5">
                99.98%
              </div>
              <p className="font-mono text-[10px] sm:text-[11px] text-zinc-500 leading-tight">
                Distributed edge infrastructure
              </p>
            </div>

            <div className="cyber-card cyber-corners p-4 sm:p-5 rounded-sm">
              <div className="flex items-center justify-between mb-3 text-emerald-400">
                <Zap className="w-4 h-4" />
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">02 // LATENCY</span>
              </div>
              <div className="font-heading text-xl sm:text-2xl font-bold text-white mb-0.5">
                &lt; 35ms
              </div>
              <p className="font-mono text-[10px] sm:text-[11px] text-zinc-500 leading-tight">
                Sub-second render pipelines
              </p>
            </div>

            <div className="cyber-card cyber-corners p-4 sm:p-5 rounded-sm">
              <div className="flex items-center justify-between mb-3 text-cyan-400">
                <Cpu className="w-4 h-4" />
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">03 // CORE</span>
              </div>
              <div className="font-heading text-xl sm:text-2xl font-bold text-white mb-0.5">
                100%
              </div>
              <p className="font-mono text-[10px] sm:text-[11px] text-zinc-500 leading-tight">
                Tailored code zero bloated templates
              </p>
            </div>

            <div className="cyber-card cyber-corners p-4 sm:p-5 rounded-sm">
              <div className="flex items-center justify-between mb-3 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">04 // AUDIT</span>
              </div>
              <div className="font-heading text-xl sm:text-2xl font-bold text-white mb-0.5">
                Zero-Trust
              </div>
              <p className="font-mono text-[10px] sm:text-[11px] text-zinc-500 leading-tight">
                Production-grade hardened stack
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-24 sm:py-32 px-6 border-b border-white/[0.08] max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-400/90">
              <span className="w-1 h-3 bg-cyan-400 inline-block" />
              <span>Studio Manifesto</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
              Technology should make your business feel simpler and look ahead of its time.
            </h2>
          </div>
          <div className="space-y-6 pt-1">
            <p className="text-[15px] text-[#B0B0B0] leading-relaxed">
              ELVORA is a modern digital technology studio. We engineer custom web applications, digital systems, and high-impact digital experiences for founders and organizations that demand uncompromising quality.
            </p>
            <p className="text-[15px] text-[#6B6B6B] leading-relaxed">
              We work directly with builders. No account managers, no layers of bureaucracy. Just an agile engineering unit focused on razor-sharp execution.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
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
      <section id="services" className="py-24 sm:py-32 px-6 border-b border-white/[0.08] bg-[#0A0A0A]/60 relative">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="[ PROTOCOL // CAPABILITIES ]"
            heading="From first blueprint to deployed production."
            description="End-to-end digital engineering engineered for performance, precision, and longevity."
          />
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {SERVICES.map((service, index) => (
              <ServiceItem key={service.number} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 sm:py-32 px-6 border-b border-white/[0.08] bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="[ DEPLOYMENT PIPELINE ]"
            heading="Structured execution. Relentless speed."
            description="Our battle-tested workflow from initial consultation to global cloud release."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="bg-[#0A0A0A] p-8 hover:bg-[#0E0E10] transition-colors relative group">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[11px] text-cyan-400 font-semibold tracking-wider">
                    {step.step}
                  </span>
                  <span className="font-mono text-[9px] text-zinc-600 uppercase border border-white/10 px-1.5 py-0.5 rounded-sm">
                    PHASE
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#777] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section id="selected-work" className="py-24 sm:py-32 px-6 border-b border-white/[0.08] bg-[#070707]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <SectionHeading
              label="[ PRODUCTION FLEET ]"
              heading="Deployed systems in the wild."
              description="Live, interactive web environments engineered for performance and reliability."
            />
            <a
              href="/portfolio.html"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-cyan-300 transition-colors mb-14 shrink-0 ml-8"
            >
              <span>EXPLORE ALL</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SELECTED_WORK.map((project) => (
              <ProjectCard key={project.id} project={project} totalCount={SELECTED_WORK.length} />
            ))}
          </div>

          <p className="mt-8 text-[11px] font-mono text-zinc-500 text-center tracking-wider uppercase">
            // ALL PREVIEWS ARE INTERACTIVE HIGH-SPEED PRODUCTION ENVIRONMENTS //
          </p>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="py-24 sm:py-32 px-6 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="[ ENGINEERING CREED ]"
            heading="Futuristic standards built on core fundamentals."
          />

          <div className="space-y-0 divide-y divide-white/[0.08]">
            {PRINCIPLES.map((p) => (
              <div key={p.number} className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 items-start group">
                <div className="lg:col-span-1">
                  <span className="font-mono text-[12px] text-cyan-400/80 font-bold">{p.number}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-heading text-xl font-semibold text-white group-hover:text-cyan-200 transition-colors">
                    {p.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-[15px] text-[#71717A] leading-relaxed">{p.elaboration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 sm:py-32 px-6 border-b border-white/[0.08] bg-[#0A0A0A]/40">
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="[ TELEMETRY & INQUIRIES ]" heading="Answers to common questions." align="center" />
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 sm:py-40 px-6 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto cyber-card cyber-corners p-10 sm:p-16 rounded-md bg-[#0A0A0A]/90 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="inline-flex items-center gap-2 mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-400">
            <span className="led-cyan" />
            <span>TRANSMISSION UPLINK READY</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Have a project worth engineering?
          </h2>
          <p className="text-[15px] text-[#A1A1AA] leading-relaxed mb-10 max-w-lg mx-auto">
            Configure your technical scope in our interactive Project Planner or transmit a direct project brief.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/planner.html"
              className="cyber-btn-primary px-8 py-3.5 text-xs sm:text-sm font-semibold rounded-sm text-black flex items-center justify-center gap-2"
            >
              <span>Launch Project Planner</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/contact.html"
              className="cyber-btn-secondary px-8 py-3.5 text-xs sm:text-sm font-semibold rounded-sm text-white"
            >
              Direct Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
