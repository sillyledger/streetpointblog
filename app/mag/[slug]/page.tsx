import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Bracket from "@/components/Bracket";
import { getPostBySlug, getAdjacentPosts, formatDate, estimateReadTime } from "@/lib/posts";
import { getCategoryMeta } from "@/lib/categories";

export const dynamic = "force-dynamic";

export default async function MagPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const meta = getCategoryMeta(post.category);
  const { next } = await getAdjacentPosts(post.slug);

  return (
    <>
      <Nav />

      <article>
        <div className="mx-auto max-w-5xl px-6 pb-4">
          <Link href="/" className="inline-block text-sm font-medium text-ink hover:underline">
            ← All dispatches
          </Link>
        </div>

        <Bracket>
          <h1 className={`font-display text-[clamp(64px,14vw,200px)] font-extrabold uppercase leading-[0.82] ${meta.text}`}>
            {meta.label}
          </h1>
        </Bracket>

        <header className="mx-auto max-w-[640px] px-6 pt-10 text-center">
          <p className="text-sm text-ink">
            {formatDate(post.publishedAt)} · {estimateReadTime(post.content)} min read
          </p>
          <h2 className="mt-3 text-[clamp(28px,5vw,42px)] font-bold leading-tight text-ink">
            {post.title}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink">{post.excerpt}</p>
        </header>

        <div className="mx-auto max-w-[640px] px-6 py-14">
          <div className="prose-streetpoint" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <nav className="mx-auto max-w-[640px] border-t border-ink px-6 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            {next && (
              <Link href={`/mag/${next.slug}`} className="group">
                <span className="block text-sm font-bold uppercase tracking-[0.1em] text-ink">
                  Up next
                </span>
                <span className="mt-1 block text-lg font-semibold text-ink group-hover:underline">
                  {next.title}
                </span>
              </Link>
            )}
            <Link href="/" className="group sm:ml-auto sm:text-right">
              <span className="block text-sm font-bold uppercase tracking-[0.1em] text-ink">
                &nbsp;
              </span>
              <span className="mt-1 block text-lg font-semibold text-ink group-hover:underline">
                Back to all dispatches
              </span>
            </Link>
          </div>
        </nav>
      </article>

      <Footer />
    </>
  );
}
