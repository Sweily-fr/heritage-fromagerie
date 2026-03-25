import { notFound } from "next/navigation";
import cremerie from "@/data/produits/cremerie";
import allProduits from "@/data/produits";
import ProductDetail from "@/components/ProductDetail";

export async function generateStaticParams() {
  return cremerie.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = cremerie.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function CremerieDetail({ params }) {
  const { slug } = await params;
  const product = cremerie.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <ProductDetail
      product={product}
      allProducts={allProduits}
      backHref="/cremerie"
      backLabel="Crèmerie"
    />
  );
}
