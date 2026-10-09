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
  SchoolStats
} from '../types';

export const HERO_CAMPUS_IMG = '/src/assets/images/mwanaweika_hero_campus_1791487006252.jpg';
export const ACADEMICS_LAB_IMG = '/src/assets/images/mwanaweika_academics_lab_1791487019176.jpg';
export const STUDENT_LIFE_IMG = '/src/assets/images/mwanaweika_student_life_1791487034963.jpg';
export const SPEECH_DAY_IMG = '/src/assets/images/mwanaweika_speech_day_1791487045784.jpg';

export const UGANDAN_DIRECTOR_IMG = '/src/assets/images/ugandan_male_director_1791489587808.jpg';
export const UGANDAN_HEADTEACHER_IMG = '/src/assets/images/ugandan_female_headteacher_1791489600371.jpg';
export const UGANDAN_FEMALE_HEADTEACHER_IMG = UGANDAN_HEADTEACHER_IMG;
export const UGANDAN_MALE_TEACHER_IMG = '/src/assets/images/ugandan_male_teacher_1791489611757.jpg';
export const UGANDAN_FEMALE_TEACHER_IMG = '/src/assets/images/ugandan_female_teacher_1791489622063.jpg';
export const UGANDAN_MALE_HOD_MATH_IMG = '/src/assets/images/ugandan_male_hod_math_1791490104888.jpg';
export const UGANDAN_FEMALE_HOD_ENGLISH_IMG = '/src/assets/images/ugandan_female_hod_english_1791490117740.jpg';
export const UGANDAN_MALE_HOD_AGRIC_IMG = '/src/assets/images/ugandan_male_hod_agric_1791490128699.jpg';
export const UGANDAN_FEMALE_HOD_SCIENCE_IMG = '/src/assets/images/ugandan_female_hod_science_1791490138130.jpg';

export const INITIAL_ANNOUNCEMENT: Announcement = {
  id: 'ann-1',
  message: 'Admissions for Senior One (S.1), Senior Five (S.5), and Transfer vacancies are currently open for the 2026 Academic Year.',
  linkText: 'Apply Online',
  linkUrl: '/admissions',
  isActive: true,
};

export const INITIAL_STATS: SchoolStats = {
  studentsCount: 1480,
  teachersCount: 74,
  departmentsCount: 10,
  yearsOfExcellence: 28,
  clubsCount: 22,
  unebPassRate: '98.6% Division 1 & 2',
};

export const INITIAL_LEADERSHIP: LeadershipMember[] = [
  {
    id: 'ldr-1',
    name: 'Rev. Canon Dr. Patrick Ssenyonjo',
    role: 'Board of Governors Chairman & Director',
    category: 'executive',
    qualifications: 'PhD in Educational Administration (Mak), M.Ed, B.Ed',
    image: UGANDAN_DIRECTOR_IMG,
    bio: 'Rev. Canon Dr. Patrick Ssenyonjo has led Mwanaweika High School with a steadfast vision anchored in Christian moral leadership, academic rigor, and all-round character building for over two decades.',
    quote: 'True education is not merely the training of the intellect, but the formation of the soul, character, and hands to serve God and humanity with diligence.',
    fullMessage: 'Warm greetings to all parents, guardians, alumni, and friends of Mwanaweika High School. When we laid the cornerstone of this institution here in Mukono, our prayer was to raise a generation of leaders grounded in moral courage, intellectual excellence, and unwavering discipline. Today, our students stand at the forefront of national and regional achievements. As you browse this website, we welcome you to become a partner in this noble transformation.'
  },
  {
    id: 'ldr-2',
    name: 'Mrs. Margaret Namubiru Musoke',
    role: 'Head Teacher',
    category: 'executive',
    qualifications: 'M.Sc Education Management, B.Sc with Education (Mak), PGDE',
    image: UGANDAN_HEADTEACHER_IMG,
    bio: 'Mrs. Margaret Musoke is a veteran Ugandan educator with 24 years of school administrative leadership. She champions discipline, student welfare, continuous teacher development, and digital technology integration.',
    quote: 'At Mwanaweika, no child is invisible. We mentor every learner to realize their God-given potential in academics, spirituality, sports, and life skills.',
    fullMessage: 'It gives me immense joy to welcome you to Mwanaweika High School. Located on the serene hills of Mukono, our school provides a tranquil, focused, and secure environment away from urban distractions. We run a comprehensive curriculum aligned with the Ministry of Education and Sports and UNEB standards, fortified by digital competencies in our ICT laboratories and robust extracurricular clubs. When you entrust your child to us, you are placing them in the care of dedicated mentors who love teaching and celebrate every milestone.'
  },
  {
    id: 'ldr-3',
    name: 'Mr. Emmanuel Kasule',
    role: 'Deputy Head Teacher (Administration)',
    category: 'executive',
    qualifications: 'M.Ed Curriculum & Instruction, B.A Ed (Kyambogo)',
    image: UGANDAN_MALE_TEACHER_IMG,
    bio: 'Oversees day-to-day operations, teacher welfare, campus security, infrastructural maintenance, and institutional partnerships.',
    quote: 'Discipline is the bridge between goals and accomplishment.',
  },
  {
    id: 'ldr-4',
    name: 'Ms. Rebecca Kyomugisha',
    role: 'Director of Studies (DOS)',
    category: 'academic',
    qualifications: 'M.Sc Pure Mathematics, B.Sc Ed, UNEB Chief Examiner Panelist',
    image: UGANDAN_FEMALE_TEACHER_IMG,
    bio: 'Spearheads academic curricula, continuous assessment, UNEB examination readiness, remedial clinics, and academic department supervision.',
    quote: 'Excellence is never an accident; it is always the result of high intention, sincere effort, and intelligent execution.',
  },
  {
    id: 'ldr-5',
    name: 'Mr. David Byamukama',
    role: 'Dean of Students & Discipline Master',
    category: 'welfare',
    qualifications: 'B.Ed Guidance & Counseling, Diploma in Youth Psychology',
    image: UGANDAN_MALE_TEACHER_IMG,
    bio: 'Coordinates dormitory wardens, counseling sessions, prefect body activities, and character formation programs.',
    quote: 'We guide with firm love, helping young people make responsible choices that honor their families.',
  },
  {
    id: 'ldr-6',
    name: 'Mrs. Sarah Nanteza Lule',
    role: 'School Bursar & Finance Controller',
    category: 'administrative',
    qualifications: 'CPA(U), B.Com Finance (Makerere University)',
    image: UGANDAN_FEMALE_TEACHER_IMG,
    bio: 'Manages school financial resources, fee collections, budget allocations, audits, and parent accounts with transparency.',
    quote: 'Accountability and stewardship enable every planned student resource to be delivered reliably.',
  }
];

export const INITIAL_STUDENT_LEADERS: StudentLeader[] = [
  {
    id: 'std-1',
    name: 'Kato Derrick Mubiru',
    title: 'Head Prefect',
    combinationOrClass: 'Senior Six (Physics, Chemistry, Mathematics - PCM/ICT)',
    image: UGANDAN_MALE_TEACHER_IMG,
    shortMessage: 'Leading the student body has taught me that true leadership begins with humility, listening, and leading by example in the classroom and on the field.',
    fullSpeech: 'Fellow students, parents, and teachers, being entrusted with the leadership of Mwanaweika High School is an honor I carry with profound gratitude. Here, we do not just read textbooks; we are taught to stand upright, speak with conviction, and care for our fellow brothers and sisters. Our prefect council is dedicated to upholding the values of discipline, time management, and academic dedication that have defined our school for 28 years.'
  },
  {
    id: 'std-2',
    name: 'Nalwadda Grace Namazzi',
    title: 'Assistant Head Prefect',
    combinationOrClass: 'Senior Six (Biology, Chemistry, Mathematics - BCM/Sub-Math)',
    image: UGANDAN_FEMALE_TEACHER_IMG,
    shortMessage: 'Every girl and boy at Mwanaweika is encouraged to dream boldly and acquire the discipline needed to turn dreams into reality.',
    fullSpeech: 'At Mwanaweika, our motto is not a slogan on a wall; it lives in our daily routines—from morning prep to dormitory inspections, from laboratory experiments to the debate podium. As assistant head prefect, my passion is fostering an inclusive community where junior students feel sheltered, guided, and empowered to excel.'
  },
  {
    id: 'std-3',
    name: 'Babirye Christine Akello',
    title: 'Head Girl',
    combinationOrClass: 'Senior Six (History, Economics, Divinity - HED/Sub-Math)',
    image: UGANDAN_FEMALE_TEACHER_IMG,
    shortMessage: 'Mwanaweika has built my confidence to debate with clarity, lead initiatives, and remain rooted in strong Christian values.',
    fullSpeech: 'To my fellow girls and all students of Mwanaweika, you are capable of extraordinary achievements. Our school provides every platform—academic clinics, debate clubs, sports competitions, and spiritual fellowships. Let us hold onto discipline and respect, for they are the keys that unlock doors of opportunity.'
  },
  {
    id: 'std-4',
    name: 'Ssempijja Joshua Mukasa',
    title: 'Head Boy',
    combinationOrClass: 'Senior Six (Economics, Geography, Mathematics - ME/G/ICT)',
    image: UGANDAN_MALE_TEACHER_IMG,
    shortMessage: 'From the computer laboratory to our athletics field, Mwanaweika equips young men with integrity, resilience, and brotherhood.',
    fullSpeech: 'Being a Mwanaweika student means carrying oneself with respect at all times. Our teachers invest sleepless nights in our notes, revision tests, and character mentoring. I urge every parent considering Mwanaweika to rest assured that this is a home away from home where your son will grow into a disciplined, responsible gentleman.'
  }
];

export const INITIAL_DEPARTMENTS: Department[] = [
  {
    id: 'dept-math',
    name: 'Mathematics Department',
    hodName: 'Mr. Geoffrey Omondi',
    hodQualifications: 'M.Sc Pure Mathematics, B.Sc Ed (Mak)',
    hodImage: UGANDAN_MALE_HOD_MATH_IMG,
    description: 'Heads exclusively the Mathematics Department. In the Ugandan secondary school curriculum, heads of department specialize in and lead only one subject discipline. He coordinates Mathematics across O-Level and A-Level with weekly problem-solving clinics and UNEB calculus drills. Does not teach or head any other subject.',
    subjects: ['Mathematics (UCE)', 'Principal Mathematics (UACE)', 'Subsidiary Mathematics (UACE)'],
    achievements: '100% pass rate in UNEB UACE Subsidiary Mathematics for three consecutive years.'
  },
  {
    id: 'dept-eng',
    name: 'English Department',
    hodName: 'Mrs. Florence Asello',
    hodQualifications: 'M.Ed English Language Teaching, B.A Ed (Hons)',
    hodImage: UGANDAN_FEMALE_HOD_ENGLISH_IMG,
    description: 'Heads exclusively the English Department. Focuses single-mindedly on English Language grammar, comprehension, composition, and elocution for secondary candidates. Does not teach or head any other subject.',
    subjects: ['English Language (UCE)', 'English Language Remedial Clinics'],
    achievements: 'Champions of the Mukono Inter-Schools English Elocution and Essay Contest.'
  },
  {
    id: 'dept-phy',
    name: 'Physics Department',
    hodName: 'Mr. Joseph Ssekyanzi',
    hodQualifications: 'B.Sc with Education (Physics Major), UNEB Senior Examiner',
    hodImage: UGANDAN_MALE_TEACHER_IMG,
    description: 'Heads exclusively the Physics Department. Directs weekly practical mechanics, light, heat, waves, and electronics experiments in our dedicated physics laboratory. Does not teach or head any other subject.',
    subjects: ['Physics (UCE)', 'Physics (UACE)'],
    achievements: 'Ranked top 10 in Mukono District for UNEB Physics practical performance.'
  },
  {
    id: 'dept-chem',
    name: 'Chemistry Department',
    hodName: 'Ms. Beatrice Alupo',
    hodQualifications: 'B.Sc with Education (Chemistry Major, Kyambogo)',
    hodImage: UGANDAN_FEMALE_HOD_SCIENCE_IMG,
    description: 'Heads exclusively the Chemistry Department. Guides students through qualitative analysis, organic chemistry synthesis, and volumetric titrations in our certified chemistry laboratory. Does not teach or head any other subject.',
    subjects: ['Chemistry (UCE)', 'Chemistry (UACE)'],
    achievements: 'Over 88% distinction rate in UNEB UCE and UACE chemistry practical papers.'
  },
  {
    id: 'dept-bio',
    name: 'Biology Department',
    hodName: 'Dr. James Okello',
    hodQualifications: 'M.Sc Biological Sciences, B.Sc Ed',
    hodImage: UGANDAN_MALE_TEACHER_IMG,
    description: 'Heads exclusively the Biology Department. Directs dissection practicals, plant physiology, cellular microscopy, and ecology fieldwork. Does not teach or head any other subject.',
    subjects: ['Biology (UCE)', 'Biology (UACE)'],
    achievements: 'Annual botanical field studies and high distinction rates in UNEB biology.'
  },
  {
    id: 'dept-geo',
    name: 'Geography Department',
    hodName: 'Mr. Martin Kigozi',
    hodQualifications: 'B.A with Education (Geography Major)',
    hodImage: UGANDAN_MALE_TEACHER_IMG,
    description: 'Heads exclusively the Geography Department. Guides learners in map reading, physical geography, weather stations, and photographic interpretation. Does not teach or head any other subject.',
    subjects: ['Geography (UCE)', 'Geography (UACE)'],
    achievements: 'Fieldwork expeditions across Western Uganda Rift Valley and Mabira Eco-forest.'
  },
  {
    id: 'dept-hist',
    name: 'History Department',
    hodName: 'Mrs. Juliet Nabukenya',
    hodQualifications: 'M.A History (Uganda Martyrs Univ), B.A Ed',
    hodImage: UGANDAN_FEMALE_TEACHER_IMG,
    description: 'Heads exclusively the History Department. Imparts rigorous historical analysis of Ugandan, East African, and modern European diplomatic history. Does not teach or head any other subject.',
    subjects: ['History (UCE)', 'History (UACE)'],
    achievements: 'Produced top-ranked UNEB candidates in African History national examinations.'
  },
  {
    id: 'dept-agric',
    name: 'Agriculture Department',
    hodName: 'Mr. Simon Byamukama',
    hodQualifications: 'B.Sc Agriculture & Education (Makerere University)',
    hodImage: UGANDAN_MALE_HOD_AGRIC_IMG,
    description: 'Heads exclusively the Agriculture Department. Manages the school farm, crop demo gardens, soil testing, and animal husbandry practicals. Does not teach or head any other subject.',
    subjects: ['Agriculture (UCE)', 'Agriculture (UACE)'],
    achievements: 'Awarded Mukono Secondary Schools Model Agricultural Farm Trophy 2025.'
  },
  {
    id: 'dept-ict',
    name: 'ICT Department',
    hodName: 'Eng. Isaac Tumusiime',
    hodQualifications: 'B.Sc Computer Science & Education, Cisco Certified (CCNA)',
    hodImage: UGANDAN_MALE_TEACHER_IMG,
    description: 'Heads exclusively the ICT Department. Teaches computer studies, spreadsheets, database management, and programming in our 80-terminal lab. Does not teach or head any other subject.',
    subjects: ['Computer Studies (UCE)', 'Subsidiary ICT (UACE)'],
    achievements: '100% pass rate in UACE Sub-ICT for five consecutive examination cycles.'
  },
  {
    id: 'dept-econ',
    name: 'Economics Department',
    hodName: 'Mr. Robert Mugerwa',
    hodQualifications: 'B.Com, PGDE (Makerere University)',
    hodImage: UGANDAN_MALE_TEACHER_IMG,
    description: 'Heads exclusively the Economics Department. Trains students in macroeconomic analysis, pricing theory, and public finance. Does not teach or head any other subject.',
    subjects: ['Economics (UACE)'],
    achievements: 'Consistently sends graduates on direct government university sponsorship in economics and commerce.'
  }
];

export const INITIAL_TEACHERS: TeacherProfile[] = [
  {
    id: 'tch-1',
    name: 'Mr. Geoffrey Omondi',
    department: 'Mathematics',
    subjects: ['Mathematics'],
    qualifications: 'M.Sc Pure Mathematics (Mak), B.Sc Ed',
    experienceYears: 16,
    image: UGANDAN_MALE_HOD_MATH_IMG
  },
  {
    id: 'tch-2',
    name: 'Mrs. Florence Asello',
    department: 'English',
    subjects: ['English Language'],
    qualifications: 'M.Ed English Language Teaching, B.A Ed',
    experienceYears: 15,
    image: UGANDAN_FEMALE_HOD_ENGLISH_IMG
  },
  {
    id: 'tch-3',
    name: 'Mr. Joseph Ssekyanzi',
    department: 'Physics',
    subjects: ['Physics'],
    qualifications: 'B.Sc Ed (Physics Major)',
    experienceYears: 14,
    image: UGANDAN_MALE_TEACHER_IMG
  },
  {
    id: 'tch-4',
    name: 'Ms. Beatrice Alupo',
    department: 'Chemistry',
    subjects: ['Chemistry'],
    qualifications: 'B.Sc Ed (Chemistry Major)',
    experienceYears: 11,
    image: UGANDAN_FEMALE_HOD_SCIENCE_IMG
  },
  {
    id: 'tch-5',
    name: 'Dr. James Okello',
    department: 'Biology',
    subjects: ['Biology'],
    qualifications: 'M.Sc Biological Sciences, B.Sc Ed',
    experienceYears: 17,
    image: UGANDAN_MALE_TEACHER_IMG
  },
  {
    id: 'tch-6',
    name: 'Mr. Martin Kigozi',
    department: 'Geography',
    subjects: ['Geography'],
    qualifications: 'B.A Ed (Geography Major)',
    experienceYears: 12,
    image: UGANDAN_MALE_TEACHER_IMG
  },
  {
    id: 'tch-7',
    name: 'Mrs. Juliet Nabukenya',
    department: 'History',
    subjects: ['History'],
    qualifications: 'M.A History, B.A Ed',
    experienceYears: 14,
    image: UGANDAN_FEMALE_TEACHER_IMG
  },
  {
    id: 'tch-8',
    name: 'Mr. Simon Byamukama',
    department: 'Agriculture',
    subjects: ['Agriculture'],
    qualifications: 'B.Sc Agriculture & Ed',
    experienceYears: 10,
    image: UGANDAN_MALE_HOD_AGRIC_IMG
  }
];

export const INITIAL_DORMITORIES: Dormitory[] = [
  {
    id: 'dorm-1',
    name: 'Kabalega House',
    gender: 'Boys',
    capacity: '180 Students',
    wardenName: 'Mr. Joseph Ssekyanzi',
    wardenTitle: 'Senior House Master & Senior Physics Teacher',
    image: HERO_CAMPUS_IMG,
    description: 'Named after the historic Omukama Kabalega, emphasizing bravery, resilience, and brotherhood. Features spacious ventilated double-decker cubicles, tiled washrooms, and solar hot water systems.',
    patronSaintOrMotto: 'Valor and Perseverance'
  },
  {
    id: 'dorm-2',
    name: 'Rwenzori House',
    gender: 'Boys',
    capacity: '160 Students',
    wardenName: 'Mr. Martin Okello',
    wardenTitle: 'Assistant House Master & Mathematics Tutor',
    image: HERO_CAMPUS_IMG,
    description: 'Commanding views of the Mukono greenery, fostering scholarly quietude, evening prep focus, and clean sanitation discipline.',
    patronSaintOrMotto: 'Aim for the Peaks'
  },
  {
    id: 'dorm-3',
    name: 'Queen Victoria House',
    gender: 'Girls',
    capacity: '190 Students',
    wardenName: 'Mrs. Flavia Namuddu',
    wardenTitle: 'Senior Matron & Health Welfare Officer',
    image: HERO_CAMPUS_IMG,
    description: 'Modern secure residential hall for female scholars, complete with 24-hour matron supervision, sick-bay nurse coverage, and laundry facilities.',
    patronSaintOrMotto: 'Grace, Virtue and Dignity'
  },
  {
    id: 'dorm-4',
    name: 'Nile House',
    gender: 'Girls',
    capacity: '170 Students',
    wardenName: 'Ms. Harriet Atuhaire',
    wardenTitle: 'House Mistress & Guidance Counselor',
    image: HERO_CAMPUS_IMG,
    description: 'Emphasizes sisterhood, hygiene excellence, and quiet nocturnal study spaces with high security perimeter fencing and CCTV monitored gates.',
    patronSaintOrMotto: 'Purity and Constant Flow'
  }
];

export const INITIAL_FACILITIES: Facility[] = [
  {
    id: 'fac-1',
    title: 'Modern Multimedia Classrooms',
    category: 'academic',
    shortDescription: 'Spacious, well-ventilated learning rooms equipped with ergonomic dual-desks and projection screens.',
    fullDescription: 'Our classroom blocks are engineered with acoustic dampening, natural cross-ventilation, and wide chalk/whiteboards. Each block has electricity backups, locker compartments, and dedicated junior and senior study corridors.',
    features: ['Max class cap of 45 students for personalized attention', 'Dual-desk ergonomic seating', 'Smart whiteboard and digital projectors', 'Generous natural lighting and security surveillance'],
    image: HERO_CAMPUS_IMG,
    gallery: [HERO_CAMPUS_IMG, ACADEMICS_LAB_IMG]
  },
  {
    id: 'fac-2',
    title: 'State-of-the-Art Computer Laboratory',
    category: 'academic',
    shortDescription: 'Air-conditioned 80-terminal lab with high-speed fiber internet and modern programming environments.',
    fullDescription: 'Mwanaweika High School places technology at the heart of 21st-century education. Our ICT Center features licensed Microsoft and Linux environments, Python/HTML programming tools, UNEB Sub-ICT practice software, and uninterrupted solar inverter power.',
    features: ['80 high-performance desktop workstations', 'Dedicated high-speed optic fiber connectivity', 'UPS & solar battery power redundancy', 'Projector demonstration station and audio system'],
    image: ACADEMICS_LAB_IMG,
    gallery: [ACADEMICS_LAB_IMG, HERO_CAMPUS_IMG]
  },
  {
    id: 'fac-3',
    title: 'Science Laboratories (Physics, Chemistry, Biology)',
    category: 'academic',
    shortDescription: 'Three distinct UNEB-certified wet and dry labs fully stocked with apparatus, reagents, and safety gear.',
    fullDescription: 'Practical science is our trademark. From Senior One, students conduct real laboratory experiments rather than theoretical memorization. Equipped with safety showers, gas bunsen pipelines, precision digital balances, and compound optical microscopes.',
    features: ['Individual student practical workstations', 'Centralized gas distribution and fume cupboards', 'Over 60 compound microscopes and sensor instruments', 'Strict lab safety standards and certified lab technicians'],
    image: ACADEMICS_LAB_IMG,
    gallery: [ACADEMICS_LAB_IMG, SPEECH_DAY_IMG]
  },
  {
    id: 'fac-4',
    title: 'St. Augustine Resource Library',
    category: 'academic',
    shortDescription: 'Curated repository containing over 14,000 volumes, national curriculum revision guides, and quiet reading carrels.',
    fullDescription: 'A haven for quiet reflection and deep scholarly inquiry. Houses past UNEB papers with marking guides dating back 20 years, contemporary African and world literature, periodicals, and an e-library terminal section.',
    features: ['14,000+ print volumes cataloged digitally', 'Quiet reading carrels seating 200 learners simultaneously', 'Dedicated national curriculum and past paper archive', 'Air-conditioned digital research room'],
    image: HERO_CAMPUS_IMG,
    gallery: [HERO_CAMPUS_IMG, ACADEMICS_LAB_IMG]
  },
  {
    id: 'fac-5',
    title: 'Boarding Dormitories & Living Quarters',
    category: 'residential',
    shortDescription: 'Comfortable, safe, and hygienic halls of residence overseen by resident house masters and matrons.',
    fullDescription: 'Our boarding section provides students with a structured, nurturing home environment. Featuring secure dormitories with mosquito-netted bunks, private lockers, hot-water utility stations, and on-site sickbay with registered nurses on duty 24/7.',
    features: ['24/7 resident warden and senior matron supervision', 'Solar hot-water bathing stations', 'Secure perimeter wall with CCTV security and perimeter guards', 'Spacious laundry and clothes-drying enclosures'],
    image: HERO_CAMPUS_IMG,
    gallery: [HERO_CAMPUS_IMG, STUDENT_LIFE_IMG]
  },
  {
    id: 'fac-6',
    title: 'Archbishop Luwum Dining & Assembly Hall',
    category: 'welfare',
    shortDescription: 'Spacious hall accommodating 1,200 students for balanced meals, general assemblies, and school ceremonies.',
    fullDescription: 'A bustling hub of campus communion. Our modern commercial kitchen adheres to strict hygiene standards, serving nutritionally balanced Ugandan meals including posho, beans, matooke, rice, beef, fresh vegetables, and weekend special menus.',
    features: ['Seating capacity of 1,200 with audio visual equipment', 'Clean industrial kitchen with steam boilers', 'Purified drinking water stations', 'Regular dietary inspection and balanced menu plans'],
    image: SPEECH_DAY_IMG,
    gallery: [SPEECH_DAY_IMG, HERO_CAMPUS_IMG]
  },
  {
    id: 'fac-7',
    title: 'Sports Complex & Athletic Grounds',
    category: 'sports',
    shortDescription: 'Standard grass football pitch, 400m athletics track, basketball court, volleyball arena, and netball grounds.',
    fullDescription: 'We believe sound minds dwell in healthy bodies. Our sports facilities host inter-house competitions, USSSA district fixtures, and daily after-class recreation under licensed sports coaches and fitness trainers.',
    features: ['Full-size natural turf football pitch with drainage', 'Standard 400m 6-lane athletic running track', 'Dedicated concrete basketball and volleyball courts', 'Girls championship netball courts'],
    image: STUDENT_LIFE_IMG,
    gallery: [STUDENT_LIFE_IMG, HERO_CAMPUS_IMG]
  },
  {
    id: 'fac-8',
    title: 'Serene Botanical Grounds & Prayer Gardens',
    category: 'welfare',
    shortDescription: 'Lush tree-shaded campus with stone benches, floral walkways, and outdoor revision gazebos.',
    fullDescription: 'Spread across 18 rolling acres in Mukono, our campus offers a calm botanical sanctuary conducive to focused mental clarity, meditation, prayer, and weekend group discussions.',
    features: ['18 acres of landscaped lawns and mature tropical shade trees', 'Outdoor stone study gazebos with solar lighting', 'Dedicated Marian and Christian prayer garden', 'Paved walkways and eco-friendly waste management'],
    image: HERO_CAMPUS_IMG,
    gallery: [HERO_CAMPUS_IMG, STUDENT_LIFE_IMG]
  }
];

export const INITIAL_NEWS_EVENTS: NewsEvent[] = [
  {
    id: 'evt-speech-2026',
    title: '28th Annual Speech Day & Prize-Giving Ceremony 2026',
    type: 'speech_day',
    date: '2026-11-14',
    formattedDate: 'Saturday, 14th November 2026',
    location: 'Main School Grounds Marquee, Mwanaweika High School',
    summary: 'Join us as we celebrate outstanding academic achievements, leadership honours, and musical performances with the Minister of State for Higher Education as Guest of Honour.',
    content: 'The Board of Governors, Head Teacher, and Staff cordially invite all parents, guardians, alumni, and distinguished guests to the 28th Annual Speech Day. The day will feature presentations by the top academic scholars in UCE and UACE mock examinations, awards for exemplary discipline, performance by the brass band and traditional dance troupe, and a keynote address by our Guest of Honour. All parents are requested to be seated by 9:00 AM.',
    image: SPEECH_DAY_IMG,
    gallery: [SPEECH_DAY_IMG, HERO_CAMPUS_IMG],
    isFeatured: true
  },
  {
    id: 'evt-visitation-2026',
    title: 'Term II Grand Visitation Day & Parent-Teacher Consultations',
    type: 'visitation_day',
    date: '2026-07-19',
    formattedDate: 'Sunday, 19th July 2026',
    location: 'Campus Lawns & Respective Classrooms',
    summary: 'A special day for parents and guardians to fellowship with their children, review mid-term academic report cards with subject teachers, and inspect boarding welfare.',
    content: 'Visitation Day gates open promptly at 9:00 AM and close at 5:00 PM. Parents will participate in a short morning interdenominational prayer service followed by one-on-one consultations with class teachers and dormitory wardens. We kindly remind all visitors that cooked food must meet our health safety guidelines. Junk food and unauthorized electronic gadgets remain strictly prohibited on campus.',
    image: STUDENT_LIFE_IMG,
    gallery: [STUDENT_LIFE_IMG, HERO_CAMPUS_IMG],
    isFeatured: true
  },
  {
    id: 'evt-sports-2026',
    title: 'Inter-House Athletics & Games Championship 2026',
    type: 'sports_day',
    date: '2026-08-08',
    formattedDate: 'Saturday, 8th August 2026',
    location: 'Mwanaweika High School Sports Grounds',
    summary: 'Kabalega, Rwenzori, Nile, and Queen Victoria houses battle for the coveted Golden Jubilee Sports Trophy in track athletics, football, and netball.',
    content: 'The most vibrant event on the school sports calendar! Students will compete across 100m, 200m, 400m, 1500m, 4x100m relays, tug of war, volleyball, and football finals. Refreshments, brass band parade, and cheerleading choreography will keep spirits high. Parents and alumni are warmly invited to cheer their houses.',
    image: STUDENT_LIFE_IMG,
    gallery: [STUDENT_LIFE_IMG, HERO_CAMPUS_IMG],
    isFeatured: true
  },
  {
    id: 'news-uneb-2025',
    title: 'Mwanaweika High School Triumphs in UNEB UCE & UACE Examinations',
    type: 'news',
    date: '2026-02-15',
    formattedDate: '15th February 2026',
    location: 'Mukono, Uganda',
    summary: 'Over 94% of Senior Four candidates secure Division 1 and 2, while Senior Six science candidates sweep maximum points in PCM and BCM.',
    content: 'The Ministry of Education and UNEB released the official national examination results, confirming Mwanaweika High School among the premier academic giants in Mukono District. Our top student, Kato Derrick, scored straight Distinctions in 8 subjects. In UACE, over 65 candidates qualified for direct government sponsorship to Makerere and Kyambogo Universities. We thank our diligent teaching faculty and supportive parents.',
    image: ACADEMICS_LAB_IMG,
    gallery: [ACADEMICS_LAB_IMG, SPEECH_DAY_IMG],
    isFeatured: false
  },
  {
    id: 'news-stem-lab',
    title: 'Commissioning of 40 New High-Spec Computers in Lab 2',
    type: 'news',
    date: '2026-03-01',
    formattedDate: '1st March 2026',
    location: 'ICT Center Block B',
    summary: 'The school board completes phase two of the digital learning expansion, introducing dedicated coding and robotics stations.',
    content: 'In our continued drive towards technology and future readiness, Mwanaweika High School has installed 40 high-performance desktop units backed by solar energy in Computer Laboratory 2. This allows all O-Level and A-Level classes to access practical digital skills training uninterrupted by national power outages.',
    image: ACADEMICS_LAB_IMG,
    gallery: [ACADEMICS_LAB_IMG, HERO_CAMPUS_IMG],
    isFeatured: false
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Morning Assembly & Parade on Campus Grounds',
    category: 'Students',
    image: HERO_CAMPUS_IMG,
    caption: 'Students gathered in immaculate navy school uniforms for the Monday morning national anthem and head teacher address.',
    date: 'March 2026'
  },
  {
    id: 'gal-2',
    title: 'Hands-on Science & Computer Laboratory Session',
    category: 'Academics',
    image: ACADEMICS_LAB_IMG,
    caption: 'Senior Five students analyzing molecular structures with their chemistry teacher in our air-conditioned laboratory.',
    date: 'February 2026'
  },
  {
    id: 'gal-3',
    title: 'Inter-House Football & Sports Tournament',
    category: 'Sports',
    image: STUDENT_LIFE_IMG,
    caption: 'Kabalega House and Rwenzori House players competing fiercely during the term sports fixtures in Mukono.',
    date: 'July 2026'
  },
  {
    id: 'gal-4',
    title: 'Speech Day Excellence Awards Presentation',
    category: 'Speech Day',
    image: SPEECH_DAY_IMG,
    caption: 'Top academic achievers receiving national examination distinction plaques and certificates from the guest of honor.',
    date: 'November 2025'
  },
  {
    id: 'gal-5',
    title: 'Campus Architecture & Lush Green Lawns',
    category: 'Campus',
    image: HERO_CAMPUS_IMG,
    caption: 'The picturesque red-brick classroom blocks of Mwanaweika High School set against the serene landscape of Mukono.',
    date: 'January 2026'
  },
  {
    id: 'gal-6',
    title: 'Digital Skills & Coding Exploration',
    category: 'Academics',
    image: ACADEMICS_LAB_IMG,
    caption: 'Learners mastering Python programming and web research during practical ICT classes.',
    date: 'February 2026'
  },
  {
    id: 'gal-7',
    title: 'Volleyball & Athletic Drills',
    category: 'Sports',
    image: STUDENT_LIFE_IMG,
    caption: 'Girls varsity volleyball team practicing spikes and teamwork under coach supervision.',
    date: 'March 2026'
  },
  {
    id: 'gal-8',
    title: 'School Choir & Brass Band Performance',
    category: 'Events',
    image: SPEECH_DAY_IMG,
    caption: 'The famed Mwanaweika brass band leading the ceremonial procession on Speech Day.',
    date: 'November 2025'
  }
];

export const INITIAL_ALUMNI: AlumniStory[] = [
  {
    id: 'alm-1',
    name: 'Dr. Arthur Mukisa',
    graduationYear: 2012,
    profession: 'Cardiovascular Surgeon',
    currentCompanyOrField: 'Mulago National Referral Hospital & Makerere College of Health Sciences',
    location: 'Kampala, Uganda',
    image: UGANDAN_DIRECTOR_IMG,
    story: 'Mwanaweika laid the bedrock of my career. The discipline of waking up for 5:00 AM prep and the uncompromising physics and biology teachers gave me the grit to excel through medical school at Makerere. I learned here that service to others is the highest calling.',
    adviceToStudents: 'Never underestimate the power of consistent daily study. Do not wait for exam season to become serious; let discipline be your companion every single day.'
  },
  {
    id: 'alm-2',
    name: 'Brenda Namutebi, Esq.',
    graduationYear: 2015,
    profession: 'Senior Corporate Attorney & Partner',
    currentCompanyOrField: 'Bowmans Uganda Law Practice',
    location: 'Kampala / London',
    image: UGANDAN_FEMALE_HEADTEACHER_IMG,
    story: 'As Head Girl in 2015, Mwanaweika gave me a voice. Speaking in front of 1,200 students during assemblies cured my public speaking stage fright and taught me how to represent people with integrity and poise.',
    adviceToStudents: 'Read widely beyond the syllabus. Read history, economics, and biographies of visionary African leaders. Knowledge will set you apart in any boardroom.'
  },
  {
    id: 'alm-3',
    name: 'Eng. Collins Ssembatya',
    graduationYear: 2017,
    profession: 'Renewable Energy Systems Engineer',
    currentCompanyOrField: 'Uganda Electricity Generation Company (UEGCL)',
    location: 'Jinja / Mukono',
    image: UGANDAN_MALE_TEACHER_IMG,
    story: 'My passion for engineering was ignited in the Mwanaweika physics laboratory. Our teachers made electromagnetic experiments tangible and exciting. The moral foundation here keeps me grounded in professional ethics.',
    adviceToStudents: 'Embrace science and technology. The world is evolving at lightning speed, and Africa needs young minds who can build solutions for our communities.'
  }
];

export const SCHOOL_CONTACT = {
  schoolName: 'Mwanaweika High School',
  motto: 'Nurturing Excellence, Building Character',
  location: 'Plot 14, Kampala - Jinja Highway, Mukono Municipality, Uganda',
  poBox: 'P.O. Box 24, Mukono, Uganda',
  phone1: '+256 701 456 789',
  phone2: '+256 772 123 456',
  email: 'info@mwanaweikahighschool.ac.ug',
  admissionsEmail: 'admissions@mwanaweikahighschool.ac.ug',
  bursarEmail: 'bursar@mwanaweikahighschool.ac.ug',
  officeHours: 'Monday – Friday: 7:30 AM – 5:30 PM | Saturday: 8:00 AM – 1:00 PM',
  unebCenterNumber: 'UCE: U0842 / UACE: U1298',
  socials: {
    facebook: 'https://facebook.com/mwanaweikahighschool',
    instagram: 'https://instagram.com/mwanaweikahighschool',
    youtube: 'https://youtube.com/@mwanaweikahighschool',
    whatsapp: 'https://wa.me/256701456789?text=Hello%20Mwanaweika%20High%20School%20Admissions%2C%20I%20would%20like%20to%20make%20an%20enquiry'
  }
};
