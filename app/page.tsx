import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Bracket from "@/components/Bracket";
import FeedCard from "@/components/FeedCard";
import { getPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Nav />

      <Bracket>
        <h1 className="font-display text-[clamp(64px,14vw,200px)] font-extrabold uppercase leading-[0.82] text-ink">
          StreetPoint
        </h1>
      </Bracket>

      <div className="mx-auto max-w-[720px] px-6 pb-24 pt-14">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink">Latest</p>
        <div className="mt-4">
          {posts.map((post) => (
            <FeedCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
