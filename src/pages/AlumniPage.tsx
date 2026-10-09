import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { HERO_CAMPUS_IMG, SPEECH_DAY_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Heart,
  Send,
  CheckCircle,
  Award,
  Sparkles,
  BookOpen,
  DollarSign
} from 'lucide-react';

export const AlumniPage: React.FC = () => {
  const { alumni, submitAlumniRegistration } = useSchool();

  const [form, setForm] = useState({
    fullName: '',
    gradYear: '',
    email: '',
    phone: '',
    profession: '',
    location: '',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitAlumniRegistration(form);
    setIsSuccess(true);
    setForm({
      fullName: '',
      gradYear: '',
      email: '',
      phone: '',
      profession: '',
      location: '',
      message: '',
    });
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'Alumni Network' }]} />

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
              The Mwanaweika Old Students Association (MOSA)
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              Connected Beyond the Classroom
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              Spanning over 28 graduating cohorts, our alumni community leads in medicine, law, engineering, agriculture, public service, and entrepreneurship across Uganda and the global diaspora.
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Stories & Impact */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
            Inspirational Journeys
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Alumni Stories & Achievements
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From the quiet morning preps in Mukono to national leadership roles, read how Mwanaweika forged the foundation of their success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alumni.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-3 left-3 bg-[#0b2545]/90 text-white text-[11px] font-bold px-3 py-1 rounded-md">
                    Class of {story.graduationYear}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-editorial text-2xl font-bold text-stone-900 leading-tight">
                      {story.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold mt-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{story.profession}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{story.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans italic border-l-2 border-amber-500 pl-3">
                    &ldquo;{story.story}&rdquo;
                  </p>

                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs text-stone-700">
                    <span className="font-semibold text-stone-900 block mb-0.5">Words for Current Students:</span>
                    {story.adviceToStudents}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 text-xs text-stone-400">
                {story.currentCompanyOrField}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ways to Support the School */}
      <section className="py-20 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Giving Back
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
              How Alumni Can Support Mwanaweika
            </h2>
            <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
            <p className="text-stone-600 text-sm mt-3 leading-relaxed">
              Every graduate can be an instrument of transformation for the next generation of scholars.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <Sparkles className="w-8 h-8 text-amber-600" />
              <h3 className="font-editorial text-xl font-bold text-stone-900">Student Mentorship</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Offer career guidance, university application counseling, and profession talks during term career days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <Award className="w-8 h-8 text-amber-600" />
              <h3 className="font-editorial text-xl font-bold text-stone-900">Scholarship Fund</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Contribute towards tuition bursaries for exceptionally gifted students from underprivileged rural backgrounds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <BookOpen className="w-8 h-8 text-amber-600" />
              <h3 className="font-editorial text-xl font-bold text-stone-900">Library & STEM Equipment</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Donate laboratory apparatus, coding kits, robotics gear, or classic literature books to our school library.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <Heart className="w-8 h-8 text-amber-600" />
              <h3 className="font-editorial text-xl font-bold text-stone-900">Annual MOSA Reunion</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Attend our annual homecoming dinner, inter-cohort football match, and Speech Day procession in Mukono.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Reconnect Registration Form */}
      <section id="reconnect" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Stay in Touch
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
              Alumni Reconnect Directory
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Whether you graduated five years ago or two decades ago, register your current contact to receive school newsletters, reunion invitations, and mentorship opportunities.
            </p>
          </div>

          {isSuccess ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-emerald-950">
                Welcome Back to the Family!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                Your alumni details have been recorded into the Mwanaweika Old Students Association (MOSA) registry. The alumni secretary will be in touch!
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 bg-[#0b2545] text-white text-xs font-semibold rounded-xl hover:bg-amber-600 transition-colors"
                >
                  Submit Another Entry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="e.g. Dr. Arthur Mukisa"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Year of Graduation (UCE or UACE) *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.gradYear}
                    onChange={(e) => setForm({ ...form, gradYear: e.target.value })}
                    placeholder="e.g. 2012"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alumnus@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+256 772 000 000"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Current Profession / Industry *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.profession}
                    onChange={(e) => setForm({ ...form, profession: e.target.value })}
                    placeholder="e.g. Software Engineer / Accountant"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Current City / Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    placeholder="e.g. Kampala, Uganda"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                  Memories & Ways You Would Like to Get Involved
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share a favorite memory or mention if you would like to participate in student career talks, donate books, or join reunion committees..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Register with Alumni Network</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
