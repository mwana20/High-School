import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { ACADEMICS_LAB_IMG, HERO_CAMPUS_IMG } from '../data/initialData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import {
  BookOpen,
  Cpu,
  FlaskConical,
  GraduationCap,
  Award,
  CheckCircle,
  FileCheck,
  Users,
  Search,
  ArrowRight
} from 'lucide-react';

export const AcademicsPage: React.FC = () => {
  const { navigate, departments, teachers } = useSchool();
  const [selectedDeptId, setSelectedDeptId] = useState<string>('all');

  const filteredTeachers = selectedDeptId === 'all'
    ? teachers
    : teachers.filter((t) => {
        const dept = departments.find((d) => d.id === selectedDeptId);
        return dept ? t.department.toLowerCase().includes(dept.name.toLowerCase().split(' ')[0]) : true;
      });

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs items={[{ label: 'Academics' }]} />

      {/* Hero Section */}
      <section className="relative py-28 bg-stone-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed-parallax bg-center bg-cover opacity-100"
          style={{ backgroundImage: `url(${ACADEMICS_LAB_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#071728]/70 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-sans font-semibold">
              Curriculum & Scholarly Rigor
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              Academic Excellence That Prepares Students for Tomorrow
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto my-3 rounded-full" />
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-100 leading-relaxed font-sans">
              Accredited by the Ministry of Education and Sports and UNEB for both O-Level (UCE) and A-Level (UACE), delivering rigorous intellectual training backed by cutting-edge laboratories.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Academic Programs (UCE & UACE) */}
      <section id="programs" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
            Curriculum Pathways
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
            Our Academic Programs
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We deliver the updated lower-secondary competency-based curriculum as well as rigorous Advanced Level combinations in both Arts and Sciences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* O-Level Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-md uppercase tracking-wider mb-4">
                Senior One to Senior Four (S.1 – S.4)
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
                Uganda Certificate of Education (UCE)
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
                Following the competence-based revised lower secondary curriculum that champions research, project work, ICT applications, continuous classroom assessment, and national UNEB examinations.
              </p>
              
              <div className="space-y-2 text-xs text-stone-700">
                <div className="font-semibold text-stone-900 pb-1 border-b border-stone-100">
                  Core Subject Coverage:
                </div>
                <div className="grid grid-cols-2 gap-2 text-stone-600">
                  <span>• Pure Mathematics</span>
                  <span>• Physics with Practicals</span>
                  <span>• Chemistry with Practicals</span>
                  <span>• Biology & Agriculture</span>
                  <span>• English Language</span>
                  <span>• Literature in English</span>
                  <span>• Computer Studies (ICT)</span>
                  <span>• Geography & History</span>
                  <span>• Christian Religious Ed.</span>
                  <span>• Entrepreneurship & Art</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>UNEB Centre: U0842</span>
              <button
                onClick={() => navigate('/admissions')}
                className="text-amber-700 font-semibold hover:underline"
              >
                Enroll for S.1 →
              </button>
            </div>
          </div>

          {/* A-Level Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0b2545] text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-amber-400 text-slate-950 text-xs font-bold rounded-md uppercase tracking-wider mb-4">
                Senior Five to Senior Six (S.5 – S.6)
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-3">
                Uganda Advanced Certificate of Education (UACE)
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6 font-sans">
                High-calibre university preparatory study spanning Sciences, Mathematics, Economics, and Humanities. Candidates compete directly for government national merit scholarships at premier universities.
              </p>
              
              <div className="space-y-2 text-xs text-stone-300">
                <div className="font-semibold text-white pb-1 border-b border-white/10">
                  Principal Combinations Offered:
                </div>
                <div className="grid grid-cols-2 gap-2 text-stone-300">
                  <span>• PCM / ICT (Eng / Tech)</span>
                  <span>• BCM / Sub-Math (Medicine)</span>
                  <span>• PEM / ICT (Engineering)</span>
                  <span>• MEG / Sub-Math (Econ/Fin)</span>
                  <span>• HEG / Sub-Math (Law/Arts)</span>
                  <span>• HEL / Sub-Math (Humanities)</span>
                  <span>• DEG / ICT (Social Sciences)</span>
                  <span>• Sub-ICT & General Paper</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
              <span>UNEB Centre: U1298</span>
              <button
                onClick={() => navigate('/admissions')}
                className="text-amber-400 font-semibold hover:underline"
              >
                Enroll for S.5 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Computer Laboratory Spotlight (Feature Section) */}
      <section id="labs" className="py-20 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-800 font-bold">
                <Cpu className="w-4 h-4" />
                <span>21st Century Skills</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                Modern Computer Laboratories & Digital Literacy
              </h2>
              <div className="w-16 h-1 bg-amber-600 rounded-full" />

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Mwanaweika High School recognizes that the future belongs to digitally fluent thinkers. Our 80-terminal computer center is air-conditioned, networked via high-speed fiber optics, and powered by redundant solar inverter backups to ensure zero disruption during study sessions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">Coding & Web Foundations</h4>
                  <p className="text-xs text-stone-600">Students learn HTML, CSS, and introductory Python programming in weekly ICT sessions.</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">Sub-ICT Mastery</h4>
                  <p className="text-xs text-stone-600">Extensive drill sessions with spreadsheets, presentation software, and database management for UNEB.</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">E-Library & Research</h4>
                  <p className="text-xs text-stone-600">Safe, filtered access to digital academic journals and global encyclopedias for class projects.</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">STEM Robotics Club</h4>
                  <p className="text-xs text-stone-600">Hands-on micro-controller tinkering and regional secondary schools robotics competition prep.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200">
                <img
                  src={ACADEMICS_LAB_IMG}
                  alt="Students engaged in computer laboratory practicals at Mwanaweika"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Academic Departments (Grid with HOD Profiles) */}
      <section id="departments" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
            Subject Faculties & Single-Subject Specialization
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Academic Departments & Heads of Department
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            In the Ugandan secondary school educational system (UNEB & Ministry of Education and Sports), each department is dedicated to strictly ONE subject discipline — English, Geography, History, Mathematics, Physics, Chemistry, Biology, Agriculture, Computer Studies (ICT), Economics, and CRE. Our Heads of Department lead and teach exclusively their specialized subject discipline without cross-subject division, ensuring the highest academic standard and focused mentorship for every learner.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-amber-900">
            <span>Ugandan Curriculum Standard: Single-Subject Department Leadership</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* HOD Quick Info */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-stone-100">
                  <img
                    src={dept.hodImage}
                    alt={dept.hodName}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-amber-400"
                  />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 block">
                      Head of Department
                    </span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm leading-tight">
                      {dept.hodName}
                    </h4>
                    <span className="text-[11px] text-stone-500 block truncate max-w-[200px]">
                      {dept.hodQualifications}
                    </span>
                  </div>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-2">
                  {dept.name}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {dept.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-semibold text-stone-800 block">Key Subjects:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {dept.subjects.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-amber-900 font-medium">
                ★ {dept.achievements}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Assessment & Academic Support */}
      <section className="py-20 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Continuous Improvement
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
              Examination, Assessment & Student Support
            </h2>
            <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <FileCheck className="w-8 h-8 text-amber-600" />
              <h3 className="font-editorial text-xl font-bold text-stone-900">
                Continuous Evaluation
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Students undertake beginning of term (BOT), mid-term (MOT), and end of term (EOT) examinations, coupled with weekly topic tests to reinforce concepts continuously.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <Users className="w-8 h-8 text-amber-600" />
              <h3 className="font-editorial text-xl font-bold text-stone-900">
                Remedial Teaching Clinics
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Tutors conduct targeted small-group clinics in the evening for learners who require extra explanation in mathematics, physical sciences, or languages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <Award className="w-8 h-8 text-amber-600" />
              <h3 className="font-editorial text-xl font-bold text-stone-900">
                UNEB National Mock Drills
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Senior Four and Senior Six candidates sit three extensive mock examination series from top national academic panels, mastering time management and question precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Directory */}
      <section id="teachers" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold block mb-2">
            Our Educators
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
            Meet Our Teaching Faculty
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Passionate subject specialists, curriculum developers, and examiners who take personal pride in every student&apos;s growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((tch) => (
            <div
              key={tch.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <img
                  src={tch.image}
                  alt={tch.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0b2545]/90 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                  {tch.experienceYears} Years Exp
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                    {tch.department}
                  </span>
                  <h3 className="font-editorial text-xl font-bold text-stone-900 leading-tight">
                    {tch.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {tch.qualifications}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 text-xs text-stone-600">
                  <span className="font-medium text-stone-800 block mb-1">Subjects Taught:</span>
                  <div className="flex flex-wrap gap-1">
                    {tch.subjects.map((s, idx) => (
                      <span key={idx} className="bg-stone-50 border border-stone-200 px-2 py-0.5 rounded text-[11px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0b2545] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold">
            Ready to Begin an Inspiring Academic Journey?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto">
            Contact our Admissions Office to request syllabus breakdowns, examination statistics, or schedule a campus consultation with our Director of Studies.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/admissions')}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg"
            >
              Apply for Admission
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              Contact Director of Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
