"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const nav = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/disclosures", label: "Disclosures" }
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded bg-blue-700 px-3 py-2 text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-blue-700 text-white font-bold">
            SA
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            SunAnchor Capital
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium no-underline hover:text-blue-800",
                pathname === item.href ? "text-blue-800" : "text-slate-700"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/apply" className="no-underline">
            <Button size="sm">Apply Now</Button>
          </Link>
        </nav>
        <div className="md:hidden">
          <Link href="/apply" className="no-underline">
            <Button size="sm">Apply</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
