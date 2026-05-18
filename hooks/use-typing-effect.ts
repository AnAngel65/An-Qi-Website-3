"use client";

import { useState, useEffect, useRef } from 'react';

type TypingEffectOptions = {
  speed?: number;
  eraseSpeed?: number;
  eraseDelay?: number;
  typingDelay?: number;
};

const defaultOptions: Required<TypingEffectOptions> = {
  speed: 100,
  eraseSpeed: 50,
  eraseDelay: 2000,
  typingDelay: 500,
};

export function useTypingEffect(
  text: string | string[],
  options: TypingEffectOptions = {}
) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const { speed, eraseSpeed, eraseDelay, typingDelay } = {
    ...defaultOptions,
    ...options,
  };

  const texts = Array.isArray(text) ? text : [text];
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentText = texts[textIndex];

    const handleTyping = () => {
      if (isTyping) {
        // Typing forward
        if (charIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          // Finished typing, wait before erasing
          timeoutRef.current = setTimeout(() => {
            setIsTyping(false);
          }, eraseDelay);
        }
      } else {
        // Erasing
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Finished erasing, move to next text
          setIsTyping(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
          timeoutRef.current = setTimeout(() => {
            // Wait before typing next text
          }, typingDelay);
        }
      }
    };

    const typingSpeed = isTyping ? speed : eraseSpeed;
    timeoutRef.current = setTimeout(handleTyping, typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    charIndex,
    isTyping,
    textIndex,
    texts,
    speed,
    eraseSpeed,
    eraseDelay,
    typingDelay,
  ]);

  return displayedText;
}
