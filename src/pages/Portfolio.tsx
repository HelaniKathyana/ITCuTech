import { Navbar } from "@/components/Navbar";

const Portfolio = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description: "Enterprise-scale analytics solution with AI-driven insights",
      tech: ["React", "Python", "TensorFlow", "AWS"],
      image: "/placeholder.svg"
    },
    {
      title: "E-Commerce MVP",
      description: "Rapid MVP development for a fashion marketplace",
      tech: ["Next.js", "Supabase", "Stripe", "Tailwind"],
      image: "/placeholder.svg"
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management platform",
      tech: ["React", "Node.js", "PostgreSQL", "Docker"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;