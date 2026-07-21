import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <Link
          href="/"
          className="flex items-center gap-3 font-sans text-lg font-medium tracking-[0.14em]"
        >
          <img src="/logo.svg" alt="" width={120} height={120} />
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
