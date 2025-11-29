import React from "react";
import { PROFILE } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="mt-12 mb-12">
      <div className="border rounded-lg p-6">
        <h2 className="text-2xl font-semibold">Get in touch</h2>
        <p className="mt-2 text-slate-700">I’m open to remote ML engineering roles, collaborative research, or PhD positions. You can reach me directly — I usually reply within a few days.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <div className="text-xs text-slate-500">Email</div>
            <div className="font-medium"><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
          </div>
          <div className="p-4 border rounded">
            <div className="text-xs text-slate-500">Phone</div>
            <div className="font-medium"><a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a></div>
          </div>
          <div className="p-4 border rounded">
            <div className="text-xs text-slate-500">CV</div>
            <div className="font-medium"><a href={PROFILE.cv} target="_blank" rel="noreferrer">Download CV</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
