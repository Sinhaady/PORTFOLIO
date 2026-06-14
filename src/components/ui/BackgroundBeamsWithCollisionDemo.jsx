import React from "react";
import { BackgroundBeamsWithCollision } from "./BackgroundBeamWithCollision";

const featureCards = [
  {
    title: "DSA",
    value: "650+ Problems",
    description:
      "Strong grip on arrays, graphs, DP, and contest-style problem solving.",
  },
  {
    title: "CP",
    value: "Competitive Focus",
    description:
      "Practice-driven mindset with speed, accuracy, and algorithmic clarity.",
  },
  {
    title: "Full Stack",
    value: "MERN + APIs",
    description:
      "Builds responsive interfaces and robust backend systems end to end.",
  },
  {
    title: "Hackathons",
    value: "Rapid Shipping",
    description:
      "Turns ideas into working products fast under pressure and deadlines.",
  },
];

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden px-4 pb-20 pt-8 md:px-8 lg:px-10 xl:px-12"
    >
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <h1 className="select-none text-[7rem] font-black uppercase tracking-tight text-white/[0.07] sm:text-[9rem] md:text-[11rem] lg:text-[13rem]">
          ABOUT
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <h2 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
          Get to Know Me
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          Exploring my journey, skills, and passion for creating digital experiences
        </p>

        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-blue-500" />
      </div>

      <BackgroundBeamsWithCollision className="mx-auto mt-14 min-h-160 max-w-6xl rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_36%),linear-gradient(180deg,rgba(2,6,23,0.88),rgba(2,8,23,0.82))] shadow-[0_30px_90px_rgba(2,6,23,0.45)] backdrop-blur-xl md:min-h-168">
        <div className="relative z-20 w-full px-5 py-10 md:px-10 md:py-12">
          <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {featureCards.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/12 bg-white/4.5 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/7.5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/85">
                      {item.title}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>

              <a
                href="/resume.pdf"
                download
                className="group inline-flex w-full items-center justify-center gap-3 rounded-[22px] bg-white px-6 py-4 text-lg font-semibold text-neutral-900 shadow-[0_12px_26px_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-100"
              >
                <span>Download Resume</span>
              </a>
            </div>

            <article className="rounded-3xl border border-white/12 bg-black/35 p-7 backdrop-blur-lg md:p-8">
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Get to know my journey
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">
                I’m Aditya Saurav, a final-year student at NIT Patna and a
                full-stack developer focused on building interfaces that feel
                polished, responsive, and purposeful. My foundation in
                competitive programming has shaped the way I approach problems —
                emphasizing structure, efficiency, and clarity under
                constraints. I enjoy working across the stack, designing clean
                user interfaces while building scalable backend systems that
                perform reliably in real-world scenarios. I’m particularly
                interested in performance, system design, and creating
                experiences that are intuitive from the first interaction.
                Currently, I’m looking for opportunities where I can contribute
                to meaningful products and grow as an engineer.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
                  Problem Solver
                </span>
                <span className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
                  Product Builder
                </span>
                <span className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
                  Fast Learner
                </span>
              </div>
            </article>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}