import React from "react";
import { CERTIFICATES } from "../data";

export default function Certificates() {
  return (
    <section className="mt-24" id="certificates">
      <h2 className="text-3xl font-bold mb-8">Certificates</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {CERTIFICATES.map((c) => (
          <div
            key={c.id}
            className="border rounded-lg overflow-hidden shadow-md bg-white"
          >
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-32 sm:h-36 md:h-40 object-cover"
            />
            <div className="p-2 text-center text-sm font-medium">{c.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
