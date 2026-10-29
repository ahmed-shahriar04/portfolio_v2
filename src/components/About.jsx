"use client";

import { portfolioData } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden dark:bg-slate-950/40 bg-slate-100/70 border-y dark:border-transparent border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-indigo-500/10 bg-indigo-50 border dark:border-indigo-500/20 border-indigo-200 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-user-astronaut"></i>
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading dark:text-white text-slate-900 tracking-tight">
            About <span className="gradient-text">Me</span> &amp; My Craft
          </h2>
          <p className="mt-3 dark:text-slate-400 text-slate-600 text-sm sm:text-base leading-relaxed">
            From exploring code in Class 8 to engineering high-performance modern web platforms at UIU.
          </p>
        </div>

        {/* Story & Work Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Journey Card */}
          <div 
            className="lg:col-span-7 dark:bg-slate-900/70 bg-white border dark:border-indigo-500/20 border-slate-200 shadow-md p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div>
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
                <i className="fa-solid fa-rocket"></i>
                <span>The Origin Story</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading dark:text-white text-slate-900 mb-4">
                My Programming <span className="gradient-text">Journey</span>
              </h3>
              <p className="dark:text-slate-300 text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                {portfolioData.about.journey}
              </p>
              <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm leading-relaxed">
                Currently pursuing my 3rd year in <strong className="dark:text-white text-slate-900">Computer Science &amp; Engineering at United International University (UIU)</strong>, I have cultivated both academic theoretical rigors (Data Structures, Algorithms, OOP) and practical front-end mastery.
              </p>
            </div>

            {/* Elegant Quote Banner */}
            <div className="mt-6 p-4 rounded-2xl dark:bg-indigo-950/40 bg-indigo-50/80 border dark:border-indigo-500/20 border-indigo-200 flex items-start gap-3">
              <i className="fa-solid fa-quote-left text-cyan-600 dark:text-cyan-400 text-lg mt-0.5 shrink-0"></i>
              <p className="text-xs dark:text-indigo-200 text-indigo-900 italic leading-relaxed m-0 font-medium">
                &ldquo;Every interface is an opportunity to solve a real human problem while delivering visual wonder and effortless responsiveness.&rdquo;
              </p>
            </div>
          </div>

          {/* Work Style & What I Enjoy */}
          <div 
            className="lg:col-span-5 dark:bg-slate-900/70 bg-white border dark:border-indigo-500/20 border-slate-200 shadow-md p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
            data-aos="fade-left"
          >
            <div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                <span>Passions &amp; Craft</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading dark:text-white text-slate-900 mb-4">
                What I Love <span className="gradient-text">Building</span>
              </h3>
              <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-6">
                {portfolioData.about.workEnjoyed}
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl dark:bg-slate-900/60 bg-slate-50 border dark:border-slate-800 border-slate-200 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-layer-group text-sm"></i>
                  </div>
                  <div>
                    <strong className="text-xs font-bold dark:text-white text-slate-900 block">Interactive User Interfaces</strong>
                    <span className="text-[11px] dark:text-slate-400 text-slate-600">Engaging micro-interactions that feel alive and responsive</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl dark:bg-slate-900/60 bg-slate-50 border dark:border-slate-800 border-slate-200 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-mobile-screen-button text-sm"></i>
                  </div>
                  <div>
                    <strong className="text-xs font-bold dark:text-white text-slate-900 block">Pixel-Perfect Responsive Design</strong>
                    <span className="text-[11px] dark:text-slate-400 text-slate-600">Fluid behavior across smartphones, tablets, and desktops</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl dark:bg-slate-900/60 bg-slate-50 border dark:border-slate-800 border-slate-200 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-bolt-lightning text-sm"></i>
                  </div>
                  <div>
                    <strong className="text-xs font-bold dark:text-white text-slate-900 block">Speed &amp; Clean Architecture</strong>
                    <span className="text-[11px] dark:text-slate-400 text-slate-600">Component reusability, semantic HTML5, and Next.js optimization</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t dark:border-slate-800 border-slate-200 flex items-center justify-between text-xs dark:text-slate-400 text-slate-600">
              <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-semibold">
                <i className="fa-solid fa-code-commit"></i>
                Clean Code Advocate
              </span>
              <span>Available for Hire</span>
            </div>
          </div>

        </div>

        {/* Hobbies Section - 100% English, Crisp Contrast */}
        <div data-aos="fade-up">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-600 flex items-center justify-center gap-2">
              <i className="fa-solid fa-heart text-rose-500"></i>
              Beyond The Code
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading dark:text-white text-slate-900 mt-1">
              Personal Interests &amp; Passions
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {portfolioData.about.hobbies.map((hobby, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl dark:bg-slate-900/60 bg-white border dark:border-slate-800 border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center flex flex-col items-center justify-between"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${hobby.color} text-white flex items-center justify-center mb-3 shadow-md text-lg`}>
                  <i className={hobby.icon}></i>
                </div>
                <h4 className="text-xs sm:text-sm font-bold dark:text-white text-slate-900 mb-1.5">
                  {hobby.title}
                </h4>
                <p className="text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed m-0">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
