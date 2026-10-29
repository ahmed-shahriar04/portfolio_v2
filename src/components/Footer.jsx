"use client";

import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative dark:bg-[#06080d] bg-slate-100/90 border-t dark:border-indigo-500/20 border-slate-200/90 pt-16 pb-12 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b dark:border-slate-800 border-slate-200">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3 text-decoration-none">
              <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-md">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg dark:text-white text-slate-900 block leading-tight">
                  Shahriar Ahmed <span className="gradient-text">Riaz</span>
                </span>
                <span className="text-[11px] text-cyan-600 dark:text-cyan-400 font-semibold">
                  {portfolioData.personal.designation}
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 max-w-sm leading-relaxed">
              Frontend Web Developer crafting responsive, accessible, and high-performance web experiences. Undergraduate in Computer Science &amp; Engineering at UIU.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {portfolioData.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="w-10 h-10 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 dark:text-slate-300 text-slate-700 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm text-base"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider dark:text-white text-slate-900">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="dark:text-slate-400 text-slate-600 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-angle-right text-[10px] text-indigo-500"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="dark:text-slate-400 text-slate-600 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-angle-right text-[10px] text-indigo-500"></i>
                  <span>About Me</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="dark:text-slate-400 text-slate-600 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-angle-right text-[10px] text-indigo-500"></i>
                  <span>Skills &amp; Capabilities</span>
                </a>
              </li>
              <li>
                <a href="#education" className="dark:text-slate-400 text-slate-600 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-angle-right text-[10px] text-indigo-500"></i>
                  <span>Education &amp; Experience</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="dark:text-slate-400 text-slate-600 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-angle-right text-[10px] text-indigo-500"></i>
                  <span>Featured Projects</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="dark:text-slate-400 text-slate-600 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-angle-right text-[10px] text-indigo-500"></i>
                  <span>Contact Information</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Affiliation & Resume */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider dark:text-white text-slate-900">Academic Affiliation</h4>
            <div className="p-4 rounded-2xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 text-xs space-y-1 shadow-sm">
              <strong className="dark:text-white text-slate-900 block flex items-center gap-2 font-bold">
                <i className="fa-solid fa-graduation-cap text-indigo-600 dark:text-cyan-400"></i>
                United International University (UIU)
              </strong>
              <span className="text-indigo-600 dark:text-indigo-400 block pl-6 font-semibold">Department of Computer Science &amp; Engineering</span>
              <span className="dark:text-slate-400 text-slate-500 block pl-6">3rd Year Undergraduate &bull; Dhaka, Bangladesh</span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available for Hire</span>
              </div>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-indigo-600 flex items-center gap-1.5 transition-colors"
              >
                <i className="fa-solid fa-file-pdf"></i>
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs dark:text-slate-400 text-slate-600">
          <p className="text-center sm:text-left m-0">
            &copy; 2026 <strong className="dark:text-white text-slate-900 font-bold">Shahriar Ahmed Riaz</strong>. All rights reserved. Built with React &amp; Next.js.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 dark:text-slate-400 text-slate-600">
              Crafted with <i className="fa-solid fa-heart text-rose-500 text-xs"></i> for UI excellence
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-300 dark:text-slate-300 text-slate-700 hover:text-indigo-600 dark:hover:text-white transition-all text-xs cursor-pointer shadow-sm active:scale-95"
            >
              <span>Top</span>
              <i className="fa-solid fa-arrow-up text-[10px]"></i>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
