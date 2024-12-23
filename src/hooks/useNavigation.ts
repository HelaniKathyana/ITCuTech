import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useNavigation = () => {
  const navigate = useNavigate();
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  const handleServiceClick = (service: string) => {
    if (!session) {
      toast.error("Please sign in to book a consultation");
      navigate("/auth");
      return;
    }
    setIsConsultationModalOpen(true);
    toast.info(`Selected service: ${service}`);
  };

  const handleConsultationClick = () => {
    if (!session) {
      toast.error("Please sign in to book a consultation");
      navigate("/auth");
      return;
    }
    setIsConsultationModalOpen(true);
  };

  return {
    session,
    isConsultationModalOpen,
    setIsConsultationModalOpen,
    handleServiceClick,
    handleConsultationClick,
  };
};