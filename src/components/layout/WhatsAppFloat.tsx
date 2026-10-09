import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const { contactInfo } = useSchool();

  return (
    <a
      href={contactInfo.socials.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Mwanaweika High School Admissions on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 rounded-full shadow-xl shadow-emerald-950/20 transition-all transform hover:scale-105 group"
    >
      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
        <MessageCircle className="w-5 h-5 fill-current" />
      </div>
      <div className="hidden sm:block text-left pr-1">
        <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-200 block leading-tight">
          Admissions Desk
        </span>
        <span className="text-xs font-semibold block leading-tight">
          Chat on WhatsApp
        </span>
      </div>
    </a>
  );
};
