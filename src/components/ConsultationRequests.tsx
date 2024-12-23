import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format, parseISO } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ConsultationRequest } from "@/types/consultation";
import { LoadingSpinner } from "./ui/LoadingSpinner";

/**
 * ConsultationRequests Component
 * 
 * Displays a table of consultation requests for the authenticated user. Features:
 * - Fetches and displays consultation requests from Supabase
 * - Shows loading and error states
 * - Formats dates for better readability
 * - Responsive table design
 * 
 * @returns {JSX.Element} The rendered consultation requests table
 */
export const ConsultationRequests = () => {
  const { data: requests, isLoading, error } = useQuery({
    queryKey: ["consultationRequests"],
    queryFn: async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("User not authenticated");
      }

      const { data, error: fetchError } = await supabase
        .from("consultation_requests")
        .select("*")
        .eq('user_id', user.id)
        .order("created_at", { ascending: false });

      if (fetchError) throw fetchError;
      return data as ConsultationRequest[];
    },
  });

  if (error) {
    return (
      <div 
        className="text-center py-4 text-red-500 rounded-lg bg-red-50 dark:bg-red-900/10" 
        role="alert"
      >
        <p>Error loading consultation requests. Please try again later.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center py-8" role="status">
        <LoadingSpinner />
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Loading your requests...
        </p>
      </div>
    );
  }

  if (!requests?.length) {
    return (
      <div 
        className="text-center py-8 bg-white dark:bg-gray-800 rounded-lg shadow"
        role="status"
      >
        <p className="text-gray-600 dark:text-gray-300">
          You haven't submitted any consultation requests yet.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Project Description</TableHead>
            <TableHead>Preferred Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Submitted On</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.company_name || "N/A"}</TableCell>
              <TableCell className="max-w-md truncate">
                {request.project_description}
              </TableCell>
              <TableCell>
                {format(parseISO(request.preferred_date), "PPp")}
              </TableCell>
              <TableCell>
                <span 
                  className={`capitalize px-2 py-1 rounded-full text-sm ${
                    request.status === 'pending' 
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      : request.status === 'approved'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  {request.status}
                </span>
              </TableCell>
              <TableCell>
                {format(parseISO(request.created_at), "PPp")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};