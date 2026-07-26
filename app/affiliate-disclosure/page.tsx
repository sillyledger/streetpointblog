import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LegalHeader from "@/components/LegalHeader";

export const dynamic = "force-dynamic";

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Nav />

      <article>
        <LegalHeader pageName="Affiliate Disclosure" updated="JUL 2026" title="Affiliate Disclosure" />

        <div className="mx-auto max-w-[620px] px-6 py-14">
          <div className="space-y-6">
            <p className="text-[17px] leading-[1.8] text-ink">
              Some links on this site are affiliate links. That means if you click one and go on to buy
              something, we may earn a small commission, at no extra cost to you. It doesn&apos;t change the
              price you pay.
            </p>
            <p className="text-[17px] leading-[1.8] text-ink">
              We only link to things actually used or genuinely believed in. Affiliate relationships never
              decide what gets written about or how, if something isn&apos;t good, that gets said plainly.
            </p>
            <p className="text-[17px] leading-[1.8] text-ink">
              This applies across the site, including dispatches and any resources mentioned. Where it&apos;s
              not obvious from context, we&apos;ll try to flag that a link is an affiliate link.
            </p>
            <p className="text-[17px] leading-[1.8] text-ink">
              Any income from affiliate links helps cover the cost of running this publication, nothing more
              calculated than that.
            </p>
            <p className="text-[17px] leading-[1.8] text-ink">
              Questions about a specific link? Email{" "}
              <a href="mailto:pieter@ryokagroup.com" className="underline underline-offset-2 hover:text-muted">
                pieter@ryokagroup.com
              </a>
              .
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
