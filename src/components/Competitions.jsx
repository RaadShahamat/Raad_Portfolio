import React from "react";
import { COMPETITIONS } from "../data";

function CompetitionCard({ comp, status }) {
  return (
    <div className="card h-full flex flex-col border rounded-2xl p-6 bg-white shadow-sm transition-all">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{comp.title}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {comp.platform} • {comp.date || comp.started}
          </p>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded-full ${
            status === "ongoing"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100"
              : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100"
          }`}
        >
          {status === "ongoing" ? "Ongoing" : "Completed"}
        </span>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 flex-grow">
        {comp.note || ""}
      </p>

      <a
        href={comp.link}
        target="_blank"
        rel="noreferrer"
        className="mt-4 text-brand-600 dark:text-brand-300 font-medium hover:underline"
      >
        View Competition ↗
      </a>
    </div>
  );
}

export default function Competitions() {
  return (
    <section id="competitions" className="mt-20">
      <h2 className="text-3xl font-bold mb-8">Competitions</h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* ONGOING FIRST */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Ongoing Competitions</h3>
          <div className="grid gap-6">
            {COMPETITIONS.ongoing.map((c, i) => (
              <CompetitionCard key={i} comp={c} status="ongoing" />
            ))}
          </div>
        </div>

        {/* COMPLETED */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Completed Competitions</h3>
          <div className="grid gap-6">
            {COMPETITIONS.completed.map((c, i) => (
              <CompetitionCard key={i} comp={c} status="completed" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
