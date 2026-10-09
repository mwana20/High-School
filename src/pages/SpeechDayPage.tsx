import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { SPEECH_DAY_IMG, HERO_CAMPUS_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import {
  Award,
  Sparkles,
  Users,
  Calendar,
  MapPin,
  Clock,
  Music,
  CheckCircle,
  Quote,
  Eye
} from 'lucide-react';

export const SpeechDayPage: React.FC = () => {
  const { navigate, openLightbox } = useSchool();

  const awardCategories = [
    {
      title: 'Overall Academic Dux (UCE & UACE)',
      desc: 'Conferred upon the highest aggregate scorers in national UNEB mock examinations with straight distinctions in all subjects.',
      awardee: 'Kato Derrick Mubiru (S.6 PCM) & Akello Christine (S.4)',
    },
    {
      title: 'Science Practical Innovation Award',
      desc: 'Recognizing outstanding original experimental execution in Physics, Chemistry, and Biology laboratories.',
      awardee: 'Nalwadda Grace Namazzi & STEM Team',
    },
    {
      title: 'Exemplary Moral Character & Discipline',
      desc: 'Honouring students with immaculate conduct records, punctual attendance, peer respect, and humility.',
      awardee: 'Ssempijja Joshua & Babirye Christine',
    },
    {
      title: 'Performing Arts & Brass Band Dux',
      desc: 'Celebrating artistic leadership in the school brass band, traditional folk dance troupe, and speech choir.',
      awardee: 'Denis Mukasa & Senior Brass Band Section',
    },
    {
      title: 'USSSA Sports Personality of the Year',
      desc: 'Awarded to the varsity student-athlete displaying exceptional sportsmanship, athleticism, and team leadership.',
      awardee: 'Simon Peter Wandera (Football Captain)',
    },
    {
      title: 'Community Service & Charity Trophy',
      desc: 'Awarded to the student society with the most impactful outreach in Mukono health centres and surrounding communities.',
      awardee: 'Scripture Union & Red Cross Society',
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'Events', path: '/news-events' }, { label: 'Speech Day Experience' }]} />

      {/* Hero Section */}
      <section className="relative py-28 bg-stone-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100"
          style={{ backgroundImage: `url(${SPEECH_DAY_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#071728]/70 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>28th Annual Ceremonial Assembly</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
              Speech Day & Prize Giving Ceremony
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              The grandest day on the Mwanaweika High School calendar. A celebration of scholarly triumph, moral fortitude, artistic pageantry, and student honor on our Mukono grounds.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-amber-300">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Saturday, 14th November 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>9:00 AM – 4:30 PM (Guests seated by 8:45 AM)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Main Pavilion Marquee, Mukono Campus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest of Honour & Welcome Address */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block">
              Dignitary Address
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Guest of Honour & Keynote Presentations
            </h2>
            <div className="w-16 h-1 bg-amber-600 rounded-full" />

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <span className="text-xs uppercase font-bold text-amber-800 block">
                Chief Guest of Honour:
              </span>
              <h3 className="font-editorial text-2xl font-bold text-stone-900">
                Hon. Dr. Joyce Moriku Kaducu
              </h3>
              <p className="text-xs text-stone-500">
                Minister of State for Primary & Secondary Education, Ministry of Education and Sports
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-2 border-t border-stone-100">
                Delivering the keynote address on &ldquo;Empowering Secondary Scholars with Moral Courage, Digital Competence, and Practical Problem-Solving in Contemporary Uganda.&rdquo;
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
              <span className="text-xs uppercase font-bold text-stone-500 block">
                Head Teacher&apos;s Annual State of School Address:
              </span>
              <p className="font-serif italic text-stone-800 text-sm">
                &ldquo;Speech Day provides a sacred moment to look back on a year of tireless academic striving, thanking God for our candidates&apos; breakthroughs and honoring the parents who sacrifice daily for their children&apos;s schooling.&rdquo;
              </p>
              <span className="text-xs font-semibold text-amber-900 block">
                — Mrs. Margaret Namubiru Musoke, Head Teacher
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200">
              <img
                src={SPEECH_DAY_IMG}
                alt="Award ceremony on Speech Day at Mwanaweika High School"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase font-bold text-amber-300 block">
                  Prize Giving Ceremony
                </span>
                <p className="font-serif italic text-sm text-stone-200">
                  Scholars receiving distinction scrolls and engraved shields before parents and educators.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Academic Awards & Recognition Grid */}
      <section className="py-20 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Roll of Honour
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              Speech Day Honours & Prizes
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Every year, prizes ranging from customized crystal trophies, cash scholastic bursaries, and national curriculum reference libraries are conferred.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardCategories.map((award, aIdx) => (
              <div
                key={aIdx}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-stone-900 mb-2">
                    {award.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {award.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 text-xs">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">
                    Current Holder:
                  </span>
                  <span className="font-semibold text-amber-800">
                    {award.awardee}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Performances & Brass Band Highlights */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block">
              Artistic Pageantry
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
              The Famous Mwanaweika Brass Band & Cultural Gala
            </h2>
            <div className="w-16 h-1 bg-amber-600 rounded-full" />

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Speech Day is as much a feast of sound and color as it is of academic intellect. The 45-member Mwanaweika Brass Band performs the National Anthem, the East African Community Anthem, and the revered School Anthem, followed by traditional Kiganda and Luo folk choreography.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-700 font-medium">
                  Grand Ceremonial Procession leading the Board of Governors and Guest of Honour to the dais.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-700 font-medium">
                  Inter-House drama sketches and poetic elocution addressing contemporary issues of youth integrity.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-700 font-medium">
                  Choir oratorio with classical choral harmonies taught by music directors.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200">
              <img
                src={HERO_CAMPUS_IMG}
                alt="Students marching on speech day in Mukono"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0b2545] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold">
            Attend the 2026 Speech Day Celebrations
          </h2>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto">
            All parents, alumni, and educational partners are warmly invited. Contact the school administration for reserved seating arrangements in the main pavilion.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
            >
              Contact School Administration
            </button>
            <button
              onClick={() => navigate('/gallery')}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              View Speech Day Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
