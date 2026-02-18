export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverMediaId: string | null;
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
      `https://api.pals.money/api/blogs?page=${page}&perPage=${perPage}&status=${status}`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
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
    const response = await fetch(`https://api.pals.money/api/blogs/${id}`, {
      next: { revalidate: 60 },
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
    const response = await fetch(`https://api.pals.money/api/blogs/slug/${slug}`, {
      next: { revalidate: 60 },
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
 * Get placeholder image URL for blogs without cover images
 */
export function getBlogImageUrl(coverMediaId: string | null): string {
  if (coverMediaId) {
    // If you have a media endpoint, construct the URL here
    // Example: return `https://api.pals.money/api/media/${coverMediaId}`;
    return `/blog/blog1.png`; // Placeholder until media endpoint is available
  }
  // Default placeholder image
  return "/blog/blog1.png";
}

