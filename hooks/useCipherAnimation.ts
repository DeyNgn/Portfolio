"use client";
import { useState, useEffect } from "react";

const caesarShift = (text: string, shift: number) => {
  return text
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const isUpperCase = char === char.toUpperCase();
        const positiveShift = (shift % 26 + 26) % 26;
        const shiftedCode =
          isUpperCase
            ? ((code - 65 + positiveShift) % 26) + 65
            : ((code - 97 + positiveShift) % 26) + 97;
        return String.fromCharCode(shiftedCode);
      }
      return char;
    })
    .join("");
};

const toLeetSpeak = (text: string) => {
  const leetMap: { [key: string]: string } = {
    a: "4", e: "3", i: "1", o: "0", s: "5", t: "7"
  };
  return text
    .toLowerCase()
    .split("")
    .map(char => leetMap[char] || char)
    .join("");
};

export const useCipherAnimation = (navLinks: { href: string; text: string }[]) => {
  const [animatedLinks, setAnimatedLinks] = useState(navLinks.map(link => link.text));

  useEffect(() => {
    const texts = navLinks.map(link => link.text);
    const encryptedTexts = texts.map(text => caesarShift(text, 13));
    const leetTexts = texts.map(toLeetSpeak);

    const versions = [texts, encryptedTexts, leetTexts];
    let versionIndex = 0;

    const interval = setInterval(() => {
      setAnimatedLinks(versions[versionIndex]);
      versionIndex = (versionIndex + 1) % versions.length;
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setAnimatedLinks(texts);
    }, 5000);

    return () => clearInterval(interval);
  }, [navLinks]);

  return animatedLinks;
};
