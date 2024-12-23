import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BlogPost } from "@/types/blog";
import { BlogHeader } from "./blog/BlogHeader";
import { BlogGrid } from "./blog/BlogGrid";
import { LoadingSpinner } from "./ui/LoadingSpinner";
import { memo } from "react";

/**
 * BlogSection Component
 * 
 * Displays a grid of blog posts with a header section. Features:
 * - Fetches and displays blog posts from Supabase
 * - Shows loading state while fetching
 * - Handles error states gracefully
 * - Allows admin users to create new posts
 * - Memoized grid component for performance
 * 
 * @returns {JSX.Element} The rendered blog section
 */
const fetchBlogPosts = async () => {
  console.log("Fetching blog posts...");
  const { data, error } = await supabase
    .from("blog_posts")
    .select(`
      id,
      title,
      description,
      content,
      category,
      author_id,
      published_at,
      created_at,
      updated_at,
      views_count,
      is_trending
    `)
    .order('published_at', { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
  
  console.log("Fetched blog posts:", data);
  return data as BlogPost[];
};

const MemoizedBlogGrid = memo(BlogGrid);

export const BlogSection = () => {
  const { 
    data: blogPosts, 
    isLoading, 
    error, 
    refetch 
  } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    refetchOnMount: true, // Add this to ensure fresh data on mount
  });

  if (error) {
    console.error("Error in BlogSection:", error);
    return (
      <div className="text-center text-red-500 py-16" role="alert">
        <p>Failed to load blog posts. Please try again later.</p>
      </div>
    );
  }

  return (
    <section 
      id="blog" 
      className="py-16 bg-gray-50 dark:bg-gray-900"
      aria-label="Latest Blog Posts"
    >
      <div className="container mx-auto px-4">
        <BlogHeader onPostCreated={refetch} />
        
        {isLoading ? (
          <div className="text-center py-8" role="status">
            <LoadingSpinner />
            <p className="mt-2 text-gray-600 dark:text-gray-400">Loading posts...</p>
          </div>
        ) : !blogPosts || blogPosts.length === 0 ? (
          <div 
            className="text-center py-8 bg-white dark:bg-gray-800 rounded-lg shadow"
            role="status"
          >
            <p className="text-gray-600 dark:text-gray-300">
              No blog posts available yet. Be the first to create one!
            </p>
          </div>
        ) : (
          <MemoizedBlogGrid posts={blogPosts} />
        )}
      </div>
    </section>
  );
};