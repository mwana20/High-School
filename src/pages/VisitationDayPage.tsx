import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { STUDENT_LIFE_IMG, HERO_CAMPUS_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import {
  Users,
  Clock,
  Calendar,
  MapPin,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  FileText
} from 'lucide-react';

export const VisitationDayPage: React.FC = () => {
  const { navigate } = useSchool();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What are the exact gate opening and closing hours for Visitation Day?',
      a: 'The main school gate opens promptly at 9:00 AM for visitor screening and vehicle parking. The day concludes at 5:00 PM, after which all non-staff visitors must exit the compound to allow evening roll-call and dinner.'
    },
    {
      q: 'Can parents bring cooked food and snacks for their children?',
      a: 'Yes, parents may bring freshly cooked family meals for daytime consumption during visitation. However, perishable cooked food must not be stored in dormitories after visitation hours for health and hygiene reasons.'
    },
    {
      q: 'Are mobile phones, music players, or electronic gadgets permitted on campus?',
      a: 'No. Mobile phones, electronic games, smartwatches, and unauthorized electronics remain strictly prohibited on campus. Any unauthorized devices found will be confiscated according to school policy.'
    },
    {
      q: 'How do parent-teacher consultations work during the visit?',
      a: 'Subject teachers and class tutors will be stationed at designated classroom desks. Parents can review mid-term academic scores, check homework exercise books, and discuss areas where the student needs remedial attention.'
    },
    {
      q: 'Can parents inspect their child&apos;s dormitory cubicle?',
      a: 'Yes. Between 11:00 AM and 2:00 PM, parents are welcome to visit their child&apos;s dormitory hall accompanied by the house warden or matron to inspect beddings, hygiene, and locker tidiness.'
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'Events', path: '/news-events' }, { label: 'Parent Visitation Day Guide' }]} />

      {/* Hero Section */}
      <section className="relative py-28 bg-stone-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100"
          style={{ backgroundImage: `url(${HERO_CAMPUS_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#071728]/70 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full">
              <Users className="w-3.5 h-3.5" />
              <span>Parent-Teacher Partnership</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
              Term Visitation Day & Parent Consultations
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              A cherished day of fellowship, academic evaluation, and pastoral consultation between parents, teachers, and boarding scholars in Mukono.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-amber-300">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Sunday, 19th July 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Campus Lawns, Classes & Dormitories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Schedule & Times */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
            <span className="text-xs uppercase font-bold text-amber-800 block">Step 01</span>
            <div className="font-crest text-xl font-bold text-stone-900">9:00 AM</div>
            <p className="text-xs text-stone-600">Gates Open & Vehicle Parking</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
            <span className="text-xs uppercase font-bold text-amber-800 block">Step 02</span>
            <div className="font-crest text-xl font-bold text-stone-900">9:30 AM – 10:30 AM</div>
            <p className="text-xs text-stone-600">Interdenominational Fellowship</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
            <span className="text-xs uppercase font-bold text-amber-800 block">Step 03</span>
            <div className="font-crest text-xl font-bold text-stone-900">10:30 AM – 3:30 PM</div>
            <p className="text-xs text-stone-600">Parent-Teacher One-on-One Consults</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
            <span className="text-xs uppercase font-bold text-amber-800 block">Step 04</span>
            <div className="font-crest text-xl font-bold text-stone-900">5:00 PM Sharp</div>
            <p className="text-xs text-stone-600">Visiting Gates Close & Roll Call</p>
          </div>
        </div>
      </section>

      {/* Visiting Guidelines & Welfare Standards */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block">
                Parental Advisory
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
                Visitation Guidelines & Code of Conduct
              </h2>
              <div className="w-16 h-1 bg-amber-600 rounded-full" />

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 bg-emerald-50 rounded-xl border border-emerald-100">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-stone-900 text-xs sm:text-sm">Dress Code & Decorum</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Parents and visitors are requested to dress modestly and respectfully, reflecting the Christian values of the school.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-amber-50 rounded-xl border border-amber-100">
                  <CheckCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-stone-900 text-xs sm:text-sm">Academic Review Session</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Bring your student&apos;s term receipt slip to collect the official mid-term report card from class directors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-rose-50 rounded-xl border border-rose-100">
                  <AlertTriangle className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-stone-900 text-xs sm:text-sm">Prohibited Items</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Smartphones, tablets, unauthorized cash sums, and alcoholic beverages are strictly forbidden.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200">
                <img
                  src={STUDENT_LIFE_IMG}
                  alt="Parents and students enjoying fellowship on campus"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
            Clarifications
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 mb-3 rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-editorial text-xl font-bold text-stone-900 hover:text-amber-800 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-stone-400 transition-transform ${openFaq === idx ? 'rotate-180 text-amber-600' : ''}`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans border-t border-stone-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0b2545] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold">
            Questions About Your Child&apos;s Welfare?
          </h2>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto">
            Contact the Dean of Students or Dormitory House Masters directly for special welfare accommodations.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
            >
              Contact Welfare Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
