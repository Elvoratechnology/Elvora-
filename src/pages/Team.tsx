import React from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamMembers';
import { SectionHeading } from '../components/SectionHeading';

export const Team: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 sm:py-28 relative">
      <SectionHeading
        label="[ OPERATIVES & ARCHITECTS // ROSTER ]"
        heading="Agile engineering unit. Uncompromised craft."
        description="ELVORA is an agile, multi-disciplinary engineering studio. We operate without bloated management hierarchies—direct collaboration between builders and founders."
      />

      {/* Team grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4">
        {TEAM_MEMBERS.map((member, idx) => (
          <div
            key={member.id}
            className="cyber-card cyber-corners p-8 rounded-sm bg-[#0A0A0C]/90 border border-white/10 group transition-all duration-300 hover:border-cyan-400/40"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
              {/* Avatar placeholder with cyber frame */}
              <div className="w-12 h-12 rounded-sm bg-[#111116] border border-cyan-400/30 flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.15)]">
                <span className="font-mono text-sm font-bold text-cyan-300">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>

              <div className="text-right">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
                  CLEARANCE
                </span>
                <span className="font-mono text-[11px] text-emerald-400 font-semibold tracking-wider">
                  LVL-0{idx + 3} // ACTIVE
                </span>
              </div>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
              {member.name}
            </h3>
            <p className="font-mono text-[12px] text-cyan-400/80 mb-4">{member.role}</p>
            <p className="text-[14px] text-zinc-400 leading-relaxed mb-6">{member.shortBio}</p>

            {member.specialties.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {member.specialties.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] text-zinc-300 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-sm tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA Card */}
      <div className="mt-20 cyber-card cyber-corners rounded-sm p-10 sm:p-12 bg-[#0A0A0C]/90 border border-white/10 max-w-2xl">
        <div className="inline-flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>CAREER PROTOCOL</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
          Interested in engineering with ELVORA?
        </h2>
        <p className="text-[14px] text-zinc-400 leading-relaxed mb-6">
          We are always actively searching for exceptional systems architects, frontend artists, and full-stack builders who prioritize technical excellence.
        </p>
        <a
          href="/contact.html"
          className="cyber-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-sm text-xs font-mono font-bold tracking-wider text-black"
        >
          <span>TRANSMIT RESUME & PORTFOLIO</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
