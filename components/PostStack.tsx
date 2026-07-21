import Link from "next/link";
import { Post } from "@/lib/posts";
import { CATEGORY_META } from "@/lib/categories";
import { formatDate } from "@/lib/format";

export default function PostStack({ posts }: { posts: Post[] }) {
  const sorted = [...posts].sort((a, b) => b.number - a.number);

  return (
    <ul className="mx-auto max-w-5xl px-6">
      {sorted.map((post, index) => {
        const meta = CATEGORY_META[post.category];
        const isLast = index === sorted.length - 1;

        return (
          <li
            key={post.slug}
            className={`stack-card ${index > 0 ? "stack-card-overlap" : ""}`}
            style={{ ["--index" as string]: index }}
          >
            <Link
              href={`/posts/${post.slug}`}
              className={`block border-[1.5px] border-ink/35 ${meta.bg} ${
                isLast ? "rounded-card px-8 py-8 sm:px-10" : "rounded-t-card px-8 pb-[66px] pt-8 sm:px-10"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}
                >
                  {meta.label}
                </span>
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}
                >
                  {formatDate(post.date)}
                </span>
              </div>
              <h2
                className={`mt-4 font-serif text-2xl leading-[1.12] sm:text-[32px] ${meta.headlineColor}`}
              >
                {post.title}
              </h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
