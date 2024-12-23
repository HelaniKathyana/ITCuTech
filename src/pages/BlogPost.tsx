import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BlogPost } from "@/types/blog";
import { format } from "date-fns";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

const BlogPostPage = () => {
  const { id } = useParams();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blogPost", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) throw error;
      return data as BlogPost;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-24">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Blog post not found
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24">
        <article className="prose dark:prose-invert lg:prose-lg mx-auto">
          <div className="flex items-center gap-2 text-primary mb-2">
            <FileText className="h-5 w-5" />
            <span>{post.category}</span>
          </div>
          <h1>{post.title}</h1>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {post.published_at
              ? format(new Date(post.published_at), "MMMM d, yyyy")
              : "Date not available"}
          </div>
          <div className="mt-8 whitespace-pre-wrap">{post.content}</div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;