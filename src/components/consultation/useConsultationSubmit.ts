import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ConsultationFormData } from "./types";
import { UseFormReset } from "react-hook-form";

export const useConsultationSubmit = (
  onSuccess: () => void,
  reset: UseFormReset<ConsultationFormData>
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: ConsultationFormData) => {
    try {
      setIsSubmitting(true);
      
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        toast.error("You must be logged in to submit a consultation request");
        return;
      }

      const { error } = await supabase.from("consultation_requests").insert({
        user_id: user.id,
        company_name: data.companyName,
        project_description: data.projectDescription,
        preferred_date: new Date(data.preferredDate).toISOString(),
        contact_email: data.contactEmail,
        phone_number: data.phoneNumber,
      });

      if (error) throw error;

      toast.success("Consultation request submitted successfully!");
      reset();
      onSuccess();
    } catch (error) {
      console.error("Error submitting consultation request:", error);
      toast.error("Failed to submit consultation request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
};