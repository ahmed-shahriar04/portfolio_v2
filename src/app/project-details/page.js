"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { portfolioData } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

function ProjectDetailsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "fitlog";
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = portfolioData.projects.find((p) => p.id === id) || portfolioData.projects[0];
    setProject(found);
  }, [id]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("🔗 Project link copied to clipboard!");
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading Project...</h2>
          <p className="text-sm text-slate-400">Retrieving project dossier</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      {/* Navigation Top Action */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <Link
          href="/#projects"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:-translate-x-1"
        >
          <i className="fa-solid fa-arrow-left text-xs"></i>
          <span>Back to Portfolio Projects</span>
        </Link>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-400 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
        >
          <i className="fa-solid fa-share-nodes text-xs"></i>
          <span>Share Project Dossier</span>
        </button>
      </div>

      {/* Main Project Card */}
      <div className="rounded-3xl bg-slate-900/80 border border-indigo-500/30 overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Banner Image */}
        <div className="relative w-full h-72 sm:h-96 overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-slate-950/40 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-indigo-600/90 text-white backdrop-blur-md border border-indigo-400/30">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white mt-2 drop-shadow-lg">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base text-cyan-300 font-semibold mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#0b0f19]">
          
          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-extrabold text-sm shadow-xl shadow-indigo-500/25 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Launch Live Project Demo</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 hover:border-indigo-400 transition-all"
              >
                <i className="fa-brands fa-github text-base"></i>
                <span>GitHub Repository (Client)</span>
              </a>
            )}
          </div>

          {/* Main Technology Stack Used (Req #9) */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
              <i className="fa-solid fa-screwdriver-wrench text-sm"></i>
              <span>Main Technology Stack Used</span>
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full text-xs font-bold bg-slate-800 text-indigo-300 border border-indigo-500/30 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Brief & Full Description (Req #9) */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2 mb-2">
              <i className="fa-solid fa-align-left text-sm"></i>
              <span>Brief &amp; Detailed Description</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              {project.fullDescription || project.shortDescription}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800">
              {project.highlights?.map((hl, hIdx) => (
                <div key={hIdx} className="p-3 rounded-xl bg-slate-800/50 text-xs text-slate-300 flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-400 text-xs shrink-0"></i>
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges Faced While Developing (Req #9) */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-amber-500/25">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-4">
              <i className="fa-solid fa-triangle-exclamation text-sm"></i>
              <span>Challenges Faced While Developing The Project</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {project.challenges?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Potential Improvements & Future Plans (Req #9) */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-emerald-500/25">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-4">
              <i className="fa-solid fa-lightbulb text-sm"></i>
              <span>Potential Improvements &amp; Future Plans</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {project.futurePlans?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <i className="fa-solid fa-arrow-trend-up text-cyan-400 text-xs mt-1 shrink-0"></i>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ProjectDetailsPage() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <Suspense fallback={<div className="text-center py-40 text-slate-400">Loading Project Details...</div>}>
        <ProjectDetailsContent />
      </Suspense>
      <Footer />
    </div>
  );
}
