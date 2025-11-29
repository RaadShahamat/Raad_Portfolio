// src/components/Research.jsx
import React from "react";
import { RESEARCH_DETAILS } from "../data";

function ResearchCard({ title, summary, tags, badge }) {
  return (
    <div className="border rounded-2xl p-6 bg-white shadow-sm">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        {badge && (
          <div className="text-xs px-2 py-1 bg-brand-100 rounded-full text-brand-700">
            {badge}
          </div>
        )}
      </div>
      <p className="text-slate-600 mt-3 text-sm leading-relaxed">
        {summary}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags?.map((t, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-slate-100 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Research() {
  return (
    <section id="research" className="mt-20">
      <h2 className="text-3xl font-bold mb-8">Research & Thesis</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
        {/* Ongoing Research */}
          <div>
            {/* <h4 className="text-xl font-semibold mb-4">Ongoing Research</h4> */}
            <div className="grid gap-4">
              {RESEARCH_DETAILS.ongoing.map((r, idx) => (
                <ResearchCard key={idx} {...r} badge="Ongoing" />
              ))}
            </div>
          </div>
          {/* Thesis */}
          <ResearchCard
            title={RESEARCH_DETAILS.thesis.title}
            summary={RESEARCH_DETAILS.thesis.summary}
            tags={RESEARCH_DETAILS.thesis.tags}
            badge="Thesis"
          />

          {/* Completed Research */}
          <div>
            
            <div className="grid gap-4">
              {RESEARCH_DETAILS.completed.map((r, idx) => (
                <ResearchCard key={idx} {...r} />
              ))}
            </div>
          </div>

          

        </div>

        {/* Sidebar */}
        <aside className="border rounded-2xl p-6 bg-white shadow-sm">
          <h4 className="text-lg font-semibold mb-3">Quick Snapshot</h4>
          <ul className="text-slate-700 space-y-2">
            <li>• Brain Tumor Classification (Thesis)</li>
            <li>• Speech Emotion Recognition</li>
            <li>• ECG Image Digitization (Ongoing)</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
