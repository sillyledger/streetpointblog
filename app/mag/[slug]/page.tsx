import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { Post, getPostBySlug, getAdjacentPosts, formatDate, estimateReadTime } from "@/lib/posts";
import { getCategoryMeta } from "@/lib/categories";

export const dynamic = "force-dynamic";

function CategoryHeaderIcon({ category }: { category: Post["category"] }) {
  const shared = {
    width: 30,
    height: 30,
    viewBox: "0 0 30 30",
    fill: "none",
    strokeWidth: 1.2,
    "aria-hidden": true as const,
  };

  if (category === "observations") {
    return (
      <svg {...shared} className="shrink-0 stroke-observations-headline opacity-70">
        <path d="M15 4 L4 15 L15 26 L26 15 Z" />
      </svg>
    );
  }

  if (category === "readings") {
    return (
      <svg {...shared} className="shrink-0 stroke-readings-headline opacity-70">
        <path d="M5 23 L13 13 L18 18 L25 8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...shared} className="shrink-0 stroke-experiments-headline opacity-70">
      <line x1="15" y1="4" x2="15" y2="26" />
      <line x1="4" y1="15" x2="26" y2="15" />
    </svg>
  );
}

export default async function MagPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const meta = getCategoryMeta(post.category);
  const { prev, next } = await getAdjacentPosts(post.slug);
  const items = [next, prev].filter((p): p is Post => p !== null);
  const cellLabelClasses = `font-mono text-[9.5px] uppercase tracking-[0.16em] ${meta.metaColor}`;
  const cellValueClasses = `mt-1 font-mono text-[14px] ${meta.headlineColor}`;

  return (
    <>
      <Nav />

      <article>
        <header className="mx-auto max-w-5xl px-[26px] pt-6">
          <div className="border-t border-ink" />

          <div
            className={`relative grid ${post.dispatchNumber !== null ? "grid-cols-4" : "grid-cols-3"} ${meta.bg}`}
          >
            <span className="absolute -left-1 -top-1 h-2 w-2 bg-corner" aria-hidden="true" />
            <span className="absolute -right-1 -top-1 h-2 w-2 bg-corner" aria-hidden="true" />
            <span className="absolute -left-1 -bottom-1 h-2 w-2 bg-corner" aria-hidden="true" />
            <span className="absolute -right-1 -bottom-1 h-2 w-2 bg-corner" aria-hidden="true" />

            {post.dispatchNumber !== null && (
              <div className={`border-r px-[20px] py-[14px] ${meta.bandRuleColor}`}>
                <p className={cellLabelClasses}>DISPATCH</p>
                <p className={cellValueClasses}>{String(post.dispatchNumber).padStart(3, "0")}</p>
              </div>
            )}

            <div className={`border-r px-[20px] py-[14px] ${meta.bandRuleColor}`}>
              <p className={cellLabelClasses}>CATEGORY</p>
              <p className={cellValueClasses}>{meta.label.toUpperCase()}</p>
            </div>

            <div className={`border-r px-[20px] py-[14px] ${meta.bandRuleColor}`}>
              <p className={cellLabelClasses}>FILED</p>
              <p className={cellValueClasses}>{formatDate(post.publishedAt)}</p>
            </div>

            <div className="flex items-center justify-between px-[20px] py-[14px]">
              <div>
                <p className={cellLabelClasses}>READ</p>
                <p className={cellValueClasses}>{estimateReadTime(post.content)} MIN</p>
              </div>
              <CategoryHeaderIcon category={post.category} />
            </div>
          </div>

          <div className="px-0 pb-[34px] pt-11 text-center">
            <h1 className="mx-auto max-w-[760px] font-display text-[clamp(32px,5vw,48px)] font-bold leading-[1.02] tracking-[-0.025em]">
              {post.title}
            </h1>
            <p className="mt-4 font-sans text-[13.5px] italic text-muted">
              by Pieter Borremans
              {post.location && (
                <span className="font-mono text-[11.5px] not-italic uppercase text-faint"> · {post.location}</span>
              )}
            </p>
          </div>

          <div className="border-t border-ink/25" />
        </header>

        <div className="mx-auto max-w-[620px] px-6 py-14">
          <div
            className={`prose-streetpoint ${meta.accentVar}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div className="mx-auto max-w-[620px] border-t-[1.5px] border-dashed border-ink/35 px-6 py-10">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[11px] text-page">
              PB
            </span>
            <p className="text-base leading-[1.8] text-muted">
              Pieter Borremans files one dispatch a week from wherever he happens to be looking. Streetpoint is
              a Ryoka Group publication.
            </p>
          </div>
        </div>

        {items.length > 0 && (
          <section className="mx-auto max-w-[620px] px-6 py-10">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
              More from the file
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {items.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </ul>
          </section>
        )}
      </article>

      <Footer />
    </>
  );
}
