"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(project.liveUrl || window.location.href);
      toast.success("🔗 Live project link copied to clipboard!");
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#0b101b] text-slate-100 rounded-3xl border border-indigo-500/30 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-slate-900/95 backdrop-blur-md border-b border-indigo-500/20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-xs uppercase tracking-wider font-bold text-cyan-400">
              Project Dossier &bull; {project.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              title="Share project"
              className="px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border border-slate-700"
            >
              <i className="fa-solid fa-share-nodes text-xs"></i>
              <span className="hidden sm:inline">Share</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close details"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-rose-500/30 text-slate-400 hover:text-rose-400 flex items-center justify-center transition-all cursor-pointer border border-slate-700"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 bg-[#0b0f19]">
          {/* Project Image Banner */}
          <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-800 shadow-inner group">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-600/90 text-white backdrop-blur-md border border-indigo-400/30">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1.5 drop-shadow-md">
                  {project.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:scale-105 transition-all duration-200"
              >
                <span>Live Project Demo</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 hover:border-indigo-400 hover:scale-105 transition-all duration-200"
              >
                <i className="fa-brands fa-github text-base"></i>
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Technology Stack (Req #9) */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
              <i className="fa-solid fa-screwdriver-wrench"></i>
              <span>Main Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-800 text-indigo-300 border border-indigo-500/25"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Brief Description (Req #9) */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 mb-3">
              <i className="fa-solid fa-align-left"></i>
              <span>Project Overview &amp; Architecture</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed m-0">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-3">
                <i className="fa-solid fa-circle-check"></i>
                <span>Key Deliverables &amp; Features</span>
              </h3>
              <ul className="space-y-2 m-0 p-0 list-none">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <i className="fa-solid fa-check text-emerald-400 text-xs shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges Faced (Req #9) */}
          <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-3">
              <i className="fa-solid fa-triangle-exclamation"></i>
              <span>Challenges Faced &amp; Solutions</span>
            </h3>
            <ul className="space-y-2.5 m-0 p-0 list-none">
              {project.challenges?.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Potential Improvements & Future Plans (Req #9) */}
          <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
              <i className="fa-solid fa-lightbulb"></i>
              <span>Potential Improvements &amp; Future Scope</span>
            </h3>
            <ul className="space-y-2.5 m-0 p-0 list-none">
              {project.futurePlans?.map((plan, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <i className="fa-solid fa-arrow-trend-up text-cyan-400 text-xs mt-1 shrink-0"></i>
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Crafted by <strong className="text-white">Shahriar Ahmed Riaz</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all cursor-pointer border border-slate-700"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
}
