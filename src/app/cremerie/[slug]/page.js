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
  const url = `/cremerie/${slug}`;
  return {
    title: `${product.name} - ${product.tag}`,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} - ${product.tag} | L'Héritage`,
      description: product.description,
      url,
      type: "website",
      images: [{ url: product.image, alt: product.name }],
    },
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
