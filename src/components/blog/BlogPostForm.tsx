import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BlogFormData } from "@/hooks/useCreateBlogPost";

export const BLOG_CATEGORIES = [
  "MVP Development",
  "No-Code Tools",
  "AI Automation",
  "Tech Trends",
  "Development Tips",
] as const;

interface BlogPostFormProps {
  formData: BlogFormData;
  isSubmitting: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onCategoryChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

export const BlogPostForm = ({
  formData,
  isSubmitting,
  onInputChange,
  onCategoryChange,
  onSubmit,
  onCancel,
}: BlogPostFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={onInputChange}
          required
        />
      </div>
      <div>
        <Select
          value={formData.category}
          onValueChange={onCategoryChange}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {BLOG_CATEGORIES.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Textarea
          name="description"
          placeholder="Short description"
          value={formData.description}
          onChange={onInputChange}
          required
        />
      </div>
      <div>
        <Textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={onInputChange}
          className="min-h-[200px]"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Post"}
        </Button>
      </div>
    </form>
  );
};