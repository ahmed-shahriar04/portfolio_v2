"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Projects({ onSelectProject }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const allTags = ["all", "React.js", "Tailwind CSS", "JavaScript", "HTML5", "Netlify"];

  const filteredProjects = portfolioData.projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = 
      selectedTag === "all" || 
      project.techStack.some((tech) => tech.toLowerCase() === selectedTag.toLowerCase());

    return matchesSearch && matchesTag;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-cyan-500/10 bg-cyan-50 border dark:border-cyan-500/20 border-cyan-200 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-folder-open"></i>
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading dark:text-white text-slate-900 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 dark:text-slate-400 text-slate-600 text-sm sm:text-base leading-relaxed">
            A showcase of production builds, responsive web applications, and interactive sports/career interfaces built by Shahriar Ahmed Riaz.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div 
          className="p-4 sm:p-5 rounded-3xl dark:bg-slate-900/80 bg-white border dark:border-indigo-500/20 border-slate-200 shadow-md mb-12 flex flex-col md:flex-row items-center justify-between gap-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Tech Tag Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedTag === tag
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 !text-white shadow-md shadow-indigo-500/20"
                    : "dark:bg-slate-800/80 bg-slate-100 dark:text-slate-400 text-slate-700 hover:text-indigo-600 border dark:border-slate-700/60 border-slate-200"
                }`}
              >
                {tag === "all" ? "All Quests" : tag}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
            <input
              type="text"
              placeholder="Search by tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full dark:bg-slate-800/80 bg-slate-50 border dark:border-slate-700/80 border-slate-300 text-xs dark:text-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-3xl dark:bg-slate-900/70 bg-white border dark:border-indigo-500/20 border-slate-200 shadow-md hover:shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Card Image */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Category Badge - Always High-Contrast Dark Translucent with Pure White Text */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold !bg-slate-900/95 !text-white border border-slate-700 shadow-lg backdrop-blur-md">
                  <i className="fa-solid fa-star text-amber-400 text-[10px]"></i>
                  <span className="!text-white font-semibold">{project.category}</span>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full !bg-white !text-slate-950 text-xs font-bold hover:!bg-cyan-400 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <i className="fa-solid fa-circle-info text-xs"></i>
                    <span>View More / Details</span>
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full !bg-gradient-to-r from-indigo-500 to-purple-500 !text-white text-xs font-bold hover:scale-105 transition-all shadow-md"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                      <span className="!text-white">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading dark:text-white text-slate-900 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-bold dark:bg-slate-800 bg-slate-100 dark:text-indigo-300 text-indigo-700 border dark:border-slate-700 border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t dark:border-slate-800 border-slate-100 flex items-center justify-between gap-2 mt-auto">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1.5 text-xs font-extrabold text-cyan-600 dark:text-cyan-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    <span>View More / Details</span>
                    <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Client Repository"
                      className="w-8 h-8 rounded-full dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-300 text-slate-700 flex items-center justify-center transition-colors text-sm"
                    >
                      <i className="fa-brands fa-github text-sm"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
