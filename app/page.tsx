import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Nav />

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-14 sm:pb-24 sm:pt-20">
        <h1 className="max-w-2xl font-display text-[clamp(32px,6vw,48px)] font-medium leading-[1.1] tracking-[-0.02em]">
          Field notes, filed weekly.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-[1.8] text-muted">
          Whatever proved worth keeping this week. No niche, no schedule pressure.
        </p>
      </section>

      <ul id="index" className="mx-auto flex max-w-5xl flex-col gap-3 px-6 pb-16 sm:pb-24">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} variant="feed" />
        ))}
      </ul>

      <Footer />
    </>
  );
}
