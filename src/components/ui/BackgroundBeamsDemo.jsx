"use client";
import { CanvasTextDemo } from "./CanvasTextDemo.jsx";
import { EncryptedTextDemoSecond } from "./EncryptedTextDemoSecond.jsx";

export default function BackgroundBeamsDemo() {
  return (
    <div className="relative flex min-h-screen w-full items-center overflow-hidden bg-transparent text-white antialiased">
      <div className="absolute left-4 top-6 z-20 md:left-8 lg:left-10 xl:left-12">
        <EncryptedTextDemoSecond className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300" />
      </div>

      <div className="relative z-10 flex min-h-screen w-full items-center px-4 pb-16 pt-28 md:px-8 lg:px-10 xl:px-12">
        <CanvasTextDemo />
      </div>
    </div>
  );
}
