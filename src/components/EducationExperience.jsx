"use client";

import { portfolioData } from "@/data/portfolioData";

export default function EducationExperience() {
  return (
    <section id="education" className="py-24 relative overflow-hidden dark:bg-slate-950/40 bg-slate-100/70 border-y dark:border-transparent border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-purple-500/10 bg-purple-50 border dark:border-purple-500/20 border-purple-200 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Academic &amp; Professional Track</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading dark:text-white text-slate-900 tracking-tight">
            Education &amp; <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-3 dark:text-slate-400 text-slate-600 text-sm sm:text-base leading-relaxed">
            Detailed academic milestones at United International University (UIU) alongside self-driven software engineering and open-source project development.
          </p>
        </div>

        {/* Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Education Column */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl dark:bg-indigo-500/20 bg-indigo-50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl shadow-inner border dark:border-indigo-500/30 border-indigo-200">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading dark:text-white text-slate-900">
                  Educational <span className="text-indigo-600 dark:text-indigo-400">Qualifications</span>
                </h3>
                <span className="text-xs dark:text-slate-400 text-slate-600">Formal academic training in CS &amp; Engineering</span>
              </div>
            </div>

            <div className="space-y-6 relative border-l-2 dark:border-indigo-500/20 border-indigo-200 ml-6 pl-6 sm:pl-8">
              {portfolioData.education.map((item, idx) => (
                <div 
                  key={idx}
                  className="relative group p-6 rounded-3xl dark:bg-slate-900/70 bg-white border dark:border-indigo-500/15 border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-7 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 dark:border-[#0a0d14] border-white shadow-md"></span>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold dark:bg-indigo-500/10 bg-indigo-50 text-indigo-700 dark:text-indigo-300 border dark:border-indigo-500/25 border-indigo-200 flex items-center gap-1.5">
                      <i className="fa-solid fa-calendar-days text-[10px]"></i>
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {item.status}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold font-heading dark:text-white text-slate-900 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h4>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 mt-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-location-dot text-rose-500 text-[11px]"></i>
                    {item.institution} &bull; {item.location}
                  </p>

                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3 pt-3 border-t dark:border-slate-800/80 border-slate-100 flex items-center gap-2 text-xs dark:text-slate-400 text-slate-600">
                    <i className="fa-solid fa-star text-amber-500 text-xs shrink-0"></i>
                    <span>{item.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div data-aos="fade-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl dark:bg-cyan-500/20 bg-cyan-50 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xl shadow-inner border dark:border-cyan-500/30 border-cyan-200">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading dark:text-white text-slate-900">
                  Experience &amp; <span className="text-cyan-600 dark:text-cyan-400">Projects</span>
                </h3>
                <span className="text-xs dark:text-slate-400 text-slate-600">Professional endeavors &amp; project building</span>
              </div>
            </div>

            <div className="space-y-6 relative border-l-2 dark:border-cyan-500/20 border-cyan-200 ml-6 pl-6 sm:pl-8">
              {portfolioData.experience.map((item, idx) => (
                <div 
                  key={idx}
                  className="relative group p-6 rounded-3xl dark:bg-slate-900/70 bg-white border dark:border-cyan-500/15 border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-7 w-4 h-4 rounded-full bg-cyan-500 border-4 dark:border-[#0a0d14] border-white shadow-md"></span>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold dark:bg-cyan-500/10 bg-cyan-50 text-cyan-700 dark:text-cyan-300 border dark:border-cyan-500/25 border-cyan-200 flex items-center gap-1.5">
                      <i className="fa-solid fa-calendar-check text-[10px]"></i>
                      {item.duration}
                    </span>
                    <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold font-heading dark:text-white text-slate-900 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h4>
                  <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mt-1">
                    {item.company}
                  </p>

                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-4 pt-3 border-t dark:border-slate-800/80 border-slate-100 space-y-2">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs dark:text-slate-400 text-slate-600">
                        <i className="fa-solid fa-circle-check text-emerald-500 text-xs mt-0.5 shrink-0"></i>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
