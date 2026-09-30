"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TYPES } from "@/lib/types";
import { site } from "@/data/site";

export default function Nav() {
  const path = usePathname();
  const links = [...TYPES.map((t) => ({ href: `/${t.path}/`, label: t.label })), { href: "/about/", label: "About" }];
  return (
    <header className="nav">
      <Link href="/" className="nav-name">{site.name}</Link>
      <nav aria-label="Main">
        {links.map((l) => (
          <Link key={l.href} href={l.href} aria-current={path?.startsWith(l.href.slice(0, -1)) ? "page" : undefined}>
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
