import React, { useState } from 'react';
import {
  STUDENT_BASE_DETAILS,
  STUDENT_ADDONS,
  PROFESSIONAL_SERVICES,
  PROFESSIONAL_BUDGETS,
  PROFESSIONAL_TIMELINES,
  formatPHP,
} from '../data/pricing';
import {
  Code2,
  Layers,
  User,
  Building2,
  Palette,
  Cpu,
  Layout,
  Smartphone,
  Monitor,
  Cloud,
  Check,
  CheckCircle2,
  X,
  Send,
  RotateCcw,
} from 'lucide-react';

export const Planner: React.FC = () => {
  // Mode: 'professional' | 'student'
  const [plannerMode, setPlannerMode] = useState<'professional' | 'student'>('student');

  // Student State
  const [studentSelectedAddons, setStudentSelectedAddons] = useState<string[]>([]);
  const [studentModalOpen, setStudentModalOpen] = useState(false);
  const [studentForm, setStudentForm] = useState({
    name: '',
    school: '',
    email: '',
    notes: '',
  });
  const [studentSubmitted, setStudentSubmitted] = useState(false);

  // Professional State (Steps 1 to 5)
  const [proStep, setProStep] = useState<number>(1);
  const [proServices, setProServices] = useState<string[]>(['website-development']);
  const [proBudget, setProBudget] = useState<string>('growth');
  const [proTimeline, setProTimeline] = useState<string>('standard');
  const [proProjectName, setProProjectName] = useState<string>('');
  const [proDescription, setProDescription] = useState<string>('');
  const [proGoals, setProGoals] = useState<string>('');
  const [proContact, setProContact] = useState({
    name: '',
    email: '',
    handle: '',
  });
  const [proSubmitted, setProSubmitted] = useState(false);

  // Student calculation
  const studentAddonsTotal = studentSelectedAddons.reduce((sum, id) => {
    const item = STUDENT_ADDONS.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);
  const studentTotal = STUDENT_BASE_DETAILS.price + studentAddonsTotal;

  const toggleStudentAddon = (id: string) => {
    setStudentSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStudentSubmitted(true);
  };

  // Professional helpers
  const toggleProService = (id: string) => {
    setProServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleProSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProSubmitted(true);
  };

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'code':
        return <Code2 className="w-5 h-5 mb-3" />;
      case 'layers':
        return <Layers className="w-5 h-5 mb-3" />;
      case 'user':
        return <User className="w-5 h-5 mb-3" />;
      case 'building':
        return <Building2 className="w-5 h-5 mb-3" />;
      case 'palette':
        return <Palette className="w-5 h-5 mb-3" />;
      case 'system':
        return <Cpu className="w-5 h-5 mb-3" />;
      case 'webapp':
        return <Layout className="w-5 h-5 mb-3" />;
      case 'mobile':
        return <Smartphone className="w-5 h-5 mb-3" />;
      case 'desktop':
        return <Monitor className="w-5 h-5 mb-3" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 mb-3" />;
      default:
        return <Code2 className="w-5 h-5 mb-3" />;
    }
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Top Planner Mode Switcher */}
      <div className="mb-8 flex items-center justify-start">
        <div className="inline-flex p-1 rounded-sm border border-white/10 bg-[#0A0A0A]">
          <button
            type="button"
            onClick={() => setPlannerMode('professional')}
            className={`px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 rounded-sm ${
              plannerMode === 'professional'
                ? 'bg-white text-black shadow-md planner-mode-btn-active'
                : 'text-zinc-400 hover:text-white bg-transparent planner-mode-btn-inactive'
            }`}
          >
            PROFESSIONAL
          </button>
          <button
            type="button"
            onClick={() => setPlannerMode('student')}
            className={`px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 rounded-sm ${
              plannerMode === 'student'
                ? 'bg-white text-black shadow-md planner-mode-btn-active'
                : 'text-zinc-400 hover:text-white bg-transparent planner-mode-btn-inactive'
            }`}
          >
            STUDENT
          </button>
        </div>
      </div>

      {/* Main Container Card */}
      <div className="relative rounded-lg border border-white/[0.08] bg-[#0A0A0A] p-6 sm:p-10 lg:p-12 shadow-2xl">

        {/* =========================================================================
            STUDENT PLANNER INTERFACE (Screenshot 1)
        ========================================================================= */}
        {plannerMode === 'student' && (
          <div className="relative z-10 space-y-10 animate-in fade-in duration-200">
            {/* 1. BASE PLAN */}
            <div className="border-b border-white/[0.08] pb-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase text-zinc-500 tracking-wider font-semibold">
                    BASE PLAN
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {STUDENT_BASE_DETAILS.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-sans pt-1">
                    {STUDENT_BASE_DETAILS.subtitle}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {formatPHP(STUDENT_BASE_DETAILS.price)}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. ADD-ONS / FEATURES */}
            <div className="space-y-4">
              <div>
                <h4 className="font-mono text-xs uppercase text-zinc-300 tracking-wider font-semibold">
                  ADD-ONS / FEATURES
                </h4>
                <p className="text-xs text-zinc-500 mt-1">
                  Check what you need — your total updates in real time.
                </p>
              </div>

              {/* 3x3 Grid of Checkbox Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                {STUDENT_ADDONS.map((addon) => {
                  const isChecked = studentSelectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleStudentAddon(addon.id)}
                      className={`cursor-pointer p-4 rounded-md border transition-all duration-150 flex items-center justify-between select-none ${
                        isChecked
                          ? 'border-white/30 bg-white/[0.05] shadow-sm planner-card-addon-active'
                          : 'border-white/[0.08] bg-[#070707] hover:border-white/20 hover:bg-white/[0.02] planner-card-addon'
                      }`}
                    >
                      <div className="flex items-center gap-3 pr-2">
                        <div
                          className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors shrink-0 ${
                            isChecked
                              ? 'bg-white border-white text-black'
                              : 'border-zinc-600 bg-zinc-900'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-white leading-snug">
                          {addon.name}
                        </span>
                      </div>

                      <span className="font-mono text-xs text-zinc-400 shrink-0">
                        {addon.priceLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. YOUR RUNNING BILL */}
            <div className="pt-6 border-t border-white/[0.08] space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase text-zinc-500 tracking-wider font-semibold">
                  YOUR RUNNING BILL
                </span>
                <span className="font-mono text-xs text-zinc-500">
                  {studentSelectedAddons.length === 0
                    ? 'Base only'
                    : `Base + ${studentSelectedAddons.length} add-on${
                        studentSelectedAddons.length > 1 ? 's' : ''
                      }`}
                </span>
              </div>

              {/* Itemized breakdown */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-300">
                  <span>Base Plan</span>
                  <span>{formatPHP(STUDENT_BASE_DETAILS.price)}</span>
                </div>

                {studentSelectedAddons.map((id) => {
                  const item = STUDENT_ADDONS.find((a) => a.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="flex items-center justify-between text-zinc-400">
                      <span>+ {item.name}</span>
                      <span>+{formatPHP(item.price)}</span>
                    </div>
                  );
                })}
              </div>

              {/* Total Estimate */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                  TOTAL ESTIMATE
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                  {formatPHP(studentTotal)}
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setStudentModalOpen(true)}
                  className="w-full py-4 px-6 rounded-sm text-xs font-mono font-bold uppercase tracking-widest text-black bg-white hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-[0.99]"
                >
                  SEND INQUIRY
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            PROFESSIONAL PLANNER INTERFACE (Screenshots 2, 3, 4, 5)
        ========================================================================= */}
        {plannerMode === 'professional' && !proSubmitted && (
          <div className="relative z-10 space-y-10 animate-in fade-in duration-200">
            {/* STEP 01: FEATURES NEEDED (Screenshot 4) */}
            {proStep === 1 && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-white/[0.08] pb-5">
                  <h3 className="font-mono text-xs uppercase text-zinc-300 tracking-wider font-semibold">
                    01 / FEATURES NEEDED — Select all that apply
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Choose the services you need. You can select multiple.
                  </p>
                </div>

                {/* 2x5 Grid of Service Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
                  {PROFESSIONAL_SERVICES.map((srv) => {
                    const isSelected = proServices.includes(srv.id);
                    return (
                      <div
                        key={srv.id}
                        onClick={() => toggleProService(srv.id)}
                        className={`cursor-pointer min-h-[140px] p-5 rounded-md border flex flex-col items-center justify-center text-center transition-all duration-150 select-none ${
                          isSelected
                            ? 'border-white bg-white/[0.05] shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                            : 'border-white/[0.08] bg-[#070707] hover:border-white/20 hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className={isSelected ? 'text-white' : 'text-zinc-400'}>
                          {getServiceIcon(srv.iconType)}
                        </div>
                        <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white leading-snug">
                          {srv.title}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Bar: NEXT -> */}
                <div className="pt-8 border-t border-white/[0.08] flex justify-end">
                  <button
                    type="button"
                    onClick={() => setProStep(2)}
                    disabled={proServices.length === 0}
                    className={`px-8 py-3 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                      proServices.length > 0
                        ? 'bg-white text-black hover:bg-zinc-200 shadow'
                        : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    }`}
                  >
                    NEXT &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* STEP 02: PROJECT BUDGET RANGE (Screenshot 5) */}
            {proStep === 2 && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-white/[0.08] pb-5">
                  <h3 className="font-mono text-xs uppercase text-zinc-300 tracking-wider font-semibold">
                    02 / PROJECT BUDGET RANGE
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Select the budget range that best fits your project. This helps us plan realistically.
                  </p>
                </div>

                {/* 3 Budget Cards Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {PROFESSIONAL_BUDGETS.map((b) => {
                    const isSelected = proBudget === b.id;
                    return (
                      <div
                        key={b.id}
                        onClick={() => setProBudget(b.id)}
                        className={`cursor-pointer relative p-7 rounded-md border flex flex-col justify-between min-h-[170px] transition-all duration-150 select-none ${
                          isSelected
                            ? 'border-white bg-white/[0.04] shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                            : 'border-white/[0.08] bg-[#070707] hover:border-white/20 hover:bg-white/[0.02]'
                        }`}
                      >
                        {b.isPopular && (
                          <div className="absolute -top-3 right-4 bg-white text-black px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest rounded-sm shadow">
                            MOST POPULAR
                          </div>
                        )}

                        <span className="font-mono text-xs uppercase text-zinc-500 tracking-widest font-semibold block">
                          {b.tier}
                        </span>

                        <div className="my-3">
                          <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            {b.range}
                          </span>
                        </div>

                        <p className="text-xs text-zinc-400 font-sans italic">
                          {b.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Bar: <- BACK and NEXT -> */}
                <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setProStep(1)}
                    className="px-6 py-3 rounded-sm text-xs font-mono font-medium uppercase tracking-wider text-zinc-300 border border-white/10 hover:border-white/20 bg-transparent transition-all"
                  >
                    &larr; BACK
                  </button>
                  <button
                    type="button"
                    onClick={() => setProStep(3)}
                    className="px-8 py-3 rounded-sm text-xs font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow"
                  >
                    NEXT &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* STEP 03: TARGET TIMELINE (Screenshot 3) */}
            {proStep === 3 && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-white/[0.08] pb-5">
                  <h3 className="font-mono text-xs uppercase text-zinc-300 tracking-wider font-semibold">
                    03 / TARGET TIMELINE
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    How soon do you need this completed? Be realistic — we'll work with your schedule.
                  </p>
                </div>

                {/* 3 Timeline Cards Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {PROFESSIONAL_TIMELINES.map((t) => {
                    const isSelected = proTimeline === t.id;
                    return (
                      <div
                        key={t.id}
                        onClick={() => setProTimeline(t.id)}
                        className={`cursor-pointer p-8 rounded-md border flex flex-col items-center justify-center text-center min-h-[160px] transition-all duration-150 select-none ${
                          isSelected
                            ? 'border-white bg-white/[0.04] shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                            : 'border-white/[0.08] bg-[#070707] hover:border-white/20 hover:bg-white/[0.02]'
                        }`}
                      >
                        <h4 className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-white mb-2">
                          {t.title}
                        </h4>
                        <span className="text-xs text-zinc-400 font-sans">
                          {t.duration}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Bar: <- BACK and NEXT -> */}
                <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setProStep(2)}
                    className="px-6 py-3 rounded-sm text-xs font-mono font-medium uppercase tracking-wider text-zinc-300 border border-white/10 hover:border-white/20 bg-transparent transition-all"
                  >
                    &larr; BACK
                  </button>
                  <button
                    type="button"
                    onClick={() => setProStep(4)}
                    className="px-8 py-3 rounded-sm text-xs font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow"
                  >
                    NEXT &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* STEP 04: PROJECT DESCRIPTION (Screenshot 2) */}
            {proStep === 4 && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-white/[0.08] pb-5">
                  <h3 className="font-mono text-xs uppercase text-zinc-300 tracking-wider font-semibold">
                    04 / PROJECT DESCRIPTION
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Tell us about your project in your own words. The more detail, the better we can prepare for our call.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Field 1: Project / Business Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="pro-name"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                    >
                      PROJECT / BUSINESS NAME
                    </label>
                    <input
                      id="pro-name"
                      type="text"
                      placeholder="e.g. Bloom Bakery, TechStartup PH"
                      value={proProjectName}
                      onChange={(e) => setProProjectName(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm bg-[#060606] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-xs sm:text-sm font-sans transition-colors"
                    />
                  </div>

                  {/* Field 2: Project Description */}
                  <div className="space-y-2">
                    <label
                      htmlFor="pro-desc"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                    >
                      PROJECT DESCRIPTION *
                    </label>
                    <textarea
                      id="pro-desc"
                      rows={4}
                      required
                      placeholder="Describe your project: What is it? Who is it for? What do you want users to do? Any inspirations or references?"
                      value={proDescription}
                      onChange={(e) => setProDescription(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm bg-[#060606] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-xs sm:text-sm font-sans transition-colors resize-y"
                    />
                  </div>

                  {/* Field 3: Key Goals / Deliverables */}
                  <div className="space-y-2">
                    <label
                      htmlFor="pro-goals"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                    >
                      KEY GOALS / DELIVERABLES
                    </label>
                    <textarea
                      id="pro-goals"
                      rows={3}
                      placeholder="e.g. Increase online sales, build brand presence, showcase portfolio work..."
                      value={proGoals}
                      onChange={(e) => setProGoals(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm bg-[#060606] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-xs sm:text-sm font-sans transition-colors resize-y"
                    />
                  </div>
                </div>

                {/* Bottom Bar: <- BACK and NEXT -> */}
                <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setProStep(3)}
                    className="px-6 py-3 rounded-sm text-xs font-mono font-medium uppercase tracking-wider text-zinc-300 border border-white/10 hover:border-white/20 bg-transparent transition-all"
                  >
                    &larr; BACK
                  </button>
                  <button
                    type="button"
                    onClick={() => setProStep(5)}
                    className="px-8 py-3 rounded-sm text-xs font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow"
                  >
                    NEXT &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* STEP 05: CONTACT DETAILS & SUBMIT */}
            {proStep === 5 && (
              <form onSubmit={handleProSubmit} className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-white/[0.08] pb-5">
                  <h3 className="font-mono text-xs uppercase text-zinc-300 tracking-wider font-semibold">
                    05 / CONTACT DETAILS & SUBMIT
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Where should our engineering leads send your project proposal and timeline breakdown?
                  </p>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="pro-contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="pro-contact-name"
                      required
                      type="text"
                      placeholder="e.g. Christian Dela Cruz"
                      value={proContact.name}
                      onChange={(e) => setProContact({ ...proContact, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[#060606] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-xs sm:text-sm font-sans transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="pro-contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                    >
                      WORK EMAIL *
                    </label>
                    <input
                      id="pro-contact-email"
                      required
                      type="email"
                      placeholder="christian@company.com"
                      value={proContact.email}
                      onChange={(e) => setProContact({ ...proContact, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[#060606] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-xs sm:text-sm font-sans transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="pro-contact-handle"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                  >
                    PHONE / TELEGRAM / DISCORD (OPTIONAL)
                  </label>
                  <input
                    id="pro-contact-handle"
                    type="text"
                    placeholder="e.g. +63 917 123 4567 or @telegram_handle"
                    value={proContact.handle}
                    onChange={(e) => setProContact({ ...proContact, handle: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-[#060606] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-xs sm:text-sm font-sans transition-colors"
                  />
                </div>

                {/* Scope Summary Card */}
                <div className="p-5 rounded-md bg-[#060606] border border-white/10 space-y-3 font-mono text-xs">
                  <span className="text-zinc-500 uppercase tracking-widest block font-bold">
                    CONFIGURATION SUMMARY
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proServices.map((sid) => {
                      const item = PROFESSIONAL_SERVICES.find((s) => s.id === sid);
                      return (
                        <span key={sid} className="px-2 py-0.5 rounded bg-white/10 text-white">
                          {item?.title}
                        </span>
                      );
                    })}
                  </div>
                  <div className="pt-2 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-zinc-400">
                    <span>
                      Budget:{' '}
                      <strong className="text-white">
                        {PROFESSIONAL_BUDGETS.find((b) => b.id === proBudget)?.range}
                      </strong>
                    </span>
                    <span>
                      Timeline:{' '}
                      <strong className="text-white">
                        {PROFESSIONAL_TIMELINES.find((t) => t.id === proTimeline)?.title} (
                        {PROFESSIONAL_TIMELINES.find((t) => t.id === proTimeline)?.duration})
                      </strong>
                    </span>
                  </div>
                </div>

                {/* Bottom Bar: <- BACK and SUBMIT INQUIRY */}
                <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setProStep(4)}
                    className="px-6 py-3 rounded-sm text-xs font-mono font-medium uppercase tracking-wider text-zinc-300 border border-white/10 hover:border-white/20 bg-transparent transition-all"
                  >
                    &larr; BACK
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-sm text-xs font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-2"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Confirmation screen when Professional inquiry is submitted */}
        {plannerMode === 'professional' && proSubmitted && (
          <div className="relative z-10 py-12 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Inquiry Sent Successfully
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Thank you, {proContact.name || 'Partner'}. Your project specifications have been logged. An ELVORA engineering strategist will reach out within 24 hours.
            </p>
            <div className="pt-6">
              <button
                type="button"
                onClick={() => {
                  setProSubmitted(false);
                  setProStep(1);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white/10 hover:bg-white/15 text-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Configure Another Project</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          STUDENT INQUIRY MODAL (When clicking SEND INQUIRY in Student mode)
      ========================================================================= */}
      {studentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-lg w-full bg-[#0A0A0A] border border-white/20 rounded-lg p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setStudentModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {studentSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Student Inquiry Sent!
                </h3>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  Thank you, {studentForm.name}. We've received your Student Starter Package inquiry for{' '}
                  <strong className="text-white">{formatPHP(studentTotal)}</strong>. We'll contact you shortly via email.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStudentSubmitted(false);
                    setStudentModalOpen(false);
                  }}
                  className="px-6 py-2 rounded-sm bg-white text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-zinc-200"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleStudentSubmit} className="space-y-5">
                <div>
                  <span className="font-mono text-xs uppercase text-zinc-400 tracking-wider font-semibold">
                    STUDENT STARTER INQUIRY
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                    Complete Your Inquiry
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-mono">
                    Estimated Bill: <span className="text-white font-bold">{formatPHP(studentTotal)}</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="stu-name"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="stu-name"
                      required
                      type="text"
                      placeholder="e.g. Maria Santos"
                      value={studentForm.name}
                      onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm bg-[#050505] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-xs font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="stu-school"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                    >
                      SCHOOL / UNIVERSITY *
                    </label>
                    <input
                      id="stu-school"
                      required
                      type="text"
                      placeholder="e.g. UP Diliman, UST, DLSU, Ateneo..."
                      value={studentForm.school}
                      onChange={(e) => setStudentForm({ ...studentForm, school: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm bg-[#050505] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-xs font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="stu-email"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="stu-email"
                      required
                      type="email"
                      placeholder="maria@student.edu.ph"
                      value={studentForm.email}
                      onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm bg-[#050505] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-xs font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="stu-notes"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                    >
                      PROJECT BRIEF / DEADLINE NOTES
                    </label>
                    <textarea
                      id="stu-notes"
                      rows={3}
                      placeholder="Tell us about your thesis / portfolio / capstone project needs..."
                      value={studentForm.notes}
                      onChange={(e) => setStudentForm({ ...studentForm, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm bg-[#050505] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white text-xs font-sans resize-y"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-sm text-xs font-mono font-bold uppercase tracking-widest text-black bg-white hover:bg-zinc-200 transition-colors shadow"
                  >
                    CONFIRM &amp; SEND INQUIRY
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
