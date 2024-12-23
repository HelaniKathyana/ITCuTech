import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Contact information (name, email, phone number)</li>
            <li>Company information</li>
            <li>Project requirements and specifications</li>
            <li>Communication preferences</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the collected information for:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Providing and improving our services</li>
            <li>Communicating with you about our services</li>
            <li>Sending newsletters and marketing communications</li>
            <li>Analyzing and optimizing our services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
          <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Service providers who assist in our operations</li>
            <li>Professional advisors and consultants</li>
            <li>Law enforcement when required by law</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
          <p>For any privacy-related questions or concerns, please contact us at privacy@itcuttingedge.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;