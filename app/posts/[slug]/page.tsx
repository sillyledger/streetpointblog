import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import NewsletterStrip from "@/components/NewsletterStrip";
import AuthorFooter from "@/components/AuthorFooter";
import MoreFromFile from "@/components/MoreFromFile";
import { posts, getPostBySlug, getAdjacentPosts } from "@/lib/posts";
import { CATEGORY_META } from "@/lib/categories";
import { formatDate, formatNumber, readTime } from "@/lib/format";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const meta = CATEGORY_META[post.category];
  const { prev, next } = getAdjacentPosts(post.slug);
  const accentText = meta.bg.replace("bg-", "text-");

  const [firstParagraph, ...restParagraphs] = post.content;
  const firstLetter = firstParagraph.charAt(0);
  const restOfFirstParagraph = firstParagraph.slice(1);

  return (
    <>
      <Nav />

      <article>
        <header className="mx-auto max-w-5xl px-6 pt-6">
          <div className={`rounded-card border-[1.5px] border-ink/35 ${meta.bg} px-8 py-10 sm:px-12 sm:py-14`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}>
                {meta.label} · No. {formatNumber(post.number)}
              </span>
              <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${meta.metaColor}`}>
                {formatDate(post.date)} · {readTime(post.content)} min
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
          <p className="text-base leading-[1.8] text-ink">
            <span
              className={`float-left pr-2 pt-1 font-serif text-[4.2rem] font-semibold leading-[0.82] ${accentText}`}
            >
              {firstLetter}
            </span>
            {restOfFirstParagraph}
          </p>
          {restParagraphs.map((paragraph, index) => (
            <p key={index} className="mt-6 text-base leading-[1.8] text-ink">
              {paragraph}
            </p>
          ))}
        </div>

        <AuthorFooter />
        <MoreFromFile prev={prev} next={next} />
      </article>

      <NewsletterStrip />
      <Footer />
    </>
  );
}
