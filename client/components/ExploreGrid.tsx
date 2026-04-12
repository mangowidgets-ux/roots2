import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Camera, Footprints, Eye, Droplets, Flame, Sparkles } from "lucide-react";
import { BookingModal } from "./BookingModal";

const DESTINATIONS = [
  {
    id: 1,
    title: "Jog Falls",
    category: "Waterfalls",
    duration: "Day Trip",
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
    duration: "Day Trip",
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
    duration: "Day Trip",
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
    duration: "Day Trip",
    description: "Majestic waterfall, scenic trek, coffee plantations",
    badge: { type: "hot", text: "Popular", icon: Flame },
    features: ["Photography", "Trekking", "Nature Walks", "Viewpoints"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://cdn.builder.io/o/assets%2F350c85029eed47748b7045d4f507277c%2F42cd380561ea4abdb65553a4ad5f2fce?alt=media&token=5fd45f32-4a55-4ae8-93d3-6cba55ebe80b&apiKey=350c85029eed47748b7045d4f507277c",
  },
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

export function ExploreGrid() {
  const [selectedDestination, setSelectedDestination] = useState<{ id: number; title: string } | null>(null);

  const handleBookNow = (destination: { id: number; title: string }) => {
    setSelectedDestination(destination);
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

  return (
    <section className="py-[60px] px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1366px] mx-auto">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-[30px] font-bold mb-0" style={{ color: "rgb(35, 35, 35)", letterSpacing: "-1px", lineHeight: "30px" }}>
            Explore Destinations
          </h2>
          <div className="flex py-[15px]">
            <span className="w-[65%] border-t-[3px] border-solid" style={{ borderTopColor: "rgb(0, 50, 162)" }}></span>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6">
          {DESTINATIONS.map((destination) => {
            const BadgeIcon = destination.badge.icon;
            return (
              <div
                key={destination.id}
                className="rounded-[10px] flex flex-col p-[10px] pb-5 relative transition-all duration-300 h-full"
                style={{ boxShadow: "0 0 10px -5px rgb(0, 0, 0)" }}
              >
                {/* Image Container */}
                <div className="relative text-center mb-3">
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
                <div className="text-[#232323] text-[13px] font-medium leading-[20.8px] mb-3">
                  <p>{destination.duration}</p>
                </div>

                {/* Title */}
                <div className="mb-3">
                  <p className="text-[#232323] text-[18px] font-bold leading-[20px]">{destination.title}</p>
                </div>

                {/* Description */}
                <div className="mb-3">
                  <p className="text-[#232323] text-[14px] font-medium leading-[20px]">{destination.description}</p>
                </div>

                {/* Features Icons */}
                <div className="w-full overflow-hidden mb-3">
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
                <div className="font-medium mb-3 flex-grow">
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
                  <Link to={`/destination/${destination.id}`} className="w-full block">
                    <Button className="w-full font-bold" style={{ backgroundColor: "rgb(15, 62, 90)" }}>
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/explore">
            <Button variant="outline" size="lg" className="border-2" style={{ borderColor: "rgb(0, 50, 162)", color: "rgb(0, 50, 162)" }}>
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>

      {selectedDestination && (
        <BookingModal
          isOpen={!!selectedDestination}
          onClose={closeModal}
          destinationName={selectedDestination.title}
        />
      )}
    </section>
  );
}
