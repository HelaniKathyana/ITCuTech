import { NavigationMenuContent } from "@/components/ui/navigation-menu";

interface AITrainingMenuProps {
  onServiceSelect: (service: string) => void;
}

export const AITrainingMenu = ({ onServiceSelect }: AITrainingMenuProps) => {
  const trainingPrograms = [
    {
      title: "Enterprise AI Integration",
      description: "Custom LLM implementation, AI workflow automation, and enterprise integration strategies.",
    },
    {
      title: "Startup AI Implementation",
      description: "Rapid AI prototyping, MVP development with AI features, and scaling strategies.",
    },
    {
      title: "AI for Business Leaders",
      description: "Strategic AI implementation, ROI assessment, and AI transformation roadmap planning.",
    },
    {
      title: "Developer AI Upskilling",
      description: "Hands-on training in AI APIs, prompt engineering, and AI-powered development tools.",
    },
  ];

  return (
    <NavigationMenuContent>
      <div className="w-[400px] p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <div className="space-y-4">
          {trainingPrograms.map((program) => (
            <button
              key={program.title}
              onClick={() => onServiceSelect(program.title)}
              className="w-full group hover:bg-[#E5DEFF] dark:hover:bg-[#7E69AB]/20 p-3 rounded-md transition-all duration-200"
            >
              <h4 className="text-[#7E69AB] dark:text-[#D6BCFA] font-semibold mb-1 text-left">
                {program.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-left">
                {program.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </NavigationMenuContent>
  );
};