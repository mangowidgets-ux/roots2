import { useEffect, useState } from "react";

interface HeroCTAImage {
  id: number;
  url: string;
  alt: string;
}

interface HeroCTAProps {
  title: string;
  description?: string;
  buttonText: string;
  onButtonClick: () => void;
  images?: HeroCTAImage[];
}

const DEFAULT_IMAGES: HeroCTAImage[] = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/8728586/pexels-photo-8728586.jpeg?w=1920&h=1080&fit=crop",
    alt: "Adventure Sports - Rock climbing and outdoor adventure",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/14776256/pexels-photo-14776256.jpeg?w=1920&h=1080&fit=crop",
    alt: "Cultural Food Market - Local dining and street food experience",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/8974284/pexels-photo-8974284.jpeg?w=1920&h=1080&fit=crop",
    alt: "Adventure Travel - Friends exploring and traveling together",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/35316837/pexels-photo-35316837.jpeg?w=1920&h=1080&fit=crop",
    alt: "Local Interactions - Authentic cultural travel experiences",
  },
];

export function HeroCTA({
  title,
  description,
  buttonText,
  onButtonClick,
  images = DEFAULT_IMAGES,
}: HeroCTAProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(autoplay);
  }, [images.length]);

  return (
    <section className="relative w-full overflow-hidden min-h-[200px]">
      {/* Background Carousel Images */}
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover animate-kenBurns"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 py-[60px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1366px] mx-auto flex flex-col items-center justify-center h-full">
          <h2
            className="text-[24px] md:text-[28px] font-bold mb-4 text-white text-center"
            style={{
              letterSpacing: "-1px",
              lineHeight: "1.2",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {title}
          </h2>
          {description && (
            <p
              className="text-white/90 mb-6 max-w-2xl mx-auto text-center"
              style={{
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              {description}
            </p>
          )}
          <button
            onClick={onButtonClick}
            className="group relative px-6 py-3 rounded-[10px] text-white text-[15px] font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundColor: "rgb(0, 50, 162)",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            <span className="relative z-10">{buttonText}</span>
            <div className="absolute inset-0 rounded-[10px] bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
