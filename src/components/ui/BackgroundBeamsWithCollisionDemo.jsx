import React from "react";
import { BackgroundBeamsWithCollision } from "./BackgroundBeamWithCollision";
import { CanvasText } from "./CanvasText.jsx";

const featureCards = [
  {
    title: "DSA",
    value: "1100+ Problems",
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
          Exploring my journey, skills, and passion for creating digital
          experiences
        </p>

        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-blue-500" />
      </div>

      <BackgroundBeamsWithCollision className="mx-auto mt-14 h-auto min-h-fit max-w-6xl rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_36%),linear-gradient(180deg,rgba(2,6,23,0.88),rgba(2,8,23,0.82))] shadow-[0_30px_90px_rgba(2,6,23,0.45)] backdrop-blur-xl">
        <div className="relative z-20 w-full px-5 py-10 md:px-10 md:py-12">
          {/* Greeting with name above the grid */}
          <div className="mb-10 text-left">
            <h3 className="text-left text-[clamp(2rem,5vw,3.6rem)] font-black leading-none tracking-[-0.055em] text-white flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Hi I&apos;m</span>
              <CanvasText
                className="inline-block"
                text="Aditya Saurav"
                backgroundClassName="bg-[#3b82f6]"
                colors={[
                  "rgba(96, 165, 250, 1)",
                  "rgba(74, 145, 249, 0.95)",
                  "rgba(59, 130, 246, 0.9)",
                  "rgba(37, 99, 235, 0.85)",
                  "rgba(59, 130, 246, 0.75)",
                  "rgba(96, 165, 250, 0.65)",
                ]}
                lineWidth={1.2}
                lineGap={4}
                curveIntensity={24}
                animationDuration={14}
              />
            </h3>
          </div>

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

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300 md:text-base">
                <p>
                  I'm a B.Tech student at NIT Patna with a passion for software
                  engineering and building impactful digital products.
                </p>

                <p>
                  I continuously strengthen my understanding of{" "}
                  <strong>
                    Data Structures & Algorithms, OOP, DBMS, Operating Systems,
                    Computer Networks, and System Design
                  </strong>{" "}
                  while applying these concepts through real-world projects.
                </p>

                <p>
                  I am a <strong>fast learner</strong>,{" "}
                  <strong>hardworking</strong>, and
                  <strong> self-motivated</strong> individual who enjoys solving
                  challenging problems, adapting to new technologies,
                  collaborating with teams, and continuously improving to build
                  scalable and efficient software.
                </p>
              </div>
            </article>
          </div>

          {/* Coding Profile Section */}
          {/* Coding Profile Section */}
          <div className="mt-16 border-t border-white/10 pt-12">
            <h3 className="mb-6 text-xl font-bold tracking-tight text-white uppercase">
              Coding Profiles
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/_AdITYa_14/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-amber-500/10 p-3 transition-transform duration-300 group-hover:scale-110">
                    <span className="text-2xl">🏆</span>
                  </div>

                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    LeetCode
                  </span>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold text-white">Knight</h4>
                  <p className="mt-1 text-sm text-white/60">1954 Max Rating</p>
                </div>
              </a>

              {/* Codeforces */}
              <a
                href="https://codeforces.com/profile/sinhaady14"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-blue-500/10 p-3 transition-transform duration-300 group-hover:scale-110">
                    <span className="text-2xl">💻</span>
                  </div>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                    Codeforces
                  </span>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold text-white">Pupil</h4>
                  <p className="mt-1 text-sm text-white/60">1349 Max Rating</p>
                </div>
              </a>

              {/* CodeChef */}
              <a
                href="https://www.codechef.com/users/losthope_14"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-orange-500/10 p-3 transition-transform duration-300 group-hover:scale-110">
                    <span className="text-2xl">⭐</span>
                  </div>

                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-400">
                    CodeChef
                  </span>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold text-white">3★</h4>
                  <p className="mt-1 text-sm text-white/60">1610 Max Rating</p>
                </div>
              </a>

              {/* GitHub */}
              {/* GeeksforGeeks Card */}
              <a
                href="https://www.geeksforgeeks.org/user/adityasiowfe/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-green-500/10 p-2.5 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="h-6 w-6 text-[#2F8D46]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4
                 1.41-1.41L11 14.17l5.59-5.58L18 10l-7 7z"
                      />
                    </svg>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full">
                    GeeksforGeeks
                  </span>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-bold text-white">
                    Problem Solver
                  </h4>
                  <p className="text-xs text-white/50 mt-1">
                    DSA Practice • Coding Profile
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
