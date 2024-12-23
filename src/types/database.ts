export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blog_posts: BlogPostsTable
      consultation_requests: ConsultationRequestsTable
      newsletter_subscribers: NewsletterSubscribersTable
      profiles: ProfilesTable
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

interface BlogPostsTable {
  Row: {
    author_id: string
    category: string
    content: string
    created_at: string | null
    description: string
    id: string
    is_trending: boolean | null
    published_at: string | null
    title: string
    updated_at: string | null
    views_count: number | null
  }
  Insert: {
    author_id: string
    category: string
    content: string
    created_at?: string | null
    description: string
    id?: string
    is_trending?: boolean | null
    published_at?: string | null
    title: string
    updated_at?: string | null
    views_count?: number | null
  }
  Update: {
    author_id?: string
    category?: string
    content?: string
    created_at?: string | null
    description?: string
    id?: string
    is_trending?: boolean | null
    published_at?: string | null
    title?: string
    updated_at?: string | null
    views_count?: number | null
  }
  Relationships: []
}

interface ConsultationRequestsTable {
  Row: {
    company_name: string | null
    contact_email: string
    created_at: string
    id: string
    phone_number: string | null
    preferred_date: string
    project_description: string
    status: string
    user_id: string
  }
  Insert: {
    company_name?: string | null
    contact_email: string
    created_at?: string
    id?: string
    phone_number?: string | null
    preferred_date: string
    project_description: string
    status?: string
    user_id: string
  }
  Update: {
    company_name?: string | null
    contact_email?: string
    created_at?: string
    id?: string
    phone_number?: string | null
    preferred_date?: string
    project_description?: string
    status?: string
    user_id?: string
  }
  Relationships: []
}

interface NewsletterSubscribersTable {
  Row: {
    created_at: string
    email: string
    id: string
  }
  Insert: {
    created_at?: string
    email: string
    id?: string
  }
  Update: {
    created_at?: string
    email?: string
    id?: string
  }
  Relationships: []
}

interface ProfilesTable {
  Row: {
    avatar_url: string | null
    created_at: string
    id: string
    is_admin: boolean | null
    updated_at: string
    username: string | null
  }
  Insert: {
    avatar_url?: string | null
    created_at?: string
    id: string
    is_admin?: boolean | null
    updated_at?: string
    username?: string | null
  }
  Update: {
    avatar_url?: string | null
    created_at?: string
    id?: string
    is_admin?: boolean | null
    updated_at?: string
    username?: string | null
  }
  Relationships: []
}