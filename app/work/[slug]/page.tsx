import Link from "next/link";
import { notFound } from "next/navigation";
import Frame from "@/components/Frame";
import { getProject, projects } from "@/data/projects";
import { TYPES } from "@/lib/types";
import { onColor } from "@/lib/contrast";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  return p ? { title: p.title, description: p.line } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  if (!p) notFound();

  const type = TYPES.find((t) => t.key === p.type)!;
  const siblings = projects.filter((x) => x.type === p.type);
  const next = siblings[(siblings.indexOf(p) + 1) % siblings.length];
  const screens = p.screens?.length ? p.screens : [undefined, undefined, undefined];

  const vars = { "--p-bg": p.theme.bg, "--p-ink": p.theme.ink, "--p-accent": p.theme.accent, "--p-on-accent": onColor(p.theme.accent) } as React.CSSProperties;

  return (
    <article className="project" style={vars}>
      <div className="project-head">
        <Link href={`/${type.path}/`} className="project-back">{type.label}</Link>
        <h1>{p.title}</h1>
        <p className="project-line">{p.line}</p>
        <div className="project-actions">
          <a className="btn" href={p.repo}>View on GitHub</a>
          {p.live && <a className="btn btn-ghost" href={p.live}>Open live</a>}
        </div>
      </div>

      <div className={`project-hero project-hero-${p.type}`}>
        <Frame p={p} src={p.cover} />
      </div>

      <dl className="project-facts">
        <div><dt>Style</dt><dd>{p.styles.join(", ")}</dd></div>
        <div><dt>Built with</dt><dd>{p.stack.join(", ")}</dd></div>
        <div><dt>Year</dt><dd>{p.year}</dd></div>
      </dl>

      <div className={`gallery gallery-${p.type}`} tabIndex={0} aria-label="Screens">
        {screens.map((s, i) => (
          <div className="gallery-item" key={i}><Frame p={p} src={s} variant={i + 1} /></div>
        ))}
      </div>

      {next.slug !== p.slug && (
        <Link href={`/work/${next.slug}/`} className="project-next">
          <span>Next</span>
          <strong>{next.title}</strong>
        </Link>
      )}
    </article>
  );
}
