import { NewsletterForm } from "./footer/NewsletterForm";
import { ServicesList } from "./footer/ServicesList";
import { SocialLinks } from "./footer/SocialLinks";
import { LegalLinks } from "./footer/LegalLinks";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ServicesList />
          <NewsletterForm />
          <SocialLinks />
          <LegalLinks />
        </div>

        <div className="mt-8 pt-8 border-t border-[#333333] text-center text-sm text-gray-400">
          © {new Date().getFullYear()} IT Cutting-Edge Technology LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};