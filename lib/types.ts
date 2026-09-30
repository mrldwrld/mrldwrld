export type ProjectType = "ui" | "website" | "app";

export type Theme = {
  bg: string;     // page background on the project page
  ink: string;    // text colour on that background
  accent: string; // buttons, highlights, placeholder art
};

export type Project = {
  slug: string;         // URL: /work/<slug>
  title: string;
  type: ProjectType;
  line: string;         // one short line. Keep it under ~10 words.
  styles: string[];     // style tags, used for filtering
  stack: string[];
  year: number;
  repo: string;         // GitHub URL
  live?: string;        // optional live link
  theme: Theme;
  cover?: string;       // e.g. "/work/tide/cover.png" (put files in /public)
  screens?: string[];   // extra screenshots for the gallery
};

export const TYPES: { key: ProjectType; path: string; label: string }[] = [
  { key: "ui", path: "uis", label: "UIs" },
  { key: "website", path: "websites", label: "Websites" },
  { key: "app", path: "apps", label: "Apps" },
];
