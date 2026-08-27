export default function Logo() {
  return (
    <span className="flex items-center gap-[7px]" aria-hidden="true">
      <span className="h-[10px] w-[10px] rounded-full bg-observations" />
      <span className="h-[10px] w-[10px] rounded-full bg-readings" />
      <span className="h-[10px] w-[10px] rounded-full bg-experiments" />
    </span>
  );
}
