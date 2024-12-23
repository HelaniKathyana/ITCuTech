import { NavigationMenuContent } from "@/components/ui/navigation-menu";

interface ServiceButtonProps {
  title: string;
  description: string;
  onClick: () => void;
}

const ServiceButton = ({ title, description, onClick }: ServiceButtonProps) => (
  <button
    onClick={onClick}
    className="w-full group hover:bg-[#E5DEFF] dark:hover:bg-[#7E69AB]/20 p-3 rounded-md transition-all duration-200"
  >
    <h4 className="text-[#7E69AB] dark:text-[#D6BCFA] font-semibold mb-1 text-left">{title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-left">
      {description}
    </p>
  </button>
);

interface ServicesMenuProps {
  onServiceSelect: (service: string) => void;
}

export const ServicesMenu = ({ onServiceSelect }: ServicesMenuProps) => {
  return (
    <NavigationMenuContent>
      <div className="w-[400px] p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <div className="space-y-4">
          <ServiceButton
            title="MVP Development"
            description="Transform your startup ideas into working products in weeks, not months."
            onClick={() => onServiceSelect('MVP Development')}
          />
          <ServiceButton
            title="AI Automation"
            description="Streamline your business operations with custom AI-powered workflow solutions."
            onClick={() => onServiceSelect('AI Automation')}
          />
          <ServiceButton
            title="Tech Consulting"
            description="Expert guidance on technology strategy, architecture, and implementation."
            onClick={() => onServiceSelect('Tech Consulting')}
          />
        </div>
      </div>
    </NavigationMenuContent>
  );
};