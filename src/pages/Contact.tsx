import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PROJECT_TYPES } from '../data/pricing';
import { CheckCircle2, Send } from 'lucide-react';

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

  const inputClass = "w-full px-4 py-3 text-sm bg-[#111] border border-white/[0.08] text-white placeholder-[#444] rounded-sm focus:outline-none focus:border-white/30 transition-colors";

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading
        label="Contact"
        heading="Let's build something."
        description="Tell us about your project. We'll get back to you within 24 hours."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <CheckCircle2 className="w-8 h-8 text-white mx-auto" />
              <h3 className="font-heading text-2xl font-bold text-white">Inquiry received.</h3>
              <p className="text-sm text-[#6B6B6B] max-w-sm mx-auto">
                We'll review your project details and reach out within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-[#6B6B6B] hover:text-white underline underline-offset-2 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="c-name" className="block text-[12px] font-mono text-[#6B6B6B] uppercase tracking-wider">
                    Name *
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
                  <label htmlFor="c-email" className="block text-[12px] font-mono text-[#6B6B6B] uppercase tracking-wider">
                    Email *
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
                <label htmlFor="c-company" className="block text-[12px] font-mono text-[#6B6B6B] uppercase tracking-wider">
                  Company
                </label>
                <input
                  id="c-company"
                  type="text"
                  placeholder="Company name (optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="c-type" className="block text-[12px] font-mono text-[#6B6B6B] uppercase tracking-wider">
                    Project Type
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
                  <label htmlFor="c-budget" className="block text-[12px] font-mono text-[#6B6B6B] uppercase tracking-wider">
                    Budget (PHP)
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
                <label htmlFor="c-msg" className="block text-[12px] font-mono text-[#6B6B6B] uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  id="c-msg"
                  required
                  rows={5}
                  placeholder="Describe your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={inputClass + " resize-none"}
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-black bg-white rounded-sm hover:bg-[#E8E8E8] transition-colors"
              >
                <span>Send Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Sidebar info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="border-t border-white/[0.07] pt-8">
            <p className="font-mono text-[11px] text-[#444] uppercase tracking-widest mb-6">
              Contact details
            </p>
            <div className="space-y-5 text-[14px] text-[#6B6B6B]">
              <div>
                <p className="text-[12px] font-mono text-[#444] uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:hello@yourdomain.com" className="text-white hover:text-[#B0B0B0] transition-colors">
                  hello@yourdomain.com
                </a>
              </div>
              <div>
                <p className="text-[12px] font-mono text-[#444] uppercase tracking-wider mb-1">Location</p>
                <p className="text-zinc-300">Metro Manila, Philippines</p>
                <p className="text-[13px] text-[#444] mt-0.5">Remote-first. Clients globally.</p>
              </div>
              <div>
                <p className="text-[12px] font-mono text-[#444] uppercase tracking-wider mb-1">Hours</p>
                <p className="text-zinc-300">Mon – Fri, 9AM – 6PM PHT</p>
                <p className="text-[13px] text-[#444] mt-0.5">Replies within 24 hours.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.07] pt-8">
            <p className="text-[13px] text-[#6B6B6B] mb-4">
              Want an instant estimate? Use the project planner.
            </p>
            <a
              href="/planner.html"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white border border-white/15 px-4 py-2 rounded-sm hover:bg-white/[0.05] transition-colors"
            >
              Open Planner (₱)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
