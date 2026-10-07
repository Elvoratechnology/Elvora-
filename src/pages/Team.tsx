import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamMembers';

export const Team: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
      {/* Intro */}
      <div className="max-w-2xl mb-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6B6B6B] mb-5">
          The team
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Small team. Serious work.
        </h1>
        <p className="text-[15px] text-[#6B6B6B] leading-relaxed">
          ELVORA is a small studio. We stay focused, communicate directly, and stay deeply involved in every project we take on.
        </p>
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-px bg-white/[0.07]">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.id} className="group bg-[#0C0C0C] p-8 hover:bg-[#111111] transition-colors">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-sm bg-[#1A1A1A] border border-white/[0.07] flex items-center justify-center mb-6">
              <span className="font-heading text-sm font-bold text-[#888]">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </span>
            </div>

            <h3 className="font-heading text-lg font-semibold text-white mb-0.5">{member.name}</h3>
            <p className="font-mono text-[12px] text-[#888] mb-4">{member.role}</p>
            <p className="text-[13px] text-[#6B6B6B] leading-relaxed mb-5">{member.shortBio}</p>

            {member.specialties.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((skill) => (
                  <span key={skill} className="font-mono text-[11px] text-[#888] border border-white/[0.07] px-2 py-0.5 rounded-sm">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 border-t border-white/[0.07] pt-16 max-w-xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6B6B6B] mb-4">
          Join the team
        </p>
        <h2 className="font-heading text-2xl font-bold text-white mb-4">
          Interested in working with us?
        </h2>
        <p className="text-[14px] text-[#6B6B6B] leading-relaxed mb-6">
          We're always looking for thoughtful designers and developers who care about craft. If that's you, reach out.
        </p>
        <a
          href="/contact.html"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-black bg-white px-5 py-2.5 rounded-sm hover:bg-[#E8E8E8] transition-colors"
        >
          <span>Get in touch</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
