import React from "react";
import { PROJECTS } from "../data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mt-32">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <p className="text-slate-600 mb-12 text-lg">
        Selected work highlighting my experience with my skills -
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
