import { Linkedin, Twitter, Youtube, Facebook, Instagram } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/company/105865220/admin/dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#9b87f5] transition-colors"
          aria-label="Visit our LinkedIn page"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://x.com/KayodeOgun47677"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#9b87f5] transition-colors"
          aria-label="Visit our Twitter (X) page"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a
          href="https://www.youtube.com/@ITCuTech"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#9b87f5] transition-colors"
          aria-label="Visit our YouTube channel"
        >
          <Youtube className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61562340059101"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#9b87f5] transition-colors"
          aria-label="Visit our Facebook page"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/itcutech/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#9b87f5] transition-colors"
          aria-label="Visit our Instagram page"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};