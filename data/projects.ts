import type { Project } from "@/lib/types";

// PLACEHOLDERS. Replace each entry with a real project.
// Add a project = add one object. Pages, filters and routes update automatically.
const gh = (s: string) => `https://github.com/your-handle/${s}`;

export const projects: Project[] = [
  // ——— UIs ———
  { slug: "tide", title: "Tide", type: "ui", line: "A weather dashboard that reads like a tide chart.", styles: ["Minimal"], stack: ["React", "D3"], year: 2026, repo: gh("tide"), theme: { bg: "#DDE8EE", ink: "#0E2A3A", accent: "#1F7AA8" } },
  { slug: "slab", title: "Slab", type: "ui", line: "Raw, heavy controls for a synth.", styles: ["Brutalist"], stack: ["React", "Tone.js"], year: 2026, repo: gh("slab"), theme: { bg: "#E9E6DF", ink: "#141414", accent: "#FF4F1F" } },
  { slug: "frost", title: "Frost", type: "ui", line: "Layered glass panels for a music player.", styles: ["Glassmorphic"], stack: ["React", "Framer Motion"], year: 2025, repo: gh("frost"), theme: { bg: "#1D2340", ink: "#EEF1FF", accent: "#9AB0FF" } },
  { slug: "ledger", title: "Ledger", type: "ui", line: "Dense finance tables that stay calm.", styles: ["Minimal", "Data"], stack: ["TypeScript", "Tailwind"], year: 2025, repo: gh("ledger"), theme: { bg: "#F1F2EC", ink: "#1E2A1E", accent: "#3E7C4A" } },
  { slug: "arcade", title: "Arcade", type: "ui", line: "A settings screen that plays like a game.", styles: ["Playful"], stack: ["React", "CSS"], year: 2025, repo: gh("arcade"), theme: { bg: "#FFE14D", ink: "#1B1300", accent: "#E6246E" } },
  { slug: "orbit", title: "Orbit", type: "ui", line: "Radial navigation for a smartwatch.", styles: ["Experimental"], stack: ["SVG", "React"], year: 2024, repo: gh("orbit"), theme: { bg: "#0F1A17", ink: "#E4F5EE", accent: "#39D39A" } },
  { slug: "pulse", title: "Pulse", type: "ui", line: "Health rings with honest numbers.", styles: ["Data", "Minimal"], stack: ["React Native", "Skia"], year: 2024, repo: gh("pulse"), theme: { bg: "#FBEDEE", ink: "#3A0F18", accent: "#D63C5A" } },
  { slug: "grain", title: "Grain", type: "ui", line: "Film-camera controls rebuilt in code.", styles: ["Skeuomorphic"], stack: ["CSS", "TypeScript"], year: 2024, repo: gh("grain"), theme: { bg: "#2B2622", ink: "#F2E8DC", accent: "#E0A24A" } },
  { slug: "kiosk", title: "Kiosk", type: "ui", line: "Ordering flow for tired thumbs.", styles: ["Minimal"], stack: ["Vue"], year: 2023, repo: gh("kiosk"), theme: { bg: "#EDEFF7", ink: "#171C3A", accent: "#4455F0" } },
  { slug: "signal", title: "Signal", type: "ui", line: "Alert system that ranks by urgency.", styles: ["Brutalist", "Data"], stack: ["Svelte"], year: 2023, repo: gh("signal"), theme: { bg: "#F4F4F4", ink: "#000000", accent: "#00A3FF" } },

  // ——— Websites ———
  { slug: "harbor", title: "Harbor", type: "website", line: "Landing page for a ferry startup.", styles: ["Editorial"], stack: ["Next.js", "GSAP"], year: 2026, repo: gh("harbor"), theme: { bg: "#E4ECF2", ink: "#0B2239", accent: "#0063B2" } },
  { slug: "bloom", title: "Bloom", type: "website", line: "A florist's shop that scrolls like a bouquet.", styles: ["Playful", "Editorial"], stack: ["Astro", "CSS"], year: 2026, repo: gh("bloom"), theme: { bg: "#FCE9EF", ink: "#3D0E22", accent: "#C2185B" } },
  { slug: "concrete", title: "Concrete", type: "website", line: "Architecture studio, all grid, no fluff.", styles: ["Brutalist"], stack: ["Next.js"], year: 2025, repo: gh("concrete"), theme: { bg: "#D9D9D6", ink: "#111111", accent: "#FF3B00" } },
  { slug: "nightshift", title: "Nightshift", type: "website", line: "Event site for a late-night radio show.", styles: ["Experimental"], stack: ["Three.js", "Next.js"], year: 2025, repo: gh("nightshift"), theme: { bg: "#120B24", ink: "#EDE4FF", accent: "#A77BFF" } },
  { slug: "field", title: "Field", type: "website", line: "Farm-to-table menus, updated daily.", styles: ["Minimal"], stack: ["Next.js", "Sanity"], year: 2025, repo: gh("field"), theme: { bg: "#EEF0E2", ink: "#23290F", accent: "#6F8A1F" } },
  { slug: "prism", title: "Prism", type: "website", line: "Docs site with a sense of colour.", styles: ["Glassmorphic"], stack: ["MDX", "Next.js"], year: 2024, repo: gh("prism"), theme: { bg: "#E8EAFB", ink: "#1A1D45", accent: "#6A5CFF" } },
  { slug: "courtside", title: "Courtside", type: "website", line: "Live scores for a local league.", styles: ["Data", "Playful"], stack: ["Next.js", "Supabase"], year: 2024, repo: gh("courtside"), theme: { bg: "#FFF1DE", ink: "#2E1800", accent: "#F07800" } },
  { slug: "quiet", title: "Quiet", type: "website", line: "A meditation studio with nothing extra.", styles: ["Minimal"], stack: ["Astro"], year: 2024, repo: gh("quiet"), theme: { bg: "#F3F1F4", ink: "#2A2530", accent: "#7B6A8C" } },
  { slug: "press", title: "Press", type: "website", line: "Magazine layout, responsive to the pixel.", styles: ["Editorial"], stack: ["Next.js", "CSS Grid"], year: 2023, repo: gh("press"), theme: { bg: "#FAF7F0", ink: "#1C1A16", accent: "#B3261E" } },
  { slug: "voltage", title: "Voltage", type: "website", line: "EV charger map with instant feedback.", styles: ["Data"], stack: ["Mapbox", "React"], year: 2023, repo: gh("voltage"), theme: { bg: "#E6F7F2", ink: "#06302A", accent: "#00B388" } },

  // ——— Apps ———
  { slug: "pocket", title: "Pocket", type: "app", line: "Budgeting in three taps.", styles: ["Minimal"], stack: ["React Native", "Expo"], year: 2026, repo: gh("pocket"), theme: { bg: "#E9F2EA", ink: "#0F2A14", accent: "#2E9E4F" } },
  { slug: "loop", title: "Loop", type: "app", line: "Habit tracker that rewards streaks, not guilt.", styles: ["Playful"], stack: ["SwiftUI"], year: 2026, repo: gh("loop"), theme: { bg: "#FFF0E6", ink: "#3A1600", accent: "#FF6B1A" } },
  { slug: "lens", title: "Lens", type: "app", line: "Scan a label, see what's inside.", styles: ["Experimental"], stack: ["Flutter", "ML Kit"], year: 2025, repo: gh("lens"), theme: { bg: "#0E1B2B", ink: "#E6F0FF", accent: "#4DA8FF" } },
  { slug: "stride", title: "Stride", type: "app", line: "Run tracking you can read mid-run.", styles: ["Data", "Brutalist"], stack: ["React Native"], year: 2025, repo: gh("stride"), theme: { bg: "#F2F2F2", ink: "#0A0A0A", accent: "#E8FF00" } },
  { slug: "nook", title: "Nook", type: "app", line: "Reading list that feels like a shelf.", styles: ["Skeuomorphic"], stack: ["SwiftUI"], year: 2025, repo: gh("nook"), theme: { bg: "#EFE4D6", ink: "#2E1F12", accent: "#8C5A2B" } },
  { slug: "drift", title: "Drift", type: "app", line: "Sleep sounds with a single slider.", styles: ["Glassmorphic", "Minimal"], stack: ["Flutter"], year: 2024, repo: gh("drift"), theme: { bg: "#161A33", ink: "#E3E6FF", accent: "#7F8CFF" } },
  { slug: "crate", title: "Crate", type: "app", line: "Vinyl collection, swipe to dig.", styles: ["Playful", "Editorial"], stack: ["React Native", "Reanimated"], year: 2024, repo: gh("crate"), theme: { bg: "#FDE7E1", ink: "#3A0D05", accent: "#E0401A" } },
  { slug: "relay", title: "Relay", type: "app", line: "Team chat for field crews.", styles: ["Minimal"], stack: ["Kotlin", "Compose"], year: 2024, repo: gh("relay"), theme: { bg: "#E7EEF6", ink: "#0C2036", accent: "#2F6FD6" } },
  { slug: "sprout", title: "Sprout", type: "app", line: "Plant care, reminded gently.", styles: ["Playful"], stack: ["Expo"], year: 2023, repo: gh("sprout"), theme: { bg: "#EAF5E3", ink: "#1A3310", accent: "#58A62E" } },
  { slug: "tally", title: "Tally", type: "app", line: "Split bills without the maths.", styles: ["Data", "Minimal"], stack: ["SwiftUI"], year: 2023, repo: gh("tally"), theme: { bg: "#F3EEFB", ink: "#24133F", accent: "#7B3FE4" } },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const allStyles = Array.from(new Set(projects.flatMap((p) => p.styles))).sort();
