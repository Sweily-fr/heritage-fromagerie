import Link from "next/link";
import Image from "next/image";

/**
 * Rendu d'un sous-ensemble de Markdown suffisant pour les articles du blog :
 * titres (##, ###), paragraphes, listes, citations, images et liens/gras/italique
 * en ligne. Les liens internes passent par next/link.
 */

function renderInline(text, keyPrefix) {
  const parts = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match;
  let i = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    const key = `${keyPrefix}-${i++}`;
    if (token.startsWith("**")) {
      parts.push(
        <strong key={key} className="font-medium text-primary">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("*")) {
      parts.push(<em key={key}>{token.slice(1, -1)}</em>);
    } else {
      const m = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      const label = m[1];
      const href = m[2];
      const cls = "text-accent-dark underline decoration-accent/40 underline-offset-4 hover:text-accent";
      parts.push(
        href.startsWith("/") ? (
          <Link key={key} href={href} className={cls}>
            {label}
          </Link>
        ) : (
          <a key={key} href={href} className={cls} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        )
      );
    }
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function parseBlocks(markdown) {
  const lines = markdown.trim().split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4) });
      i++;
    } else if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3) });
      i++;
    } else if (line.startsWith("![")) {
      const m = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      blocks.push({ type: "img", alt: m[1], src: m[2] });
      i++;
    } else if (line.startsWith("> ")) {
      const quote = [];
      while (i < lines.length && lines[i].startsWith("> ")) quote.push(lines[i].slice(2)), i++;
      blocks.push({ type: "quote", text: quote.join(" ") });
    } else if (/^- /.test(line)) {
      const items = [];
      while (i < lines.length && /^- /.test(lines[i])) items.push(lines[i].slice(2)), i++;
      blocks.push({ type: "ul", items });
    } else if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) items.push(lines[i].replace(/^\d+\. /, "")), i++;
      blocks.push({ type: "ol", items });
    } else {
      const para = [];
      while (i < lines.length && lines[i].trim() && !/^(## |### |!\[|> |- |\d+\. )/.test(lines[i])) para.push(lines[i]), i++;
      blocks.push({ type: "p", text: para.join(" ") });
    }
  }
  return blocks;
}

export default function ArticleContent({ markdown }) {
  const blocks = parseBlocks(markdown);
  return (
    <div className="article-body">
      {blocks.map((block, idx) => {
        const key = `b${idx}`;
        switch (block.type) {
          case "h2":
            return (
              <h2 key={key} id={slugify(block.text)} className="mt-14 font-serif text-3xl font-light tracking-[0.02em] text-primary lg:text-4xl">
                {renderInline(block.text, key)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={key} className="mt-10 font-serif text-2xl font-light tracking-[0.02em] text-primary">
                {renderInline(block.text, key)}
              </h3>
            );
          case "p":
            return (
              <p key={key} className="mt-6 text-base font-light leading-8 text-foreground/75">
                {renderInline(block.text, key)}
              </p>
            );
          case "ul":
            return (
              <ul key={key} className="mt-6 space-y-3 pl-6">
                {block.items.map((item, j) => (
                  <li key={j} className="relative text-base font-light leading-8 text-foreground/75 before:absolute before:-left-6 before:top-[0.9rem] before:h-px before:w-3 before:bg-accent">
                    {renderInline(item, `${key}-${j}`)}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={key} className="mt-6 space-y-3 pl-8 list-decimal marker:font-serif marker:text-accent">
                {block.items.map((item, j) => (
                  <li key={j} className="text-base font-light leading-8 text-foreground/75">
                    {renderInline(item, `${key}-${j}`)}
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={key} className="mt-10 border-l border-accent pl-6 font-serif text-xl font-light italic leading-relaxed text-primary/80">
                {renderInline(block.text, key)}
              </blockquote>
            );
          case "img":
            return (
              <figure key={key} className="mt-10">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={block.src} alt={block.alt} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
                </div>
                {block.alt && (
                  <figcaption className="mt-3 text-center text-[0.7rem] font-light tracking-[0.15em] uppercase text-foreground/40">
                    {block.alt}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
