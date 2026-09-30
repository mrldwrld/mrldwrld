import { site } from "@/data/site";
import { asset } from "@/lib/asset";

export const metadata = { title: "About" };

export default function About() {
  return (
    <section className="about">
      <div className="about-portrait">
        {site.portrait ? <img src={asset(site.portrait)} alt={site.name} /> : <div className="about-portrait-empty" aria-hidden />}
      </div>
      <div className="about-text">
        <h1>{site.name}</h1>
        {site.about.map((line) => <p key={line}>{line}</p>)}
        <a className="btn" href={`mailto:${site.email}`}>Email me</a>
      </div>
      <ul className="process" aria-label="Process">
        {site.process.map((s) => (
          <li key={s.label}>
            <div className="process-img">{s.image && <img src={asset(s.image)} alt={s.label} />}</div>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
