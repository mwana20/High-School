import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { HERO_CAMPUS_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { VoicesOfMwanaweika } from '../components/common/VoicesOfMwanaweika';
import { LeadershipMember } from '../types';
import {
  ShieldCheck,
  Award,
  GraduationCap,
  Quote,
  X,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react';

export const LeadershipPage: React.FC = () => {
  const { leadership, selectedLeader, setSelectedLeader, dormitories } = useSchool();
  const [filterCat, setFilterCat] = useState<'all' | 'executive' | 'academic' | 'welfare' | 'administrative'>('all');

  const filteredLeaders = filterCat === 'all'
    ? leadership
    : leadership.filter((l) => l.category === filterCat);

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'School Leadership' }]} />

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
              Governance, Guidance & Integrity
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              Leadership That Serves With Purpose
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              Our Board of Governors, school executive directors, heads of academic departments, and house wardens bring decades of proven educational stewardship to Mwanaweika High School.
            </p>
          </div>
        </div>
      </section>

      {/* Director & Head Teacher Top Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Director Profile */}
        {leadership[0] && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="relative inline-block rounded-2xl overflow-hidden shadow-md border-2 border-amber-500">
                <img
                  src={leadership[0].image}
                  alt={leadership[0].name}
                  referrerPolicy="no-referrer"
                  className="w-full max-w-xs h-80 object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-800 block">
                Board of Governors & School Director
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
                {leadership[0].name}
              </h2>
              <span className="text-xs font-semibold text-stone-500 block">
                {leadership[0].qualifications}
              </span>
              <div className="w-12 h-1 bg-amber-600 rounded-full" />
              <p className="font-serif italic text-lg text-amber-950 border-l-4 border-amber-600 pl-4 py-1">
                &ldquo;{leadership[0].quote}&rdquo;
              </p>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {leadership[0].bio}
              </p>
              {leadership[0].fullMessage && (
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 pt-3">
                  {leadership[0].fullMessage}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Head Teacher Profile */}
        {leadership[1] && (
          <div className="bg-[#0b2545] text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="relative inline-block rounded-2xl overflow-hidden shadow-md border-2 border-amber-400">
                <img
                  src={leadership[1].image}
                  alt={leadership[1].name}
                  referrerPolicy="no-referrer"
                  className="w-full max-w-xs h-80 object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-300 block">
                Chief Administrator
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white">
                {leadership[1].name}
              </h2>
              <span className="text-xs font-semibold text-stone-300 block">
                {leadership[1].qualifications}
              </span>
              <div className="w-12 h-1 bg-amber-400 rounded-full" />
              <p className="font-serif italic text-lg text-amber-200 border-l-4 border-amber-400 pl-4 py-1">
                &ldquo;{leadership[1].quote}&rdquo;
              </p>
              <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
                {leadership[1].bio}
              </p>
            </div>
          </div>
        )}

      </section>

      {/* Leadership Directory Grid */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Staff Directory
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
              School Administrators & Heads of Departments
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.slice(2).map((leader) => (
              <div
                key={leader.id}
                className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col group"
              >
                <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">
                      {leader.role}
                    </span>
                    <h3 className="font-editorial text-xl font-bold leading-tight">
                      {leader.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs text-stone-500 font-medium block mb-2">
                      {leader.qualifications}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans line-clamp-3">
                      {leader.bio}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedLeader(leader)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-[#0b2545] bg-white hover:bg-[#0b2545] hover:text-white border border-stone-300 rounded-xl transition-all cursor-pointer text-center"
                  >
                    View Detailed Profile & Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dormitory Wardens Directory */}
      <section className="py-20 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Residential Guardians
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
              Boarding Wardens & Matrons
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-stone-600 text-sm leading-relaxed">
              Our residential staff reside on campus, providing 24-hour parental care, pastoral counsel, cleanliness supervision, and nighttime welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dormitories.map((dorm) => (
              <div
                key={dorm.id}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3"
              >
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800 block">
                  {dorm.name} ({dorm.gender})
                </span>
                <h4 className="font-editorial text-xl font-bold text-stone-900">
                  {dorm.wardenName}
                </h4>
                <p className="text-xs text-stone-500 font-medium">
                  {dorm.wardenTitle}
                </p>
                <div className="pt-2 border-t border-stone-100 text-xs text-stone-600 leading-relaxed">
                  Responsible for health logs, evening roll calls, and pastoral guidance in {dorm.name}.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices of Mwanaweika (Student Leaders) */}
      <VoicesOfMwanaweika />

      {/* Profile Detail Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={selectedLeader.image}
                alt={selectedLeader.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-amber-500 shadow-md"
              />
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
                  {selectedLeader.role}
                </span>
                <h3 className="font-editorial text-2xl font-bold text-stone-900">
                  {selectedLeader.name}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  {selectedLeader.qualifications}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-stone-700 text-sm leading-relaxed font-sans">
              {selectedLeader.quote && (
                <p className="font-serif italic text-base text-amber-950 border-l-4 border-amber-600 pl-4 py-1">
                  &ldquo;{selectedLeader.quote}&rdquo;
                </p>
              )}
              <p>{selectedLeader.bio}</p>
              {selectedLeader.fullMessage && (
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 leading-relaxed">
                  <span className="font-bold text-stone-900 block mb-1">Official Message:</span>
                  {selectedLeader.fullMessage}
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Mwanaweika High School Administration</span>
              <button
                onClick={() => setSelectedLeader(null)}
                className="px-4 py-2 bg-[#0b2545] text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
