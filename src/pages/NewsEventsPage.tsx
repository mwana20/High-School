import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { SPEECH_DAY_IMG, STUDENT_LIFE_IMG, ACADEMICS_LAB_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { NewsEvent } from '../types';
import {
  Calendar,
  MapPin,
  Tag,
  ArrowRight,
  Sparkles,
  Trophy,
  Users,
  X,
  Clock
} from 'lucide-react';

export const NewsEventsPage: React.FC = () => {
  const { newsEvents, navigate, selectedNewsEvent, setSelectedNewsEvent } = useSchool();
  const [filterType, setFilterType] = useState<string>('all');

  const filteredEvents = filterType === 'all'
    ? newsEvents
    : newsEvents.filter((item) => item.type === filterType);

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'News & Events' }]} />

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
              Chronicle of Campus Milestones
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              Life, Events & Achievements
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              Stay abreast of official term dates, Speech Day arrangements, Visitation Days, sports fixtures, and national UNEB achievements at Mwanaweika High School.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Event Banner Cards */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Speech Day Banner */}
            <div
              onClick={() => navigate('/speech-day')}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#0b2545] to-[#123863] text-white shadow-md hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block mb-1">
                  Flagship Annual Ceremony
                </span>
                <h3 className="font-editorial text-2xl font-bold mb-2">
                  Speech Day Experience
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Academic distinctions, guest of honour address, brass band fanfare, and prize giving on our main grounds.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-300 font-semibold">
                <span>Explore Highlights</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Visitation Day Banner */}
            <div
              onClick={() => navigate('/visitation-day')}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-900 to-amber-950 text-white shadow-md hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white text-amber-900 flex items-center justify-center font-bold mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block mb-1">
                  Parent Engagement
                </span>
                <h3 className="font-editorial text-2xl font-bold mb-2">
                  Visitation Day Guide
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Term II visitation schedules, parent-teacher consultations, welfare guidelines, and visiting hours.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-300 font-semibold">
                <span>Parent Guidelines</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Sports Day Banner */}
            <div
              onClick={() => navigate('/sports-day')}
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 text-white shadow-md hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold mb-4">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block mb-1">
                  Inter-House Championship
                </span>
                <h3 className="font-editorial text-2xl font-bold mb-2">
                  Sports Day Championship
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Kabalega, Rwenzori, Nile, and Victoria houses competing in football, netball, volleyball, and athletics.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-300 font-semibold">
                <span>View Results & Teams</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: 'all', label: 'All Updates' },
            { id: 'speech_day', label: 'Speech Day' },
            { id: 'visitation_day', label: 'Visitation Day' },
            { id: 'sports_day', label: 'Sports Day' },
            { id: 'news', label: 'School News & UNEB' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterType === tab.id
                  ? 'bg-[#0b2545] text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* News & Events Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <img
                  src={evt.image}
                  alt={evt.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0b2545]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {evt.type.replace('_', ' ')}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{evt.formattedDate}</span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  {evt.location && (
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-1">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      <span>{evt.location}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-stone-600 mt-3 line-clamp-3 leading-relaxed font-sans">
                    {evt.summary}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedNewsEvent(evt)}
                  className="w-full py-2.5 px-3 bg-stone-50 hover:bg-[#0b2545] hover:text-white text-[#0b2545] text-xs font-semibold rounded-xl border border-stone-200 transition-all cursor-pointer text-center"
                >
                  Read Full Notice & Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedNewsEvent && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedNewsEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-stone-100">
              <img
                src={selectedNewsEvent.image}
                alt={selectedNewsEvent.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-amber-800 font-semibold">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedNewsEvent.formattedDate}</span>
                </span>
                {selectedNewsEvent.location && (
                  <>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{selectedNewsEvent.location}</span>
                    </span>
                  </>
                )}
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                {selectedNewsEvent.title}
              </h2>

              <div className="w-12 h-1 bg-amber-600 rounded-full my-2" />

              <div className="prose prose-stone text-sm leading-relaxed text-stone-700 space-y-4 pt-2">
                <p>{selectedNewsEvent.content}</p>
                <p className="text-xs text-stone-500 border-t border-stone-100 pt-3">
                  For further clarifications regarding this event or announcement, kindly reach the School Administration or Head Teacher&apos;s office via phone or visit the school in Mukono.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Office of the Head Teacher</span>
              <button
                onClick={() => setSelectedNewsEvent(null)}
                className="px-4 py-2 bg-[#0b2545] text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
