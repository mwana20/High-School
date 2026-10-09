import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { HERO_CAMPUS_IMG, SPEECH_DAY_IMG, STUDENT_LIFE_IMG, ACADEMICS_LAB_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Eye, Calendar, Tag, Filter } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { gallery, openLightbox } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Academics',
    'Students',
    'Sports',
    'Speech Day',
    'Events',
    'Campus',
  ];

  const filteredItems = selectedCategory === 'All'
    ? gallery
    : gallery.filter((item) => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'Gallery' }]} />

      {/* Hero Section */}
      <section className="relative py-28 bg-stone-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100"
          style={{ backgroundImage: `url(${SPEECH_DAY_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#071728]/70 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-sans font-semibold">
              Visual Archive & Memories
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              Life at Mwanaweika
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              Capturing the joyous milestones, diligent laboratory studies, vibrant athletic competitions, and dignified Speech Day assemblies that define our secondary school in Mukono.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Pills (Functional Interactive Tabs) */}
      <section className="py-8 bg-white border-b border-stone-200 sticky top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0b2545] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(gallery.indexOf(item))}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute top-2.5 left-2.5 bg-[#0b2545]/85 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                  {item.category}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-editorial text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1 font-sans">
                    {item.caption}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span>{item.date}</span>
                  <span className="text-amber-700 font-semibold group-hover:underline">
                    View Photo →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
