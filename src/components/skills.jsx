// src/components/Skills.jsx
import React from "react";
import { SKILLS } from "../data";

function SkillGroup({ title, items }) {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm">
      <h4 className="text-lg font-semibold mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((it, idx) => (
          <span
            key={idx}
            className="text-sm px-3 py-1 bg-slate-50 border rounded-full text-slate-700"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mt-20">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillGroup title="Programming" items={SKILLS.programming} />
        <SkillGroup title="ML / Deep Learning" items={SKILLS.ml_dl} />
        <SkillGroup title="NLP & RAG" items={SKILLS.nlp} />
        <SkillGroup title="Data & Visualization" items={SKILLS.data} />
        <SkillGroup title="Databases & Tools" items={SKILLS.db_tools} />
        <SkillGroup title="Web & Deployment" items={[...SKILLS.web, ...SKILLS.deployment]} />
        <SkillGroup title="Embedded Systems & IoT" items={SKILLS.embedded} />
      </div>
    </section>
  );
}
