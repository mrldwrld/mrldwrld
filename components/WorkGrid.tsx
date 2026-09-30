"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import Frame from "./Frame";

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const styles = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.styles))).sort(), [projects]);
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? projects.filter((p) => p.styles.includes(active)) : projects;

  return (
    <section className="work" aria-label="Work">
      <div className="filters" role="toolbar" aria-label="Filter by style">
        <button aria-pressed={active === null} onClick={() => setActive(null)}>All</button>
        {styles.map((s) => (
          <button key={s} aria-pressed={active === s} onClick={() => setActive(active === s ? null : s)}>{s}</button>
        ))}
        <span className="count" aria-live="polite">{shown.length}</span>
      </div>

      <ul className="grid">
        {shown.map((p) => (
          <li key={p.slug} className={`card card-${p.type}`} style={{ "--card-bg": p.theme.bg } as React.CSSProperties}>
            <Link href={`/work/${p.slug}/`}>
              <div className="card-stage"><Frame p={p} src={p.cover} /></div>
              <div className="card-meta">
                <span className="card-title">{p.title}</span>
                <span className="card-styles">{p.styles.join(", ")}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
