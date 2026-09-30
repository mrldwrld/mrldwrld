import type { Project } from "@/lib/types";

// Abstract stand-in art until real screenshots are added.
// Uses the project's own colours so the grid already shows range.
const seed = (s: string) => [...s].reduce((a, c) => a + c.charCodeAt(0), 0);

export default function Placeholder({ p, variant = 0 }: { p: Project; variant?: number }) {
  const n = seed(p.slug) + variant * 7;
  const { bg, ink, accent } = p.theme;
  const style = { "--bg": bg, "--ink": ink, "--ac": accent } as React.CSSProperties;

  if (p.type === "app") {
    return (
      <div className="ph ph-app" style={style} aria-hidden>
        <div className="ph-bar" style={{ width: `${40 + (n % 30)}%` }} />
        <div className="ph-hero" style={{ height: `${28 + (n % 18)}%` }} />
        <div className="ph-rows">
          {Array.from({ length: 3 + (n % 3) }).map((_, i) => (
            <div key={i} className="ph-row" style={{ width: `${55 + ((n * (i + 3)) % 40)}%` }} />
          ))}
        </div>
        <div className="ph-tabbar"><i /><i /><i /><i /></div>
      </div>
    );
  }

  if (p.type === "website") {
    return (
      <div className="ph ph-web" style={style} aria-hidden>
        <div className="ph-nav"><span /><span /><span /></div>
        <div className="ph-split" data-flip={n % 2}>
          <div className="ph-headline">
            <div className="ph-bar big" style={{ width: `${70 + (n % 25)}%` }} />
            <div className="ph-bar big" style={{ width: `${40 + (n % 30)}%` }} />
            <div className="ph-btn" />
          </div>
          <div className="ph-hero" />
        </div>
      </div>
    );
  }

  return (
    <div className="ph ph-ui" style={style} aria-hidden>
      <div className="ph-side">{[0, 1, 2, 3].map((i) => <i key={i} />)}</div>
      <div className="ph-cells">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={i === n % 4 ? "cell hot" : "cell"} />
        ))}
      </div>
    </div>
  );
}
