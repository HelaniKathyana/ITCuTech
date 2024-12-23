import {
  NavigationMenu as Nav,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavLinks } from "./NavLinks";
import { ServicesMenu } from "./ServicesMenu";
import { AITrainingMenu } from "./AITrainingMenu";

interface NavigationMenuProps {
  onServiceSelect: (service: string) => void;
}

export const NavigationMenu = ({ onServiceSelect }: NavigationMenuProps) => {
  return (
    <Nav>
      <NavigationMenuList>
        <NavLinks />
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="text-[#9b87f5] dark:text-[#D6BCFA] hover:text-[#7E69AB] dark:hover:text-[#E5DEFF] font-semibold transition-all duration-200"
          >
            Services
          </NavigationMenuTrigger>
          <ServicesMenu onServiceSelect={onServiceSelect} />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="text-[#9b87f5] dark:text-[#D6BCFA] hover:text-[#7E69AB] dark:hover:text-[#E5DEFF] font-semibold transition-all duration-200"
          >
            AI Training Programs
          </NavigationMenuTrigger>
          <AITrainingMenu onServiceSelect={onServiceSelect} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </Nav>
  );
};