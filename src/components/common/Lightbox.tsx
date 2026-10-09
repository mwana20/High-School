import React, { useEffect } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

export const Lightbox: React.FC = () => {
  const { activeLightboxIndex, closeLightbox, gallery, openLightbox } = useSchool();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        openLightbox((activeLightboxIndex - 1 + gallery.length) % gallery.length);
      }
      if (e.key === 'ArrowRight') {
        openLightbox((activeLightboxIndex + 1) % gallery.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, gallery, closeLightbox, openLightbox]);

  if (activeLightboxIndex === null || !gallery[activeLightboxIndex]) return null;

  const currentItem = gallery[activeLightboxIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white pb-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-sans font-semibold">
            {currentItem.category}
          </span>
          <span className="text-stone-500 text-xs">·</span>
          <span className="text-stone-400 text-xs">
            {activeLightboxIndex + 1} of {gallery.length}
          </span>
        </div>
        <button
          onClick={closeLightbox}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close image lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Area with Previous/Next Controls */}
      <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full overflow-hidden my-auto">
        <button
          onClick={() => openLightbox((activeLightboxIndex - 1 + gallery.length) % gallery.length)}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-amber-600 text-white transition-all cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={currentItem.image}
          alt={currentItem.title}
          referrerPolicy="no-referrer"
          className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl select-none"
        />

        <button
          onClick={() => openLightbox((activeLightboxIndex + 1) % gallery.length)}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-amber-600 text-white transition-all cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption & Metadata Footer */}
      <div className="max-w-4xl mx-auto w-full text-center pt-4 pb-2">
        <h3 className="font-crest text-lg sm:text-xl text-white font-medium">
          {currentItem.title}
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl mx-auto font-sans leading-relaxed">
          {currentItem.caption}
        </p>
        <div className="flex items-center justify-center gap-4 mt-2 text-xs text-amber-300/80">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{currentItem.date}</span>
          </span>
          <span>·</span>
          <span>Mwanaweika High School, Mukono</span>
        </div>
      </div>
    </div>
  );
};
