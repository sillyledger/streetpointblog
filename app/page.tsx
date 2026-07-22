import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { getPosts, formatShortDate } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await getPosts();
  const latest = posts[0] ? formatShortDate(posts[0].publishedAt) : "N/A";

  return (
    <>
      <Nav />

      <section className="relative">
        <svg
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="0" y1="0.5" x2="100%" y2="0.5" className="stroke-ink/[0.35]" strokeWidth="1.5" strokeDasharray="1 5" />
          <line x1="33%" y1="0" x2="33%" y2="100%" className="stroke-ink/[0.35]" strokeWidth="1.5" strokeDasharray="1 5" />
          <line x1="66%" y1="0" x2="66%" y2="100%" className="stroke-ink/[0.35]" strokeWidth="1.5" strokeDasharray="1 5" />
        </svg>

        <div className="mx-auto max-w-5xl px-6 pb-[40px] pt-[44px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-faint">
                / A weekly magazine
              </p>
              <h1 className="mt-4 max-w-xl font-display text-[clamp(44px,7vw,64px)] font-semibold leading-[1.0] tracking-[-0.02em]">
                Whatever proved
                <br />
                worth keeping<span className="text-observations-accent">.</span>
              </h1>
              <p className="mt-5 max-w-[380px] text-[18px] leading-[1.7] text-muted">
                One dispatch a week. Observations, readings, experiments, no niche, no schedule pressure.
              </p>
            </div>

            <div className="min-w-[150px] border-l border-ink/25 pl-5">
              <dl>
                <div className="flex items-center justify-between gap-4 border-b border-dotted border-ink/25 py-2 font-mono text-[12.5px] uppercase tracking-[0.1em]">
                  <dt className="text-faint">Dispatches</dt>
                  <dd className="text-ink">{String(posts.length).padStart(3, "0")}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-dotted border-ink/25 py-2 font-mono text-[12.5px] uppercase tracking-[0.1em]">
                  <dt className="text-faint">Cadence</dt>
                  <dd className="text-ink">Weekly</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-dotted border-ink/25 py-2 font-mono text-[12.5px] uppercase tracking-[0.1em]">
                  <dt className="text-faint">Latest</dt>
                  <dd className="text-ink">{latest}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-2 font-mono text-[12.5px] uppercase tracking-[0.1em]">
                  <dt className="text-faint">Filed from</dt>
                  <dd className="whitespace-nowrap text-ink">TCH / LDN</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
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
