// src/components/Experience.jsx
import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="mt-20">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>

      <div className="space-y-6">
        {/* Ulkasemi Assistant Engineer */}
        <div className="border rounded-2xl p-6 bg-white shadow-sm">
        <div className="flex items-start justify-between">
            <div>
            <h3 className="text-lg font-semibold">Ulkasemi Pvt Limited</h3>
            <p className="text-xs text-slate-500">Assistant Engineer · Nov 2025 – Present</p>
            </div>
            <p className="text-xs text-slate-500">FTDS / Automation & AI</p>
        </div>
        <ul className="list-disc pl-5 mt-3 text-slate-600 text-sm">
            <li>AI-embedded VLSI design pipelines</li> 
            <li>Automation scripts in Python, Perl, TCL, SKILL</li> 
            <li>Integration of ML into hardware design flows</li>
        </ul>
        </div>
        

        {/* Ulkasemi Trainee Engineer */}
        <div className="border rounded-2xl p-6 bg-white shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">Ulkasemi Pvt Limited</h3>
              <p className="text-xs text-slate-500">Trainee Engineer · May 2025 – Oct 2025</p>
            </div>
            <p className="text-xs text-slate-500">FTDS / Automation & AI</p>
          </div>
          <ul className="list-disc pl-5 mt-3 text-slate-600 text-sm">
            <li>AI-embedded VLSI design pipelines</li> 
            <li>Automation scripts in Python, Perl, TCL, SKILL</li> 
            <li>Integration of ML into hardware design flows</li>
          </ul>
        </div>
        {/* Learnathon 3.0 */}
        <div className="border rounded-2xl p-6 bg-white shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">Learnathon 3.0 Appreciationship Program</h3>
              <p className="text-xs text-slate-500">Team Leader · Dec 2024 – Apr 2025</p>
            </div>
            <p className="text-xs text-slate-500">Brain Station23 / Team Noobsquad</p>
          </div>
          <ul className="list-disc pl-5 mt-3 text-slate-600 text-sm">
            <li>Team Leader</li>
            <li>Full stack development</li>
            <li>skills: React, FastAPI, PostgreSQL, WebSocket, Deployment</li>
          </ul>
        </div>
        

      </div>
    </section>
  );
}
