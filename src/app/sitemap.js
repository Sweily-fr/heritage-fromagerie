import { fromages, cremerie, epicerieFine } from "@/data/produits";

const siteUrl = "https://heritage-fromagerie.fr";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/produits", priority: 0.9, changeFrequency: "weekly" },
  { path: "/fromages", priority: 0.9, changeFrequency: "weekly" },
  { path: "/cremerie", priority: 0.8, changeFrequency: "weekly" },
  { path: "/epicerie-fine", priority: 0.8, changeFrequency: "weekly" },
  { path: "/plateaux-de-fromages", priority: 0.8, changeFrequency: "monthly" },
  { path: "/livraison", priority: 0.7, changeFrequency: "monthly" },
  { path: "/a-propos", priority: 0.6, changeFrequency: "yearly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const productEntries = [
    ...fromages.map((p) => ({ slug: p.slug, category: "fromages" })),
    ...cremerie.map((p) => ({ slug: p.slug, category: "cremerie" })),
    ...epicerieFine.map((p) => ({ slug: p.slug, category: "epicerie-fine" })),
  ].map(({ slug, category }) => ({
    url: `${siteUrl}/${category}/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...productEntries];
}
