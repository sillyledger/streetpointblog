export function formatDate(dateStr: string): string {
  const date = new Date(`${dateStr}T00:00:00`);
  return date
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .replace(/(\w+) (\d+), (\d+)/, (_, month, day, year) => `${month.toUpperCase()} ${day}, ${year}`);
}

export function formatNumber(number: number): string {
  return String(number).padStart(3, "0");
}

export function readTime(paragraphs: string[]): number {
  const words = paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
