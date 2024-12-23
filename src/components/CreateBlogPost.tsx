import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BlogPostForm } from "./blog/BlogPostForm";
import { useCreateBlogPost } from "@/hooks/useCreateBlogPost";

interface CreateBlogPostProps {
  onPostCreated: () => void;
}

export const CreateBlogPost = ({ onPostCreated }: CreateBlogPostProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    formData,
    isSubmitting,
    handleInputChange,
    handleCategoryChange,
    handleSubmit,
  } = useCreateBlogPost(onPostCreated);

  const handleFormSubmit = async (e: React.FormEvent) => {
    const success = await handleSubmit(e);
    if (success) {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="mb-6">Create New Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Blog Post</DialogTitle>
        </DialogHeader>
        <BlogPostForm
          formData={formData}
          isSubmitting={isSubmitting}
          onInputChange={handleInputChange}
          onCategoryChange={handleCategoryChange}
          onSubmit={handleFormSubmit}
          onCancel={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};