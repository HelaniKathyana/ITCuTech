import { toast } from "sonner";

type TrainingProgram = {
  id: string;
  title: string;
  description: string;
};

const trainingPrograms: TrainingProgram[] = [
  {
    id: "enterprise",
    title: "Enterprise AI Integration",
    description: "Custom LLM implementation, AI workflow automation, and enterprise integration strategies.",
  },
  {
    id: "startup",
    title: "Startup AI Implementation",
    description: "Rapid AI prototyping, MVP development with AI features, and scaling strategies.",
  },
  {
    id: "business",
    title: "AI for Business Leaders",
    description: "Strategic AI implementation, ROI assessment, and AI transformation roadmap planning.",
  },
  {
    id: "developer",
    title: "Developer AI Upskilling",
    description: "Hands-on training in AI APIs, prompt engineering, and AI-powered development tools.",
  },
];

interface AITrainingProgramsProps {
  onServiceSelect: (service: string) => void;
}

export const AITrainingPrograms = ({ onServiceSelect }: AITrainingProgramsProps) => {
  const handleClick = (title: string) => {
    onServiceSelect(title + " Training");
    toast.info(`Selected service: ${title} Training`);
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
      <h3 className="text-[#7E69AB] dark:text-[#D6BCFA] font-semibold mb-3 text-left">
        AI Training Programs
      </h3>
      <div className="space-y-3">
        {trainingPrograms.map((program) => (
          <button
            key={program.id}
            onClick={() => handleClick(program.title)}
            className="w-full group hover:bg-[#E5DEFF] dark:hover:bg-[#7E69AB]/20 p-3 rounded-md transition-all duration-200"
          >
            <h4 className="text-[#7E69AB] dark:text-[#D6BCFA] font-semibold mb-1 text-left text-sm">
              {program.title}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed text-left">
              {program.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};