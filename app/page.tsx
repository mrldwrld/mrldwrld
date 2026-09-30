import WorkGrid from "@/components/WorkGrid";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

// Interleave types so the home grid mixes UIs, websites and apps.
const mixed = (() => {
  const by = ["ui", "website", "app"].map((t) => projects.filter((p) => p.type === t));
  const out = [];
  for (let i = 0; i < Math.max(...by.map((b) => b.length)); i++) for (const b of by) if (b[i]) out.push(b[i]);
  return out;
})();

export default function Home() {
  const words = site.hero.split(" ");
  return (
    <>
      <section className="hero">
        <h1 className="hero-line" aria-label={site.hero}>
          {words.map((w, i) => (
            <span key={i} className="hero-word" aria-hidden style={{ animationDelay: `${120 + i * 110}ms`, "--d": i + 1 } as React.CSSProperties}>
              {w}
            </span>
          ))}
        </h1>
        <p className="hero-sub">{site.sub}</p>
      </section>
      <WorkGrid projects={mixed} />
    </>
  );
}
