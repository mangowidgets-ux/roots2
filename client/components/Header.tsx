import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "./BookingModal";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isStickyBarVisible, setIsStickyBarVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Detect when sticky bar becomes visible (approx hero height ~600px)
      setIsStickyBarVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track hero visibility by monitoring body data attribute
  useEffect(() => {
    const checkHeroVisibility = () => {
      setIsHeroVisible(document.body.hasAttribute('data-hero-visible'));
    };

    // Check initially
    checkHeroVisibility();

    // Use MutationObserver to watch for attribute changes
    const observer = new MutationObserver(checkHeroVisibility);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-hero-visible'],
    });

    return () => observer.disconnect();
  }, []);

  const openBookingModal = () => {
    setBookingModalOpen(true);
    setMobileMenuOpen(false);
  };

  const handleGettingHereClick = () => {
    setMobileMenuOpen(false);
    navigate("/#getting-here");
  };

  const whatsappLink = "https://wa.me/919449695251?text=Hi%20Roots2%20Travel";

  // Route-specific header visibility logic
  const isHomePage = location.pathname === "/";
  const isDestinationPage = location.pathname.startsWith("/destination/");

  let headerHidden = isHeroVisible; // default for other pages
  if (isDestinationPage) {
    headerHidden = isHeroVisible || isStickyBarVisible;
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          headerHidden ? "opacity-0 pointer-events-none -translate-y-full" : "opacity-100 translate-y-0",
          isScrolled && !headerHidden && "bg-black/20 backdrop-blur-md"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo size={40} className="text-white" showText={true} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/explore"
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                Explore
              </Link>
              <a
                href="/#getting-here"
                onClick={(e) => {
                  e.preventDefault();
                  handleGettingHereClick();
                }}
                className="text-white hover:text-white/80 transition-colors text-sm font-medium cursor-pointer"
              >
                Getting Here
              </a>
            </nav>

            {/* Contact Us Button */}
            <Button
              onClick={openBookingModal}
              className="hidden md:inline-flex bg-[rgba(23,24,26,0.1)] border border-[rgb(133,212,245)] rounded-sm text-white text-sm leading-5 py-2 px-6 uppercase font-medium hover:bg-[rgba(23,24,26,0.2)] transition-colors"
            >
              Contact Us
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={cn(
            "md:hidden border-t transition-colors border-white/20 bg-black/30 backdrop-blur-md",
          )}>
            <div className="px-4 py-4 space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-white/80 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/explore"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-white/80 transition-colors font-medium"
              >
                Explore
              </Link>
              <button
                onClick={handleGettingHereClick}
                className="block text-white hover:text-white/80 transition-colors font-medium bg-transparent border-none p-0 text-left w-full"
              >
                Getting Here
              </button>
              <Button onClick={openBookingModal} className="w-full bg-[rgba(23,24,26,0.1)] border border-[rgb(133,212,245)] rounded-sm text-white text-sm leading-5 py-2 px-6 uppercase font-medium hover:bg-[rgba(23,24,26,0.2)] transition-colors">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
