import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Nav />

      <article className="mx-auto max-w-[720px] px-6 py-16 sm:py-24">
        <h1 className="text-[clamp(32px,5vw,48px)] font-bold leading-tight text-ink">
          Affiliate Disclosure
        </h1>
        <div className="mt-8 space-y-6">
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            Some links on this site are affiliate links. That means if you click one and go on to buy
            something, we may earn a small commission, at no extra cost to you. It doesn&apos;t change the
            price you pay.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            We only link to things actually used or genuinely believed in. Affiliate relationships never
            decide what gets written about or how, if something isn&apos;t good, that gets said plainly.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            This applies across the site, including dispatches and any resources mentioned. Where it&apos;s
            not obvious from context, we&apos;ll try to flag that a link is an affiliate link.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            Any income from affiliate links helps cover the cost of running this publication, nothing more
            calculated than that.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            Questions about a specific link? Email{" "}
            <a href="mailto:pieter@ryokagroup.com" className="underline underline-offset-2">
              pieter@ryokagroup.com
            </a>
            .
          </p>
        </div>
      </article>

      <Footer />
    </>
  );
}
