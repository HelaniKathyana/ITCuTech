import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  onConsultationClick: () => void;
  onSignOut: () => void;
  isAuthenticated: boolean;
}

export const MobileNav = ({ onConsultationClick, onSignOut, isAuthenticated }: MobileNavProps) => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <Link to="/" className="text-lg font-semibold text-primary">
        Home
      </Link>
      <Link to="/about" className="text-lg text-gray-600 dark:text-gray-300">
        About
      </Link>
      <Link to="/portfolio" className="text-lg text-gray-600 dark:text-gray-300">
        Portfolio
      </Link>
      <Link to="/blog" className="text-lg text-gray-600 dark:text-gray-300">
        Blog
      </Link>
      <Button 
        variant="ghost" 
        className="justify-start px-0 hover:bg-transparent"
        onClick={onConsultationClick}
      >
        Book a Consultation
      </Button>
      <Button 
        variant="ghost" 
        className="justify-start px-0 hover:bg-transparent"
        onClick={onSignOut}
      >
        {isAuthenticated ? "Sign Out" : "Sign In"}
      </Button>
    </div>
  );
};