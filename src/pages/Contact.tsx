import React, { useState } from 'react';
import { Mail, Globe, MapPin, ArrowRight, CheckCircle2, ChevronDown, Loader2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Client-side required field validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedContactMethod = formData.contactMethod.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedContactMethod || !trimmedMessage) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const endpoint = 'https://formspree.io/f/mbgdzy1w';
    const payload = {
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      contactMethod: trimmedContactMethod,
      subject: `New Project Inquiry from ${trimmedName} - Elvora Technology`,
      message: trimmedMessage,
      _replyto: trimmedEmail,
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setErrorMessage(null);
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
          const detail = data.errors.map((err: { field?: string; message: string }) => err.message).join(', ');
          setErrorMessage(detail || 'There was an issue processing your submission. Please try again.');
        } else if (data && data.error) {
          setErrorMessage(data.error);
        } else {
          setErrorMessage('Unable to send your inquiry right now. Please try again or reach us directly at elvora1007@gmail.com.');
        }
      }
    } catch (err) {
      setErrorMessage('Network connection error. Please check your internet connection or email us directly at elvora1007@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* Glass input — semi-transparent frosted style */
  const inputClass =
    'w-full px-4 py-3.5 text-sm bg-white/[0.04] backdrop-blur-sm border border-white/[0.1] text-white placeholder-white/25 rounded-xl focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const labelClass = 'block text-[11px] font-mono text-white/40 uppercase tracking-wider mb-2';

  return (
    <div className="relative min-h-[calc(100vh-80px)] overflow-hidden py-16 sm:py-24">

      {/* ── Background: deep black + subtle radial noise ── */}
      <div className="absolute inset-0 bg-[#050505]" />
      {/* Soft top-center glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-white/[0.04] rounded-full blur-[120px] pointer-events-none" />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

        {/* ── Page Header ── */}
        <div className="mb-14">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/30 block mb-3">
            Contact
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Let's build something.
          </h1>
          <p className="text-sm text-white/40 max-w-md leading-relaxed">
            Tell us about your project, vision, and goals. We'll review your inquiry and reach out within 24 hours.
          </p>
        </div>

        {/* ── Main Glass Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* ── Left: Inquiry Form Glass Card (7 cols) ── */}
          <div className="lg:col-span-7">
            <div
              className="relative rounded-2xl border border-white/[0.1] overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.035)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)',
              }}
            >
              {/* Inner top shine line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="p-7 sm:p-9">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/[0.07]">
                  <div>
                    <h2 className="font-heading text-lg font-bold text-white leading-none">
                      Project Inquiry
                    </h2>
                    <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mt-1">
                      Direct line to the studio
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04]">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="font-mono text-[10px] text-white/50 tracking-wider">Open</span>
                  </div>
                </div>

                {submitted ? (
                  /* ── Success State ── */
                  <div className="py-14 text-center space-y-5">
                    <div className="w-14 h-14 rounded-full border border-white/20 bg-white/[0.05] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white mb-2">
                        Inquiry Received
                      </h3>
                      <p className="text-sm text-white/40 max-w-sm mx-auto leading-relaxed">
                        Thank you, <span className="text-white font-medium">{formData.name}</span>.
                        We'll reach out via{' '}
                        <span className="text-white font-medium">{formData.contactMethod || 'email'}</span>{' '}
                        within 24 hours.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ name: '', email: '', phone: '', contactMethod: '', message: '' });
                        setSubmitted(false);
                        setErrorMessage(null);
                      }}
                      className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-white/30 hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form
                    action="https://formspree.io/f/mbgdzy1w"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate={false}
                  >
                    {/* Hidden Formspree helper attributes */}
                    <input
                      type="hidden"
                      name="subject"
                      value={formData.name ? `New Project Inquiry from ${formData.name} - Elvora Technology` : 'New Project Inquiry - Elvora Technology'}
                    />
                    <input type="hidden" name="_replyto" value={formData.email} />
                    {/* Honeypot field for bot spam prevention */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-name" className={labelClass}>Your Name *</label>
                        <input
                          id="c-name"
                          name="name"
                          required
                          type="text"
                          autoComplete="name"
                          disabled={isSubmitting}
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-email" className={labelClass}>Email Address *</label>
                        <input
                          id="c-email"
                          name="email"
                          required
                          type="email"
                          autoComplete="email"
                          disabled={isSubmitting}
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Contact Method */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-phone" className={labelClass}>Phone / WhatsApp *</label>
                        <input
                          id="c-phone"
                          name="phone"
                          required
                          type="tel"
                          autoComplete="tel"
                          disabled={isSubmitting}
                          placeholder="+63 917 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-method" className={labelClass}>Preferred Contact *</label>
                        <div className="relative">
                          <select
                            id="c-method"
                            name="contactMethod"
                            required
                            disabled={isSubmitting}
                            value={formData.contactMethod}
                            onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                            className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                          >
                            <option value="" disabled className="bg-[#0a0a0a] text-zinc-500">
                              Select method...
                            </option>
                            {['Email', 'WhatsApp', 'Phone Call', 'Zoom / Video Call', 'Facebook Messenger'].map((m) => (
                              <option key={m} value={m} className="bg-[#0a0a0a] text-white">
                                {m}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-3.5 h-3.5 text-white/30 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Message */}
                    <div>
                      <label htmlFor="c-msg" className={labelClass}>
                        Project Description & Goals *
                      </label>
                      <textarea
                        id="c-msg"
                        name="message"
                        required
                        disabled={isSubmitting}
                        rows={5}
                        placeholder="Describe your project, vision, goals, and what you'd like to discuss..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Error message banner */}
                    {errorMessage && (
                      <div
                        role="alert"
                        className="p-4 rounded-xl border border-red-500/25 bg-red-500/10 backdrop-blur-sm flex items-start gap-3 text-red-200 text-xs leading-relaxed"
                      >
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-semibold text-red-300 mb-0.5">Submission Error</p>
                          <p className="text-white/75">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    {/* Submit */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        id="contact-submit-btn"
                        disabled={isSubmitting}
                        className="group w-full flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-100 active:scale-[0.99] transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.1)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-white"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-black" />
                            <span>Sending Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Inquiry</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                          </>
                        )}
                      </button>
                      <p className="text-center font-mono text-[10px] text-white/20 mt-3 tracking-wider">
                        🔒 Confidential · No spam · 24h reply
                      </p>
                    </div>

                  </form>
                )}
              </div>
            </div>
          </div>

          {/* ── Right: Contact Info Stack (5 cols) ── */}
          <div className="lg:col-span-5 space-y-4">

            {/* Contact Details Glass Card */}
            <div
              className="relative rounded-2xl border border-white/[0.1] overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="p-6 space-y-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-5">
                  Studio Details
                </p>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.09] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-white/70" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:elvora1007@gmail.com"
                      className="text-sm text-white hover:text-white/70 transition-colors font-medium"
                    >
                      elvora1007@gmail.com
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/[0.06]" />

                {/* Web */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.09] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Globe className="w-3.5 h-3.5 text-white/70" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-0.5">
                      Web Address
                    </p>
                    <a
                      href="https://elvora-zeta.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white hover:text-white/70 transition-colors font-medium"
                    >
                      elvora-zeta.vercel.app
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/[0.06]" />

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.09] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-white/70" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-0.5">
                      Location
                    </p>
                    <p className="text-sm text-white font-medium">
                      Global / Distributed Remote
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to expect Glass Card */}
            <div
              className="relative rounded-2xl border border-white/[0.1] overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.025)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-5">
                  What Happens Next
                </p>
                <div className="space-y-4">
                  {[
                    { step: '01', title: '24h Scope Review', desc: 'We evaluate your brief and feasibility.' },
                    { step: '02', title: 'Proposal & Quote', desc: 'Fixed-cost proposal with a clear roadmap.' },
                    { step: '03', title: 'Sprint Kickoff', desc: 'Weekly previews on a live staging link.' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3.5">
                      <span className="font-mono text-[10px] text-white/20 mt-0.5 flex-shrink-0 w-5">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white leading-none mb-1">{item.title}</p>
                        <p className="text-[11px] text-white/35 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
