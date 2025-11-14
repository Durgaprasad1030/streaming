// app/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md mb-4">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded bg-accent flex items-center justify-center text-xs font-bold">
            SB
          </span>
          <span className="font-bold text-lg tracking-wide">
            StoryBit Stream
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <button className="hover:text-white cursor-default" type="button">
            Movies
          </button>
          <button className="hover:text-white cursor-default" type="button">
            Series
          </button>
        </nav>

        <button
          className="md:hidden text-sm border border-white/40 px-3 py-1 rounded-full"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm text-gray-200">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <button
              className="text-left"
              type="button"
              onClick={() => setOpen(false)}
            >
              Movies
            </button>
            <button
              className="text-left"
              type="button"
              onClick={() => setOpen(false)}
            >
              Series
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
