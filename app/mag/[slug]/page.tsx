import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { Post, getPostBySlug, getAdjacentPosts, formatDate, estimateReadTime } from "@/lib/posts";
import { CATEGORY_META } from "@/lib/categories";

export const dynamic = "force-dynamic";

export default async function MagPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const meta = CATEGORY_META[post.category];
  const { prev, next } = await getAdjacentPosts(post.slug);
  const items = [next, prev].filter((p): p is Post => p !== null);

  return (
    <>
      <Nav />

      <article>
        <header className="mx-auto max-w-5xl px-6 pt-6">
          <div className={`overflow-hidden rounded-card ${meta.bg}`}>
            <div
              className={`flex flex-wrap items-center justify-between gap-2 border-b px-[26px] py-[12px] ${meta.ruleColor}`}
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
            <div className="px-8 py-10 sm:px-12 sm:py-14">
              <h1
                className={`font-display text-[clamp(34px,5vw,40px)] font-medium leading-[1.12] tracking-[-0.02em] ${meta.headlineColor}`}
              >
                {post.title}
              </h1>
              <p className={`mt-5 text-lg italic ${meta.metaColor}`}>
                by Pieter Borremans
                {post.location ? ` · ${post.location}` : ""}
              </p>
            </div>
          </div>
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
