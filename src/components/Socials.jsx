import React from "react";
import { PROFILE } from "../data";

export default function Socials() {
  return (
    <div className="mt-3 flex gap-3">
      <a href={PROFILE.github} className="text-sm text-slate-600 hover:text-slate-900">GitHub</a>
      <a href={PROFILE.linkedin} className="text-sm text-slate-600 hover:text-slate-900">LinkedIn</a>
      <a href={`mailto:${PROFILE.email}`} className="text-sm text-slate-600 hover:text-slate-900">Email</a>
    </div>
  );
}
