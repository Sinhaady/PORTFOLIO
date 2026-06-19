import React from "react";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub,
  FaJs, FaPython
} from "react-icons/fa6";
import { 
  SiTailwindcss, SiVite, SiExpress, SiPostman, 
  SiNextdotjs, SiCplusplus, SiMongodb, SiPostgresql, SiVercel 
} from "react-icons/si";
import { FiLayout, FiServer, FiCode, FiCpu, FiDatabase } from "react-icons/fi";
import { GlowingEffect } from "./GlowingEffectProps ";

const skillCategories = [
  {
    title: "Backend Engineering",
    icon: <FiServer className="h-5 w-5 text-emerald-400" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933] h-4 w-4" /> },
      { name: "Express", icon: <SiExpress className="text-[#ffffff] h-4 w-4" /> },
      { name: "REST APIs", icon: <SiPostman className="text-[#FF6C37] h-4 w-4" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-[#ffffff] h-4 w-4" /> }
    ]
  },
  {
    title: "Frontend Development",
    icon: <FiLayout className="h-5 w-5 text-cyan-400" />,
    skills: [
      { name: "React", icon: <FaReact className="text-[#61DAFB] h-4 w-4" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC] h-4 w-4" /> },
      { name: "Vite", icon: <SiVite className="text-[#646CFF] h-4 w-4" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26] h-4 w-4" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6] h-4 w-4" /> }
    ]
  },
  {
    title: "Languages & Logic",
    icon: <FiCode className="h-5 w-5 text-amber-400" />,
    skills: [
      { name: "C++", icon: <SiCplusplus className="text-[#00599C] h-4 w-4" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E] h-4 w-4" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB] h-4 w-4" /> },
      { name: "SQL", icon: <FiDatabase className="text-[#4479A1] h-4 w-4" /> }
    ]
  },
  {
    title: "Tools & Databases",
    icon: <FiCpu className="h-5 w-5 text-purple-400" />,
    skills: [
      { name: "Git", icon: <FaGithub className="text-[#ffffff] h-4 w-4" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] h-4 w-4" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1] h-4 w-4" /> },
      { name: "Vercel", icon: <SiVercel className="text-[#ffffff] h-4 w-4" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37] h-4 w-4" /> }
    ]
  }
];

export function GlowingEffectDemo() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {skillCategories.map((category, idx) => (
        <div key={idx} className="relative min-h-[16rem] rounded-3xl border border-white/10 p-2 bg-black/45 backdrop-blur-md">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between gap-6 rounded-2xl p-6 md:p-8">
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pill Grid */}
              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
