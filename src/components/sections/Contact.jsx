import React, { useState } from "react";
import { FiMail, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
import { GlowingEffect } from "../ui/GlowingEffectProps ";

const CONTACT_EMAIL = "sinhaady14@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sentStatus, setSentStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSentStatus("Your email app is opening with the message ready to send.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-x-hidden bg-transparent py-20 text-white"
    >
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.1),transparent_40%)]" />
      </div>

      {/* Pinned Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <h1 className="select-none text-[7rem] font-black uppercase tracking-tight text-white/[0.04] sm:text-[9rem] md:text-[11rem] lg:text-[13rem]">
          CONNECT
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* Title */}
        <div className="text-center py-10">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl uppercase tracking-tight">
            Get In Touch
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-500" />
          <p className="mt-6 text-gray-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
            Feel free to reach out for collaboration opportunities, open projects, or just to say hello.
          </p>
        </div>

        {/* Contact Info & Form Layout */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Info Side */}
          <div className="space-y-6 lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Let's talk about everything!
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                Don't like forms? You can directly contact me via email or connect with me on social platforms.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Portfolio inquiry")}`}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
                >
                  <div className="rounded-lg bg-blue-500/10 p-2.5 text-blue-400">
                    <FiMail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">Email Me</p>
                    <p className="text-sm font-semibold text-white">{CONTACT_EMAIL}</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/adityasaurav/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
                >
                  <div className="rounded-lg bg-cyan-500/10 p-2.5 text-cyan-400">
                    <FiLinkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">LinkedIn</p>
                    <p className="text-sm font-semibold text-white">linkedin.com/in/adityasaurav</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Sinhaady"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
                >
                  <div className="rounded-lg bg-purple-500/10 p-2.5 text-purple-400">
                    <FiGithub className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">GitHub</p>
                    <p className="text-sm font-semibold text-white">https://github.com/Sinhaady</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 text-neutral-500 text-xs">
              © 2026 Aditya Saurav. Made with passion & code.
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-black/45 backdrop-blur-md">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative rounded-xl p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                      placeholder="Hi, I'd love to talk about..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-neutral-950 transition-all hover:bg-neutral-200"
                  >
                    <span>Send Message</span>
                    <FiSend className="h-4 w-4" />
                  </button>

                  {sentStatus && (
                    <p className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
                      {sentStatus}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
