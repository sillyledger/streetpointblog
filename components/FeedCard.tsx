import Link from "next/link";
import { Post, formatCompactDate } from "@/lib/posts";
import { getCategoryMeta } from "@/lib/categories";

export default function FeedCard({ post }: { post: Post }) {
  const meta = getCategoryMeta(post.category);

  return (
    <Link
      href={`/mag/${post.slug}`}
      className="group flex gap-6 border-t border-ink py-6 first:border-t-0"
    >
      <div className="flex w-[74px] shrink-0 items-baseline gap-2">
        <span className={`h-[7px] w-[7px] shrink-0 rounded-full ${meta.dot}`} />
        <span className="text-[15px] text-ink">{formatCompactDate(post.publishedAt)}</span>
      </div>
      <div>
        <h2 className="text-[20px] font-semibold leading-snug text-ink group-hover:underline">
          {post.title}
        </h2>
        <p className="mt-1 text-[15px] leading-relaxed text-ink">{post.excerpt}</p>
      </div>
    </Link>
  );
}
