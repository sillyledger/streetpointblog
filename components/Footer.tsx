import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink">© 2026 StreetPoint</p>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink">
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/affiliate-disclosure" className="hover:underline">
            Affiliate disclaimer
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <a href="mailto:pieter@ryokagroup.com" className="hover:underline">
            pieter@ryokagroup.com
          </a>
        </nav>
      </div>
    </footer>
  );
}
