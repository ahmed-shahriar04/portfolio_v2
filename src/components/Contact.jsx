"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      toast.success("🎉 Thank you! Your message has been sent to Shahriar Ahmed Riaz.", {
        position: "bottom-right",
        autoClose: 4000,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden dark:bg-slate-950/60 bg-slate-100/70 border-t dark:border-transparent border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-emerald-500/10 bg-emerald-50 border dark:border-emerald-500/20 border-emerald-200 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-comments"></i>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading dark:text-white text-slate-900 tracking-tight">
            Let&apos;s Build Something <span className="gradient-text">Remarkable</span>
          </h2>
          <p className="mt-3 dark:text-slate-400 text-slate-600 text-sm sm:text-base leading-relaxed">
            Have an exciting opportunity, frontend role, or project collaboration? Reach out directly through the channels below.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4" data-aos="fade-right">
            
            {/* Email Card */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="group p-5 rounded-2xl dark:bg-slate-900/70 bg-white border dark:border-indigo-500/20 border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 block text-decoration-none"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:!text-white transition-all duration-300">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 block">Direct Email</span>
                <strong className="text-sm sm:text-base font-bold dark:text-white text-slate-900 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate block">
                  {portfolioData.personal.email}
                </strong>
                <span className="text-[11px] text-cyan-600 dark:text-cyan-400 block mt-0.5 font-medium">Click to send direct email &rarr;</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/shahriarahmedriaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl dark:bg-slate-900/70 bg-white border dark:border-blue-500/20 border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 block text-decoration-none"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:!text-white transition-all duration-300">
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 block">Professional Network</span>
                <strong className="text-sm sm:text-base font-bold dark:text-white text-slate-900 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors block">
                  linkedin.com/in/shahriarahmedriaz
                </strong>
                <span className="text-[11px] text-blue-600 dark:text-blue-400 block mt-0.5 font-medium">Connect on LinkedIn &rarr;</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl dark:bg-slate-900/70 bg-white border dark:border-slate-800 border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-500 flex items-center justify-center text-xl shrink-0">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 block">Current Location</span>
                <strong className="text-sm sm:text-base font-bold dark:text-white text-slate-900 block">
                  {portfolioData.personal.location}
                </strong>
                <span className="text-[11px] dark:text-slate-400 text-slate-500 flex items-center gap-1.5 mt-0.5 font-medium">
                  <i className="fa-regular fa-clock text-[10px] text-cyan-600 dark:text-cyan-400"></i>
                  <span>GMT+6 (Bangladesh Standard Time)</span>
                </span>
              </div>
            </div>

            {/* Direct Resume Download Link Card - Crisp Indigo Button with White Text */}
            <div className="p-5 rounded-2xl dark:bg-slate-900 bg-white border dark:border-indigo-500/30 border-slate-200 shadow-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-purple-400 flex items-center justify-center text-xl shrink-0 border dark:border-indigo-500/20 border-indigo-100">
                  <i className="fa-solid fa-file-pdf"></i>
                </div>
                <div>
                  <strong className="text-xs sm:text-sm dark:text-white text-slate-900 block font-bold">Looking for my CV?</strong>
                  <span className="text-[11px] dark:text-slate-400 text-slate-600 font-medium">Review full qualifications in PDF format</span>
                </div>
              </div>
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full !bg-indigo-600 hover:!bg-indigo-700 !text-white font-bold text-xs transition-all shrink-0 shadow-md flex items-center gap-1.5 active:scale-95"
              >
                <i className="fa-solid fa-file-pdf text-xs !text-white"></i>
                <span className="!text-white">View PDF</span>
              </a>
            </div>

          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="p-6 sm:p-8 rounded-3xl dark:bg-slate-900/80 bg-white border dark:border-indigo-500/20 border-slate-200 shadow-md">
              <h3 className="text-xl font-bold font-heading dark:text-white text-slate-900 mb-2 flex items-center gap-2">
                <i className="fa-solid fa-paper-plane text-cyan-600 dark:text-cyan-400 text-base"></i>
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs dark:text-slate-400 text-slate-600 mb-6">
                Fill in the form below and I will get back to you promptly within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl dark:bg-slate-800/80 bg-slate-50 border dark:border-slate-700 border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:text-white text-slate-900 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1.5">
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl dark:bg-slate-800/80 bg-slate-50 border dark:border-slate-700 border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:text-white text-slate-900 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl dark:bg-slate-800/80 bg-slate-50 border dark:border-slate-700 border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:text-white text-slate-900 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or interview details..."
                    className="w-full px-4 py-3 rounded-xl dark:bg-slate-800/80 bg-slate-50 border dark:border-slate-700 border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:text-white text-slate-900 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 !text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <i className="fa-solid fa-spinner animate-spin"></i>
                      <span className="!text-white">Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i>
                      <span className="!text-white">Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
