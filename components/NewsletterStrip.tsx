export default function NewsletterStrip() {
  return (
    <section
      id="newsletter"
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <div className="rounded-[16px] border-[1.5px] border-ink bg-page px-8 py-12 text-center sm:px-14">
        <h2 className="font-serif text-3xl leading-[1.15] sm:text-4xl">
          One dispatch, every week.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-[1.8] text-muted">
          No spam, no growth hacking. Just field notes, once a week, from wherever Pieter happens to be looking.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@example.com"
            className="w-full flex-1 rounded-full border-[1.5px] border-ink/35 bg-page px-5 py-3 font-sans text-base placeholder:text-faint focus:border-ink focus:outline-none"
          />
          <button
            type="button"
            className="rounded-full bg-ink px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-page"
          >
            Subscribe
          </button>
          {/* TODO: wire up subscription handling once a data source / provider is chosen */}
        </form>
      </div>
    </section>
  );
}
