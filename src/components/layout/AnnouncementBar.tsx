import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Bell, ArrowRight, X } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { announcement, navigate } = useSchool();
  const [dismissed, setDismissed] = useState(false);

  if (!announcement.isActive || dismissed) return null;

  return (
    <div className="bg-[#0b2545] text-white text-xs sm:text-sm py-2.5 px-4 border-b border-amber-500/20 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 shrink-0">
            <Bell className="w-3 h-3 announcement-bell" />
          </span>
          <p className="font-medium truncate text-stone-200">
            <span className="text-amber-400 font-semibold uppercase tracking-wider mr-2 text-[11px] hidden sm:inline">Notice:</span>
            {announcement.message}
          </p>
          {announcement.linkUrl && announcement.linkText && (
            <button
              onClick={() => navigate(announcement.linkUrl!)}
              className="inline-flex items-center gap-1 font-semibold text-amber-300 hover:text-amber-200 transition-colors shrink-0 underline decoration-amber-400/50 underline-offset-2 ml-1 cursor-pointer"
            >
              <span>{announcement.linkText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-stone-400 hover:text-white p-1 rounded transition-colors shrink-0 cursor-pointer"
          aria-label="Dismiss notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
