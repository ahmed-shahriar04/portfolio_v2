"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "education", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: "fa-solid fa-house" },
    { name: "About", href: "#about", id: "about", icon: "fa-solid fa-user-tie" },
    { name: "Skills", href: "#skills", id: "skills", icon: "fa-solid fa-code" },
    { name: "Education & Exp", href: "#education", id: "education", icon: "fa-solid fa-graduation-cap" },
    { name: "Projects", href: "#projects", id: "projects", icon: "fa-solid fa-laptop-code" },
    { name: "Contact", href: "#contact", id: "contact", icon: "fa-solid fa-envelope" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? "py-3 dark:bg-[#0a0d14]/90 bg-white/95 backdrop-blur-xl dark:border-indigo-500/20 border-slate-200/90 shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo with profile picture */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group text-decoration-none"
          >
            <div className="relative w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img 
                src={portfolioData.personal.avatar} 
                alt={portfolioData.personal.name}
                className="w-full h-full rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0a0d14]"></span>
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg dark:text-white text-slate-900 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                Shahriar <span className="gradient-text">Riaz</span>
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Available for Hire
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1.5 dark:bg-slate-900/60 bg-slate-100/90 border dark:border-indigo-500/20 border-slate-200 rounded-full px-3 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 !text-white shadow-md shadow-indigo-500/30"
                      : "dark:text-slate-300 text-slate-700 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <i className={`${link.icon} text-xs`}></i>
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 !text-white shadow-md shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <i className="fa-solid fa-file-pdf text-xs"></i>
              <span className="!text-white">Resume</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center dark:bg-slate-800/80 bg-slate-100 border dark:border-indigo-500/20 border-slate-300 dark:text-slate-200 text-slate-800 hover:text-cyan-500 transition-all cursor-pointer"
            >
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-base`}></i>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-3xl dark:bg-[#0f172a]/95 bg-white/95 backdrop-blur-xl border dark:border-indigo-500/30 border-slate-200 shadow-2xl animate-fade-in">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-cyan-600 dark:text-cyan-400 border dark:border-indigo-500/30 border-indigo-200"
                        : "dark:text-slate-300 text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    <i className={`${link.icon} text-base text-indigo-500`}></i>
                    <span>{link.name}</span>
                  </a>
                );
              })}

              <div className="pt-2 mt-2 border-t dark:border-slate-800 border-slate-100">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 !text-white font-bold text-sm shadow-md"
                >
                  <i className="fa-solid fa-file-pdf"></i>
                  <span className="!text-white">View &amp; Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
