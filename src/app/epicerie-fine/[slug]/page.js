import { notFound } from "next/navigation";
import epicerieFine from "@/data/produits/epicerie-fine";
import allProduits from "@/data/produits";
import ProductDetail from "@/components/ProductDetail";

export async function generateStaticParams() {
  return epicerieFine.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = epicerieFine.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function EpicerieFineDetail({ params }) {
  const { slug } = await params;
  const product = epicerieFine.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <ProductDetail
      product={product}
      allProducts={allProduits}
      backHref="/epicerie-fine"
      backLabel="Épicerie fine"
    />
  );
}
