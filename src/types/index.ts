export interface Announcement {
  id: string;
  message: string;
  linkText?: string;
  linkUrl?: string;
  isActive: boolean;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  category: 'executive' | 'academic' | 'welfare' | 'administrative';
  qualifications: string;
  image: string;
  bio: string;
  quote?: string;
  fullMessage?: string;
}

export interface StudentLeader {
  id: string;
  name: string;
  title: string;
  combinationOrClass: string;
  image: string;
  shortMessage: string;
  fullSpeech: string;
}

export interface Department {
  id: string;
  name: string;
  hodName: string;
  hodQualifications: string;
  hodImage: string;
  description: string;
  subjects: string[];
  achievements: string;
}

export interface TeacherProfile {
  id: string;
  name: string;
  department: string;
  subjects: string[];
  qualifications: string;
  experienceYears: number;
  image: string;
}

export interface NewsEvent {
  id: string;
  title: string;
  type: 'news' | 'event' | 'speech_day' | 'visitation_day' | 'sports_day';
  date: string;
  formattedDate: string;
  location?: string;
  summary: string;
  content: string;
  image: string;
  gallery?: string[];
  isFeatured?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  category: 'academic' | 'residential' | 'sports' | 'welfare';
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  gallery: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Academics' | 'Students' | 'Sports' | 'Events' | 'Speech Day' | 'Visitation Day' | 'Facilities' | 'Boarding' | 'Religious Life' | 'Campus';
  image: string;
  caption: string;
  date: string;
}

export interface AlumniStory {
  id: string;
  name: string;
  graduationYear: number;
  profession: string;
  currentCompanyOrField: string;
  location: string;
  image: string;
  story: string;
  adviceToStudents: string;
}

export interface Dormitory {
  id: string;
  name: string;
  gender: 'Boys' | 'Girls';
  capacity: string;
  wardenName: string;
  wardenTitle: string;
  image: string;
  description: string;
  patronSaintOrMotto: string;
}

export interface AdmissionInquiry {
  id: string;
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  intendedClass: string;
  boardingType: 'Boarding' | 'Day';
  previousSchool: string;
  message?: string;
  submittedAt: string;
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface AlumniRegistration {
  id: string;
  fullName: string;
  gradYear: string;
  email: string;
  phone: string;
  profession: string;
  location: string;
  message: string;
  submittedAt: string;
}

export interface SchoolStats {
  studentsCount: number;
  teachersCount: number;
  departmentsCount: number;
  yearsOfExcellence: number;
  clubsCount: number;
  unebPassRate: string;
}
