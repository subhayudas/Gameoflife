import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyPage from "@/components/PropertyPage";
import { PROPERTIES, propertyBySlug } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/properties/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = propertyBySlug(slug);
  return p ? { title: p.name, description: `${p.name}: ${p.line} ${p.about[1]}` } : {};
}

export default async function Page({ params }: PageProps<"/properties/[slug]">) {
  const { slug } = await params;
  const p = propertyBySlug(slug);
  if (!p) notFound();
  return <PropertyPage p={p} />;
}
