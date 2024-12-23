export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  author_id: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  views_count: number;
  is_trending: boolean;
}