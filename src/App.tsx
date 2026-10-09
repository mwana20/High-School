/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';
import { BackToTop } from './components/layout/BackToTop';
import { Lightbox } from './components/common/Lightbox';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { StudentLifePage } from './pages/StudentLifePage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { NewsEventsPage } from './pages/NewsEventsPage';
import { AlumniPage } from './pages/AlumniPage';
import { ContactPage } from './pages/ContactPage';
import { SpeechDayPage } from './pages/SpeechDayPage';
import { SportsDayPage } from './pages/SportsDayPage';
import { VisitationDayPage } from './pages/VisitationDayPage';
import { AdminPage } from './pages/AdminPage';

const PageRouter: React.FC = () => {
  const { currentPath, navigate } = useSchool();

  // Normalize path removing trailing slash or hash for matching
  const basePath = currentPath.split('#')[0].replace(/\/+$/, '') || '/';

  switch (basePath) {
    case '/':
      return <HomePage />;
    case '/about':
      return <AboutPage />;
    case '/academics':
      return <AcademicsPage />;
    case '/admissions':
      return <AdmissionsPage />;
    case '/student-life':
      return <StudentLifePage />;
    case '/facilities':
      return <FacilitiesPage />;
    case '/gallery':
      return <GalleryPage />;
    case '/leadership':
      return <LeadershipPage />;
    case '/news-events':
      return <NewsEventsPage />;
    case '/alumni':
      return <AlumniPage />;
    case '/contact':
      return <ContactPage />;
    case '/speech-day':
      return <SpeechDayPage />;
    case '/sports-day':
      return <SportsDayPage />;
    case '/visitation-day':
      return <VisitationDayPage />;
    case '/admin':
      return <AdminPage />;
    default:
      return (
        <div className="min-h-[70vh] flex items-center justify-center bg-[#FAF9F5] px-4 text-center">
          <div className="max-w-md space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
              Page Not Found
            </span>
            <h1 className="font-editorial text-4xl font-bold text-stone-900">
              404 — Direction Notice
            </h1>
            <p className="text-stone-600 text-sm">
              The page you are looking for may have moved or does not exist. Please return to the Mwanaweika High School home page.
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-[#0b2545] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-amber-600 transition-colors cursor-pointer"
            >
              Return to Home Page
            </button>
          </div>
        </div>
      );
  }
};

export default function App() {
  return (
    <SchoolProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-amber-700 selection:text-white">
        {/* Top Notice Bar */}
        <AnnouncementBar />

        {/* Sticky Institutional Navigation Bar */}
        <Navbar />

        {/* Dynamic Multi-Page Router */}
        <main className="flex-1">
          <PageRouter />
        </main>

        {/* Institutional Parallax Footer */}
        <Footer />

        {/* Interactive Floating Utilities & Lightbox */}
        <WhatsAppFloat />
        <BackToTop />
        <Lightbox />
      </div>
    </SchoolProvider>
  );
}
