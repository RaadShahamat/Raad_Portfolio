import React from "react";
import { EDUCATION, AWARDS, RESEARCH_INTERESTS } from "../data";

export default function About() {
  return (
    <section className="mt-24" id="research">
      <h2 className="text-3xl font-bold mb-8">Research Focus</h2>
      
      <div className="flex flex-wrap gap-3 pb-16">
        {RESEARCH_INTERESTS.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-slate-50 border rounded-full text-sm text-slate-700 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-3 gap-10">
        
        {/* Research Description */}
        <div className="md:col-span-2 space-y-10">
          <div>
            <h3 className="text-2xl font-semibold mb-3">About My Research</h3>
            <p className="text-slate-700 leading-relaxed ">
              I work at the intersection of Medical Imaging, Computer Vision, 
              and Multimodal AI. My thesis focuses on hybrid CNN–Transformer 
              models. I also work on RAG systems for 
              low-resource languages, speech emotion recognition, and NLP research 
              for Bangla datasets.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="border rounded-xl p-6 bg-white">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          {EDUCATION.map((e, i) => (
            <div key={i} className="mb-6">
              <div className="font-medium">{e.school}</div>
              <div className="text-sm text-slate-600">
                {e.degree} · {e.years} · GPA: {e.gpa}
              </div>
            </div>
          ))}

          <h3 className="text-xl font-semibold mb-4">Awards</h3>
          <ul className="space-y-2 text-slate-700">
            {AWARDS.map((a, i) => (
              <li key={i}>• {a}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
