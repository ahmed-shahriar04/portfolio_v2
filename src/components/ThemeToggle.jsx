"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-theme") || "dark";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const applyTheme = (t) => {
    document.documentElement.setAttribute("data-theme", t);
    if (t === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    applyTheme(next);
  };

  if (!mounted) {
    return (
      <button 
        aria-label="Theme toggle"
        className="w-10 h-10 rounded-full flex items-center justify-center border border-indigo-500/20 bg-slate-800/50 text-indigo-400"
      >
        <FaMoon className="text-sm" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme mode"
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      className="relative w-10 h-10 rounded-full flex items-center justify-center border border-indigo-500/30 dark:border-indigo-500/30 border-slate-300 dark:bg-slate-800/60 bg-white hover:border-indigo-400 transition-all duration-300 shadow-md hover:scale-110 active:scale-95 text-indigo-600 dark:text-indigo-300 cursor-pointer"
    >
      {theme === "dark" ? (
        <FaSun className="text-amber-400 text-base animate-spin-slow transition-transform" />
      ) : (
        <FaMoon className="text-indigo-600 text-base transition-transform" />
      )}
    </button>
  );
}
