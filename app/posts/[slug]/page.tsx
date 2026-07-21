import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AuthorFooter from "@/components/AuthorFooter";
import MoreFromFile from "@/components/MoreFromFile";
import { getAllPosts, getPostBySlug, getAdjacentPosts } from "@/lib/posts";
import { CATEGORY_META } from "@/lib/categories";
import { formatDate, formatNumber, readTime } from "@/lib/format";

export const revalidate = 300;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const meta = CATEGORY_META[post.category];
  const { prev, next } = await getAdjacentPosts(post.slug);

  return (
    <>
      <Nav />

      <article>
        <header className="mx-auto max-w-5xl px-6 pt-6">
          <div className={`rounded-card border-[1.5px] border-ink/[0.08] ${meta.bg} px-8 py-10 sm:px-12 sm:py-14`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}>
                {meta.label}
                {post.dispatchNumber !== null ? ` · No. ${formatNumber(post.dispatchNumber)}` : ""}
              </span>
              <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}>
                {formatDate(post.publishedAt)} · {readTime(post.content)} min
              </span>
            </div>
            <h1 className={`mt-6 font-serif text-[clamp(38px,5vw,44px)] leading-[1.12] ${meta.headlineColor}`}>
              {post.title}
            </h1>
            <p className={`mt-5 font-serif text-lg italic ${meta.metaColor}`}>
              by Pieter Borremans
              {post.location ? ` · ${post.location}` : ""}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-[620px] px-6 py-14">
          <div
            className={`prose-streetpoint ${meta.accentVar}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <AuthorFooter />
        <MoreFromFile prev={prev} next={next} />
      </article>

      <Footer />
    </>
  );
}
