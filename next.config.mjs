/** Static export: builds to /out, deployable to GitHub Pages or Vercel.
 *  For GitHub Pages under a repo path, set NEXT_PUBLIC_BASE_PATH=/repo-name */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};
