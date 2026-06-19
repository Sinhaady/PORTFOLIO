"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CanvasTextDemo } from "./CanvasTextDemo.jsx";
import { EncryptedTextDemoSecond } from "./EncryptedTextDemoSecond.jsx";

export default function BackgroundBeamsDemo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Seek back to start slightly before the video officially ends to avoid browser loop lag or end-of-video glitches
      if (video.duration && video.currentTime >= video.duration - 0.15) {
        video.currentTime = 0.05;
        video.play().catch(() => {});
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen w-full items-center overflow-hidden bg-transparent text-white antialiased">
      <div className="absolute left-4 top-6 z-20 md:left-8 lg:left-10 xl:left-12">
        <EncryptedTextDemoSecond className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300" />
      </div>

      <div className="relative z-10 flex min-h-screen w-full items-center px-4 pb-16 pt-28 md:px-8 lg:px-10 xl:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Left Column: Heading, description, action buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <CanvasTextDemo />
          </motion.div>

          {/* Right Column: Visual Video element (Cutout character) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full relative"
          >
            {/* Float container with overflow allowed, scaled up and shifted right using transforms */}
            <div className="relative w-full max-w-2xl animate-float overflow-visible scale-125 lg:translate-x-16 origin-center lg:origin-right">
              {/* Soft ambient blue/cyan glow behind the character */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl opacity-75 pointer-events-none" />
              
              {/* Transparent borderless overflow container to crop watermark */}
              <div className="relative w-full aspect-video overflow-hidden bg-transparent border-0 shadow-none">
                {/* Video with screen blending, scale-up to crop edges, and shifted mask-image to fade bottom-right watermark */}
                <video
                  ref={videoRef}
                  src="/Make_it_type_keyboards_202606200049.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[115%] h-[115%] -translate-x-[5%] -translate-y-[5%] object-cover bg-transparent mix-blend-screen opacity-95 pointer-events-none select-none [mask-image:radial-gradient(circle_at_40%_50%,white_50%,transparent_75%)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
