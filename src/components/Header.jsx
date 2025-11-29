import React from "react";
import { PROFILE } from "../data";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-300 to-brand-500 flex items-center justify-center text-white font-bold">
            R
          </div>
          <span className="font-semibold text-lg text-slate-800">
            {PROFILE.name}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#research" className="hover:text-brand-700 transition">Research</a>
          <a href="#projects" className="hover:text-brand-700 transition">Projects</a>
          <a href="#experience" className="hover:text-brand-700 transition">Experience</a>
          <a href="#contact" className="hover:text-brand-700 transition">Contact</a>
          <a
            href={PROFILE.github}
            target="_blank"
            className="px-4 py-2 rounded-lg border hover:bg-slate-50 transition"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <a href="#projects" className="text-sm text-brand-600 font-medium">Menu</a>
        </div>
      </div>
    </header>
  );
}
