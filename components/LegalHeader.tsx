const cellLabelClasses = "font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted";
const cellValueClasses = "mt-1 font-mono text-[14px] text-ink";

export default function LegalHeader({
  pageName,
  updated,
  title,
}: {
  pageName: string;
  updated: string;
  title: string;
}) {
  return (
    <header className="mx-auto max-w-5xl px-[26px] pt-6">
      <div className="border-t border-ink" />

      <div className="relative grid grid-cols-2 bg-[#EBE9E3]">
        <span className="absolute -left-1 -top-1 h-2 w-2 bg-corner" aria-hidden="true" />
        <span className="absolute -right-1 -top-1 h-2 w-2 bg-corner" aria-hidden="true" />
        <span className="absolute -left-1 -bottom-1 h-2 w-2 bg-corner" aria-hidden="true" />
        <span className="absolute -right-1 -bottom-1 h-2 w-2 bg-corner" aria-hidden="true" />

        <div className="border-r border-ink/25 px-[20px] py-[14px]">
          <p className={cellLabelClasses}>PAGE</p>
          <p className={cellValueClasses}>{pageName}</p>
        </div>

        <div className="px-[20px] py-[14px]">
          <p className={cellLabelClasses}>UPDATED</p>
          <p className={cellValueClasses}>{updated}</p>
        </div>
      </div>

      <div className="max-w-[700px] pb-7 pt-9">
        <h1 className="font-display text-[clamp(28px,4vw,40px)] font-bold leading-[1.08] tracking-[-0.02em]">
          {title}
        </h1>
      </div>

      <div className="border-t border-ink/25" />
    </header>
  );
}
