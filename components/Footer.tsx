import Link from "next/link";
import { Category, getCategoryCounts } from "@/lib/posts";
import { CATEGORY_META } from "@/lib/categories";

const CATEGORY_ORDER: Category[] = ["observations", "readings", "experiments"];

export default async function Footer() {
  const counts = await getCategoryCounts();

  return (
    <footer className="bg-ink text-page">
      <div className="mx-auto max-w-5xl border-t-[1.5px] border-white/10 px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/" className="text-base text-white hover:text-white/70">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#index" className="text-base text-white hover:text-white/70">
                  Index
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base text-white hover:text-white/70">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
              Categories
            </h2>
            <ul className="mt-5 space-y-3">
              {CATEGORY_ORDER.map((category) => (
                <li key={category}>
                  <Link
                    href="/#index"
                    className="flex items-center justify-between gap-4 text-base text-white/70 hover:text-white"
                  >
                    <span>{CATEGORY_META[category].label}</span>
                    <span className="text-white/40">{counts[category]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
              Legal
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/privacy" className="text-base text-white/70 hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-base text-white/70 hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t-[1.5px] border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-[0.12em] text-white/40">
            © 2026 Streetpoint
          </p>
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
            <span aria-hidden="true">🇧🇪 🇬🇧 🇹🇼</span>
            <span>Taichung · London</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
