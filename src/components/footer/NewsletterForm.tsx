import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

/**
 * NewsletterForm component handles newsletter subscriptions.
 * It provides a form for users to enter their email and subscribe to the newsletter.
 */
export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Check if email already exists
      const { data: existingSubscriber, error: checkError } = await supabase
        .from("newsletter_subscribers")
        .select()
        .eq("email", email)
        .single();

      if (checkError && checkError.code !== "PGRST116") {
        toast.error("Failed to check subscription status");
        return;
      }

      if (existingSubscriber) {
        toast.error("You're already subscribed to our newsletter!");
        return;
      }

      // Add new subscriber
      const { error: insertError } = await supabase
        .from("newsletter_subscribers")
        .insert([{ email }]);

      if (insertError) {
        toast.error("Failed to subscribe. Please try again later.");
        return;
      }

      toast.success("Thanks for subscribing to our newsletter!");
      setEmail("");
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="bg-[#2A2F3C] border-[#333333] text-white placeholder:text-gray-400"
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="bg-primary hover:bg-primary/90"
        >
          {isLoading ? "..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
};