import { Code, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Services Component
 * 
 * Displays the company's main service offerings in a grid layout:
 * - MVP Development: Focused on rapid prototyping and custom development
 * - AI Automation: Focused on workflow optimization and process automation
 * 
 * Features:
 * - Responsive grid layout (1 column on mobile, 2 columns on desktop)
 * - Interactive cards with hover effects
 * - Service-specific icons and descriptions
 */
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <Icon className="w-12 h-12 text-primary mb-4" aria-hidden="true" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2" aria-label={`${title} features`}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export const Services = () => {
  const services: ServiceCardProps[] = [
    {
      icon: Code,
      title: "MVP Development",
      description: "Transform your vision into a working product",
      features: [
        "✓ Rapid prototyping",
        "✓ Custom development",
        "✓ User testing",
        "✓ Iterative improvements",
      ],
    },
    {
      icon: Cpu,
      title: "AI Automation",
      description: "Streamline your business operations",
      features: [
        "✓ Workflow optimization",
        "✓ Process automation",
        "✓ AI integration",
        "✓ Performance analytics",
      ],
    },
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50"
      aria-label="Our Services"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};