import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Tilt from "@/components/Tilt";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: `${site.hero} ${site.sub}`,
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,300..800&display=swap"
        />
      </head>
      <body>
        <Tilt />
        <Nav />
        <main>{children}</main>
        <footer className="footer">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.github}>GitHub</a>
        </footer>
      </body>
    </html>
  );
}
