import { notFound } from "next/navigation";
import WorkGrid from "@/components/WorkGrid";
import { projects } from "@/data/projects";
import { TYPES } from "@/lib/types";

export const dynamicParams = false;
export const generateStaticParams = () => TYPES.map((t) => ({ type: t.path }));

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return { title: TYPES.find((t) => t.path === type)?.label };
}

export default async function TypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const t = TYPES.find((x) => x.path === type);
  if (!t) notFound();
  const list = projects.filter((p) => p.type === t.key);
  return (
    <>
      <section className="page-head">
        <h1>{t.label}</h1>
      </section>
      <WorkGrid projects={list} />
    </>
  );
}
