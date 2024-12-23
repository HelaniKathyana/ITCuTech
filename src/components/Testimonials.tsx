import { useRef } from "react";
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Carousel } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { TestimonialCard } from "./testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

/**
 * Testimonials Component
 * 
 * Displays a carousel of client testimonials with autoplay functionality.
 * Features:
 * - Automatic sliding with pause on interaction
 * - Navigation controls
 * - Responsive design
 * - Accessible carousel controls
 * 
 * @returns {JSX.Element} The rendered testimonials section
 */
export const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section 
      className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold mb-4" 
            id="testimonials-heading"
          >
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how our AI solutions have transformed businesses across various industries, delivering measurable results and exceptional value.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="md:basis-full lg:basis-full pl-0"
                  role="group"
                  aria-roledescription="slide"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-16 right-0 top-1/2 flex justify-between -translate-y-1/2 w-[calc(100%+8rem)]">
              <CarouselPrevious 
                className="relative"
                aria-label="Previous testimonial"
              />
              <CarouselNext 
                className="relative"
                aria-label="Next testimonial"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};