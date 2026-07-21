export default function AuthorFooter() {
  return (
    <div className="mx-auto max-w-[620px] border-t-[1.5px] border-dashed border-ink/35 px-6 py-10">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[11px] text-page">
          PB
        </span>
        <p className="text-base leading-[1.8] text-muted">
          Pieter Borremans files one dispatch a week from wherever he happens to be looking. Streetpoint is a Ryoka Group publication.
        </p>
      </div>
    </div>
  );
}
