"use client";

import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Hero count={count} />
      <button
        className="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-5 h-5 me-2 -ms-1"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add The Number {count}
      </button>
    </main>
  );
}
