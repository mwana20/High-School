import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { STUDENT_LIFE_IMG, HERO_CAMPUS_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import {
  Trophy,
  Activity,
  Users,
  Award,
  Zap,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  ShieldAlert
} from 'lucide-react';

export const SportsDayPage: React.FC = () => {
  const { navigate } = useSchool();

  const sportsStats = [
    { label: 'Competing Houses', val: '4 Houses', desc: 'Kabalega, Rwenzori, Victoria, Nile' },
    { label: 'Track & Field Events', val: '24 Events', desc: '100m to 1500m, Relays, Javelin, Jump' },
    { label: 'Student Athletes', val: '650+ Competitors', desc: 'Active participants across S.1 – S.6' },
    { label: 'Trophies & Medals', val: '36 Awards', desc: 'Gold, Silver, Bronze & Overall Shield' },
  ];

  const sportsDisciplines = [
    {
      title: 'Championship Football (Soccer)',
      desc: 'High-octane 11-a-side matches played on our standard natural turf pitch, with cheering squads lining the pitch boundary.',
      icon: Trophy,
    },
    {
      title: 'Track Athletics & Sprints',
      desc: '100m dash, 200m, 400m, 800m, 1,500m endurance races, and the electrifying 4x100m inter-house relays.',
      icon: Zap,
    },
    {
      title: 'Girls Championship Netball',
      desc: 'Fast tactical passes, disciplined agility, and tournament competition overseen by certified national netball umpires.',
      icon: Activity,
    },
    {
      title: 'Volleyball & Basketball',
      desc: 'Spiking precision and court teamwork on our dedicated concrete courts under professional coaching.',
      icon: Award,
    },
    {
      title: 'Field Events (Javelin, Shot Put, Long Jump)',
      desc: 'Strength, technique, and measurement precision overseen with rigorous safety precautions.',
      icon: Trophy,
    },
    {
      title: 'Tug-of-War & House Relays',
      desc: 'The crowd favorite where sheer grit, brotherhood, and collective house spirit decide the final trophy points.',
      icon: Users,
    },
  ];

  const houseLeaderboard = [
    { rank: '1st', house: 'Kabalega House', points: 412, color: 'text-amber-800 bg-amber-50', note: 'Defending Champions (Athletics & Relays)' },
    { rank: '2nd', house: 'Queen Victoria House', points: 398, color: 'text-blue-900 bg-blue-50', note: 'Champions in Netball & Volleyball' },
    { rank: '3rd', house: 'Rwenzori House', points: 384, color: 'text-emerald-900 bg-emerald-50', note: 'Football Trophy Winners' },
    { rank: '4th', house: 'Nile House', points: 365, color: 'text-rose-900 bg-rose-50', note: 'Sportsmanship & Cheerleading Trophy' },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'Events', path: '/news-events' }, { label: 'Sports Day Championship' }]} />

      {/* Hero Section */}
      <section className="relative py-28 bg-stone-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100"
          style={{ backgroundImage: `url(${STUDENT_LIFE_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#071728]/70 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full">
              <Trophy className="w-3.5 h-3.5" />
              <span>USSSA Accredited Sports Program</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
              Inter-House Sports & Athletics Championship
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              Sound minds reside in fit, disciplined bodies. Our sports curriculum builds teamwork, agility, resilience, and unyielding sportsmanship on the lush sports fields of Mukono.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-amber-300">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Saturday, 8th August 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>8:00 AM – 5:00 PM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Main Sports Complex & 400m Track</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Stats Strip */}
      <section className="py-12 bg-[#0b2545] text-white border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {sportsStats.map((item, idx) => (
              <div key={idx} className="pt-4 md:pt-0">
                <span className="font-editorial text-3xl sm:text-4xl font-bold text-amber-400 block tabular-nums">
                  {item.val}
                </span>
                <span className="text-xs uppercase tracking-wider text-white font-bold block mt-1">
                  {item.label}
                </span>
                <span className="text-[11px] text-stone-300 block mt-0.5">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines & Events Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
            Athletic Disciplines
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Competitive Sports at Mwanaweika
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Every learner is encouraged to train in at least one competitive discipline under licensed coaches and sports science instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsDisciplines.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 text-[#0b2545] flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-stone-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* House Standings & Championship Table */}
      <section className="py-20 bg-stone-100 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Leaderboard
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
              Current Inter-House Points Table
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 mb-3 rounded-full" />
            <p className="text-stone-600 text-xs sm:text-sm">
              Points compiled across term sports fixtures, cross-country runs, and field athletics.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 shadow-md overflow-hidden">
            <div className="divide-y divide-stone-100">
              {houseLeaderboard.map((item, hIdx) => (
                <div
                  key={hIdx}
                  className="p-5 flex items-center justify-between gap-4 flex-wrap"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-crest font-bold text-xs flex items-center justify-center">
                      {item.rank}
                    </span>
                    <div>
                      <h4 className="font-editorial text-xl font-bold text-stone-900">
                        {item.house}
                      </h4>
                      <span className="text-xs text-stone-500 block">
                        {item.note}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-editorial text-2xl font-bold text-[#0b2545] tabular-nums block">
                      {item.points} Pts
                    </span>
                    <span className="text-[10px] uppercase font-bold text-emerald-700 block">
                      Active Contender
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0b2545] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold">
            Join the Mwanaweika Sports Academy
          </h2>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto">
            We scout and develop young athletic talents with sports bursaries for exceptional footballers, track athletes, and netball players.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/admissions')}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
            >
              Enquire About Sports Bursaries & Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
