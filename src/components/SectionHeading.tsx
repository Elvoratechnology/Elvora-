import React from 'react';

interface SectionHeadingProps {
  label?: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  heading,
  description,
  align = 'left',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-14 ${isCenter ? 'text-center' : ''}`}>
      {label && (
        <p className={`font-mono text-[11px] uppercase tracking-[0.2em] text-[#6B6B6B] mb-4 ${isCenter ? '' : ''}`}>
          {label}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight">
        {heading}
      </h2>
      {description && (
        <p className={`mt-4 text-base text-[#6B6B6B] leading-relaxed ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
