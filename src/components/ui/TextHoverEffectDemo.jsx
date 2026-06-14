import React from "react";
import TextHoverEffect from "./TextHoverEffect ";

export function TextHoverEffectDemo() {
  return (
    <section id="about">
      <div className="h-65 flex items-center justify-center">
        <TextHoverEffect text="ABOUT" fontSize={120} viewBox="0 0 700 140" />
      </div>
    </section>
  );
}
