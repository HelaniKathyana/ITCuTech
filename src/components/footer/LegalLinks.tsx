export const LegalLinks = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Legal</h3>
      <ul className="space-y-2">
        <li>
          <a href="/terms" className="hover:text-[#9b87f5] transition-colors">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="/privacy" className="hover:text-[#9b87f5] transition-colors">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/cookies" className="hover:text-[#9b87f5] transition-colors">
            Cookie Policy
          </a>
        </li>
      </ul>
    </div>
  );
};