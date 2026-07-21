import Link from "next/link";
import { Post } from "@/lib/posts";
import { CATEGORY_META } from "@/lib/categories";
import { formatDate } from "@/lib/format";

export default function MoreFromFile({ prev, next }: { prev: Post | null; next: Post | null }) {
  const items = [next, prev].filter((post): post is Post => post !== null);

  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-[620px] px-6 py-10">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
        More from the file
      </h2>
      <ul className="mt-5">
        {items.map((post, index) => {
          const meta = CATEGORY_META[post.category];
          const isLast = index === items.length - 1;

          return (
            <li
              key={post.slug}
              className={`stack-card ${index > 0 ? "stack-card-overlap" : ""}`}
              style={{ ["--index" as string]: index }}
            >
              <Link
                href={`/posts/${post.slug}`}
                className={`block border-[1.5px] border-ink/35 ${meta.bg} ${
                  isLast ? "rounded-card px-6 py-6" : "rounded-t-card px-6 pb-[50px] pt-6"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}>
                    {meta.label}
                  </span>
                  <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}>
                    {formatDate(post.date)}
                  </span>
                </div>
                <h3 className={`mt-3 font-serif text-2xl leading-[1.15] ${meta.headlineColor}`}>
                  {post.title}
                </h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
