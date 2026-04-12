import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Travel Blogger",
    quote:
      "The most authentic travel experience I've had in years. Every detail was thoughtfully planned, and the guides were incredibly knowledgeable.",
    trip: "Rainforest Trek, 5 days",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohan Desai",
    title: "Adventure Photographer",
    quote:
      "Roots2 took us to places no other travel company knows about. The waterfalls, the people, the food—everything was magical.",
    trip: "Photography Tour, 7 days",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    name: "Amelia Johnson",
    title: "Lifestyle Coach",
    quote:
      "Perfect for my slow travel goals. The pace was relaxed, and I truly felt connected to nature and the local community.",
    trip: "Slow Living Retreat, 10 days",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 4,
    name: "Arjun Mehta",
    title: "Software Engineer",
    quote:
      "A perfect digital detox. The team understood what I needed—adventure without being overwhelmed. Highly recommended!",
    trip: "Weekend Trek, 3 days",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 5,
    name: "Sophie Martin",
    title: "Freelance Writer",
    quote:
      "I came for the travel, I stayed for the stories. Every moment felt like research for a beautiful chapter in my life.",
    trip: "Cultural Immersion, 6 days",
    image: "https://images.unsplash.com/photo-1507072957990-d6f9cffba067?w=100&h=100&fit=crop",
    rating: 5,
  },
];

export function Testimonials() {
  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-[60px] px-4 sm:px-6 lg:px-8 bg-white hidden">
      <div className="max-w-[1366px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 hidden">
          <h2
            className="font-bold mb-4 hidden"
            style={{
              fontSize: "30px",
              color: "rgb(35, 35, 35)",
              letterSpacing: "-1px",
              lineHeight: "30px",
            }}
          >
            What Travelers Say
          </h2>
          <div
            className="mx-auto mt-[15px]"
            style={{
              width: "65%",
              height: "3px",
              backgroundColor: "rgb(0, 50, 162)",
            }}
          />
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Carousel
            plugins={[autoplayRef.current]}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="justify-center">
              {TESTIMONIALS.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="basis-full">
                  <div className="group bg-background rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300 border-[3px] border-[#232323] hover:border-[#232323]">
                    {/* Quote */}
                    <p className="text-foreground text-sm leading-relaxed mb-3 italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-2 h-2 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-2">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-7 h-7 rounded-full object-cover border border-[#232323] group-hover:border-[#232323] transition-colors"
                      />
                      <div className="flex-1">
                        <h4 className="font-serif font-bold text-foreground text-xs">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-foreground/60">
                          {testimonial.title}
                        </p>
                        <p className="text-xs text-accent font-medium mt-0.5">
                          {testimonial.trip}
                        </p>
                      </div>
                    </div>

                    {/* Decorative accent */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-10 text-accent">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-6 0-6.002 3-6 7v10c0 1 0 7 7 7z" />
                      </svg>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
