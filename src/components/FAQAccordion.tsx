import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../data/faqs';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-white/[0.07]">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              type="button"
              className="w-full flex items-center justify-between py-5 text-left gap-8 group"
              aria-expanded={isOpen}
            >
              <span className={`text-[15px] font-medium transition-colors ${isOpen ? 'text-white' : 'text-[#B0B0B0] group-hover:text-white'}`}>
                {item.question}
              </span>
              <span className="shrink-0 text-[#6B6B6B] group-hover:text-white transition-colors">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>

            {isOpen && (
              <div className="pb-5 pr-10">
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
