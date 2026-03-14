export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverMediaId: string | null;
  /** Resolved cover image URL from API (when backend enriches response) */
  coverImageUrl?: string | null;
  authorId: string;
  status: string;
  tags: string[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface BlogResponse {
  success: boolean;
  data: {
    blogs: BlogPost[];
    pagination: {
      page: number;
      perPage: number;
      totalItems: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
  meta: {
    requestId: string;
    timestamp: string;
    pagination: {
      page: number;
      perPage: number;
      totalItems: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
}

/** Use same backend as admin in local dev when unset; set NEXT_PUBLIC_API_URL in production (e.g. https://api.pals.money) */
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://api.pals.money";

/** Revalidate interval (seconds) so new/updated posts appear quickly on the site */
const BLOG_REVALIDATE = 10;

/**
 * Fetch blogs from the API
 */
export async function fetchBlogs(
  page: number = 1,
  perPage: number = 10,
  status: string = "published"
): Promise<BlogResponse> {
  try {
    const response = await fetch(
      `${API_BASE}/api/blogs?page=${page}&perPage=${perPage}&status=${status}`,
      {
        next: { revalidate: BLOG_REVALIDATE },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }

    const data: BlogResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}

/**
 * Fetch a single blog by ID
 */
export async function fetchBlogById(id: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE}/api/blogs/${id}`, {
      next: { revalidate: BLOG_REVALIDATE },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch blog: ${response.statusText}`);
    }

    const data: { success: boolean; data: { blog: BlogPost } } = await response.json();
    return data.data.blog;
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return null;
  }
}

/**
 * Fetch a single blog by slug
 */
export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE}/api/blogs/slug/${slug}`, {
      next: { revalidate: BLOG_REVALIDATE },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch blog: ${response.statusText}`);
    }

    const data: { success: boolean; data: { blog: BlogPost } } = await response.json();
    return data.data.blog;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}

/**
 * Format date from ISO string to readable format
 */
export function formatBlogDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Get cover image URL for a blog. Prefer coverImageUrl from API; otherwise use public media redirect or placeholder.
 */
export function getBlogImageUrl(coverMediaId: string | null, coverImageUrl?: string | null): string {
  if (coverImageUrl) return coverImageUrl;
  if (coverMediaId) return `${API_BASE}/api/media/public/${coverMediaId}`;
  return "/blog/blog1.png";
}

