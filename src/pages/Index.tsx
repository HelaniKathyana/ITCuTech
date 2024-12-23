import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { ConsultationRequests } from "@/components/ConsultationRequests";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Suspense, lazy } from "react";
import { PageLoader } from "@/components/ui/PageLoader";
import { Testimonials } from "@/components/Testimonials";

/**
 * Index Page Component
 * 
 * Main landing page of the application that showcases:
 * - Hero section with main value proposition
 * - Services offered (MVP Development and AI Automation)
 * - Key features and benefits
 * - Latest blog posts
 * - Client testimonials
 * - Consultation requests (for authenticated users only)
 * 
 * @returns {JSX.Element} The rendered Index page
 */
const Index = () => {
  // Query user session for conditional rendering of consultation requests
  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section - Primary CTA and value proposition */}
        <Hero />

        {/* Services Section - MVP Development and AI Automation */}
        <Services />

        {/* Features Section - Why choose us */}
        <Features />

        {/* Blog Section - Latest posts with loading fallback */}
        <Suspense fallback={<PageLoader height="h-96" />}>
          <BlogSection />
        </Suspense>

        {/* Testimonials Section - Client success stories */}
        <Testimonials />

        {/* Consultation Requests - Only shown to authenticated users */}
        {session && (
          <Suspense fallback={<PageLoader height="h-48" />}>
            <section className="container mx-auto px-4 py-12">
              <h2 className="text-2xl font-bold mb-6">Your Consultation Requests</h2>
              <ConsultationRequests />
            </section>
          </Suspense>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;