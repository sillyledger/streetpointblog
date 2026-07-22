import Link from "next/link";
import { Post, formatShortDate } from "@/lib/posts";
import { CATEGORY_META } from "@/lib/categories";

function CategoryIcon({ category }: { category: Post["category"] }) {
  const shared = {
    width: 30,
    height: 30,
    viewBox: "0 0 30 30",
    fill: "none",
    className: "stroke-ink opacity-75",
    strokeWidth: 1.2,
    "aria-hidden": true as const,
  };

  if (category === "observations") {
    return (
      <svg {...shared}>
        <path d="M15 4 L4 15 L15 26 L26 15 Z" />
      </svg>
    );
  }

  if (category === "readings") {
    return (
      <svg {...shared}>
        <path d="M5 23 L13 13 L18 18 L25 8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <line x1="15" y1="4" x2="15" y2="26" />
      <line x1="4" y1="15" x2="26" y2="15" />
    </svg>
  );
}

export default function FeedCard({ post, index }: { post: Post; index: number }) {
  const meta = CATEGORY_META[post.category];
  const isFeatured = index === 0;
  const isFirstInRow = index % 3 === 0;

  const borderClasses = isFeatured
    ? `relative border-t-2 min-[800px]:border-t-0 min-[800px]:border-l-2 ${meta.accentBorder}`
    : `border-t border-ink/25 min-[800px]:border-t-0 ${
        isFirstInRow ? "min-[800px]:border-l-0" : "min-[800px]:border-l min-[800px]:border-ink/25"
      }`;

  return (
    <Link
      href={`/mag/${post.slug}`}
      className={`flex min-h-[210px] flex-col px-[26px] pb-[34px] pt-[30px] ${borderClasses} ${
        isFeatured ? "bg-featured" : ""
      }`}
    >
      {isFeatured && (
        <>
          <span className="absolute -left-1 -top-1 h-2 w-2 bg-corner" aria-hidden="true" />
          <span className="absolute -right-1 -top-1 h-2 w-2 bg-corner" aria-hidden="true" />
          <span className="absolute -left-1 -bottom-1 h-2 w-2 bg-corner" aria-hidden="true" />
          <span className="absolute -right-1 -bottom-1 h-2 w-2 bg-corner" aria-hidden="true" />
        </>
      )}

      <h2 className="font-display text-[23px] font-semibold leading-[1.18] tracking-[-0.01em]">
        {post.title}
      </h2>
      <p className={`mt-[10px] font-mono text-[11px] uppercase tracking-[0.14em] ${meta.feedMetaColor}`}>
        {meta.label} · {formatShortDate(post.publishedAt)}
      </p>
      <p className="mt-[16px] text-[13px] leading-[1.75] text-ink/[0.62]">{post.excerpt}</p>

      <div className="mt-auto pt-[30px]">
        <CategoryIcon category={post.category} />
      </div>
    </Link>
  );
}
