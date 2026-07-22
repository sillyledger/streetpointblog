import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <Link href="/" className="font-display text-xs font-medium tracking-[0.14em]">
          STREETPOINT
        </Link>
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          <Link href="/" className="hover:text-ink">
            Index
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
