import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { HERO_CAMPUS_IMG, ACADEMICS_LAB_IMG, STUDENT_LIFE_IMG, SPEECH_DAY_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import {
  Building2,
  Cpu,
  FlaskConical,
  BookOpen,
  Bed,
  Utensils,
  Trophy,
  Trees,
  CheckCircle,
  Eye,
  ArrowRight
} from 'lucide-react';

export const FacilitiesPage: React.FC = () => {
  const { navigate, facilities, openLightbox } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'academic' | 'residential' | 'sports' | 'welfare'>('all');

  const filteredFacilities = selectedCategory === 'all'
    ? facilities
    : facilities.filter((f) => f.category === selectedCategory);

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'Facilities' }]} />

      {/* Hero Section */}
      <section className="relative py-28 bg-stone-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100"
          style={{ backgroundImage: `url(${HERO_CAMPUS_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#071728]/70 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-sans font-semibold">
              Campus Infrastructure & Facilities
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              An Environment Designed for Learning and Growth
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              Spanning 18 acres in Mukono, Uganda, our physical campus is purpose-engineered to stimulate academic curiosity, physical vigor, spiritual contemplation, and community well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Category Filter Buttons */}
      <section className="py-8 bg-white border-b border-stone-200 sticky top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: 'all', label: 'All Facilities' },
            { id: 'academic', label: 'Academic & Labs' },
            { id: 'residential', label: 'Dormitories & Living' },
            { id: 'sports', label: 'Sports Complex' },
            { id: 'welfare', label: 'Dining, Hall & Gardens' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#0b2545] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Facilities Showcase Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredFacilities.map((facility, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={facility.id}
              className={`bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                isReversed ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Media Column */}
              <div className={`lg:col-span-6 space-y-3 ${isReversed ? 'lg:col-start-7' : ''}`}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-md group">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0b2545]/90 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                    {facility.category}
                  </div>
                </div>

                {/* Sub thumbnails if any */}
                <div className="grid grid-cols-2 gap-3">
                  {facility.gallery.slice(0, 2).map((imgUrl, gIdx) => (
                    <div
                      key={gIdx}
                      onClick={() => openLightbox(0)}
                      className="relative aspect-video rounded-xl overflow-hidden border border-stone-200 cursor-pointer group"
                    >
                      <img
                        src={imgUrl}
                        alt={`${facility.title} detail`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                        <Eye className="w-4 h-4 mr-1" /> View Larger
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Information Column */}
              <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:col-start-1' : ''}`}>
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-800 font-bold">
                  <span>Mwanaweika Infrastructure</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
                  {facility.title}
                </h3>
                <div className="w-12 h-1 bg-amber-600 rounded-full" />

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
                  {facility.fullDescription}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block">
                    Key Features & Specifications:
                  </span>
                  <div className="space-y-1.5">
                    {facility.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* Campus Visit Banner */}
      <section className="py-16 bg-[#0b2545] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold">
            Schedule a Guided Campus Tour in Mukono
          </h2>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto">
            We invite parents and prospective scholars to visit our campus Monday through Saturday to tour our laboratories, dormitories, and dining halls.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
            >
              Book Campus Tour / Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
