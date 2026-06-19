"use client";

import {
  CodeBracketIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

import { Brain } from "lucide-react"; // ✅ added

import cn from "../../utils/lib.js";
import { CanvasText } from "./CanvasText.jsx";

const rolePills = [
  {
    label: "Developer",
    icon: <CodeBracketIcon className="h-4 w-4 text-blue-300" />,
  },
  {
    label: "Problem Solver",
    icon: <Brain className="h-4 w-4 text-purple-300" />, // ✅ fixed
  },
  {
    label: "Competitive Programmer",
    icon: <RocketLaunchIcon className="h-4 w-4 text-cyan-300" />,
  },
];
export function CanvasTextDemo() {
  return (
    <div className="relative mr-auto flex w-full max-w-6xl flex-col gap-8">
      <div className="max-w-5xl">
        <h1
          className={cn(
            "text-left text-[clamp(2.4rem,6.8vw,5.2rem)] font-black leading-[0.96] tracking-[-0.055em] text-white",
          )}
        >
          <span className="block">Building products</span>
          <span className="mt-1 block">that feel alive.</span>
          <CanvasText
            className="block w-fit"
            text="Not just websites."
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
        </h1>
      </div>

      <div className="max-w-4xl">
        <p className="text-pretty text-base leading-relaxed text-neutral-300 md:text-xl">
          I&apos;m a{" "}
          <span className="font-semibold text-white">full-stack developer</span>{" "}
          with a strong foundation in{" "}
          <span className="font-semibold text-blue-400">
            competitive programming
          </span>
          ,<br /> building modern, web applications with{" "}
          <span className="font-semibold italic text-white">
            clean UI and smooth interactions
          </span>
          .
        </p>
      </div>

      <div className="flex flex-col gap-6 pt-2">
        <div className="flex flex-wrap gap-3">
          {rolePills.map(({ label, icon }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-neutral-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur"
            >
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_6px_24px_rgba(59,130,246,0.5)]"
          >
            <span>View Work</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
