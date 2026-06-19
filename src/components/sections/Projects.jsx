import React from "react";
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import { GlowingEffect } from "../ui/GlowingEffectProps ";

const projectsData = [
  {
    title: "Ventro",
    description: "Built a scalable event management application featuring event creation, user registration, secure authentication, and integrated payment workflows",
    tags: ["React", "Express", "Nodemailer", "Razorpay","Node.js","MongoDB"],
    github: "https://github.com/Sinhaady/EM_PROJECT",
    live: "https://github.com/",
  },
  {
    title: "WanderLust",
    description: "An Airbnb-inspired platform that lets users discover, list, and book unique stays with secure authentication and an intuitive user experience",
    tags: ["MongoDB", "Express", "React", "Node.js","Joi","MapBox"],
    github: "https://github.com/Sinhaady/WanderLust",
    live: "https://github.com/",
  },
  {
    title: "SyncSpace",
    description: "Built a modern collaboration platform that helps users communicate, coordinate tasks, and work together efficiently in real time..",
    tags: ["Vite", "Socket.io", "React", "TailwindCSS","WebHooks","Dockers","Node.js"],
    github: "https://github.com/Sinhaady/SyncSpace-",
    live: "https://github.com/",
  },
  {
    title: "CollabSpace Canvas",
    description: "A real-time shared drawing board and code editor featuring active presence indicators, collaborative cursor tracking, and syntax highlighting.",
    tags: ["Vite", "Socket.io", "React", "TailwindCSS"],
    github: "https://github.com/",
    live: "https://github.com/",
  },
  {
    title: "Chat_App",
    description: "A real-time chat application that enables instant messaging, secure authentication, and seamless communication with live updates.",
    tags: ["Vite", "Socket.io", "React", "TailwindCSS","MongoDb","Node.js"],
    github: "https://github.com/Sinhaady/Chat_App",
    live: "https://github.com/",
  },
  {
    title: "Chat_Bot",
    description: "An AI assistant that leverages natural language processing to provide real-time support and meaningful conversations.",
    tags: ["JavaScript","HTML","CSS","GEMINI API"],
    github: "https://github.com/Sinhaady/Chat_Bot",
    live: "https://github.com/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate w-full overflow-x-hidden bg-transparent py-20 text-white"
    >
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.12),transparent_38%),radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_40%)]" />
      </div>

      {/* Pinned Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <h1 className="select-none text-[7rem] font-black uppercase tracking-tight text-white/[0.05] sm:text-[9rem] md:text-[11rem] lg:text-[13rem]">
          WORK
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* Title */}
        <div className="text-center py-10">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl uppercase tracking-tight">
            Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan-400" />
          <p className="mt-6 text-gray-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
            Some of my recent applications and projects built to solve real-world problems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div key={index} className="relative min-h-[22rem] list-none">
              <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-black/45 backdrop-blur-md">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-fit rounded-lg border border-white/10 bg-white/5 p-2 text-cyan-400">
                        <FiFolder className="h-6 w-6" />
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <FiGithub className="h-5 w-5" />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <FiExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-semibold text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
