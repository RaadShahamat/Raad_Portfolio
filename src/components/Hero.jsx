import React from "react";
import { PROFILE } from "../data";

export default function Hero() {
  return (
    <section className="pt-32 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div className="space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="text-brand-600">{PROFILE.name}</span> <br />
          </h1>
          <h3 className="text-3xl font-bold leading-tight">
            ML Engineer & Research Enthusiast
          </h3>

          <p className="text-xl text-slate-600 leading-relaxed">
            I work on Medical Imaging, Multimodal Deep Learning, RAG Systems, 
            and Large Language Models. Passionate about solving problems at 
            the intersection of AI, healthcare, and education.
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href={PROFILE.cv}
              target="_blank"
              className="px-6 py-3 bg-brand-600 text-white rounded-xl shadow-lg hover:bg-brand-700 transition"
            >
              Download CV
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              className="px-6 py-3 border rounded-xl hover:bg-slate-50 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center">
          <img
            src={PROFILE.photo}
            alt="profile"
            className="w-72 h-72 rounded-3xl object-scale-down shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
