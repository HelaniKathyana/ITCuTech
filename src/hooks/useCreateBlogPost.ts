import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export type BlogCategory = "MVP Development" | "No-Code Tools" | "AI Automation" | "Tech Trends" | "Development Tips";

export interface BlogFormData {
  title: string;
  description: string;
  content: string;
  category: BlogCategory | "";
}

export const useCreateBlogPost = (onPostCreated: () => void) => {
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    description: "",
    content: "",
    category: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      content: "",
      category: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value as BlogCategory }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("You must be logged in to create a post");
        return;
      }

      const { error } = await supabase
        .from("blog_posts")
        .insert({
          title: formData.title,
          description: formData.description,
          content: formData.content,
          category: formData.category,
          author_id: user.id,
        });

      if (error) throw error;

      toast.success("Blog post created successfully!");
      onPostCreated();
      resetForm();
      return true;
    } catch (error) {
      toast.error("Error creating blog post");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleCategoryChange,
    handleSubmit,
  };
};