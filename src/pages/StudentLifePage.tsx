import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { STUDENT_LIFE_IMG, HERO_CAMPUS_IMG, SPEECH_DAY_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { VoicesOfMwanaweika } from '../components/common/VoicesOfMwanaweika';
import {
  Bed,
  Users,
  ShieldCheck,
  Music,
  HeartHandshake,
  Sun,
  Moon,
  Clock,
  Sparkles,
  Trophy,
  Church,
  ArrowRight
} from 'lucide-react';

export const StudentLifePage: React.FC = () => {
  const { navigate, dormitories } = useSchool();

  const clubs = [
    {
      name: 'Debating & Public Speaking Society',
      desc: 'Weekly inter-class and inter-school debates sharpening elocution, logic, and parliamentary procedure.',
      patron: 'Mr. Francis Bwambale',
      meeting: 'Every Wednesday 4:30 PM',
    },
    {
      name: 'School Brass Band & Orchestra',
      desc: 'The iconic pride of Mwanaweika, leading Speech Day processions, civic parades, and national music competitions.',
      patron: 'Mr. Denis Mukasa',
      meeting: 'Tuesdays & Thursdays 4:30 PM',
    },
    {
      name: 'STEM Robotics & Coding Guild',
      desc: 'Hands-on experimentation with micro-controller kits, web design basics, and regional STEM exhibitions.',
      patron: 'Eng. Isaac Tumusiime',
      meeting: 'Every Friday 4:30 PM',
    },
    {
      name: 'Red Cross & First Aid Society',
      desc: 'Trained first responders serving at sports fixtures, community blood donations, and campus health education.',
      patron: 'Mrs. Flavia Namuddu',
      meeting: 'Every Monday 4:30 PM',
    },
    {
      name: 'Scripture Union & Catholic Charismatic Fellowship',
      desc: 'Vibrant student-led praise, Bible study, and worship fellowships encouraging moral fortitude.',
      patron: 'Sr. Mary Immaculate',
      meeting: 'Fridays & Sundays',
    },
    {
      name: 'Writers & Journalists Guild',
      desc: 'Publishing the quarterly school magazine "The Mukono Beacon", student poetry anthologies, and notice boards.',
      patron: 'Mrs. Juliet Nabukenya',
      meeting: 'Every Thursday 4:30 PM',
    },
  ];

  const dailyRoutine = [
    { time: '5:00 AM', title: 'Rising Bell & Personal Grooming', desc: 'Students awake, make their beds, and prepare for morning prep.' },
    { time: '5:30 AM – 6:45 AM', title: 'Morning Academic Prep', desc: 'Supervised silent reading and individual study in classrooms.' },
    { time: '6:45 AM – 7:30 AM', title: 'Breakfast & Compound Duty', desc: 'Wholesome porridge and bread; dormitory and compound inspection.' },
    { time: '7:40 AM', title: 'Morning Assembly & Parade', desc: 'National anthem, school prayer, notices, and head teacher address.' },
    { time: '8:00 AM – 1:00 PM', title: 'Morning Academic Lessons', desc: 'Intensive curriculum delivery and practical science labs.' },
    { time: '1:00 PM – 2:00 PM', title: 'Lunch & Relaxation', desc: 'Nutritious hot meal served in Archbishop Luwum Dining Hall.' },
    { time: '2:00 PM – 4:30 PM', title: 'Afternoon Classes & ICT Labs', desc: 'Continuation of lessons, library research, and computer modules.' },
    { time: '4:30 PM – 6:00 PM', title: 'Games, Sports & Clubs', desc: 'Football, netball, volleyball, athletics, brass band, and societies.' },
    { time: '6:00 PM – 7:00 PM', title: 'Bathing & Supper', desc: 'Hot-water utility stations and evening meal.' },
    { time: '7:00 PM – 9:30 PM', title: 'Evening Supervised Prep', desc: 'Consolidation of day work and teacher consultations.' },
    { time: '10:00 PM', title: 'Night Prayers & Lights Out', desc: 'Quiet rest in secure, warden-supervised dormitories.' },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'Student Life' }]} />

      {/* Hero Section */}
      <section className="relative py-28 bg-stone-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100"
          style={{ backgroundImage: `url(${STUDENT_LIFE_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#071728]/70 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-sans font-semibold">
              Character, Community & Camaraderie
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              Life Beyond the Classroom
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              Secondary school at Mwanaweika is an unforgettable formative experience. Through structured boarding life, spirited sports, enriching societies, and reverent worship, students build the character of a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Boarding Life & Dormitories Section */}
      <section id="boarding" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
            Residential Living
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Boarding Life & Dormitory Halls
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Our boarding section is a secure, caring sanctuary where learners develop self-reliance, tidiness, time discipline, and enduring brotherhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dormitories.map((dorm) => (
            <div
              key={dorm.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] bg-stone-200 overflow-hidden">
                  <img
                    src={dorm.image}
                    alt={dorm.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-[#0b2545]/90 text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                    {dorm.gender} Section
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs text-amber-400 font-serif italic block">
                      &ldquo;{dorm.patronSaintOrMotto}&rdquo;
                    </span>
                    <h3 className="font-editorial text-2xl font-bold text-white leading-tight">
                      {dorm.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {dorm.description}
                  </p>

                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-500 block">
                        Supervising Warden:
                      </span>
                      <span className="font-semibold text-stone-900">
                        {dorm.wardenName}
                      </span>
                      <span className="text-stone-500 block text-[11px]">
                        {dorm.wardenTitle}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-stone-500 block">
                        Capacity:
                      </span>
                      <span className="font-semibold text-amber-800">
                        {dorm.capacity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A Day in the Life: Daily Routine */}
      <section className="py-20 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Time Discipline
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
              A Day in the Life of a Mwanaweika Student
            </h2>
            <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
            <p className="text-stone-600 text-sm mt-3">
              Punctuality is a hallmark of our school culture. Here is our daily structured schedule:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dailyRoutine.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0b2545] text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-800 block">
                    {item.time}
                  </span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section id="clubs" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
            Co-Curricular Enrichment
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Clubs, Societies & Performing Arts
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Every learner joins at least two co-curricular clubs, discovering leadership, public debating, musical talents, and community empathy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, cIdx) => (
            <div
              key={cIdx}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-2">
                  {club.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans mb-4">
                  {club.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-700">Teacher Patron:</span>
                  <span className="text-stone-900 font-semibold">{club.patron}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-700">Meeting Schedule:</span>
                  <span className="text-amber-800 font-semibold">{club.meeting}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Religious Life & Spiritual Nurture */}
      <section id="religious" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100"
          style={{ backgroundImage: `url(${SPEECH_DAY_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center bg-[#071728]/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-xl max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">
              Spiritual Foundation
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
              Faith, Prayer & Sunday Mass
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
            <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto mt-3">
              True learning is sanctified by faith. We maintain an active Christian culture that welcomes students from all backgrounds while upholding strong moral virtues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#071728]/85 border border-white/20 backdrop-blur-md shadow-xl space-y-2">
              <Church className="w-8 h-8 text-amber-400" />
              <h4 className="font-serif text-lg font-bold text-white">Sunday Mass & Chapel</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Celebrated weekly with choral hymns, student-led readings, pastoral sermons, and communion in the main school hall.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
              <HeartHandshake className="w-8 h-8 text-amber-400" />
              <h4 className="font-serif text-lg font-bold text-white">Pastoral Counseling</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Resident chaplains and senior counselors provide compassionate, confidential spiritual guidance for any child in distress.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
              <Sparkles className="w-8 h-8 text-amber-400" />
              <h4 className="font-serif text-lg font-bold text-white">Community Outreach</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Termly charity visits to local health centres, elderly communities, and environmental tree planting around Mukono.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Voices Section (Head Prefect, Assistant, Head Girl, Head Boy) */}
      <section id="prefects">
        <VoicesOfMwanaweika />
      </section>

      {/* CTA to Admissions & Visitation Day */}
      <section className="py-16 bg-[#0b2545] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold">
            Experience Mwanaweika Life Firsthand
          </h2>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto">
            We warmly invite parents and prospective students to tour our boarding facilities, classrooms, and grounds.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/visitation-day')}
              className="px-6 py-3 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-300 transition-colors"
            >
              Visitation Day Information
            </button>
            <button
              onClick={() => navigate('/admissions')}
              className="px-6 py-3 bg-white/10 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              Apply for Boarding
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
