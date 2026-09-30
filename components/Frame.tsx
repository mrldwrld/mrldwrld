import type { Project } from "@/lib/types";
import { asset } from "@/lib/asset";
import Placeholder from "./Placeholder";

// The frame shape says what the work is: phone for apps, browser for websites, bare panel for UIs.
export default function Frame({ p, src, variant = 0 }: { p: Project; src?: string; variant?: number }) {
  const inner = src
    ? <img src={asset(src)} alt={`${p.title} screen`} loading="lazy" />
    : <Placeholder p={p} variant={variant} />;

  return (
    <div className={`frame frame-${p.type}`} style={{ "--f-ink": p.theme.ink } as React.CSSProperties}>
      {p.type === "website" && (
        <div className="frame-chrome"><span className="frame-url">{p.slug}.com</span></div>
      )}
      <div className="frame-screen">{inner}</div>
    </div>
  );
}
