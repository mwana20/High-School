import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { HERO_CAMPUS_IMG, SPEECH_DAY_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import {
  ShieldCheck,
  Target,
  Eye,
  Heart,
  Award,
  Sparkles,
  Users,
  Compass,
  ArrowRight,
  Quote
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate, leadership, setSelectedLeader } = useSchool();
  const headTeacher = leadership.find((l) => l.role.includes('Head Teacher')) || leadership[1];

  const values = [
    {
      title: 'Integrity',
      desc: 'Steadfast honesty and moral uprightness in academic work, interpersonal speech, and personal conduct.',
    },
    {
      title: 'Discipline',
      desc: 'Self-control, punctual obedience to school routines, and respect for teachers, prefects, and peers.',
    },
    {
      title: 'Academic Excellence',
      desc: 'Uncompromising dedication to scholarly mastery, critical inquiry, continuous reading, and high achievement.',
    },
    {
      title: 'Faith & God-Fearing',
      desc: 'A vibrant spiritual life rooted in Christian ethics, prayerful reflection, and humble reverence for God.',
    },
    {
      title: 'Respect',
      desc: 'Honoring the dignity of every student, teacher, support staff, and visitor regardless of background.',
    },
    {
      title: 'Responsibility',
      desc: 'Ownership of one’s academic duties, environmental cleanliness, and accountability to family and school.',
    },
    {
      title: 'Servant Leadership',
      desc: 'Leading by example, listening with empathy, and using authority to serve rather than command.',
    },
    {
      title: 'Service to Community',
      desc: 'Instilling compassion through charitable outreach, environmental protection, and civic consciousness.',
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

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
              Our Foundation & Calling
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              About Mwanaweika High School
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              Rooted in Mukono, Uganda, we are dedicated to raising young men and women of moral depth, academic brilliance, and cultural pride who leave our gates ready to transform society.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block">
              Heritage of Excellence
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              A Legacy of Holistic Transformation in Mukono
            </h2>
            <div className="w-16 h-1 bg-amber-600 rounded-full" />

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                Mwanaweika High School was established with a singular, resolute objective: to establish a world-class secondary educational haven in Mukono District that pairs academic distinction with deep moral grit.
              </p>
              <p>
                From our inaugural cohort of eager scholars, the school has grown into an 18-acre green campus hosting over 1,400 students across O-Level and A-Level. Through deliberate investments in modern science laboratories, high-speed computer centers, well-ventilated dormitories, and championship sports grounds, Mwanaweika has earned its reputation among the top-tier secondary schools in Central Uganda.
              </p>
              <p>
                Our alumni today walk the halls of Makerere University, regional healthcare centers, national courts, and international corporations—each carrying the stamp of humility, hard work, and discipline instilled here on our Mukono hill.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200">
              <img
                src={HERO_CAMPUS_IMG}
                alt="Mwanaweika campus grounds in Mukono"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-serif italic text-sm text-amber-300">
                  Campus grounds, Plot 14 Kampala - Jinja Highway, Mukono
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision (Curatorial Card Pair) */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0b2545] text-white shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block">
                  Our Vision
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold leading-snug">
                  To be the premier beacon of secondary education in Uganda, raising visionary leaders grounded in academic brilliance, integrity, and faith.
                </h3>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-stone-300">
                Strategic Plan 2026 – 2030 • Institutional Roadmap
              </div>
            </div>

            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-amber-900 text-white shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white text-amber-900 flex items-center justify-center font-bold">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block">
                  Our Mission
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold leading-snug">
                  To provide quality, holistic secondary education that nurtures the intellectual, spiritual, moral, and physical capabilities of every child in a disciplined and supportive environment.
                </h3>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-stone-300">
                Core Institutional Purpose • Board of Governors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section (8 Elegant Cards) */}
      <section id="values" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
            The Moral Compass
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Our Core Values
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Every rule, assembly lesson, and sports fixture at Mwanaweika is anchored in eight non-negotiable principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-serif italic text-amber-700 font-semibold mb-2">
                  0{idx + 1}. Principle
                </div>
                <h3 className="font-editorial text-xl font-bold text-stone-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Philosophy & Culture (Parallax Styled Break) */}
      <section className="relative py-28 bg-stone-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100"
          style={{ backgroundImage: `url(${SPEECH_DAY_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center bg-[#071728]/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-xl max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">
              Educational Philosophy
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
              The Formation of Head, Heart, and Hands
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#071728]/85 border border-white/20 backdrop-blur-md shadow-xl">
              <h4 className="font-serif text-lg font-bold text-amber-300 mb-2">The Head (Intellect)</h4>
              <p className="text-xs sm:text-sm text-stone-100 leading-relaxed">
                Critical analytical thinking, deep conceptual mastery of science and arts, digital literacy, and examination precision.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#071728]/85 border border-white/20 backdrop-blur-md shadow-xl">
              <h4 className="font-serif text-lg font-bold text-amber-300 mb-2">The Heart (Character)</h4>
              <p className="text-xs sm:text-sm text-stone-100 leading-relaxed">
                Empathy, Christian fellowship, respect for elders and peers, resilience in failure, and moral purity.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#071728]/85 border border-white/20 backdrop-blur-md shadow-xl">
              <h4 className="font-serif text-lg font-bold text-amber-300 mb-2">The Hands (Skills)</h4>
              <p className="text-xs sm:text-sm text-stone-100 leading-relaxed">
                Practical laboratory competency, computer programming, sportsmanship, agricultural enterprise, and creative craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Head Teacher's Message (Large Feature Profile) */}
      <section id="headteacher" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="relative inline-block rounded-2xl overflow-hidden shadow-lg border-2 border-amber-500">
                <img
                  src={headTeacher.image}
                  alt={headTeacher.name}
                  referrerPolicy="no-referrer"
                  className="w-full max-w-sm h-96 object-cover object-top"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-editorial text-2xl font-bold text-stone-900">
                  {headTeacher.name}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mt-0.5">
                  {headTeacher.role}
                </span>
                <span className="text-xs text-stone-500 block mt-1">
                  {headTeacher.qualifications}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-800 font-bold">
                <Quote className="w-4 h-4" />
                <span>Message from the Head Teacher</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                &ldquo;Every child entrusted to us carries infinite potential waiting to be ignited.&rdquo;
              </h3>
              <div className="w-12 h-1 bg-amber-600 rounded-full" />

              <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-3 font-sans">
                <p>
                  Dear prospective parents, guardians, and friends,
                </p>
                <p>
                  {headTeacher.fullMessage}
                </p>
                <p>
                  We look forward to welcoming you physically to our campus here in Mukono for a guided tour of our facilities, or receiving your admission application for the new academic term.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => navigate('/admissions')}
                  className="px-6 py-3 bg-[#0b2545] hover:bg-amber-600 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Admissions Information
                </button>
                <button
                  onClick={() => navigate('/leadership')}
                  className="text-xs font-semibold text-stone-700 hover:text-amber-700 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Meet All Leaders</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
