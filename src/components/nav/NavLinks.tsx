import { Link } from "react-router-dom";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";

export const NavLinks = () => {
  return (
    <>
      <NavigationMenuItem>
        <Link 
          to="/"
          className="bg-accent text-accent-foreground px-4 py-2 rounded-md"
        >
          Home
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link
          to="/about"
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors px-4 py-2"
        >
          About
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link
          to="/portfolio"
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors px-4 py-2"
        >
          Portfolio
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link
          to="/blog"
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors px-4 py-2"
        >
          Blog
        </Link>
      </NavigationMenuItem>
    </>
  );
};