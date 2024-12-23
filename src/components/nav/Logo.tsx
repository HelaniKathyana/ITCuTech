import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <img 
        src="/lovable-uploads/b66d6023-001d-4be6-a139-0f2be31dca55.png" 
        alt="ITCuTech Logo" 
        className="h-8 w-auto"
      />
      <span className="text-2xl font-bold text-primary dark:text-white">ITCuTech</span>
    </Link>
  );
};