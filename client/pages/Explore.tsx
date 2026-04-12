import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Camera, Footprints, Eye, Droplets, Flame, Sparkles } from "lucide-react";
import { BookingModal } from "@/components/BookingModal";
import { HeroCTA } from "@/components/HeroCTA";
import { FAQ } from "@/components/FAQ";
import { WishListModal } from "@/components/WishListModal";

const ALL_DESTINATIONS = [
  {
    id: 1,
    title: "Jog Falls",
    category: "Waterfalls",
    duration: "Full Day Trip",
    description: "4th highest waterfall in India, 253m cascade",
    badge: { type: "discount", text: "25% Off", icon: null },
    features: ["Photography", "Nature Walks", "Viewpoints", "Trekking"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F08f44ed2fce54a71b66a1a4a1f234f46?format=webp&width=800&height=1200",
  },
  {
    id: 2,
    title: "Agumbe Rainforest",
    category: "Rainforest",
    duration: "2 Days / 1 Night",
    description: "Cherrapunji of South, Sunset Point, Biodiversity",
    badge: { type: "hot", text: "Hot Deal", icon: Flame },
    features: ["Photography", "Nature Walks", "Viewpoints", "Wildlife"],
    oldPrice: "INR 4,999",
    newPrice: "INR 3,999",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Fb98a7f86f9034c319ada9e0243252c9c?format=webp&width=800&height=1200",
  },
  {
    id: 3,
    title: "Kundadri Hills",
    category: "Trek",
    duration: "Full Day Trip",
    description: "Ancient Jain temple, 360° mountain views, sunset",
    badge: { type: "trending", text: "Best Selling", icon: Sparkles },
    features: ["Photography", "Viewpoints", "Nature Walks", "Trekking"],
    oldPrice: "INR 2,299",
    newPrice: "INR 1,799",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Facd47e66520a4ce18ce4f7db7111704b?format=webp&width=800&height=1200",
  },
  {
    id: 4,
    title: "Kodachadri Trek",
    category: "Trek",
    duration: "2 Days / 1 Night",
    description: "Challenging trek, camping, sunset & sunrise views",
    badge: { type: "discount", text: "20% Off", icon: null },
    features: ["Trekking", "Photography", "Viewpoints", "Nature Walks"],
    oldPrice: "INR 3,999",
    newPrice: "INR 3,199",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F5b76655ca7f44d308ae5dd2200effb27?format=webp&width=800&height=1200",
  },
  {
    id: 5,
    title: "Sakrebyle Elephant Camp",
    category: "Wildlife",
    duration: "Full Day Trip",
    description: "Elephant bathing, feeding & interaction experience",
    badge: { type: "trending", text: "Trending", icon: Sparkles },
    features: ["Photography", "Wildlife", "Nature Walks", "Viewpoints"],
    oldPrice: "INR 1,999",
    newPrice: "INR 1,599",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Fbe2d5b88d16047febb357236b3b58c87?format=webp&width=800&height=1200",
  },
  {
    id: 6,
    title: "Hebbe Falls",
    category: "Waterfalls",
    duration: "Full Day Trip",
    description: "Majestic waterfall, scenic trek, coffee plantations",
    badge: { type: "hot", text: "Popular", icon: Flame },
    features: ["Photography", "Trekking", "Nature Walks", "Viewpoints"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://cdn.builder.io/o/assets%2F350c85029eed47748b7045d4f507277c%2F42cd380561ea4abdb65553a4ad5f2fce?alt=media&token=5fd45f32-4a55-4ae8-93d3-6cba55ebe80b&apiKey=350c85029eed47748b7045d4f507277c",
  },
  {
    id: 7,
    title: "Kavaledurga Fort",
    category: "Trek",
    duration: "Full Day Trek",
    description: "Historic fort ruins, panoramic views, moderate trek",
    badge: { type: "discount", text: "15% Off", icon: null },
    features: ["Trekking", "Photography", "Heritage", "Viewpoints"],
    oldPrice: "INR 1,899",
    newPrice: "INR 1,599",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Fd7280ea5bc214085b53ce8f5c614fa1f?format=webp&width=800&height=1200",
  },
  {
    id: 8,
    title: "Shri Bheemeshwara Temple & Waterfalls",
    category: "Waterfalls",
    duration: "Full Day Trip",
    description: "Sacred temple, twin waterfalls, spiritual atmosphere",
    badge: { type: "hot", text: "Family Favorite", icon: Flame },
    features: ["Photography", "Nature Walks", "Heritage", "Viewpoints"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F1a8a0978cbd846908aa3256300435a4e?format=webp&width=800&height=1200",
  },
  {
    id: 9,
    title: "Bhadra Wildlife Safari",
    category: "Wildlife",
    duration: "Full Day Trip",
    description: "Tiger sightings, bird watching, forest exploration",
    badge: { type: "trending", text: "Adventure Pick", icon: Sparkles },
    features: ["Wildlife", "Photography", "Nature Walks", "Viewpoints"],
    oldPrice: "INR 3,499",
    newPrice: "INR 2,899",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Ff6667fa78b5c454b9682d1ae68254be0?format=webp&width=800&height=1200",
  },
  {
    id: 10,
    title: "Sri Devagange Temple & Pond",
    category: "Heritage",
    duration: "Full Day Trip",
    description: "Ancient temple complex, sacred pond, cultural heritage",
    badge: { type: "discount", text: "10% Off", icon: null },
    features: ["Photography", "Heritage", "Nature Walks", "Viewpoints"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Fcfbeff8684b7438ebbffc139ee1cbe06?format=webp&width=800&height=1200",
  },
  {
    id: 12,
    title: "Sringeri Temple",
    category: "Heritage",
    duration: "Full Day Trip",
    description: "Ancient temple, riverside location, spiritual retreat",
    badge: { type: "trending", text: "Peaceful", icon: Sparkles },
    features: ["Photography", "Heritage", "Nature Walks", "Viewpoints"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://images.pexels.com/photos/14563423/pexels-photo-14563423.jpeg",
  },
  {
    id: 15,
    title: "Tunga River",
    category: "Nature",
    duration: "Full Day Trip",
    description: "River adventure, scenic picnic spots, water activities",
    badge: { type: "trending", text: "Refreshing", icon: Sparkles },
    features: ["Photography", "Nature Walks", "Wildlife", "Viewpoints"],
    oldPrice: "INR 1,699",
    newPrice: "INR 1,299",
    image: "https://images.pexels.com/photos/2724241/pexels-photo-2724241.jpeg",
  },
  {
    id: 17,
    title: "Bababudangiri",
    category: "Trek",
    duration: "2 Days / 1 Night",
    description: "High altitude trek, sacred caves, trekking challenge",
    badge: { type: "hot", text: "Challenge", icon: Flame },
    features: ["Trekking", "Photography", "Heritage", "Viewpoints"],
    oldPrice: "INR 4,299",
    newPrice: "INR 3,599",
    image: "https://images.pexels.com/photos/10121815/pexels-photo-10121815.jpeg",
  },
  {
    id: 18,
    title: "Jogigundi Falls",
    category: "Waterfall",
    duration: "Full Day Trip",
    description: "Hidden waterfall, jungle trail, family-friendly",
    badge: { type: "trending", text: "Hidden Gem", icon: Sparkles },
    features: ["Photography", "Nature Walks", "Trekking", "Viewpoints"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://images.pexels.com/photos/2214386/pexels-photo-2214386.jpeg",
  },
];

const CATEGORIES = [
  "Waterfalls",
  "Rainforest",
  "Trek",
  "Wildlife",
  "Scenic View",
  "Heritage",
];

const getFeatureIcon = (feature: string) => {
  switch (feature) {
    case "Photography":
      return Camera;
    case "Trekking":
      return Footprints;
    case "Viewpoints":
      return Eye;
    case "Wildlife":
      return Footprints;
    case "Nature Walks":
      return Droplets;
    default:
      return Camera;
  }
};

export default function Explore() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDestination, setSelectedDestination] = useState<{ id: number; title: string } | null>(null);
  const [isWishListModalOpen, setIsWishListModalOpen] = useState(false);

  const filteredDestinations = useMemo(() => {
    return ALL_DESTINATIONS.filter((dest) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(dest.category);

      return matchesCategory;
    });
  }, [selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBookNow = (destination: { id: number; title: string }) => {
    setSelectedDestination(destination);
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-56 pb-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Fc89d0e9fa5674d86aff100f2b508c899?format=webp&width=800&height=1200')`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-start justify-start pt-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-4 text-left drop-shadow-lg">
            Explore
          </h1>
          <p className="text-lg sm:text-xl text-white/90 text-left drop-shadow-md max-w-2xl">
            Discover all our carefully curated destinations
          </p>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="flex-1 pt-12 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filters */}
          <div className="mb-12">
            {/* Category Filter */}
            <div>
              <h3 className="font-serif font-bold text-foreground mb-4">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategories.includes(category)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:border-primary border border-secondary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>


          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] mb-16">
            {filteredDestinations.map((destination) => {
              const BadgeIcon = destination.badge.icon;
              return (
                <div
                  key={destination.id}
                  className="rounded-[10px] flex flex-col p-[10px] pb-5 relative transition-all duration-300 h-full"
                  style={{ boxShadow: "0 0 10px -5px rgb(0, 0, 0)" }}
                >
                  {/* Image Container */}
                  <div className="relative text-center mb-[15px]">
                    <Link to={`/destination/${destination.id}`}>
                      <img
                        src={destination.image}
                        alt={destination.title}
                        className="rounded-[10px] w-full object-cover"
                        style={{
                          height: "275px",
                          filter: "brightness(1) contrast(1) saturate(1.32) blur(0px) hue-rotate(354deg)",
                        }}
                      />
                    </Link>
                  </div>

                  {/* Duration */}
                  <div className="text-[#232323] text-[13px] font-medium leading-[20.8px] mb-[15px]">
                    <p>{destination.duration}</p>
                  </div>

                  {/* Title */}
                  <div className="mb-[15px]">
                    <p className="text-[#232323] text-[18px] font-bold leading-[20px]">{destination.title}</p>
                  </div>

                  {/* Description */}
                  <div className="mb-[15px]">
                    <p className="text-[#232323] text-[14px] font-medium leading-[20px]">{destination.description}</p>
                  </div>

                  {/* Features Icons */}
                  <div className="w-full overflow-hidden mb-[15px]">
                    <ul className="flex flex-wrap -mx-[5px]">
                      {destination.features.map((feature, index) => {
                        const Icon = getFeatureIcon(feature);
                        return (
                          <li key={index} className="flex items-center mx-[5px] relative">
                            <span className="flex relative top-0">
                              <Icon
                                className="w-[10px] h-[10px] mr-[2.5px] transition-all duration-300"
                                style={{ stroke: "rgb(255, 97, 0)", fill: "rgb(255, 97, 0)" }}
                              />
                            </span>
                            <span className="self-center text-black text-[13px] font-medium leading-[20.8px] pl-[5px] transition-all duration-300">
                              {feature}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="font-medium mb-[15px] flex-grow">
                    <p>
                      <span className="inline text-[#232323] text-[14.6667px] font-medium leading-[23.4667px]">
                        <s>{destination.oldPrice}</s>
                      </span>{" "}
                      <span className="inline text-[rgb(0,128,0)] font-medium">
                        <b className="font-bold">{destination.newPrice} </b>
                        <span className="inline text-black text-[13.3333px] font-medium leading-[21.3333px]">(Per Person)</span>
                      </span>
                    </p>
                  </div>

                  {/* Explore Button */}
                  <div className="w-full mt-auto">
                    <Link to={`/destination/${destination.id}`}>
                      <button
                        className="w-full rounded-[5px] px-[13px] py-[13px] text-white text-[15px] font-medium leading-[15px] text-center transition-all duration-300"
                        style={{ backgroundColor: "rgb(15, 62, 90)" }}
                      >
                        <span className="flex gap-[5px] justify-center">
                          <span>Explore Now</span>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/70 text-lg">
                No destinations found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>

        {/* Full-width CTA Section */}
        {filteredDestinations.length > 0 && (
          <div className="mt-16">
            <HeroCTA
              title="Want us to curate your route?"
              description="Tell us which destinations caught your eye, and we'll create a personalized itinerary just for you."
              buttonText="Plan My Journey"
              onButtonClick={() => navigate("/contact-us")}
            />
          </div>
        )}
      </section>

      <FAQ />

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={selectedDestination !== null}
        onClose={closeModal}
        destinationName={selectedDestination?.title}
      />

      {/* Wish List Modal */}
      <WishListModal
        isOpen={isWishListModalOpen}
        onClose={() => setIsWishListModalOpen(false)}
        onDestinationSelect={(destinationName) => {
          setSelectedDestination({ id: -1, title: destinationName });
          setIsWishListModalOpen(false);
        }}
      />
    </div>
  );
}
