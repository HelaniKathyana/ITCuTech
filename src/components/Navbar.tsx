import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "./ConsultationForm";
import { NavigationMenu } from "./nav/NavigationMenu";
import { MobileNav } from "./nav/MobileNav";
import { ThemeToggle } from "./nav/ThemeToggle";
import { AuthButtons } from "./nav/AuthButtons";
import { Logo } from "./nav/Logo";
import { useNavigation } from "@/hooks/useNavigation";
import { useAuth } from "@/hooks/useAuth";

export const Navbar = () => {
  const {
    session,
    isConsultationModalOpen,
    setIsConsultationModalOpen,
    handleServiceClick,
    handleConsultationClick,
  } = useNavigation();
  
  const { handleSignOut } = useAuth();

  return (
    <nav className="fixed w-full bg-gradient-to-r from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-md z-50 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu onServiceSelect={handleServiceClick} />
            <ThemeToggle />
            <AuthButtons 
              isAuthenticated={!!session}
              onSignOut={handleSignOut}
              onConsultationClick={handleConsultationClick}
            />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <MobileNav 
                  onConsultationClick={handleConsultationClick}
                  onSignOut={handleSignOut}
                  isAuthenticated={!!session}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <ConsultationForm 
        open={isConsultationModalOpen}
        onOpenChange={setIsConsultationModalOpen}
      />
    </nav>
  );
};