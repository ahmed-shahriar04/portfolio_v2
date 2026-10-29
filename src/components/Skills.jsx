"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? portfolioData.skills.items
    : portfolioData.skills.items.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-cyan-500/10 bg-cyan-50 border dark:border-cyan-500/20 border-cyan-200 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-code"></i>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading dark:text-white text-slate-900 tracking-tight">
            Skills &amp; <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="mt-3 dark:text-slate-400 text-slate-600 text-sm sm:text-base leading-relaxed">
            Categorized technical capabilities rendered in visual graphical formats, showcasing modern frontend architectures, core algorithms, and development tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" data-aos="fade-up" data-aos-delay="100">
          {portfolioData.skills.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 !text-white shadow-lg shadow-indigo-500/25 scale-105"
                  : "dark:bg-slate-900/70 bg-white dark:text-slate-400 text-slate-700 hover:text-indigo-600 border dark:border-slate-800 border-slate-200 shadow-sm"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl dark:bg-slate-900/60 bg-white border dark:border-indigo-500/15 border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={idx * 30}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl dark:bg-slate-800/90 bg-slate-100 border dark:border-slate-700/80 border-slate-200 flex items-center justify-center shadow-inner">
                    <i className={`${skill.icon} ${skill.iconColor} text-xl`}></i>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md dark:bg-indigo-500/10 bg-indigo-50 dark:text-indigo-300 text-indigo-700 border dark:border-indigo-500/20 border-indigo-200">
                      {skill.badge}
                    </span>
                    <span className="font-code font-bold text-xs text-cyan-600 dark:text-cyan-400">{skill.level}%</span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold dark:text-white text-slate-900 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
              </div>

              {/* Graphical Progress Bar */}
              <div className="mt-4 pt-3 border-t dark:border-slate-800/60 border-slate-100">
                <div className="w-full h-1.5 rounded-full dark:bg-slate-800 bg-slate-200 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Highlight Card - Crystal Clear in Light & Dark Mode */}
        <div className="p-6 sm:p-8 rounded-3xl dark:bg-slate-900/90 bg-white border dark:border-indigo-500/20 border-slate-200 shadow-md" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center justify-center lg:justify-start gap-1.5 mb-1">
                <i className="fa-solid fa-certificate"></i> Verified Certifications
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading dark:text-white text-slate-900">
                Continuous Learning &amp; Skill Certifications
              </h3>
              <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 mt-1 max-w-xl">
                Certified in JavaScript, Computer Science algorithms, and workplace productivity tools.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              {portfolioData.certifications.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-2xl dark:bg-slate-800/80 bg-slate-50 border dark:border-slate-700/80 border-slate-200 text-left shadow-sm">
                  <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold block">{cert.issuer} &bull; {cert.year}</span>
                  <strong className="text-xs dark:text-white text-slate-900 block mt-1 line-clamp-1">{cert.title}</strong>
                  <span className="text-[10px] dark:text-slate-400 text-slate-500 block mt-0.5 line-clamp-1">{cert.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
