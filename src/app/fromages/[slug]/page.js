import { notFound } from "next/navigation";
import fromages from "@/data/produits/fromages";
import allProduits from "@/data/produits";
import ProductDetail from "@/components/ProductDetail";

export async function generateStaticParams() {
  return fromages.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = fromages.find((p) => p.slug === slug);
  if (!product) return {};
  const url = `/fromages/${slug}`;
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

export default async function FromageDetail({ params }) {
  const { slug } = await params;
  const product = fromages.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <ProductDetail
      product={product}
      allProducts={allProduits}
      backHref="/fromages"
      backLabel="Fromages"
    />
  );
}
