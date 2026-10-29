"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  const [iframeLoading, setIframeLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIframeLoading(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
      });
      toast.info("📄 Opening Resume Document Viewer...", {
        autoClose: 2000,
      });
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-[#0b101b] text-slate-100 rounded-3xl border border-indigo-500/30 shadow-2xl overflow-hidden my-auto h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex-none flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-slate-900/95 backdrop-blur-lg border-b border-indigo-500/20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <div>
              <h3 className="font-heading text-xs sm:text-base font-bold text-white tracking-wide leading-tight flex items-center gap-2">
                <span>Shahriar Ahmed Riaz — Official Resume</span>
                <span className="hidden sm:inline-block text-[10px] uppercase px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Google Drive PDF
                </span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Open in Google Drive */}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <i className="fa-brands fa-google-drive text-xs"></i>
              <span className="hidden sm:inline">Open in Drive</span>
            </a>

            {/* Direct Download Button */}
            <a
              href={portfolioData.personal.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <i className="fa-solid fa-download text-xs"></i>
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 flex items-center justify-center transition-all cursor-pointer border border-slate-700"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>
        </div>

        {/* Embedded Interactive PDF Viewer */}
        <div className="relative flex-1 w-full bg-[#1e293b]/50 overflow-hidden">
          {iframeLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm gap-3">
              <i className="fa-solid fa-circle-notch animate-spin text-3xl text-cyan-400"></i>
              <p className="text-xs text-slate-300 font-medium">Loading PDF document from Google Drive...</p>
            </div>
          )}

          <iframe
            src={portfolioData.personal.resumePreviewUrl}
            title="Shahriar Ahmed Riaz Resume PDF Viewer"
            className="w-full h-full border-0"
            allow="autoplay"
            onLoad={() => setIframeLoading(false)}
          ></iframe>
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex-none px-5 py-2.5 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-file-pdf text-rose-400"></i>
            <span>Shahriar_Ahmed_Riaz_FlowCV_Resume.pdf</span>
          </span>
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
          >
            <span>Direct Link</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
