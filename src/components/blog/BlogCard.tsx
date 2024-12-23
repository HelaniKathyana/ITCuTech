import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Bot } from "lucide-react";
import { format } from "date-fns";
import { BlogPost } from "@/types/blog";

const iconMap = {
  "MVP Development": BookOpen,
  "No-Code Tools": FileText,
  "AI Automation": Bot,
  "Tech Trends": FileText,
  "Development Tips": FileText,
};

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const Icon = iconMap[post.category as keyof typeof iconMap] || FileText;

  return (
    <Link 
      to={`/blog/${post.id}`}
      className="block transition-transform hover:-translate-y-1"
    >
      <Card className="h-full group hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-primary dark:text-primary-foreground">
              {post.category}
            </span>
            <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
          </div>
          <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
            {post.published_at ? format(new Date(post.published_at), "MMMM d, yyyy") : 'Date not available'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {post.description}
          </p>
          <span 
            className="text-primary hover:text-primary-foreground transition-colors inline-flex items-center"
          >
            Read More →
          </span>
        </CardContent>
      </Card>
    </Link>
  );
};