import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ConsultationFormFields } from "./consultation/ConsultationFormFields";
import { useConsultationSubmit } from "./consultation/useConsultationSubmit";
import { ConsultationFormData } from "./consultation/types";

interface ConsultationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultationForm({ open, onOpenChange }: ConsultationFormProps) {
  const form = useForm<ConsultationFormData>();
  const { handleSubmit, isSubmitting } = useConsultationSubmit(
    () => onOpenChange(false),
    form.reset
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 w-[95vw] sm:w-full">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
            Book a Consultation
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 dark:text-gray-400">
            Fill out the form below to schedule a consultation with our team.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 mt-2">
          <ConsultationFormFields form={form} />
          
          <Button 
            type="submit" 
            className="w-full h-9 bg-primary hover:bg-primary/90 text-white font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}