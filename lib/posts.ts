import { supabase } from "./supabase";

export type Category = "observations" | "readings" | "experiments";

const KNOWN_CATEGORIES: readonly Category[] = ["observations", "readings", "experiments"];
const FALLBACK_CATEGORY: Category = "observations";

export interface Post {
  slug: string;
  title: string;
  category: Category;
  publishedAt: string;
  dispatchNumber: number | null;
  location: string | null;
  content: string;
  excerpt: string;
}

interface PostRow {
  slug: string;
  title: string;
  category: string;
  published_at: string | null;
  created_at: string;
  dispatch_number: number | null;
  location: string | null;
  content: string;
  target_site: string;
  status: string;
}

const TARGET_SITE = "streetpointblog.com";
const STATUS_PUBLISHED = "published";
const COLUMNS =
  "slug, title, category, published_at, created_at, dispatch_number, location, content, target_site, status";

function makeExcerpt(html: string): string {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length <= 140) return text;
  const truncated = text.slice(0, 140);
  const lastSpace = truncated.lastIndexOf(" ");
  const trimmed = lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated;
  return `${trimmed}…`;
}

/** Trims and lowercases a raw category value; unrecognized values fall back to 'observations' rather than dropping the post. */
function normalizeCategory(raw: string | null | undefined): Category {
  const normalized = (raw ?? "").trim().toLowerCase();
  return (KNOWN_CATEGORIES as readonly string[]).includes(normalized)
    ? (normalized as Category)
    : FALLBACK_CATEGORY;
}

function normalizeForCompare(value: string | null | undefined): string {
  return (value ?? "").trim().toLowerCase();
}

/** published_at can be null for posts that haven't had it backfilled; created_at is always present. */
function effectiveDate(row: PostRow): string {
  return row.published_at ?? row.created_at;
}

function isForThisSitePublished(row: PostRow): boolean {
  return (
    normalizeForCompare(row.target_site) === normalizeForCompare(TARGET_SITE) &&
    normalizeForCompare(row.status) === normalizeForCompare(STATUS_PUBLISHED)
  );
}

function sortByDateDesc(rows: PostRow[]): PostRow[] {
  return [...rows].sort((a, b) => new Date(effectiveDate(b)).getTime() - new Date(effectiveDate(a)).getTime());
}

function mapPost(row: PostRow): Post {
  return {
    slug: row.slug,
    title: row.title,
    category: normalizeCategory(row.category),
    publishedAt: effectiveDate(row),
    dispatchNumber: row.dispatch_number,
    location: row.location,
    content: row.content,
    excerpt: makeExcerpt(row.content),
  };
}

export async function getPosts(): Promise<Post[]> {
  // Filtering (target_site/status) and ordering happen in JS below, not via
  // .eq()/.order() on the query, so a stray space or null published_at in the
  // database can't silently make the query return zero rows.
  const { data, error } = await supabase.from("posts").select(COLUMNS);

  console.log(`[getPosts] raw rows returned from Supabase: ${data?.length ?? 0}`, error ? { supabaseError: error } : "");

  if (error) throw error;

  const rows = (data ?? []) as unknown as PostRow[];
  const published = rows.filter(isForThisSitePublished);
  return sortByDateDesc(published).map(mapPost);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase.from("posts").select(COLUMNS).eq("slug", slug);

  if (error) throw error;

  const rows = (data ?? []) as unknown as PostRow[];
  const row = rows.find(isForThisSitePublished);
  return row ? mapPost(row) : null;
}

export async function getAdjacentPosts(slug: string): Promise<{ prev: Post | null; next: Post | null }> {
  const posts = await getPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}

export async function getCategoryCounts(): Promise<Record<Category, number>> {
  const posts = await getPosts();
  const counts: Record<Category, number> = { observations: 0, readings: 0, experiments: 0 };
  for (const post of posts) {
    counts[post.category] += 1;
  }
  return counts;
}

export function estimateReadTime(html: string): number {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr)
    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })
    .replace(/(\w+) (\d+), (\d+)/, (_, month, day, year) => `${month.toUpperCase()} ${day}, ${year}`);
}

export function formatShortDate(dateStr: string): string {
  return new Date(dateStr)
    .toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" })
    .replace(/(\w+) (\d+)/, (_, month, day) => `${month.toUpperCase()} ${day}`);
}
