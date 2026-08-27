import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function AboutPage() {
  return (
    <>
      <Nav />

      <section className="mx-auto max-w-[720px] px-6 py-16 sm:py-24">
        <h1 className="text-[clamp(32px,5vw,48px)] font-bold leading-tight text-ink">
          About StreetPoint
        </h1>
        <div className="mt-8 space-y-6">
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            StreetPoint is a weekly dispatch of observations, readings, and small experiments — whatever
            proved worth keeping over the past seven days. There&apos;s no fixed beat and no editorial
            calendar, just a standing habit of paying closer attention to ordinary things.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            Each issue is written by hand, filed once a week, and published without much ceremony. The
            categories exist to give the writing some shape, not to box it in — an observation one week
            might read like an experiment the next.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            StreetPoint is a Ryoka Group publication. This page is a placeholder and will be rewritten
            properly soon.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
