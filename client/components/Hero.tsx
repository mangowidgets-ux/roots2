import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "./BookingModal";
import { BrandedRoots2 } from "./BrandedRoots2";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ROTATING_WORDS = ["Malnad", "Adventure", "Culture", "Nature"];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const isHeroVisible = useIntersectionObserver(heroRef, { threshold: 0.5 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  // Update body data attribute when hero visibility changes
  useEffect(() => {
    if (isHeroVisible) {
      document.body.setAttribute('data-hero-visible', 'true');
    } else {
      document.body.removeAttribute('data-hero-visible');
    }
  }, [isHeroVisible]);

  const categories = [
    "Waterfalls",
    "Rainforests",
    "Treks",
    "Slow Living",
    "Weekend Trips",
  ];

  return (
    <section ref={heroRef} className="relative w-full h-screen bg-secondary flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full z-0 object-cover"
        src="https://videos.pexels.com/video-files/6981400/6981400-hd_1920_1080_25fps.mp4"
      ></video>

      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20 z-[2]"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 z-[2]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1102px" }}>
        {/* Headline with rotating words */}
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight" style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)" }}>
          Discover <BrandedRoots2 size="inherit" />
        </h1>

        {/* Single-line text layout */}
        <div className="flex flex-nowrap items-center justify-center gap-1 mb-8 whitespace-nowrap">
          <span className="text-accent inline-block text-3xl sm:text-4xl lg:text-5xl font-serif font-bold relative overflow-hidden h-[1.6em] align-middle" style={{ minWidth: "280px" }}>
            <span
              key={currentWordIndex}
              className="absolute inset-0 flex items-center justify-center animate-slide-up will-change-transform"
            >
              {ROTATING_WORDS[currentWordIndex]}
            </span>
          </span>
        </div>

        {/* Reach Us Button */}
        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => setBookingModalOpen(true)}
            className="bg-[rgba(23,24,26,0.1)] border border-[rgb(133,212,245)] rounded-sm text-white text-sm leading-5 py-2 px-6 uppercase font-medium hover:bg-[rgba(23,24,26,0.2)] transition-colors"
          >
            Reach Us
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bob">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </section>
  );
}
