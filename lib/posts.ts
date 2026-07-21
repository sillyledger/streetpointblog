import { supabase } from "./supabase";
import { Category } from "./categories";

export type Post = {
  title: string;
  slug: string;
  category: Category;
  publishedAt: string;
  dispatchNumber: number | null;
  location: string | null;
  content: string;
};

type PostRow = {
  title: string;
  slug: string;
  category: Category;
  published_at: string;
  dispatch_number: number | null;
  location: string | null;
  content: string;
};

const TARGET_SITE = "streetpointblog.com";
const POST_COLUMNS = "title, slug, category, published_at, dispatch_number, location, content";

function toPost(row: PostRow): Post {
  return {
    title: row.title,
    slug: row.slug,
    category: row.category,
    publishedAt: row.published_at,
    dispatchNumber: row.dispatch_number,
    location: row.location,
    content: row.content,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select(POST_COLUMNS)
    .eq("target_site", TARGET_SITE)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw error;
  return (data as PostRow[] | null ?? []).map(toPost);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select(POST_COLUMNS)
    .eq("target_site", TARGET_SITE)
    .eq("status", "published")
    .eq("slug", slug)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null;
    throw error;
  }
  return data ? toPost(data as PostRow) : null;
}

export async function getAdjacentPosts(slug: string): Promise<{ prev: Post | null; next: Post | null }> {
  const posts = await getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
