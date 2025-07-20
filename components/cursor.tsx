"use client";
import React, { useEffect, useRef, useState } from "react";

// Define cursor colors
const CURSOR_COLORS: { [key: string]: string } = {
  h1: "bg-green-400",
  button: "bg-orange-500",
  default: "bg-sky-500",
};

// Main CustomCursor component
const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [cursorColor, setCursorColor] = useState<string>("bg-sky-500");
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const updateCursorPosition = (x: number, y: number) => {
      cursor.style.top = `${y - 10}px`;
      cursor.style.left = `${x - 10}px`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      updateCursorPosition(touch.clientX, touch.clientY);
    };

    const handleMouseDown = () => {
      setClicked(true);
      cursor.classList.add("expand");
      setTimeout(() => {
        setClicked(false);
        cursor.classList.remove("expand");
      }, 500);
    };

    const handleTouchStart = () => {
      setClicked(true);
      cursor.classList.add("expand");
      setTimeout(() => {
        setClicked(false);
        cursor.classList.remove("expand");
      }, 500);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const tagName = (e.target as HTMLElement).tagName.toLowerCase();
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchstart", handleTouchStart);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`cursor-custom ${cursorColor} fixed pointer-events-none transition-transform -translate-x-1/2 -translate-y-1/2 z-[1000] rounded-full`}
      />
      <div
        className={`fixed pointer-events-none transition-transform -translate-x-1/2 -translate-y-1/2 z-[1000] rounded-full w-8 h-8 border-2 ${cursorColor}`}
      >
        <div
          className={`w-8 h-8 ${clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"} transition-transform duration-500 ease-in-out rounded-full -z-10 ${cursorColor}`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
