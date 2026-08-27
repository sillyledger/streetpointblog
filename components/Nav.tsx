"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/" aria-label="StreetPoint home">
          <Logo />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-ink"
        >
          <span className="flex flex-col gap-[5px]">
            <span className="h-[2px] w-[22px] bg-white" />
            <span className="h-[2px] w-[22px] bg-white" />
            <span className="h-[2px] w-[22px] bg-white" />
          </span>
        </button>
      </div>

      {open && (
        <div className="absolute right-6 top-full z-20 mt-2 flex flex-col border border-ink bg-white px-6 py-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="py-2 text-lg font-semibold text-ink hover:underline"
          >
            Index
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="py-2 text-lg font-semibold text-ink hover:underline"
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
