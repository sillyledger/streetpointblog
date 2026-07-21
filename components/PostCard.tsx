import Link from "next/link";
import { Post, formatDate } from "@/lib/posts";
import { CATEGORY_META } from "@/lib/categories";

export default function PostCard({
  post,
  index,
  isLast,
  variant = "feed",
}: {
  post: Post;
  index: number;
  isLast: boolean;
  variant?: "feed" | "mini";
}) {
  const meta = CATEGORY_META[post.category];
  const borderClass =
    index === 0 || isLast ? "border-[1.5px] border-ink/[0.08]" : "border-t-[1.5px] border-ink/[0.08]";
  const padding =
    variant === "feed"
      ? isLast
        ? "px-8 py-8 sm:px-10"
        : "px-8 pb-[66px] pt-8 sm:px-10"
      : isLast
        ? "px-6 py-6"
        : "px-6 pb-[50px] pt-6";
  const Headline = variant === "feed" ? "h2" : "h3";
  const headlineClass =
    variant === "feed"
      ? `mt-4 font-serif text-2xl leading-[1.12] sm:text-[32px] ${meta.headlineColor}`
      : `mt-3 font-serif text-2xl leading-[1.15] ${meta.headlineColor}`;

  return (
    <li
      className={`stack-card ${index > 0 ? "stack-card-overlap" : ""}`}
      style={{ ["--index" as string]: index }}
    >
      <Link
        href={`/mag/${post.slug}`}
        className={`block rounded-card ${borderClass} ${meta.bg} ${padding}`}
      >
        <div className="flex items-center justify-between gap-4">
          <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}>
            {meta.label}
          </span>
          <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}>
            {formatDate(post.publishedAt)}
          </span>
        </div>
        <Headline className={headlineClass}>{post.title}</Headline>
      </Link>
    </li>
  );
}
