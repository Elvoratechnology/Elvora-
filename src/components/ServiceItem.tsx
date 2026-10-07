import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItemData } from '../data/services';

interface ServiceItemProps {
  service: ServiceItemData;
  index: number;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-12 items-start gap-6 py-7 border-t border-white/[0.07] last:border-b hover:bg-white/[0.015] transition-colors -mx-4 px-4 rounded-sm">

      {/* Number */}
      <div className="md:col-span-1">
        <span className="font-mono text-[12px] text-[#6B6B6B]">{service.number}</span>
      </div>

      {/* Title */}
      <div className="md:col-span-3">
        <h3 className="font-heading text-lg font-semibold text-white">
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <div className="md:col-span-6">
        <p className="text-sm text-[#6B6B6B] leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Arrow */}
      <div className="md:col-span-2 flex justify-end items-start pt-0.5">
        <ArrowUpRight className="w-4 h-4 text-[#444] group-hover:text-white transition-colors duration-150" />
      </div>
    </div>
  );
};
