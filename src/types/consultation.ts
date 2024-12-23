export interface ConsultationRequest {
  id: string;
  user_id: string;
  company_name: string | null;
  project_description: string;
  preferred_date: string;
  contact_email: string;
  phone_number: string | null;
  status: string;
  created_at: string;
}