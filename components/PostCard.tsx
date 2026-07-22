import Link from "next/link";
import { Post, formatDate, estimateReadTime } from "@/lib/posts";
import { CATEGORY_META } from "@/lib/categories";

export default function PostCard({ post }: { post: Post }) {
  const meta = CATEGORY_META[post.category];

  return (
    <li>
      <Link href={`/mag/${post.slug}`} className={`block overflow-hidden rounded-card ${meta.bg}`}>
        <div
          className={`flex items-center justify-between gap-4 border-b px-[26px] py-[12px] ${meta.ruleColor}`}
        >
          <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}>
            {post.dispatchNumber !== null
              ? `No. ${String(post.dispatchNumber).padStart(3, "0")} — ${meta.label}`
              : meta.label}
          </span>
          <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}>
            {formatDate(post.publishedAt)} · {estimateReadTime(post.content)} min
          </span>
        </div>
        <div className="px-[26px] pb-[24px] pt-[20px]">
          <h3 className={`font-display text-[20px] font-medium leading-[1.2] ${meta.headlineColor}`}>
            {post.title}
          </h3>
          <span className={`mt-2 block font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}>
            Read →
          </span>
        </div>
      </Link>
    </li>
  );
}
