import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { HERO_CAMPUS_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  ExternalLink,
  Building
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { contactInfo, submitContactForm, navigate } = useSchool();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactForm(form);
    setIsSuccess(true);
    setForm({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

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
              Get in Touch With Us
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              We Would Love to Hear From You
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              Whether you are inquiring about admissions, student welfare, academic progress, or scheduling a visit to our Mukono campus, our administration is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Campus Address */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-stone-500 block">
                Physical Campus
              </span>
              <h3 className="font-editorial text-xl font-bold text-stone-900">
                Mukono, Uganda
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {contactInfo.location}
              </p>
            </div>
            <span className="text-xs text-amber-800 font-semibold pt-2 border-t border-stone-100">
              {contactInfo.poBox}
            </span>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-stone-500 block">
                Direct Telephones
              </span>
              <h3 className="font-editorial text-xl font-bold text-stone-900">
                Admissions & Office
              </h3>
              <div className="text-xs text-stone-600 mt-1 space-y-1">
                <a href={`tel:${contactInfo.phone1}`} className="hover:text-amber-700 block font-medium">
                  {contactInfo.phone1} (Admissions)
                </a>
                <a href={`tel:${contactInfo.phone2}`} className="hover:text-amber-700 block font-medium">
                  {contactInfo.phone2} (Head Teacher)
                </a>
              </div>
            </div>
            <a
              href={contactInfo.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-emerald-700 font-semibold pt-2 border-t border-stone-100 flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>

          {/* Card 3: Email Contacts */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-stone-500 block">
                Official Inquiries
              </span>
              <h3 className="font-editorial text-xl font-bold text-stone-900">
                Email Addresses
              </h3>
              <div className="text-xs text-stone-600 mt-1 space-y-1">
                <a href={`mailto:${contactInfo.admissionsEmail}`} className="hover:text-amber-700 block break-all font-medium">
                  {contactInfo.admissionsEmail}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-amber-700 block break-all">
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <span className="text-xs text-stone-500 pt-2 border-t border-stone-100">
              Responses within 24 hours
            </span>
          </div>

          {/* Card 4: Operating Hours */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-stone-500 block">
                Office Hours
              </span>
              <h3 className="font-editorial text-xl font-bold text-stone-900">
                Working Schedule
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {contactInfo.officeHours}
              </p>
            </div>
            <span className="text-xs text-amber-800 font-semibold pt-2 border-t border-stone-100">
              UNEB: {contactInfo.unebCenterNumber}
            </span>
          </div>
        </div>
      </section>

      {/* Contact Form + Admissions Callout Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: General Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-lg">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Send a Message
            </span>
            <h2 className="font-editorial text-3xl font-bold text-stone-900 mb-2">
              School Inquiry Form
            </h2>
            <div className="w-12 h-1 bg-amber-600 rounded-full mb-6" />

            {isSuccess ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-emerald-950">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Mwanaweika High School. Your inquiry has been routed to the relevant department and an administrator will respond promptly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-[#0b2545] text-white text-xs font-semibold rounded-xl hover:bg-amber-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="e.g. Grace Namubiru"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+256 700 000 000"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g. Admission vacancy / Visitation"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Your Message / Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 text-sm bg-stone-50"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to School</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Admissions Fast-Track Box & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0b2545] text-white p-8 rounded-3xl shadow-lg space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400 block">
                Looking for Admissions?
              </span>
              <h3 className="font-editorial text-2xl font-bold leading-tight">
                Senior One & Senior Five Vacancies for 2026
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Parents applying for S.1 (following PLE) or S.5 (following UCE) can directly submit student qualifications through our dedicated admission portal.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigate('/admissions')}
                  className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center"
                >
                  Go to Admissions Portal
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <h4 className="font-editorial text-xl font-bold text-stone-900">
                Visiting Our Campus in Mukono
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                We are located along the Kampala - Jinja Highway in Mukono Municipality. When driving from Kampala, continue past Mukono Central Market; our marked school gate is easily accessible with paved parking and visitor registration.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-amber-800">
                <Building className="w-4 h-4" />
                <span>Security gate checkpoint will guide you to Visitor Reception</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Map: Mukono, Uganda */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-800 block">
                Geographic Location
              </span>
              <h3 className="font-editorial text-2xl font-bold text-stone-900">
                Map of Mwanaweika High School, Mukono Uganda
              </h3>
            </div>
            <a
              href="https://www.openstreetmap.org/?mlat=0.3544&mlon=32.7533#map=15/0.3544/32.7533"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900"
            >
              <span>Open in Fullscreen Map</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Map Container */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-inner">
            <iframe
              title="Mwanaweika High School Mukono Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://www.openstreetmap.org/export/embed.html?bbox=32.7300%2C0.3400%2C32.7800%2C0.3700&amp;layer=mapnik&amp;marker=0.3544%2C32.7533"
              className="w-full h-full"
            />
          </div>
          <div className="text-right text-[11px] text-stone-500">
            Coordinates: 0.3544° N, 32.7533° E • Kampala - Jinja Highway, Mukono, Uganda
          </div>
        </div>
      </section>

    </div>
  );
};
