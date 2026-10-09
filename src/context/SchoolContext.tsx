import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Announcement,
  LeadershipMember,
  StudentLeader,
  Department,
  TeacherProfile,
  NewsEvent,
  Facility,
  GalleryItem,
  AlumniStory,
  Dormitory,
  SchoolStats,
  AdmissionInquiry,
  ContactSubmission,
  AlumniRegistration
} from '../types';
import {
  INITIAL_ANNOUNCEMENT,
  INITIAL_STATS,
  INITIAL_LEADERSHIP,
  INITIAL_STUDENT_LEADERS,
  INITIAL_DEPARTMENTS,
  INITIAL_TEACHERS,
  INITIAL_DORMITORIES,
  INITIAL_FACILITIES,
  INITIAL_NEWS_EVENTS,
  INITIAL_GALLERY,
  INITIAL_ALUMNI,
  SCHOOL_CONTACT
} from '../data/initialData';

interface SchoolContextType {
  currentPath: string;
  navigate: (path: string) => void;
  announcement: Announcement;
  setAnnouncement: (ann: Announcement) => void;
  stats: SchoolStats;
  setStats: (stats: SchoolStats) => void;
  leadership: LeadershipMember[];
  setLeadership: (items: LeadershipMember[]) => void;
  studentLeaders: StudentLeader[];
  departments: Department[];
  teachers: TeacherProfile[];
  dormitories: Dormitory[];
  facilities: Facility[];
  newsEvents: NewsEvent[];
  setNewsEvents: (items: NewsEvent[]) => void;
  gallery: GalleryItem[];
  setGallery: (items: GalleryItem[]) => void;
  alumni: AlumniStory[];
  contactInfo: typeof SCHOOL_CONTACT;
  
  // Interactive submissions
  admissionInquiries: AdmissionInquiry[];
  submitAdmissionInquiry: (inquiry: Omit<AdmissionInquiry, 'id' | 'submittedAt'>) => void;
  contactSubmissions: ContactSubmission[];
  submitContactForm: (sub: Omit<ContactSubmission, 'id' | 'submittedAt'>) => void;
  alumniRegistrations: AlumniRegistration[];
  submitAlumniRegistration: (reg: Omit<AlumniRegistration, 'id' | 'submittedAt'>) => void;
  
  // Lightbox Modal state
  activeLightboxIndex: number | null;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  
  // Profile Detail Modal state
  selectedLeader: LeadershipMember | null;
  setSelectedLeader: (leader: LeadershipMember | null) => void;
  selectedStudentLeader: StudentLeader | null;
  setSelectedStudentLeader: (leader: StudentLeader | null) => void;
  selectedNewsEvent: NewsEvent | null;
  setSelectedNewsEvent: (evt: NewsEvent | null) => void;
  
  // Admin reset
  resetToDefaults: () => void;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Path state initialized from browser URL
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      return p === '' ? '/' : p;
    }
    return '/';
  });

  // Listen to popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== path) {
        window.history.pushState({}, '', path);
      }
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // State with LocalStorage persistence for CMS capability
  const [announcement, setAnnouncementState] = useState<Announcement>(() => {
    try {
      const saved = localStorage.getItem('mwanaweika_announcement');
      return saved ? JSON.parse(saved) : INITIAL_ANNOUNCEMENT;
    } catch {
      return INITIAL_ANNOUNCEMENT;
    }
  });

  const [stats, setStatsState] = useState<SchoolStats>(() => {
    try {
      const saved = localStorage.getItem('mwanaweika_stats');
      return saved ? JSON.parse(saved) : INITIAL_STATS;
    } catch {
      return INITIAL_STATS;
    }
  });

  const [leadership, setLeadershipState] = useState<LeadershipMember[]>(() => {
    try {
      const saved = localStorage.getItem('mwanaweika_leadership_v2');
      return saved ? JSON.parse(saved) : INITIAL_LEADERSHIP;
    } catch {
      return INITIAL_LEADERSHIP;
    }
  });

  const [newsEvents, setNewsEventsState] = useState<NewsEvent[]>(() => {
    try {
      const saved = localStorage.getItem('mwanaweika_newsevents');
      return saved ? JSON.parse(saved) : INITIAL_NEWS_EVENTS;
    } catch {
      return INITIAL_NEWS_EVENTS;
    }
  });

  const [gallery, setGalleryState] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem('mwanaweika_gallery');
      return saved ? JSON.parse(saved) : INITIAL_GALLERY;
    } catch {
      return INITIAL_GALLERY;
    }
  });

  const [studentLeaders] = useState<StudentLeader[]>(INITIAL_STUDENT_LEADERS);
  const [departments] = useState<Department[]>(INITIAL_DEPARTMENTS);
  const [teachers] = useState<TeacherProfile[]>(INITIAL_TEACHERS);
  const [dormitories] = useState<Dormitory[]>(INITIAL_DORMITORIES);
  const [facilities] = useState<Facility[]>(INITIAL_FACILITIES);
  const [alumni] = useState<AlumniStory[]>(INITIAL_ALUMNI);
  const [contactInfo] = useState(SCHOOL_CONTACT);

  // Submissions state
  const [admissionInquiries, setAdmissionInquiries] = useState<AdmissionInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('mwanaweika_admissions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('mwanaweika_contacts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [alumniRegistrations, setAlumniRegistrations] = useState<AlumniRegistration[]>(() => {
    try {
      const saved = localStorage.getItem('mwanaweika_alumni_regs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal states
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [selectedLeader, setSelectedLeader] = useState<LeadershipMember | null>(null);
  const [selectedStudentLeader, setSelectedStudentLeader] = useState<StudentLeader | null>(null);
  const [selectedNewsEvent, setSelectedNewsEvent] = useState<NewsEvent | null>(null);

  // Persistence helpers
  const setAnnouncement = (ann: Announcement) => {
    setAnnouncementState(ann);
    try {
      localStorage.setItem('mwanaweika_announcement', JSON.stringify(ann));
    } catch (e) {
      console.error(e);
    }
  };

  const setStats = (st: SchoolStats) => {
    setStatsState(st);
    try {
      localStorage.setItem('mwanaweika_stats', JSON.stringify(st));
    } catch (e) {
      console.error(e);
    }
  };

  const setLeadership = (items: LeadershipMember[]) => {
    setLeadershipState(items);
    try {
      localStorage.setItem('mwanaweika_leadership', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  };

  const setNewsEvents = (items: NewsEvent[]) => {
    setNewsEventsState(items);
    try {
      localStorage.setItem('mwanaweika_newsevents', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  };

  const setGallery = (items: GalleryItem[]) => {
    setGalleryState(items);
    try {
      localStorage.setItem('mwanaweika_gallery', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  };

  const submitAdmissionInquiry = (inquiry: Omit<AdmissionInquiry, 'id' | 'submittedAt'>) => {
    const newInquiry: AdmissionInquiry = {
      ...inquiry,
      id: 'adm-' + Date.now(),
      submittedAt: new Date().toLocaleString('en-UG', { timeZone: 'Africa/Kampala' }),
    };
    const updated = [newInquiry, ...admissionInquiries];
    setAdmissionInquiries(updated);
    try {
      localStorage.setItem('mwanaweika_admissions', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const submitContactForm = (sub: Omit<ContactSubmission, 'id' | 'submittedAt'>) => {
    const newSub: ContactSubmission = {
      ...sub,
      id: 'cnt-' + Date.now(),
      submittedAt: new Date().toLocaleString('en-UG', { timeZone: 'Africa/Kampala' }),
    };
    const updated = [newSub, ...contactSubmissions];
    setContactSubmissions(updated);
    try {
      localStorage.setItem('mwanaweika_contacts', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const submitAlumniRegistration = (reg: Omit<AlumniRegistration, 'id' | 'submittedAt'>) => {
    const newReg: AlumniRegistration = {
      ...reg,
      id: 'alm-reg-' + Date.now(),
      submittedAt: new Date().toLocaleString('en-UG', { timeZone: 'Africa/Kampala' }),
    };
    const updated = [newReg, ...alumniRegistrations];
    setAlumniRegistrations(updated);
    try {
      localStorage.setItem('mwanaweika_alumni_regs', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const resetToDefaults = () => {
    localStorage.removeItem('mwanaweika_announcement');
    localStorage.removeItem('mwanaweika_stats');
    localStorage.removeItem('mwanaweika_leadership');
    localStorage.removeItem('mwanaweika_newsevents');
    localStorage.removeItem('mwanaweika_gallery');
    setAnnouncementState(INITIAL_ANNOUNCEMENT);
    setStatsState(INITIAL_STATS);
    setLeadershipState(INITIAL_LEADERSHIP);
    setNewsEventsState(INITIAL_NEWS_EVENTS);
    setGalleryState(INITIAL_GALLERY);
  };

  return (
    <SchoolContext.Provider
      value={{
        currentPath,
        navigate,
        announcement,
        setAnnouncement,
        stats,
        setStats,
        leadership,
        setLeadership,
        studentLeaders,
        departments,
        teachers,
        dormitories,
        facilities,
        newsEvents,
        setNewsEvents,
        gallery,
        setGallery,
        alumni,
        contactInfo,
        admissionInquiries,
        submitAdmissionInquiry,
        contactSubmissions,
        submitContactForm,
        alumniRegistrations,
        submitAlumniRegistration,
        activeLightboxIndex,
        openLightbox,
        closeLightbox,
        selectedLeader,
        setSelectedLeader,
        selectedStudentLeader,
        setSelectedStudentLeader,
        selectedNewsEvent,
        setSelectedNewsEvent,
        resetToDefaults,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};
