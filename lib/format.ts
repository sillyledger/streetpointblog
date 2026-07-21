export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    })
    .replace(/(\w+) (\d+), (\d+)/, (_, month, day, year) => `${month.toUpperCase()} ${day}, ${year}`);
}

export function formatNumber(number: number): string {
  return String(number).padStart(3, "0");
}

export function readTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
