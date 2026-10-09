import React, { useState, useEffect } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  HERO_CAMPUS_IMG,
  ACADEMICS_LAB_IMG,
  STUDENT_LIFE_IMG,
  SPEECH_DAY_IMG
} from '../data/initialData';
import { VoicesOfMwanaweika } from '../components/common/VoicesOfMwanaweika';
import {
  BookOpen,
  Shield,
  Award,
  Cpu,
  Trophy,
  Heart,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Users,
  GraduationCap
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const {
    navigate,
    stats,
    leadership,
    newsEvents,
    gallery,
    openLightbox,
    setSelectedLeader
  } = useSchool();

  // Animated counters trigger
  const [hasScrolledStats, setHasScrolledStats] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setHasScrolledStats(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION (Full-Screen Editorial Presence, High Visibility Campus Background) */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-stone-900 text-white">
        {/* Fixed parallax background - 100% Ultra Visible */}
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100 transform scale-100 transition-all duration-700"
          style={{ backgroundImage: `url(${HERO_CAMPUS_IMG})` }}
        />
        {/* Subtle Scrim Overlay reduced to 2% darkness */}
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          {/* Glass content card ensuring readability while keeping the full image vivid & visible */}
          <div className="bg-[#071728]/60 backdrop-blur-md border border-white/20 p-8 sm:p-12 rounded-3xl shadow-2xl space-y-6">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs tracking-[0.2em] uppercase font-sans font-semibold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Mwanaweika High School • Mukono, Uganda</span>
            </div>

            {/* Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Nurturing Excellence. Building Character. Shaping the Future.
            </h1>

            {/* Supporting Text */}
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-stone-100 font-sans font-normal leading-relaxed drop-shadow-sm">
              Providing quality holistic education, moral discipline, Christian values, visionary leadership, and cutting-edge technology that prepare young people for university, vocation, and life.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/about')}
                className="w-full sm:w-auto px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Discover Our School
              </button>
              <button
                onClick={() => navigate('/admissions')}
                className="w-full sm:w-auto px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-white/20 hover:bg-white/30 border border-white/40 backdrop-blur-md rounded-xl transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-lg"
              >
                Admissions Enquiry
              </button>
            </div>

            {/* Quick Credential Bar */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-white/20 max-w-4xl mx-auto">
              <div className="p-2">
                <span className="font-editorial text-2xl sm:text-3xl font-bold text-amber-300 block">
                  {stats.yearsOfExcellence}+ Years
                </span>
                <span className="text-[11px] sm:text-xs text-stone-200 uppercase tracking-wider font-sans font-medium">
                  Heritage in Mukono
                </span>
              </div>
              <div className="p-2">
                <span className="font-editorial text-2xl sm:text-3xl font-bold text-amber-300 block">
                  {stats.unebPassRate.split(' ')[0]}
                </span>
                <span className="text-[11px] sm:text-xs text-stone-200 uppercase tracking-wider font-sans font-medium">
                  Division 1 & 2 Rates
                </span>
              </div>
              <div className="p-2">
                <span className="font-editorial text-2xl sm:text-3xl font-bold text-amber-300 block">
                  100% Boarding
                </span>
                <span className="text-[11px] sm:text-xs text-stone-200 uppercase tracking-wider font-sans font-medium">
                  & Secure Day Options
                </span>
              </div>
              <div className="p-2">
                <span className="font-editorial text-2xl sm:text-3xl font-bold text-amber-300 block">
                  UNEB UCE & UACE
                </span>
                <span className="text-[11px] sm:text-xs text-stone-200 uppercase tracking-wider font-sans font-medium">
                  Accredited Center
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 2. WELCOME SECTION (Split Editorial Layout) */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: School Image with architectural framing */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200">
                <img
                  src={SPEECH_DAY_IMG}
                  alt="Speech Day and prize giving ceremony at Mwanaweika High School"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block">
                    Speech Day & Recognition
                  </span>
                  <p className="font-serif text-sm italic text-stone-200">
                    Celebrating holistic academic and moral triumph on our Mukono grounds.
                  </p>
                </div>
              </div>

              {/* Accent Card Overlap */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#0b2545] text-white p-5 rounded-xl shadow-xl max-w-xs border border-amber-400/30">
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">
                  Discipline & Faith
                </span>
                <p className="text-xs text-stone-200 mt-1 leading-relaxed">
                  Every child receives individual mentoring from classroom tutors and resident chaplains.
                </p>
              </div>
            </div>

            {/* Right: Narrative Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-800 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>An Authentic Ugandan Heritage of Learning</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
                Welcome to Mwanaweika High School
              </h2>
              <div className="w-16 h-1 bg-amber-600 rounded-full" />

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                Founded with a conviction that education is the total transformation of a young person, Mwanaweika High School sits in Mukono Municipality, Uganda. We create an environment where intellectual curiosity meets rigorous discipline and deep Christian character.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm">Academic Distinction</h4>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      Rigorous preparation in UNEB O-Level and A-Level curricula led by experienced subject examiners.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm">Character & Integrity</h4>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      Zero tolerance for indiscipline. We cultivate polite, respectful, and self-driven young adults.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm">Modern Digital Labs</h4>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      High-spec computer labs, internet connectivity, and coding modules preparing students for future tech.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm">Safe Residential Care</h4>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      Comfortable dormitories, 24/7 nursing and matron care, clean dining, and lush botanical grounds.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate('/about')}
                  className="inline-flex items-center gap-2 font-semibold text-[#0b2545] hover:text-amber-600 text-sm transition-colors cursor-pointer group"
                >
                  <span>Learn More About Our Story & Values</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3. WHY CHOOSE US (6 Premium Institutional Pillars) */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-bold block mb-2">
              Our Educational Distinctives
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              Why Parents Choose Mwanaweika
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-5 rounded-full" />
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We understand the high expectations parents have for their children&apos;s secondary education. Here is what sets our school apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Academic Excellence',
                desc: 'Structured curriculum delivery, continuous mock assessments, remedial coaching, and consistent Division 1 pass rates in UNEB UCE and UACE national examinations.',
              },
              {
                icon: Shield,
                title: 'Character & Discipline',
                desc: 'A structured, peaceful environment governed by mutual respect, firm guidelines, pastoral counseling, and strong moral convictions that parents celebrate.',
              },
              {
                icon: Award,
                title: 'Leadership Development',
                desc: 'Active student councils, debating societies, prefect governance, and public speaking forums that build confident, articulate young ambassadors.',
              },
              {
                icon: Cpu,
                title: 'Technology & Future Skills',
                desc: 'Air-conditioned 80-terminal computer laboratories with high-speed internet, coding workshops, STEM robotics, and UNEB Sub-ICT practicals.',
              },
              {
                icon: Trophy,
                title: 'Sports & Talents',
                desc: 'Standard football pitches, athletic track, volleyball, netball, school brass band, fine art, and performing arts that uncover God-given gifts.',
              },
              {
                icon: Heart,
                title: 'Faith & Community Values',
                desc: 'Interdenominational Christian foundation with Sunday Mass, scripture fellowships, prayer gardens, and community outreach teaching compassion.',
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-amber-500/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0b2545] text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 4. ANIMATED STATISTICS BANNER */}
      <section className="py-16 bg-[#0b2545] text-white border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="pt-4 lg:pt-0">
              <span className="font-editorial text-4xl sm:text-5xl font-bold text-amber-400 block tabular-nums">
                {hasScrolledStats ? stats.studentsCount : '1,400'}+
              </span>
              <span className="text-xs sm:text-sm text-stone-300 uppercase tracking-widest mt-1 block font-sans">
                Active Students
              </span>
            </div>

            <div className="pt-4 lg:pt-0">
              <span className="font-editorial text-4xl sm:text-5xl font-bold text-amber-400 block tabular-nums">
                {hasScrolledStats ? stats.teachersCount : '70'}+
              </span>
              <span className="text-xs sm:text-sm text-stone-300 uppercase tracking-widest mt-1 block font-sans">
                Qualified Teachers
              </span>
            </div>

            <div className="pt-4 lg:pt-0">
              <span className="font-editorial text-4xl sm:text-5xl font-bold text-amber-400 block tabular-nums">
                {stats.departmentsCount}
              </span>
              <span className="text-xs sm:text-sm text-stone-300 uppercase tracking-widest mt-1 block font-sans">
                Academic Depts
              </span>
            </div>

            <div className="pt-4 lg:pt-0">
              <span className="font-editorial text-4xl sm:text-5xl font-bold text-amber-400 block tabular-nums">
                {stats.yearsOfExcellence}
              </span>
              <span className="text-xs sm:text-sm text-stone-300 uppercase tracking-widest mt-1 block font-sans">
                Years of Excellence
              </span>
            </div>

            <div className="pt-4 lg:pt-0 col-span-2 lg:col-span-1">
              <span className="font-editorial text-4xl sm:text-5xl font-bold text-amber-400 block tabular-nums">
                {stats.clubsCount}+
              </span>
              <span className="text-xs sm:text-sm text-stone-300 uppercase tracking-widest mt-1 block font-sans">
                Clubs & Sports Teams
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* 5. ACADEMIC EXCELLENCE SPOTLIGHT (Large Image + Content) */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block">
                Academics & Examination
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
                Academic Rigor Designed to Elevate Every Learner
              </h2>
              <div className="w-16 h-1 bg-amber-600 rounded-full" />

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                At Mwanaweika High School, we combine time-tested teaching pedagogies with contemporary practical learning. Our teachers do not merely deliver syllabus outlines; they ignite curiosity, supervise weekly revision tests, and mentor students through challenging concepts.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 text-sm">UNEB Chief Examiner Guidance</h4>
                    <p className="text-xs text-stone-600">Our faculty includes certified national examiners who instruct students in accurate question interpretation and scoring criteria.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 text-sm">Comprehensive Practical Laboratories</h4>
                    <p className="text-xs text-stone-600">Physics, chemistry, and biology are taught with weekly hands-on experiments starting in Senior One.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 text-sm">Personalized Remedial Clinics</h4>
                    <p className="text-xs text-stone-600">Students facing challenges in mathematics, sciences, or languages receive evening tutorial support.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate('/academics')}
                  className="px-6 py-3.5 bg-[#0b2545] hover:bg-amber-600 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Explore Academics & Departments
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-stone-200">
                <img
                  src={ACADEMICS_LAB_IMG}
                  alt="Students learning in the modern computer and science lab at Mwanaweika High School"
                  referrerPolicy="no-referrer"
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 6. FIXED BACKGROUND PARALLAX: STUDENT LIFE & CULTURE (Highly Visible Background) */}
      <section className="relative py-28 text-white overflow-hidden bg-stone-900">
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100"
          style={{ backgroundImage: `url(${STUDENT_LIFE_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 bg-[#071728]/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">
              Beyond Academics
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-md">
              Vibrant Student Life in Mukono
            </h2>
            <div className="w-16 h-1 bg-amber-500 mt-4 mb-4 rounded-full" />
            <p className="text-stone-100 text-sm sm:text-base leading-relaxed">
              School at Mwanaweika is an immersive, joyful journey. From early morning chapel to lively inter-house sports, students build lifelong friendships, self-reliance, and discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Boarding Life & Dormitories',
                desc: 'Comfortable, clean, and supervised halls named after historic heroes like Kabalega and Queen Victoria.',
                tag: 'Residential Life',
                path: '/student-life#boarding'
              },
              {
                title: 'Inter-House Sports & Athletics',
                desc: 'Competitive football, netball, volleyball, basketball, and track meets that build fitness and character.',
                tag: 'Sports Championship',
                path: '/sports-day'
              },
              {
                title: 'Clubs & Societies',
                desc: 'Debate Club, STEM Robotics, Red Cross, Writers Guild, and the renowned school brass band.',
                tag: 'Enrichment',
                path: '/student-life#clubs'
              },
              {
                title: 'Religious Life & Sunday Mass',
                desc: 'Spiritual formation rooted in Christian ethics, weekly fellowship, and choir performances.',
                tag: 'Spiritual Formation',
                path: '/student-life#religious'
              },
              {
                title: 'Speech Day Celebrations',
                desc: 'Our flagship annual festival honouring academic distinction and creative student performances.',
                tag: 'Flagship Event',
                path: '/speech-day'
              },
              {
                title: 'Parent Visitation Days',
                desc: 'Cherished term gatherings where parents, teachers, and students consult on academic milestones.',
                tag: 'Parent Engagement',
                path: '/visitation-day'
              },
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => navigate(item.path)}
                className="bg-[#071728]/80 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:border-amber-400/80 hover:bg-[#0b2545]/95 transition-all duration-300 cursor-pointer group hover:-translate-y-1 shadow-xl"
              >
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block mb-2">
                  {item.tag}
                </span>
                <h3 className="font-editorial text-2xl font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 mt-2 font-sans leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span>Explore Experience</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. LEADERSHIP PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-700 font-bold block mb-2">
                Experienced Stewards
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
                School Leadership Team
              </h2>
              <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
            </div>
            <button
              onClick={() => navigate('/leadership')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b2545] hover:text-amber-600 transition-colors"
            >
              <span>View Full Leadership Directory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.slice(0, 3).map((leader) => (
              <div
                key={leader.id}
                className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
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
                    <h3 className="font-editorial text-xl font-bold text-white leading-tight">
                      {leader.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs text-stone-500 font-medium block mb-2">
                      {leader.qualifications}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedLeader(leader);
                      navigate('/leadership');
                    }}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-[#0b2545] bg-white hover:bg-[#0b2545] hover:text-white border border-stone-300 rounded-xl transition-colors cursor-pointer text-center"
                  >
                    Read Profile & Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 8. SPECIAL SECTION: VOICES OF MWANAWEIKA */}
      <VoicesOfMwanaweika />


      {/* 9. UPCOMING EVENTS & SCHOOL BULLETINS */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
                Calendar & Notices
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
                Upcoming Events & News
              </h2>
              <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
            </div>
            <button
              onClick={() => navigate('/news-events')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b2545] hover:text-amber-600 transition-colors"
            >
              <span>See All Events & Bulletins</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsEvents.slice(0, 3).map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0b2545]/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-semibold">
                    {evt.type.replace('_', ' ').toUpperCase()}
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
                    <p className="text-xs sm:text-sm text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                      {evt.summary}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(
                      evt.type === 'speech_day'
                        ? '/speech-day'
                        : evt.type === 'visitation_day'
                        ? '/visitation-day'
                        : evt.type === 'sports_day'
                        ? '/sports-day'
                        : '/news-events'
                    )}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b2545] hover:text-amber-600 pt-2 border-t border-stone-100 transition-colors cursor-pointer"
                  >
                    <span>View Event Details</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 10. GALLERY PREVIEW */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-bold block mb-2">
              Visual Chronicle
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              Life at Mwanaweika in Pictures
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-5 rounded-full" />
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Step into our classrooms, sports grounds, science laboratories, and Speech Day festivities through our visual archive.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.slice(0, 4).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                    {item.category}
                  </span>
                  <p className="font-serif text-sm font-semibold line-clamp-2">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <button
              onClick={() => navigate('/gallery')}
              className="px-8 py-3.5 bg-stone-100 hover:bg-[#0b2545] hover:text-white text-stone-900 font-semibold text-xs uppercase tracking-wider rounded-xl transition-all border border-stone-300 cursor-pointer"
            >
              View Full School Photo Gallery
            </button>
          </div>
        </div>
      </section>


      {/* 11. ALUMNI COMMUNITY HIGHLIGHT (Highly Visible Background) */}
      <section className="relative py-28 text-white overflow-hidden bg-stone-900">
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100"
          style={{ backgroundImage: `url(${HERO_CAMPUS_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#071728]/70 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Alumni Heritage
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-md">
              Once a Mwanaweika Student, Always Part of the Family
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
            <p className="max-w-2xl mx-auto text-stone-100 text-sm sm:text-base leading-relaxed">
              Our graduates serve as surgeons, attorneys, renewable energy engineers, teachers, public servants, and entrepreneurs across Uganda and across the globe. Join the network, reconnect with your classmates, and mentor current students.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/alumni')}
                className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg cursor-pointer"
              >
                Visit Alumni Network
              </button>
              <button
                onClick={() => navigate('/alumni#reconnect')}
                className="px-8 py-3.5 bg-white/20 hover:bg-white/30 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/40 backdrop-blur-md transition-all cursor-pointer"
              >
                Register & Reconnect
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* 12. FINAL INSTITUTIONAL CALL TO ACTION (Highly Visible Background) */}
      <section className="relative py-28 text-white text-center overflow-hidden bg-stone-900">
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100"
          style={{ backgroundImage: `url(${HERO_CAMPUS_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#071728]/70 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center mx-auto shadow-xl">
              <GraduationCap className="w-9 h-9 text-[#0b2545]" />
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
              Give Your Child the Foundation for a Brighter Future
            </h2>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              Admissions for the upcoming academic year are in progress. Secure a place in an institution where character, faith, and academic excellence go hand in hand.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/admissions')}
                className="w-full sm:w-auto px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Admissions 2026
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-white/20 hover:bg-white/30 border border-white/40 backdrop-blur-md rounded-xl transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-lg"
              >
                Contact the School
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
