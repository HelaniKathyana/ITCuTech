import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Rocket, Target, Zap } from "lucide-react";

/**
 * Features Component
 * 
 * Displays key features and benefits of the service in a responsive grid layout.
 * Each feature is presented in a card with an icon, title, and description.
 * 
 * Features:
 * - Responsive grid layout (1 column on mobile, 2 on tablet, 4 on desktop)
 * - Interactive cards with hover effects
 * - Consistent spacing and typography
 * - Accessible headings and descriptions
 */
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: FeatureCardProps[] = [
  {
    title: "Rapid Development",
    description: "Get your MVP to market faster with our agile development process",
    icon: Rocket,
  },
  {
    title: "Innovation First",
    description: "Leverage cutting-edge technology to stay ahead of the competition",
    icon: Lightbulb,
  },
  {
    title: "Scalable Solutions",
    description: "Build solutions that grow with your business needs",
    icon: Target,
  },
  {
    title: "AI-Powered",
    description: "Harness the power of AI to automate and optimize your workflows",
    icon: Zap,
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader className="space-y-2 text-center sm:text-left">
      <div className="flex justify-center sm:justify-start">
        <Icon 
          className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2 sm:mb-4" 
          aria-hidden="true"
        />
      </div>
      <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-sm sm:text-base">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

export const Features = () => (
  <section 
    id="features" 
    className="py-16 sm:py-20"
    aria-label="Why Choose Us"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {features.map((feature) => (
          <FeatureCard 
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </div>
  </section>
);