import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function AboutPage() {
  return (
    <>
      <Nav />

      <section className="mx-auto max-w-[620px] px-6 py-16 sm:py-24">
        <h1 className="font-display text-[clamp(36px,6vw,56px)] font-medium leading-[1.1] tracking-[-0.02em]">
          About Streetpoint
        </h1>
        <div className="mt-8 space-y-6">
          <p className="text-base leading-[1.8] text-ink">
            Streetpoint is a weekly dispatch of observations, readings, and small experiments — whatever
            proved worth keeping over the past seven days. There's no fixed beat and no editorial calendar,
            just a standing habit of paying closer attention to ordinary things.
          </p>
          <p className="text-base leading-[1.8] text-ink">
            Each issue is written by hand, filed once a week, and published without much ceremony. The
            categories exist to give the writing some shape, not to box it in — an observation one week
            might read like an experiment the next.
          </p>
          <p className="text-base leading-[1.8] text-ink">
            Streetpoint is a Ryoka Group publication. This page is a placeholder and will be rewritten
            properly soon.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
