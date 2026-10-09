import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ACADEMICS_LAB_IMG } from '../data/initialData';
import {
  ShieldCheck,
  Bell,
  Users,
  Calendar,
  Image as ImageIcon,
  GraduationCap,
  FileText,
  Mail,
  RotateCcw,
  Plus,
  Trash2,
  Save,
  CheckCircle,
  Inbox
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const {
    announcement,
    setAnnouncement,
    stats,
    setStats,
    leadership,
    setLeadership,
    newsEvents,
    setNewsEvents,
    admissionInquiries,
    contactSubmissions,
    alumniRegistrations,
    resetToDefaults,
    navigate
  } = useSchool();

  const [activeTab, setActiveTab] = useState<'announcement' | 'stats' | 'events' | 'admissions' | 'inquiries' | 'alumni'>('announcement');
  const [saveToast, setSaveToast] = useState(false);

  // Announcement editor state
  const [annText, setAnnText] = useState(announcement.message);
  const [annLinkText, setAnnLinkText] = useState(announcement.linkText || '');
  const [annLinkUrl, setAnnLinkUrl] = useState(announcement.linkUrl || '');
  const [annActive, setAnnActive] = useState(announcement.isActive);

  // Stats editor state
  const [students, setStudents] = useState(stats.studentsCount);
  const [teachers, setTeachers] = useState(stats.teachersCount);
  const [passRate, setPassRate] = useState(stats.unebPassRate);

  // New Event Form state
  const [newEvent, setNewEvent] = useState({
    title: '',
    type: 'news' as const,
    date: new Date().toISOString().split('T')[0],
    formattedDate: new Date().toLocaleDateString('en-UG', { dateStyle: 'long' }),
    location: 'Mukono, Uganda',
    summary: '',
    content: '',
    image: ACADEMICS_LAB_IMG,
  });

  const triggerSaveNotification = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const handleSaveAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    setAnnouncement({
      id: announcement.id,
      message: annText,
      linkText: annLinkText,
      linkUrl: annLinkUrl,
      isActive: annActive,
    });
    triggerSaveNotification();
  };

  const handleSaveStats = (e: React.FormEvent) => {
    e.preventDefault();
    setStats({
      ...stats,
      studentsCount: Number(students),
      teachersCount: Number(teachers),
      unebPassRate: passRate,
    });
    triggerSaveNotification();
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title) return;
    const item = {
      ...newEvent,
      id: 'evt-' + Date.now(),
    };
    setNewsEvents([item, ...newsEvents]);
    setNewEvent({
      title: '',
      type: 'news',
      date: new Date().toISOString().split('T')[0],
      formattedDate: new Date().toLocaleDateString('en-UG', { dateStyle: 'long' }),
      location: 'Mukono, Uganda',
      summary: '',
      content: '',
      image: ACADEMICS_LAB_IMG,
    });
    triggerSaveNotification();
  };

  const handleDeleteEvent = (id: string) => {
    setNewsEvents(newsEvents.filter((e) => e.id !== id));
    triggerSaveNotification();
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pb-20">
      <Breadcrumbs items={[{ label: 'Administration CMS' }]} />

      {/* Header Bar */}
      <section className="bg-[#0b2545] text-white py-12 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Mwanaweika High School Portal</span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold">
              School Administration CMS
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 font-sans">
              Manage website notices, statistics, events, and inspect live parent admission inquiries.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Reset all CMS edits back to original default settings?')) {
                  resetToDefaults();
                  triggerSaveNotification();
                }
              }}
              className="px-4 py-2.5 text-xs font-semibold rounded-xl border border-white/20 hover:bg-white/10 text-stone-200 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors cursor-pointer"
            >
              View Public Website →
            </button>
          </div>
        </div>
      </section>

      {/* Toast Save Alert */}
      {saveToast && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-emerald-400 flex items-center gap-2 text-xs font-semibold animate-fadeIn">
          <CheckCircle className="w-4 h-4 text-emerald-300" />
          <span>Changes saved successfully to storage!</span>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-stone-200">
          {[
            { id: 'announcement', label: 'Notices & Banner', icon: Bell },
            { id: 'stats', label: 'School Figures', icon: FileText },
            { id: 'events', label: 'News & Events', icon: Calendar },
            { id: 'admissions', label: `Admissions Inbox (${admissionInquiries.length})`, icon: GraduationCap },
            { id: 'inquiries', label: `Contact Messages (${contactSubmissions.length})`, icon: Mail },
            { id: 'alumni', label: `Alumni Reconnects (${alumniRegistrations.length})`, icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#0b2545] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Announcement Editor */}
        {activeTab === 'announcement' && (
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm mt-8 max-w-3xl">
            <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-2">
              Website Announcement Banner
            </h3>
            <p className="text-xs text-stone-500 mb-6 font-sans">
              Appears prominently across all website headers to communicate admission deadlines or term dates.
            </p>

            <form onSubmit={handleSaveAnnouncement} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Announcement Message Text
                </label>
                <textarea
                  rows={3}
                  required
                  value={annText}
                  onChange={(e) => setAnnText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Button / Link Label
                  </label>
                  <input
                    type="text"
                    value={annLinkText}
                    onChange={(e) => setAnnLinkText(e.target.value)}
                    placeholder="e.g. Apply Online"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Destination URL
                  </label>
                  <input
                    type="text"
                    value={annLinkUrl}
                    onChange={(e) => setAnnLinkUrl(e.target.value)}
                    placeholder="e.g. /admissions"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="annActive"
                  checked={annActive}
                  onChange={(e) => setAnnActive(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-600 cursor-pointer"
                />
                <label htmlFor="annActive" className="text-xs text-stone-800 font-medium cursor-pointer">
                  Display announcement bar on website
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0b2545] text-white hover:bg-amber-600 text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Update Announcement</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 2: School Statistics Editor */}
        {activeTab === 'stats' && (
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm mt-8 max-w-3xl">
            <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-2">
              School Key Figures
            </h3>
            <p className="text-xs text-stone-500 mb-6 font-sans">
              Update statistical numbers rendered in the homepage and institutional counters.
            </p>

            <form onSubmit={handleSaveStats} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Enrolled Students Count
                  </label>
                  <input
                    type="number"
                    value={students}
                    onChange={(e) => setStudents(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Teaching Staff Count
                  </label>
                  <input
                    type="number"
                    value={teachers}
                    onChange={(e) => setTeachers(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  UNEB National Pass Rate Label
                </label>
                <input
                  type="text"
                  value={passRate}
                  onChange={(e) => setPassRate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0b2545] text-white hover:bg-amber-600 text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Statistics</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 3: News & Events Manager */}
        {activeTab === 'events' && (
          <div className="space-y-8 mt-8">
            {/* Add Event Form */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm max-w-3xl">
              <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-2">
                Publish New Event or News Bulletin
              </h3>
              <form onSubmit={handleAddEvent} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    placeholder="e.g. End of Term II Thanksgiving Mass"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Event Category
                    </label>
                    <select
                      value={newEvent.type}
                      onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm"
                    >
                      <option value="news">School News</option>
                      <option value="speech_day">Speech Day</option>
                      <option value="visitation_day">Visitation Day</option>
                      <option value="sports_day">Sports Day</option>
                      <option value="event">General Event</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Date (YYYY-MM-DD)
                    </label>
                    <input
                      type="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value, formattedDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Short Summary (Deck)
                  </label>
                  <input
                    type="text"
                    value={newEvent.summary}
                    onChange={(e) => setNewEvent({ ...newEvent, summary: e.target.value })}
                    placeholder="Brief description for cards..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Full Content & Program Details
                  </label>
                  <textarea
                    rows={4}
                    value={newEvent.content}
                    onChange={(e) => setNewEvent({ ...newEvent, content: e.target.value })}
                    placeholder="Detailed explanation, times, venue..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#0b2545] text-white hover:bg-amber-600 text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Publish Event</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Existing Events List */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
              <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-4">
                Existing News & Events ({newsEvents.length})
              </h3>
              <div className="divide-y divide-stone-100">
                {newsEvents.map((evt) => (
                  <div key={evt.id} className="py-4 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-800 block">
                        {evt.type.replace('_', ' ')} · {evt.formattedDate}
                      </span>
                      <h4 className="font-serif font-bold text-stone-900 text-base">
                        {evt.title}
                      </h4>
                      <p className="text-xs text-stone-500 line-clamp-1">{evt.summary}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteEvent(evt.id)}
                      className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      title="Delete Event"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Admissions Inbox */}
        {activeTab === 'admissions' && (
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm mt-8">
            <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-2">
              Admissions Applications Inbox ({admissionInquiries.length})
            </h3>
            <p className="text-xs text-stone-500 mb-6 font-sans">
              Prospective parent submissions received through the website enquiry form.
            </p>

            {admissionInquiries.length === 0 ? (
              <div className="text-center py-12 text-stone-400 text-xs sm:text-sm">
                No admissions submissions received yet. Submissions from the Admissions page will appear here.
              </div>
            ) : (
              <div className="divide-y divide-stone-100">
                {admissionInquiries.map((item) => (
                  <div key={item.id} className="py-5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-800 uppercase">
                        {item.intendedClass} ({item.boardingType})
                      </span>
                      <span className="text-stone-400">{item.submittedAt}</span>
                    </div>
                    <h4 className="font-editorial text-xl font-bold text-stone-900">
                      Student: {item.studentName}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-stone-600">
                      <div>Parent: <strong className="text-stone-900">{item.parentName}</strong></div>
                      <div>Phone: <a href={`tel:${item.phone}`} className="text-amber-800 font-semibold">{item.phone}</a></div>
                      <div>Email: <a href={`mailto:${item.email}`} className="text-amber-800">{item.email}</a></div>
                    </div>
                    <div className="text-xs text-stone-600">
                      Previous School: <span className="font-medium text-stone-800">{item.previousSchool}</span>
                    </div>
                    {item.message && (
                      <p className="text-xs text-stone-500 bg-stone-50 p-2.5 rounded-lg border border-stone-100 mt-2">
                        &ldquo;{item.message}&rdquo;
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 5: Contact Messages Inbox */}
        {activeTab === 'inquiries' && (
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm mt-8">
            <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-2">
              General Contact Messages ({contactSubmissions.length})
            </h3>
            {contactSubmissions.length === 0 ? (
              <div className="text-center py-12 text-stone-400 text-xs sm:text-sm">
                No contact messages yet. Messages sent via the Contact page form will be recorded here.
              </div>
            ) : (
              <div className="divide-y divide-stone-100">
                {contactSubmissions.map((item) => (
                  <div key={item.id} className="py-5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-stone-900">{item.subject}</span>
                      <span className="text-stone-400">{item.submittedAt}</span>
                    </div>
                    <div className="text-xs text-stone-600">
                      From: <strong>{item.fullName}</strong> ({item.phone} · {item.email})
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 bg-stone-50 p-3 rounded-lg border border-stone-100">
                      {item.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 6: Alumni Reconnects Inbox */}
        {activeTab === 'alumni' && (
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm mt-8">
            <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-2">
              Alumni Reconnect Directory Registrations ({alumniRegistrations.length})
            </h3>
            {alumniRegistrations.length === 0 ? (
              <div className="text-center py-12 text-stone-400 text-xs sm:text-sm">
                No alumni registrations recorded yet.
              </div>
            ) : (
              <div className="divide-y divide-stone-100">
                {alumniRegistrations.map((item) => (
                  <div key={item.id} className="py-5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-800">
                        Class of {item.gradYear} · {item.profession}
                      </span>
                      <span className="text-stone-400">{item.submittedAt}</span>
                    </div>
                    <h4 className="font-editorial text-xl font-bold text-stone-900">
                      {item.fullName}
                    </h4>
                    <div className="text-xs text-stone-600">
                      Location: {item.location} | Phone: {item.phone} | Email: {item.email}
                    </div>
                    {item.message && (
                      <p className="text-xs text-stone-500 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                        {item.message}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
