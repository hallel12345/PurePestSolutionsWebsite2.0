"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/data/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1714]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
          <Image
            src="/brand/logo-wordmark.png"
            alt="Pure Pest Solutions"
            width={140}
            height={42}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/90 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#8ad16d]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#8ad16d] hover:text-[#8ad16d]"
          >
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-[#6ec94f] px-4 py-2 text-sm font-semibold text-[#0f1714] transition hover:bg-[#84da67]"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-white/20 px-3 py-2 text-sm font-semibold text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#101b16] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="rounded-full border border-white/20 px-4 py-2 text-center text-sm font-semibold"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-[#6ec94f] px-4 py-2 text-center text-sm font-semibold text-[#0f1714]"
              onClick={() => setOpen(false)}
            >
              Get Free Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
