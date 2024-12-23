import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, Mail, Phone, FileText, CalendarIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ConsultationFormData } from "./types";

interface ConsultationFormFieldsProps {
  form: UseFormReturn<ConsultationFormData>;
}

export const ConsultationFormFields = ({ form }: ConsultationFormFieldsProps) => {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <Label 
          htmlFor="companyName" 
          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
        >
          <Building2 className="h-3.5 w-3.5" />
          Company Name (Optional)
        </Label>
        <Input
          id="companyName"
          {...register("companyName")}
          placeholder="Your company name"
          className="h-9 bg-gray-50 dark:bg-gray-800"
        />
      </div>

      <div className="space-y-1.5">
        <Label 
          htmlFor="projectDescription" 
          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
        >
          <FileText className="h-3.5 w-3.5" />
          Project Description*
        </Label>
        <Textarea
          id="projectDescription"
          {...register("projectDescription", { required: "Project description is required" })}
          placeholder="Tell us about your project goals and timeline"
          className="min-h-[80px] resize-none bg-gray-50 dark:bg-gray-800"
        />
        {errors.projectDescription && (
          <p className="text-xs text-red-500">{errors.projectDescription.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label 
          htmlFor="preferredDate" 
          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
        >
          <CalendarIcon className="h-3.5 w-3.5" />
          Preferred Date*
        </Label>
        <Input
          id="preferredDate"
          type="datetime-local"
          {...register("preferredDate", { required: "Preferred date is required" })}
          className="h-9 bg-gray-50 dark:bg-gray-800"
        />
        {errors.preferredDate && (
          <p className="text-xs text-red-500">{errors.preferredDate.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label 
          htmlFor="contactEmail" 
          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
        >
          <Mail className="h-3.5 w-3.5" />
          Contact Email*
        </Label>
        <Input
          id="contactEmail"
          type="email"
          {...register("contactEmail", {
            required: "Contact email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="your@email.com"
          className="h-9 bg-gray-50 dark:bg-gray-800"
        />
        {errors.contactEmail && (
          <p className="text-xs text-red-500">{errors.contactEmail.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label 
          htmlFor="phoneNumber" 
          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
        >
          <Phone className="h-3.5 w-3.5" />
          Phone Number (Optional)
        </Label>
        <Input
          id="phoneNumber"
          {...register("phoneNumber")}
          placeholder="Your phone number"
          className="h-9 bg-gray-50 dark:bg-gray-800"
        />
      </div>
    </div>
  );
};