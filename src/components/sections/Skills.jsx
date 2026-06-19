import React from "react";
import { GlowingEffectDemo } from "../ui/GlowingEffectDemo.jsx";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate w-full overflow-x-hidden bg-transparent py-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_40%)]" />
      </div>

      {/* Static watermark layer pinned to Skills background */}
      <div className="pointer-events-none sticky top-0 z-0 flex h-screen items-center justify-center">
        <h1 className="select-none text-[7rem] font-black tracking-tight text-white/5 uppercase sm:text-[9rem] md:text-[11rem] lg:text-[13rem]">
          EXPERTISE
        </h1>
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 -mt-[62vh] mx-auto w-full max-w-5xl px-6">
        {/* Decorative Floating Dots & Labels */}
        <div className="absolute top-0 left-1/4 flex items-center gap-2 opacity-50">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
            Technical
          </span>
        </div>
        <div className="absolute top-0 right-1/4 flex items-center gap-2 opacity-50">
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
            Excellence
          </span>
        </div>

        {/* Floating Stat: Categories (Bottom Left) */}
        <div className="absolute -bottom-4 -left-4 md:left-0 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center min-w-[120px] transition-transform hover:scale-105">
          <span className="text-3xl md:text-4xl font-bold text-blue-500">
            4+
          </span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-bold">
            Categories
          </span>
        </div>

        {/* Floating Stat: Technologies (Top Right) */}
        <div className="absolute -top-12 -right-4 md:right-0 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center min-w-[120px] transition-transform hover:scale-105">
          <span className="text-3xl md:text-4xl font-bold text-cyan-400">
            20+
          </span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-bold">
            Technologies
          </span>
        </div>

        {/* Center Main Title */}
        <div className="text-center py-10">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase italic drop-shadow-2xl">
            Skills
          </h1>

          <p className="mt-8 text-gray-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
            A comprehensive showcase of my technical expertise across modern
            development stacks
          </p>
        </div>


      </div>
      <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl px-6">
        <GlowingEffectDemo />
      </div>

    </section>
  );
}
