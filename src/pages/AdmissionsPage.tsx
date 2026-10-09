import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { HERO_CAMPUS_IMG, STUDENT_LIFE_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import {
  CheckCircle,
  FileText,
  Download,
  Calendar,
  Clock,
  Send,
  HelpCircle,
  Shield,
  CreditCard,
  Building,
  UserCheck
} from 'lucide-react';

export const AdmissionsPage: React.FC = () => {
  const { submitAdmissionInquiry, navigate } = useSchool();

  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    intendedClass: 'Senior One (S.1)',
    boardingType: 'Boarding' as 'Boarding' | 'Day',
    previousSchool: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitAdmissionInquiry(formData);
    setIsSubmitted(true);
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      intendedClass: 'Senior One (S.1)',
      boardingType: 'Boarding',
      previousSchool: '',
      message: '',
    });
  };

  const handleDownloadForm = () => {
    setDownloadSuccess(true);
    // Simulate instant download trigger
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const timelineSteps = [
    {
      step: '01',
      title: 'Initial Enquiry',
      desc: 'Submit our online form, visit our admissions desk at Plot 14 Kampala-Jinja Highway Mukono, or reach us via WhatsApp to receive the current prospectus and requirement guide.',
    },
    {
      step: '02',
      title: 'Application Submission',
      desc: 'Complete the official Mwanaweika application form with copies of PLE / UCE results, student birth certificate, previous school report cards, and two recent passport photographs.',
    },
    {
      step: '03',
      title: 'Entrance Assessment / Interview',
      desc: 'Shortlisted candidates attend a friendly diagnostic entrance evaluation in Mathematics and English, followed by a personal character interview with the student and parents.',
    },
    {
      step: '04',
      title: 'Admission Decision & Offer',
      desc: 'Formal admission letters and bank payment slips are issued to successful applicants within 5 working days of the interview.',
    },
    {
      step: '05',
      title: 'Bank Registration & Medical',
      desc: 'Confirm placement by paying the required term fees into our official Stanbic or Centenary Bank school accounts, and submit the certified school medical fitness form.',
    },
    {
      step: '06',
      title: 'Reporting & Orientation',
      desc: 'New students report on designated admission day for dormitory allocation, uniform fitting, campus tour, and welcome orientation with senior teachers.',
    },
  ];

  const requirements = [
    'Certified copy of Primary Leaving Examination (PLE) or Uganda Certificate of Education (UCE) Result Slip',
    'Certified copies of report cards from the previous two academic terms',
    'Letter of recommendation and good moral conduct from previous school Head Teacher',
    'Official Birth Certificate and National Identification Number (NIN) where applicable',
    'Three recent colored passport-sized photographs (with student name written on the reverse)',
    'Completed Mwanaweika High School Medical Fitness & Immunization Assessment Form',
    'Parent / Guardian National ID or Passport identification copy',
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'Admissions' }]} />

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
              Join the Mwanaweika Family
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              Begin Your Journey at Mwanaweika
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              We welcome ambitious, disciplined young men and women into our vibrant community in Mukono. Discover our transparent admission procedure, criteria, and fees guidelines below.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleDownloadForm}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download 2026 Admission Package (PDF)</span>
              </button>
              <a
                href="#apply-form"
                className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/40 backdrop-blur-md transition-all cursor-pointer shadow-sm"
              >
                Fill Online Enquiry Form
              </a>
            </div>
            {downloadSuccess && (
              <div className="p-3 bg-emerald-900/90 border border-emerald-500/50 rounded-xl text-emerald-200 text-xs max-w-md mx-auto animate-fadeIn">
                ✓ 2026 Prospectus & Official Admission Form generated! (Check your downloads folder)
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Mwanaweika (Summary Pillars) */}
      <section id="why-choose" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
            The Right Investment
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
            Why Choose Mwanaweika High School?
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Parents who choose our school seek an environment that guarantees their child&apos;s physical safety, moral protection, academic focus, and university preparedness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <Shield className="w-10 h-10 text-amber-700" />
            <h3 className="font-editorial text-2xl font-bold text-stone-900">
              Safe & Serene Campus
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Situated in Mukono on 18 enclosed acres with 24-hour perimeter security, controlled visitor access, and on-site residential staff caring for every pupil.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <UserCheck className="w-10 h-10 text-amber-700" />
            <h3 className="font-editorial text-2xl font-bold text-stone-900">
              Passionate Mentorship
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Our 1:20 teacher-to-student ratio ensures no student falls behind in syllabus coverage, reading confidence, or character development.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <Building className="w-10 h-10 text-amber-700" />
            <h3 className="font-editorial text-2xl font-bold text-stone-900">
              Complete Facilities
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Dedicated science laboratories, 80 networked computers, 14,000-volume library, football grounds, running track, and on-site sickbay with qualified nurses.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process (Numbered Timeline) */}
      <section id="process" className="py-20 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Step-by-Step
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              Our Admission Process
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Follow this clear 6-step journey to enroll your son or daughter at Mwanaweika High School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineSteps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-crest text-2xl font-bold text-amber-700 mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Checklist & Boarding vs Day */}
      <section id="requirements" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Requirements Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block">
              Documentation
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
              Admission Requirements Checklist
            </h2>
            <div className="w-16 h-1 bg-amber-600 rounded-full" />
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Prospective students must submit the following original documents and copies when reporting for assessment or registration:
            </p>

            <div className="space-y-3 pt-2">
              {requirements.map((req, rIdx) => (
                <div key={rIdx} className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-stone-200 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-stone-800 font-medium">
                    {req}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={handleDownloadForm}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0b2545] hover:text-amber-700 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Requirements Checklist as Printable PDF</span>
              </button>
            </div>
          </div>

          {/* Right: Boarding vs Day Scholar Comparison */}
          <div id="boarding-day" className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block">
              Residential Options
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
              Boarding & Day Students
            </h2>
            <div className="w-16 h-1 bg-amber-600 rounded-full" />

            <div className="space-y-4">
              {/* Boarding Section */}
              <div className="p-6 rounded-2xl bg-[#0b2545] text-white shadow-md">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block mb-1">
                  Full Boarding Scholar
                </span>
                <h4 className="font-editorial text-xl font-bold mb-2">
                  Immersive 24/7 Educational Environment
                </h4>
                <ul className="text-xs text-stone-300 space-y-1.5 leading-relaxed">
                  <li>• Residence in Kabalega, Rwenzori, Nile, or Victoria House</li>
                  <li>• Structured morning & evening preps with teacher supervision</li>
                  <li>• Three balanced hot meals plus afternoon tea and snacks daily</li>
                  <li>• On-campus infirmary with 24-hour qualified medical staff</li>
                  <li>• Supervised weekend recreation, sports, and church services</li>
                </ul>
              </div>

              {/* Day Section */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-800 block mb-1">
                  Day Scholar (Mukono Municipality)
                </span>
                <h4 className="font-editorial text-xl font-bold text-stone-900 mb-2">
                  Convenient for Local Families
                </h4>
                <ul className="text-xs text-stone-600 space-y-1.5 leading-relaxed">
                  <li>• School day runs from 7:00 AM to 5:00 PM (Monday – Friday)</li>
                  <li>• Morning break tea and wholesome lunch provided in dining hall</li>
                  <li>• Access to evening sports, clubs, and library revision until 5:30 PM</li>
                  <li>• Secure dedicated drop-off and pickup gate manned by security</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Fees & Financial Guidance (Transparent Placeholders) */}
      <section id="fees" className="py-20 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Financial Information
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              Fees Structure & Bank Guidelines
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We offer competitive, value-oriented fees for secondary education in Uganda. All fees must be paid via authorized commercial banks into the school account. Cash payments at school are strictly not accepted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  O-Level (S.1 – S.4)
                </span>
                <h3 className="font-editorial text-2xl font-bold text-stone-900 mt-1 mb-3">
                  Lower Secondary Tuition
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Covers full academic instruction, science laboratory practical reagents, computer lab access, continuous mock assessments, and library services.
                </p>
                <div className="p-3 bg-stone-50 rounded-lg text-xs text-stone-700">
                  <span className="font-semibold block text-stone-900">Enquiries:</span>
                  Please contact the Bursar or Admissions desk for the official current term fee schedule slip.
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-amber-800 font-semibold">
                Flexible termly installment plan available
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  A-Level (S.5 – S.6)
                </span>
                <h3 className="font-editorial text-2xl font-bold text-stone-900 mt-1 mb-3">
                  Upper Secondary & Labs
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Encompasses advanced subject combinations (Sciences & Arts), university guidance seminars, UNEB mock examination fees, and research internet bandwidth.
                </p>
                <div className="p-3 bg-stone-50 rounded-lg text-xs text-stone-700">
                  <span className="font-semibold block text-stone-900">Enquiries:</span>
                  Special academic merit bursaries awarded to top-scoring PLE and UCE distinctions.
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-amber-800 font-semibold">
                Merit scholarships for Division 1 distinctions
              </div>
            </div>

            <div className="bg-[#0b2545] text-white p-8 rounded-2xl shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Authorized Bank Accounts
                </span>
                <h3 className="font-editorial text-2xl font-bold text-white mt-1 mb-3">
                  Fee Payment Channels
                </h3>
                <div className="space-y-3 text-xs text-stone-200">
                  <div className="p-2.5 bg-white/5 rounded-lg border border-white/10">
                    <span className="font-bold text-amber-300 block">Stanbic Bank (U) Ltd:</span>
                    Account Name: Mwanaweika High School<br />
                    Branch: Mukono Branch<br />
                    Bank Code: 90300... (On official bank slip)
                  </div>
                  <div className="p-2.5 bg-white/5 rounded-lg border border-white/10">
                    <span className="font-bold text-amber-300 block">Centenary Rural Dev. Bank:</span>
                    Account Name: Mwanaweika High School<br />
                    Branch: Mukono Branch<br />
                    Bank Code: 31000... (On official bank slip)
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-stone-400">
                School Pay & PegPay codes also enabled.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Application & Enquiry Form */}
      <section id="apply-form" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Direct Application
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
              Admissions Enquiry & Application Form
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Fill out this preliminary enquiry form. Our admissions officer will contact you within 24 hours with the next steps and interview schedule.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-emerald-950">
                Application Enquiry Submitted!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in Mwanaweika High School. An admissions counselor will review your submission and contact you via phone and email.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-[#0b2545] text-white text-xs font-semibold rounded-xl hover:bg-amber-600 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Student&apos;s Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Kato Derrick"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Mr. John Mubiru"
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
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="parent@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+256 700 000 000"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Intended Class *
                  </label>
                  <select
                    value={formData.intendedClass}
                    onChange={(e) => setFormData({ ...formData, intendedClass: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50 cursor-pointer"
                  >
                    <option value="Senior One (S.1)">Senior One (S.1)</option>
                    <option value="Senior Two (S.2) Transfer">Senior Two (S.2) Transfer</option>
                    <option value="Senior Three (S.3) Transfer">Senior Three (S.3) Transfer</option>
                    <option value="Senior Four (S.4) Candidate">Senior Four (S.4) Candidate</option>
                    <option value="Senior Five (S.5) Arts">Senior Five (S.5) Arts</option>
                    <option value="Senior Five (S.5) Sciences">Senior Five (S.5) Sciences</option>
                    <option value="Senior Six (S.6) Candidate">Senior Six (S.6) Candidate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                    Enrollment Type *
                  </label>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, boardingType: 'Boarding' })}
                      className={`py-2.5 px-4 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                        formData.boardingType === 'Boarding'
                          ? 'bg-[#0b2545] text-white border-[#0b2545] shadow-sm'
                          : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      Boarding Section
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, boardingType: 'Day' })}
                      className={`py-2.5 px-4 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                        formData.boardingType === 'Day'
                          ? 'bg-[#0b2545] text-white border-[#0b2545] shadow-sm'
                          : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      Day Scholar
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                  Previous School Attended *
                </label>
                <input
                  type="text"
                  required
                  value={formData.previousSchool}
                  onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                  placeholder="e.g. St. Agnes Primary School, Entebbe"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                  Special Notes / Inquiries
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention any specific subject combination interest, talent in sports/music, or questions..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
