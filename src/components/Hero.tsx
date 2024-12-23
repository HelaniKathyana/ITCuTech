import { Button } from "@/components/ui/button";
import { Rocket, BookOpen } from "lucide-react";
import { useState } from "react";
import { ConsultationForm } from "./ConsultationForm";

/**
 * Hero Component
 * 
 * Main landing section that showcases the company's value proposition and primary CTAs.
 * Features a gradient background, headline, description, and two action buttons:
 * - "Start Your Project" button that opens a consultation form
 * - "Learn More" button that smoothly scrolls to the services section
 */
interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  // State for controlling the consultation modal visibility
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  /**
   * Smoothly scrolls the page to the services section
   */
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" 
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Transform Your Ideas into Reality
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 px-4">
            Rapid MVP development and AI automation solutions to accelerate your business growth
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            {/* Primary CTA - Start Project Button */}
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white group transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              onClick={() => setIsConsultationModalOpen(true)}
            >
              <Rocket 
                className="mr-2 h-5 w-5 group-hover:animate-float" 
                aria-hidden="true"
              />
              Start Your Project
            </Button>

            {/* Secondary CTA - Learn More Button */}
            <Button 
              size="lg" 
              variant="outline"
              className="group hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
              onClick={scrollToServices}
            >
              <BookOpen 
                className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" 
                aria-hidden="true"
              />
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Consultation Form Modal */}
      <ConsultationForm 
        open={isConsultationModalOpen}
        onOpenChange={setIsConsultationModalOpen}
      />
    </section>
  );
};