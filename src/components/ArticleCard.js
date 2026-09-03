import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/data/blog";

export default function ArticleCard({ article, priority = false }) {
  return (
    <Link href={`/blog/${article.slug}`} className="luxury-card group block h-full overflow-hidden">
      <div className="relative aspect-[3/2] overflow-hidden bg-cream">
        <Image
          src={article.cover.src}
          alt={article.cover.alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 px-3 py-1 text-[0.6rem] font-light tracking-[0.2em] uppercase bg-white/90 text-accent backdrop-blur-sm">
          {article.category}
        </span>
      </div>
      <div className="p-6">
        <p className="text-[0.65rem] font-light tracking-[0.2em] uppercase text-foreground/40">
          <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readingTime} min
        </p>
        <h3 className="mt-3 font-serif text-xl font-light leading-snug tracking-[0.02em] text-primary group-hover:text-accent-dark transition-colors duration-500">
          {article.title}
        </h3>
        <p className="mt-3 text-sm font-light leading-7 text-foreground/60 line-clamp-3">
          {article.description}
        </p>
        <span className="mt-5 inline-block text-[0.65rem] font-light tracking-[0.2em] uppercase text-accent group-hover:tracking-[0.3em] transition-all duration-500">
          Lire l&apos;article &rarr;
        </span>
      </div>
    </Link>
  );
}
