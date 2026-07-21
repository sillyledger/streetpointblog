import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { getPosts, Category } from "@/lib/posts";
import { CATEGORY_META } from "@/lib/categories";

const CATEGORY_ORDER: Category[] = ["observations", "readings", "experiments"];

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Nav />

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-14 sm:pb-24 sm:pt-20">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="max-w-2xl font-serif text-[clamp(40px,7vw,72px)] leading-[1.1]">
            Field notes, filed weekly.
          </h1>
          <ul className="flex shrink-0 flex-col gap-2 sm:items-end">
            {CATEGORY_ORDER.map((category) => {
              const meta = CATEGORY_META[category];
              return (
                <li key={category} className="flex items-center gap-2 sm:flex-row-reverse">
                  <span className={`h-[10px] w-[10px] rounded-full ${meta.bg}`} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    {meta.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mt-6 max-w-xl text-base leading-[1.8] text-muted">
          Whatever proved worth keeping this week. No niche, no schedule pressure.
        </p>
      </section>

      <ul id="index" className="mx-auto max-w-5xl bg-page px-6">
        {posts.map((post, index) => (
          <PostCard
            key={post.slug}
            post={post}
            index={index}
            isLast={index === posts.length - 1}
            variant="feed"
          />
        ))}
      </ul>

      <Footer />
    </>
  );
}
