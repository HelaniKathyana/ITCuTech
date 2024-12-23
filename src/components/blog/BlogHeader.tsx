import { useQuery } from "@tanstack/react-query";
import { CreateBlogPost } from "../CreateBlogPost";
import { supabase } from "@/integrations/supabase/client";

interface BlogHeaderProps {
  onPostCreated: () => void;
}

export const BlogHeader = ({ onPostCreated }: BlogHeaderProps) => {
  const { data: profile } = useQuery({
    queryKey: ["adminStatus"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;
      
      const { data } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", user.id)
        .maybeSingle();
      
      return data;
    },
  });

  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Latest Insights
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Stay updated with our latest thoughts on MVP development, no-code solutions, and AI automation trends.
      </p>
      {profile?.is_admin && (
        <div className="mt-6">
          <CreateBlogPost onPostCreated={onPostCreated} />
        </div>
      )}
    </div>
  );
};