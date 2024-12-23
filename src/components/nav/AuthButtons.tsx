import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface AuthButtonsProps {
  isAuthenticated: boolean;
  onSignOut: () => Promise<void>;
  onConsultationClick: () => void;
}

export const AuthButtons = ({ isAuthenticated, onSignOut, onConsultationClick }: AuthButtonsProps) => {
  const navigate = useNavigate();

  return (
    <>
      {isAuthenticated ? (
        <Button
          variant="ghost"
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white"
          onClick={onSignOut}
        >
          Sign Out
        </Button>
      ) : (
        <Button
          variant="ghost"
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white"
          onClick={() => navigate("/auth")}
        >
          Sign In
        </Button>
      )}

      <Button 
        className="bg-primary hover:bg-primary/90"
        onClick={onConsultationClick}
      >
        Book a Consultation
      </Button>
    </>
  );
};