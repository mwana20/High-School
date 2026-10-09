import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Quote, Sparkles, X, Award } from 'lucide-react';
import { StudentLeader } from '../../types';

export const VoicesOfMwanaweika: React.FC = () => {
  const { studentLeaders, selectedStudentLeader, setSelectedStudentLeader } = useSchool();

  return (
    <section className="py-20 bg-stone-100 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Leadership & Agency</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Voices of Mwanaweika
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Our student leaders embody the values of humility, servant leadership, and peer mentorship. Listen to the reflections of our prefect executive on school life, brotherhood, and academic perseverance.
          </p>
        </div>

        {/* 4 Leader Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {studentLeaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Container with Badge */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src={leader.image}
                  alt={leader.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block">
                    {leader.title}
                  </span>
                  <h3 className="font-serif text-lg font-semibold leading-tight text-white drop-shadow-sm">
                    {leader.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-3 pb-2 border-b border-stone-100">
                    {leader.combinationOrClass}
                  </div>
                  <div className="relative pl-3 text-xs sm:text-sm text-stone-600 italic leading-relaxed line-clamp-4">
                    <Quote className="w-3.5 h-3.5 text-amber-600/60 absolute -top-1 -left-1" />
                    &ldquo;{leader.shortMessage}&rdquo;
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStudentLeader(leader)}
                  className="w-full py-2.5 px-3 text-xs font-semibold text-[#0b2545] hover:text-white bg-amber-50 hover:bg-[#0b2545] border border-amber-200/80 hover:border-[#0b2545] rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer group-hover:border-amber-400"
                >
                  <span>Read Full Message</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Speech Modal */}
      {selectedStudentLeader && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            <div className="relative p-6 sm:p-8">
              <button
                onClick={() => setSelectedStudentLeader(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selectedStudentLeader.image}
                  alt={selectedStudentLeader.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-amber-500 shadow-md"
                />
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
                    {selectedStudentLeader.title}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-stone-900">
                    {selectedStudentLeader.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {selectedStudentLeader.combinationOrClass}
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p className="font-serif italic text-lg text-amber-900 border-l-4 border-amber-600 pl-4 py-1">
                  &ldquo;{selectedStudentLeader.shortMessage}&rdquo;
                </p>
                <p>{selectedStudentLeader.fullSpeech}</p>
                <p>
                  At Mwanaweika High School, we are nurtured to lead not by title, but by action, academic perseverance, and service to our community. We welcome all new brothers and sisters joining us this term!
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>Prefects Council • Mwanaweika High School</span>
                <button
                  onClick={() => setSelectedStudentLeader(null)}
                  className="px-4 py-2 bg-[#0b2545] text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
