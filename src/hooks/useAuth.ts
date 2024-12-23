import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const useAuth = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        if (error.message.includes("session_not_found")) {
          toast.success("Successfully signed out!");
          navigate("/");
          return;
        }
        throw error;
      }
      toast.success("Successfully signed out!");
      navigate("/");
    } catch (error: any) {
      toast.error("Error signing out: " + error.message);
    }
  };

  return {
    handleSignOut,
  };
};