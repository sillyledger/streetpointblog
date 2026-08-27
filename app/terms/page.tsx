import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function TermsPage() {
  return (
    <>
      <Nav />

      <article className="mx-auto max-w-[720px] px-6 py-16 sm:py-24">
        <h1 className="text-[clamp(32px,5vw,48px)] font-bold leading-tight text-ink">Terms</h1>
        <div className="mt-8 space-y-6">
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            By using this site, you&apos;re agreeing to the basics below. Nothing here is unusual, it&apos;s
            mostly common sense written down.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            <strong>Content.</strong> Everything published here, dispatches, observations, readings,
            experiments, belongs to StreetPoint and Ryoka Group unless stated otherwise. You&apos;re welcome
            to quote or link to it with credit and a link back. Please don&apos;t republish it wholesale as
            your own.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            <strong>No professional advice.</strong> Nothing on this site is legal, financial, or
            professional advice. It&apos;s observation and opinion, shared for what it&apos;s worth. Make
            your own decisions accordingly.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            <strong>External links.</strong> This site links to other sites and services outside our
            control. We&apos;re not responsible for their content or how they handle your data once you
            leave.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            <strong>No guarantees.</strong> This site is provided as-is. We try to keep things accurate and
            working, but can&apos;t promise it&apos;ll always be error-free or available.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            <strong>Changes.</strong> These terms might change as the site evolves. The date at the top of
            this page reflects the last update.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            Questions? Email{" "}
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
