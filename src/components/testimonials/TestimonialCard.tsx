import { Quote, Star } from "lucide-react";
import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mx-4 h-full">
      <div className="flex justify-between items-start mb-4">
        <Quote className="text-primary w-10 h-10 opacity-20" />
        <div className="flex flex-col items-end">
          <div className="flex mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.industry}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 italic text-lg">
        "{testimonial.content}"
      </p>
      
      <div className="mt-6 border-t pt-4 border-gray-100 dark:border-gray-700">
        <p className="font-semibold text-gray-800 dark:text-white text-lg">
          {testimonial.name}
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
};