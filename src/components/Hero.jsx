"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero({ onOpenResume }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const roles = [
    "Frontend Web Developer",
    "React & Next.js Enthusiast",
    "Tailwind CSS Designer",
    "CS Student @ UIU",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1600);
          setTypingSpeed(50);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(120);
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6" data-aos="fade-up" data-aos-duration="1000">
            
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-slate-900/80 bg-white border dark:border-indigo-500/30 border-slate-200/90 shadow-sm backdrop-blur-md">
              <span className="text-base animate-bounce">👋</span>
              <span className="text-xs sm:text-sm font-semibold dark:text-slate-300 text-slate-700">
                Assalamu Alaikum &bull; Welcome to my portfolio
              </span>
            </div>

            {/* Main Hero Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-heading tracking-tight dark:text-white text-slate-900 leading-[1.15]">
                I&apos;m <span className="gradient-text">{portfolioData.personal.name}</span>
              </h1>

              {/* Animated Designation */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start gap-2 mt-3">
                <span className="text-lg sm:text-2xl font-bold dark:text-slate-300 text-slate-700">
                  I build as a
                </span>
                <span className="text-lg sm:text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 font-heading border-b-2 border-cyan-500/60 pb-0.5">
                  {currentText}
                  <span className="animate-ping font-light text-indigo-500">|</span>
                </span>
              </div>
            </div>

            {/* Bio Description */}
            <p className="text-sm sm:text-base dark:text-slate-300 text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {portfolioData.personal.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenResume}
                id="hero-resume-btn"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 !text-white font-extrabold text-sm sm:text-base shadow-xl shadow-indigo-500/25 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <i className="fa-solid fa-file-arrow-down text-base animate-bounce"></i>
                <span className="!text-white">Download Resume / View CV</span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full dark:bg-slate-900/80 bg-white dark:text-slate-200 text-slate-800 font-bold text-sm sm:text-base border dark:border-indigo-500/30 border-slate-300 hover:border-cyan-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              >
                <span>Explore Projects</span>
                <i className="fa-solid fa-arrow-right text-xs text-cyan-600 dark:text-cyan-400"></i>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t dark:border-slate-800/80 border-slate-200">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <span className="text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-600 flex items-center gap-2">
                  <i className="fa-solid fa-bolt text-amber-500"></i>
                  <span>Connect With Me:</span>
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {portfolioData.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      aria-label={social.name}
                      className={`flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 text-xs font-bold dark:text-slate-200 text-slate-700 transition-all duration-300 hover:scale-105 shadow-sm hover:border-indigo-500`}
                    >
                      <i className={`${social.icon} text-sm`}></i>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {portfolioData.about.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-2xl dark:bg-slate-900/60 bg-white border dark:border-indigo-500/15 border-slate-200 shadow-sm text-center"
                >
                  <strong className="block text-xl sm:text-2xl font-extrabold font-heading gradient-text">
                    {stat.number}
                  </strong>
                  <span className="text-[11px] dark:text-slate-400 text-slate-600 font-semibold leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 flex items-center justify-center" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative w-72 sm:w-88 h-72 sm:h-88 flex items-center justify-center">
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-1 animate-spin-slow opacity-80 blur-[2px]"></div>
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-cyan-400/40 animate-reverse-spin pointer-events-none"></div>

              <div className="relative w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full overflow-hidden dark:bg-slate-950 bg-white p-2 shadow-2xl border-4 dark:border-slate-900 border-white z-10 group">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover rounded-full transform group-hover:scale-108 transition-transform duration-700"
                  loading="eager"
                />
              </div>

              {/* Badges */}
              <div className="absolute -top-3 -right-3 z-20 px-3.5 py-2 rounded-2xl dark:bg-slate-900/90 bg-white border dark:border-cyan-500/40 border-slate-200 shadow-xl flex items-center gap-2 animate-float">
                <i className="fa-brands fa-react text-cyan-500 text-lg"></i>
                <span className="text-xs font-bold dark:text-white text-slate-900">React.js</span>
              </div>

              <div className="absolute -bottom-3 -left-3 z-20 px-3.5 py-2 rounded-2xl dark:bg-slate-900/90 bg-white border dark:border-indigo-500/40 border-slate-200 shadow-xl flex items-center gap-2 animate-float-delayed">
                <i className="fa-solid fa-n dark:text-white text-slate-900 text-base"></i>
                <span className="text-xs font-bold dark:text-white text-slate-900">Next.js</span>
              </div>

              <div className="absolute top-1/2 -left-8 -translate-y-1/2 z-20 px-3 py-1.5 rounded-xl dark:bg-slate-900/90 bg-white border dark:border-purple-500/40 border-slate-200 shadow-lg hidden sm:flex items-center gap-2">
                <i className="fa-solid fa-graduation-cap text-purple-500 text-sm"></i>
                <span className="text-[11px] font-semibold dark:text-purple-200 text-purple-700">UIU CSE</span>
              </div>

              <div className="absolute top-1/2 -right-8 -translate-y-1/2 z-20 px-3 py-1.5 rounded-xl dark:bg-slate-900/90 bg-white border dark:border-teal-500/40 border-slate-200 shadow-lg hidden sm:flex items-center gap-2">
                <i className="fa-solid fa-wind text-teal-500 text-sm"></i>
                <span className="text-[11px] font-semibold dark:text-teal-200 text-teal-700">Tailwind</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
