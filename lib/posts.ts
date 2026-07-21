import { supabase } from "./supabase";

export type Category = "observations" | "readings" | "experiments";

export interface Post {
  slug: string;
  title: string;
  category: Category;
  publishedAt: string;
  dispatchNumber: number | null;
  location: string | null;
  content: string;
}

interface PostRow {
  slug: string;
  title: string;
  category: string;
  published_at: string;
  dispatch_number: number | null;
  location: string | null;
  content: string;
}

const TARGET_SITE = "streetpointblog.com";
const COLUMNS = "slug, title, category, published_at, dispatch_number, location, content";

function mapPost(row: PostRow): Post {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category.toLowerCase() as Category,
    publishedAt: row.published_at,
    dispatchNumber: row.dispatch_number,
    location: row.location,
    content: row.content,
  };
}

export async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select(COLUMNS)
    .eq("target_site", TARGET_SITE)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw error;
  return ((data ?? []) as unknown as PostRow[]).map(mapPost);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select(COLUMNS)
    .eq("target_site", TARGET_SITE)
    .eq("status", "published")
    .eq("slug", slug)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null;
    throw error;
  }
  return data ? mapPost(data as unknown as PostRow) : null;
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
