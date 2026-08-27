export default function Bracket({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex items-center gap-3">
        <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-ink" />
        <span className="h-px w-full bg-ink" />
        <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-ink" />
      </div>

      <div className="py-3 text-center">{children}</div>

      <div className="flex items-center gap-3">
        <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-ink" />
        <span className="h-px w-full bg-ink" />
        <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-ink" />
      </div>
    </div>
  );
}
