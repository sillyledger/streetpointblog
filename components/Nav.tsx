import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b-[1.5px] border-ink/35">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <Link
          href="/"
          className="font-sans text-lg font-medium tracking-[0.14em]"
        >
          STREETPOINT
        </Link>
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          <Link href="/" className="hover:text-ink">
            Index
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <Link href="/#newsletter" className="hover:text-ink">
            Newsletter
          </Link>
        </div>
        <a
          href="https://ryokagroup.com"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint hover:text-ink"
        >
          Ryoka Group
        </a>
      </nav>
    </header>
  );
}
