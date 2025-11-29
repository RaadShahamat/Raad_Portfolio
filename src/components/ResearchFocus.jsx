// src/components/ResearchFocus.jsx
import React from "react";
import { RESEARCH_INTERESTS } from "../data";

export default function ResearchFocus() {
  return (
    <section id="research-focus" className="mt-20">
      <h2 className="text-3xl font-bold mb-8">Research Focus</h2>

      <div className="flex flex-wrap gap-3">
        {RESEARCH_INTERESTS.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-slate-50 border rounded-full text-sm text-slate-700 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
