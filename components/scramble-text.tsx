"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*?";

export function ScrambleText({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const [output, setOutput] = useState(text);

  useEffect(() => {
    let frameTimer: ReturnType<typeof setTimeout>;

    const start = setTimeout(() => {
      let iter = 0;

      const step = () => {
        setOutput(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < Math.floor(iter)) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join(""),
        );

        iter += 0.35;
        if (Math.floor(iter) < text.length) {
          frameTimer = setTimeout(step, 40);
        } else {
          setOutput(text);
        }
      };

      step();
    }, delay);

    return () => {
      clearTimeout(start);
      clearTimeout(frameTimer);
    };
  }, [text, delay]);

  return <span className={className}>{output}</span>;
}
