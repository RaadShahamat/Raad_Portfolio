import React from "react";

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500 flex justify-between">
        <div>© {new Date().getFullYear()} Raad Shahamat Alif</div>
        <div>Built with React · Tailwind · Vite</div>
      </div>
    </footer>
  );
}
