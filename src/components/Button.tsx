import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  icon?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  icon = false,
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-[12px]',
    md: 'px-5 py-2.5 text-[13px]',
    lg: 'px-7 py-3.5 text-[13px]',
  }[size];

  const variantClasses = {
    primary: 'btn-primary bg-white text-black hover:bg-[#E8E8E8]',
    secondary: 'btn-secondary bg-[#1A1A1A] text-white border border-white/[0.1] hover:bg-[#222]',
    outline: 'btn-outline bg-transparent text-white border border-white/[0.15] hover:border-white/30 hover:bg-white/[0.04]',
  }[variant];

  const baseClasses = `group inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors duration-150 active:scale-[0.98] ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        <span>{children}</span>
        {icon && <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-px group-hover:-translate-y-px" />}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      <span>{children}</span>
      {icon && <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-px group-hover:-translate-y-px" />}
    </button>
  );
};
