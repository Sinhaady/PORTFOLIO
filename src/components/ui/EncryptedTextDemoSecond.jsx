import React from "react";
import EncryptedText from "./EncryptedText.jsx";

export function EncryptedTextDemoSecond({
  text = "Aditya Saurav",
  className = "",
}) {
  return (
    <span className={className}>
      <EncryptedText
        text={text}
        className="whitespace-nowrap"
        encryptedClassName="text-cyan-200/55"
        revealedClassName="text-cyan-200"
        revealDelayMs={50}
        flipDelayMs={35}
      />
    </span>
  );
}
