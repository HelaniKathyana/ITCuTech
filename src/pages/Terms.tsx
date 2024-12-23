import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services Description</h2>
          <p>We provide MVP development and AI automation solutions. Our services include but are not limited to idea validation, prototype creation, no-code development, and AI workflow automation.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
          <p>Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
          <p>All content, features, and functionality of our services are owned by us and are protected by international copyright, trademark, and other intellectual property laws.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Payment Terms</h2>
          <p>Payment terms will be specified in separate agreements for specific services. All fees are non-refundable unless otherwise specified in writing.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
          <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of our services after such modifications constitutes acceptance of the updated terms.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Information</h2>
          <p>For any questions regarding these terms, please contact us at legal@itcuttingedge.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;