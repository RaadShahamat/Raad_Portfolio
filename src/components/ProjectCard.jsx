import React from "react";
import ReactPlayer from "react-player";

export default function ProjectCard({ p }) {
  return (
    <div className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all">
      <h3 className="text-xl font-semibold mb-3">{p.title}</h3>

      <p className="text-slate-600 leading-relaxed mb-4 text-sm">
        {p.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {p.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-slate-100 border rounded-full text-xs text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Repo + Video */}
      <div className="flex justify-between items-center">
        {p.repo ? (
          <a
            href={p.repo}
            target="_blank"
            className="text-brand-600 hover:text-brand-800 font-medium"
          >
            View Repo →
          </a>
        ) : (
          <div className="text-slate-400 text-sm">Private Repository</div>
        )}

        {p.video && (
          <div className="w-40 h-24 rounded-md overflow-hidden border shadow-sm">
            <ReactPlayer
              url={p.video}
              width="100%"
              height="100%"
              light={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
