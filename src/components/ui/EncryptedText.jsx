"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "motion/react";
import cn from "../../utils/lib.js";

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset) {
  return charset.charAt(Math.floor(Math.random() * charset.length));
}

function generateGibberishPreservingSpaces(original, charset) {
  if (!original) return "";

  return original
    .split("")
    .map((ch) => (ch === " " ? " " : generateRandomCharacter(charset)))
    .join("");
}

export default function EncryptedText({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const initialScramble = useMemo(
    () => generateGibberishPreservingSpaces(text, charset).split(""),
    [text, charset]
  );

  const [revealCount, setRevealCount] = useState(0);
  const [scrambleChars, setScrambleChars] = useState([]);
  const scrambleCharsRef = useRef([]);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(0);
  const lastFlipTimeRef = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    const initialChars = [...initialScramble];
    scrambleCharsRef.current = initialChars;

    startTimeRef.current = performance.now();
    lastFlipTimeRef.current = startTimeRef.current;

    let cancelled = false;

    const update = (now) => {
      if (cancelled) return;

      const elapsed = now - startTimeRef.current;
      const totalLength = text.length;

      const currentReveal = Math.min(
        totalLength,
        Math.floor(elapsed / revealDelayMs)
      );

      setRevealCount(currentReveal);

      if (currentReveal >= totalLength) return;

      if (now - lastFlipTimeRef.current >= flipDelayMs) {
        const nextChars = [...scrambleCharsRef.current];

        for (let i = currentReveal; i < totalLength; i++) {
          nextChars[i] =
            text[i] === " "
              ? " "
              : generateRandomCharacter(charset);
        }

        scrambleCharsRef.current = nextChars;
        setScrambleChars(nextChars);
        lastFlipTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(update);
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [charset, flipDelayMs, initialScramble, isInView, revealDelayMs, text]);

  if (!text) return null;

  return (
    <span
      ref={ref}
      className={cn(className)}
      aria-label={text}
    >
      {text.split("").map((char, index) => {
        const isRevealed = index < revealCount;

        const displayChar = isRevealed
          ? char
          : char === " "
          ? " "
          : scrambleChars[index] ||
            initialScramble[index] ||
            generateRandomCharacter(charset);

        return (
          <span
            key={index}
            className={cn(
              isRevealed ? revealedClassName : encryptedClassName
            )}
          >
            {displayChar}
          </span>
        );
      })}
    </span>
  );
}
