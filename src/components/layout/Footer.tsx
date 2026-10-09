import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { HERO_CAMPUS_IMG } from '../../data/initialData';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, contactInfo } = useSchool();

  return (
    <footer className="relative bg-stone-950 text-stone-300 overflow-hidden border-t border-amber-600/30">
      {/* Fixed Background Image with Parallax Effect & 100% Visible Presence */}
      <div
        className="absolute inset-0 bg-fixed-parallax opacity-100 pointer-events-none"
        style={{ backgroundImage: `url(${HERO_CAMPUS_IMG})` }}
      />
      {/* Reduced darkness to 2% */}
      <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

      {/* Main Content inside high-contrast glass card */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 z-10">
        <div className="bg-[#071728]/85 backdrop-blur-md rounded-3xl border border-white/20 p-8 sm:p-12 shadow-2xl space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: School Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => navigate('/')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-7 h-7 text-[#0b2545]" />
              </div>
              <div>
                <span className="font-crest text-xl sm:text-2xl font-bold tracking-wider text-white block">
                  MWANAWEIKA
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-sans block">
                  High School • Mukono
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-md pt-2">
              A premier Ugandan secondary school dedicated to holistic education, moral integrity, academic discipline, and preparing agile future leaders for our nation and the world.
            </p>

            <div className="pt-2">
              <span className="text-xs font-serif italic text-amber-300 block">
                Motto: &ldquo;{contactInfo.motto}&rdquo;
              </span>
              <span className="text-xs text-stone-400 mt-1 block">
                UNEB Examination Centre: {contactInfo.unebCenterNumber}
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={contactInfo.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all text-xs font-semibold"
                title="WhatsApp Admissions"
              >
                WA
              </a>
              <a
                href={contactInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-xs font-semibold"
                title="Facebook"
              >
                FB
              </a>
              <a
                href={contactInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-rose-600/20 border border-rose-500/30 text-rose-400 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all text-xs font-semibold"
                title="Instagram"
              >
                IG
              </a>
              <a
                href={contactInfo.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all text-xs font-semibold"
                title="YouTube"
              >
                YT
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-crest text-sm tracking-widest uppercase text-white font-semibold pb-1 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { label: 'About Our School', path: '/about' },
                { label: 'School Leadership', path: '/leadership' },
                { label: 'Academic Programs', path: '/academics' },
                { label: 'Campus Facilities', path: '/facilities' },
                { label: 'Student Life & Dorms', path: '/student-life' },
                { label: 'Photo Gallery', path: '/gallery' },
                { label: 'Alumni Network', path: '/alumni' },
                { label: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-stone-300 hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academics & Events */}
          <div className="space-y-3">
            <h4 className="font-crest text-sm tracking-widest uppercase text-white font-semibold pb-1 border-b border-white/10">
              Programs & Events
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { label: 'O-Level Curriculum (UCE)', path: '/academics#programs' },
                { label: 'A-Level Curriculum (UACE)', path: '/academics#programs' },
                { label: 'Computer & Coding Lab', path: '/academics#labs' },
                { label: 'Science Laboratories', path: '/facilities#science' },
                { label: 'Speech Day Celebrations', path: '/speech-day' },
                { label: 'Sports Day Championship', path: '/sports-day' },
                { label: 'Parent Visitation Day', path: '/visitation-day' },
                { label: 'Boarding Section', path: '/student-life#boarding' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-stone-300 hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Admissions & Contact Details */}
          <div className="space-y-3">
            <h4 className="font-crest text-sm tracking-widest uppercase text-white font-semibold pb-1 border-b border-white/10">
              Campus & Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{contactInfo.location}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href={`tel:${contactInfo.phone1}`} className="hover:text-amber-400 block transition-colors">
                    {contactInfo.phone1}
                  </a>
                  <a href={`tel:${contactInfo.phone2}`} className="hover:text-amber-400 block transition-colors">
                    {contactInfo.phone2}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${contactInfo.admissionsEmail}`} className="hover:text-amber-400 transition-colors break-all">
                  {contactInfo.admissionsEmail}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs leading-relaxed text-stone-400">
                  {contactInfo.officeHours}
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/admissions')}
                  className="w-full py-2 px-3 text-center text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Admissions Enquiries
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 Mwanaweika High School, Mukono Uganda. All Rights Reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => navigate('/contact')}
              className="hover:text-amber-300 transition-colors"
            >
              School Terms & Policies
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => navigate('/contact')}
              className="hover:text-amber-300 transition-colors"
            >
              Parent Code of Conduct
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => navigate('/admin')}
              className="hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Staff Portal</span>
            </button>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};
