import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-head">
      <h1>Nothing here.</h1>
      <p><Link href="/">Back to the work</Link></p>
    </section>
  );
}
