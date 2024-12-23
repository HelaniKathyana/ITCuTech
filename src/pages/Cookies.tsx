import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
          <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and allow certain features to work.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
          <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Performance Cookies</h3>
          <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Functionality Cookies</h3>
          <p>These cookies enable the website to remember choices you make (such as your username, language, or region) and provide enhanced features.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Marketing Cookies</h3>
          <p>These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Managing Cookies</h2>
          <p>Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience of our website.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Cookies</h2>
          <p>We may use third-party services that use cookies. These cookies are governed by the respective privacy policies of these third parties.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Updates to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. Please review this policy periodically for any changes.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
          <p>If you have any questions about our use of cookies, please contact us at privacy@itcuttingedge.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;