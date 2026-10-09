import React, { useState, useEffect } from 'react';
import { useSchool } from '../../context/SchoolContext';
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Sparkles,
  BookOpen,
  Calendar,
  Users,
  Compass,
  Building,
  Image as ImageIcon,
  PhoneCall,
  ShieldCheck
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useSchool();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  const handleNav = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    {
      label: 'About',
      path: '/about',
      subLinks: [
        { label: 'Our Story & Heritage', path: '/about#story' },
        { label: 'Mission, Vision & Values', path: '/about#values' },
        { label: "Head Teacher's Message", path: '/about#headteacher' },
        { label: 'School Leadership', path: '/leadership' },
      ],
    },
    {
      label: 'Academics',
      path: '/academics',
      subLinks: [
        { label: 'Academic Programs (UCE & UACE)', path: '/academics#programs' },
        { label: 'Academic Departments', path: '/academics#departments' },
        { label: 'Computer & Science Labs', path: '/academics#labs' },
        { label: 'Our Teaching Faculty', path: '/academics#teachers' },
      ],
    },
    {
      label: 'Admissions',
      path: '/admissions',
      subLinks: [
        { label: 'Why Choose Mwanaweika', path: '/admissions#why-choose' },
        { label: 'Admission Process & Steps', path: '/admissions#process' },
        { label: 'Requirements Checklist', path: '/admissions#requirements' },
        { label: 'Boarding vs. Day Scholar', path: '/admissions#boarding-day' },
        { label: 'Fees & Enquiries', path: '/admissions#fees' },
      ],
    },
    {
      label: 'Student Life',
      path: '/student-life',
      subLinks: [
        { label: 'Boarding Life & Dormitories', path: '/student-life#boarding' },
        { label: 'Clubs, Societies & Band', path: '/student-life#clubs' },
        { label: 'Games, Sports & Athletics', path: '/sports-day' },
        { label: 'Religious Life & Sunday Mass', path: '/student-life#religious' },
        { label: 'Prefect Body & Leadership', path: '/student-life#prefects' },
      ],
    },
    {
      label: 'Facilities',
      path: '/facilities',
    },
    {
      label: 'Gallery',
      path: '/gallery',
    },
    {
      label: 'Events',
      path: '/news-events',
      subLinks: [
        { label: 'All News & Bulletins', path: '/news-events' },
        { label: 'Speech Day Experience', path: '/speech-day' },
        { label: 'Sports Day Championship', path: '/sports-day' },
        { label: 'Visitation Day Guide', path: '/visitation-day' },
      ],
    },
    {
      label: 'Alumni',
      path: '/alumni',
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f2b48]/95 backdrop-blur-md shadow-md py-3 border-b border-amber-600/20'
          : 'bg-[#0b2545] py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark */}
          <div
            onClick={() => handleNav('/')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-[#0b2545]" />
            </div>
            <div>
              <span className="font-crest text-lg sm:text-xl font-bold tracking-wider text-white block leading-tight">
                MWANAWEIKA
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-amber-300 block">
                High School • Mukono
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              const hasSub = Boolean(link.subLinks);

              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => hasSub && setActiveDropdown(link.label)}
                  onMouseLeave={() => hasSub && setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNav(link.path)}
                    className={`px-3 py-2 text-xs 2xl:text-sm font-medium rounded-md transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-amber-400 bg-white/10'
                        : 'text-stone-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {hasSub && (
                      <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-400 transition-transform group-hover:rotate-180" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {hasSub && (
                    <div
                      className={`absolute top-full left-0 mt-1 w-60 rounded-xl bg-[#0f2b48] border border-amber-500/20 shadow-2xl p-2 transition-all duration-200 ${
                        activeDropdown === link.label
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="space-y-1">
                        {link.subLinks?.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => handleNav(sub.path)}
                            className="w-full text-left px-3 py-2 text-xs text-stone-200 hover:text-amber-300 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-between group cursor-pointer"
                          >
                            <span>{sub.label}</span>
                            <span className="text-amber-400/50 group-hover:text-amber-400 transition-colors">
                              →
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNav('/admin')}
              title="School Management Portal"
              className="px-3 py-2 text-xs font-medium text-stone-300 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Portal</span>
            </button>
            <button
              onClick={() => handleNav('/admissions')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md shadow-amber-500/10 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              Apply for 2026
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => handleNav('/admissions')}
              className="md:hidden px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-md"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a1e35] border-t border-white/10 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const hasSub = Boolean(link.subLinks);
              const isOpen = activeDropdown === link.label;

              return (
                <div key={link.label} className="border-b border-white/5 pb-1">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleNav(link.path)}
                      className={`text-left py-2.5 px-3 text-sm font-medium rounded-lg flex-1 ${
                        currentPath === link.path ? 'text-amber-400 font-semibold' : 'text-stone-200'
                      }`}
                    >
                      {link.label}
                    </button>
                    {hasSub && (
                      <button
                        onClick={() => setActiveDropdown(isOpen ? null : link.label)}
                        className="p-2 text-stone-400 hover:text-white"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-amber-400' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {hasSub && isOpen && (
                    <div className="pl-4 pr-2 pb-2 space-y-1">
                      {link.subLinks?.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleNav(sub.path)}
                          className="block w-full text-left py-2 px-3 text-xs text-stone-300 hover:text-amber-300 rounded hover:bg-white/5"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
            <button
              onClick={() => handleNav('/admissions')}
              className="w-full py-3 text-center text-sm font-semibold text-slate-950 bg-amber-400 rounded-lg shadow-sm"
            >
              Begin Admission Application
            </button>
            <button
              onClick={() => handleNav('/admin')}
              className="w-full py-2.5 text-center text-xs font-medium text-stone-300 hover:text-white border border-white/20 rounded-lg"
            >
              School Staff CMS & Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
