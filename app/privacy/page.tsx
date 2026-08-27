import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <article className="mx-auto max-w-[720px] px-6 py-16 sm:py-24">
        <h1 className="text-[clamp(32px,5vw,48px)] font-bold leading-tight text-ink">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6">
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            This is a personal publication. I don&apos;t sell your data, and I try to collect as little of
            it as possible.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            <strong>What&apos;s collected.</strong> Basic analytics, like which pages get visited and
            roughly where from, so I can understand what people find useful. If you email me, I keep that
            conversation to reply to you, nothing more.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            <strong>Cookies.</strong> This site may use cookies for basic functionality and analytics. You
            can block or clear cookies in your browser at any time without breaking the site.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            <strong>Third parties.</strong> This site is hosted on Vercel and may use Google Analytics or
            Search Console to understand traffic. Those services have their own privacy policies covering
            how they handle data.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            <strong>Your data.</strong> I don&apos;t sell or trade personal information. If you&apos;d like
            to know what I have on you, or want it deleted, just ask.
          </p>
          <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-ink">
            Questions about any of this? Email me at{" "}
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
