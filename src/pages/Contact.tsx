import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PROJECT_TYPES } from '../data/pricing';
import { CheckCircle2, Send, ArrowUpRight, Terminal } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Business Website',
    budget: '₱30,000 – ₱60,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 text-sm bg-[#08080A] border border-white/10 text-white placeholder-zinc-600 rounded-sm focus:outline-none focus:border-cyan-400/80 transition-colors";

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 sm:py-28 relative">
      <SectionHeading
        label="[ SECURE TRANSMISSION UPLINK ]"
        heading="Let's build something ahead of its time."
        description="Transmit your system requirements. Our engineering leads analyze every brief and respond within 24 hours."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Form Container */}
        <div className="lg:col-span-7 cyber-card cyber-corners p-8 sm:p-10 rounded-sm bg-[#0A0A0C]/90 border border-white/10 shadow-2xl">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">Transmission Received.</h3>
              <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Your technical specifications have been encrypted and dispatched to our engineering team. Expect a response within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors pt-4"
              >
                TRANSMIT ANOTHER DISPATCH
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>TRANSMISSION PROTOCOL: V2.6</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1.5">
                  <span className="led-emerald" />
                  <span>UPLINK READY</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="c-name" className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    NAME *
                  </label>
                  <input
                    id="c-name"
                    required
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="c-email" className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    EMAIL *
                  </label>
                  <input
                    id="c-email"
                    required
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="c-company" className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  ORGANIZATION / ENTITY
                </label>
                <input
                  id="c-company"
                  type="text"
                  placeholder="Organization name (optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="c-type" className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    SYSTEM TYPE
                  </label>
                  <select
                    id="c-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className={inputClass}
                  >
                    {PROJECT_TYPES.map((p) => (
                      <option key={p.id} value={p.name} className="bg-[#111] text-white">
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="c-budget" className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    TARGET BUDGET (PHP)
                  </label>
                  <select
                    id="c-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className={inputClass}
                  >
                    <option className="bg-[#111]">₱15,000 – ₱30,000</option>
                    <option className="bg-[#111]">₱30,000 – ₱60,000</option>
                    <option className="bg-[#111]">₱60,000 – ₱100,000</option>
                    <option className="bg-[#111]">₱100,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="c-msg" className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  PROJECT SPECIFICATIONS & BRIEF *
                </label>
                <textarea
                  id="c-msg"
                  required
                  rows={4}
                  placeholder="Describe your technical requirements, goals, and reference applications..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={inputClass + " resize-none"}
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="cyber-btn-primary w-full flex items-center justify-center gap-2 py-3.5 text-xs font-mono font-bold uppercase tracking-wider rounded-sm"
              >
                <span>TRANSMIT BRIEF</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="cyber-card cyber-corners p-7 rounded-sm bg-[#08080A]/80 border border-white/10 space-y-6">
            <div className="border-b border-white/[0.08] pb-4">
              <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest block font-bold">
                // NODE TELEMETRY //
              </span>
            </div>

            <div className="space-y-5 text-[14px]">
              <div>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Direct Uplink</p>
                <a href="mailto:hello@yourdomain.com" className="text-white hover:text-cyan-300 font-mono text-sm transition-colors">
                  hello@yourdomain.com
                </a>
              </div>
              <div>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Physical Station Coordinates</p>
                <p className="text-zinc-300 font-medium">Metro Manila, Philippines</p>
                <p className="text-[12px] font-mono text-zinc-500 mt-0.5">14.5995° N, 120.9842° E // Remote-First Global Node</p>
              </div>
              <div>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Operational Hours</p>
                <p className="text-zinc-300">Mon – Fri, 09:00 – 18:00 PHT</p>
                <p className="text-[12px] font-mono text-emerald-400 mt-0.5">Sub-24h turnaround guarantee</p>
              </div>
            </div>
          </div>

          <div className="cyber-card p-6 rounded-sm bg-[#0A0A0C]/90 border border-white/10">
            <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block font-bold mb-2">
              NEED IMMEDIATE COST SCOPING?
            </span>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Use our interactive Project Planner to customize modules, features, and receive instant transparency.
            </p>
            <a
              href="/planner.html"
              className="cyber-btn-secondary inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider px-4 py-2.5 rounded-sm"
            >
              <span>LAUNCH PLANNER</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
