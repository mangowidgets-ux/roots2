import { Link } from "react-router-dom";
import { Utensils } from "lucide-react";

interface CulinaryRegion {
  id: number;
  title: string;
  region: string;
  description: string;
  image: string;
  alt: string;
  iconicDish: string;
}

const CULINARY_REGIONS: CulinaryRegion[] = [
  {
    id: 1,
    title: "Malnad Cuisine",
    region: "Malnad",
    description: "Experience the authentic flavors of the Western Ghats - where coffee plantations meet traditional spice-rich cuisine.",
    image: "https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?w=800&h=600&fit=crop",
    alt: "Traditional Malnad cuisine spread with Indian thali and curries",
    iconicDish: "Akki Rotti, Bamboo Shoot Curry, Kadabu"
  },
  {
    id: 2,
    title: "Karavali Cuisine",
    region: "Karavali (Coastal)",
    description: "Dive into the coastal delights of Karnataka - fresh seafood, coconut-infused curries, and the famous Mangalorean flavors.",
    image: "https://images.pexels.com/photos/35532834/pexels-photo-35532834.jpeg?w=800&h=600&fit=crop",
    alt: "Coastal Karavali cuisine with vibrant fish curry and spices",
    iconicDish: "Neer Dosa, Kane Rava Fry, Kori Rotti"
  }
];

export function CulinaryTours() {
  return (
    <section className="py-[60px] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-[1366px] mx-auto">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Utensils className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-[32px] md:text-[36px] font-bold mb-3" style={{ color: "rgb(35, 35, 35)", letterSpacing: "-1px", lineHeight: "1.2" }}>
            Culinary Tours of Karnataka
          </h2>
          <div className="flex justify-center py-[15px]">
            <span className="w-[200px] border-t-[3px] border-solid border-amber-500"></span>
          </div>
          <p className="text-[18px] md:text-[20px] text-[#232323] font-medium leading-[28px] max-w-3xl mx-auto">
            Shivamogga - Gateway to Malnad and Karavali Culinary Traditions
          </p>
        </div>

        {/* Culinary Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {CULINARY_REGIONS.map((region) => (
            <div
              key={region.id}
              className="rounded-[12px] flex flex-col overflow-hidden relative transition-all duration-300 h-full group hover:shadow-2xl"
              style={{ boxShadow: "0 4px 20px -5px rgba(0, 0, 0, 0.15)" }}
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={region.image}
                  alt={region.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ height: "280px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Region Badge */}
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {region.region}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-[22px] font-bold leading-[26px] mb-3 text-[#232323]">
                  {region.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-gray-700 leading-[22px] mb-4 flex-grow">
                  {region.description}
                </p>

                {/* Iconic Dishes */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-[13px] text-gray-500 font-semibold mb-1">SIGNATURE DISHES</p>
                  <p className="text-[14px] text-amber-700 font-medium leading-[20px]">
                    {region.iconicDish}
                  </p>
                </div>

                {/* Explore Button */}
                <Link to={`/culinary/${region.id}`} className="w-full mt-auto">
                  <button
                    className="w-full rounded-[8px] px-4 py-3 text-white text-[15px] font-semibold leading-[15px] text-center transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                    style={{ backgroundColor: "rgb(180, 83, 9)" }}
                  >
                    <span className="flex gap-2 justify-center items-center">
                      <Utensils className="w-4 h-4" />
                      <span>Explore Cuisine</span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
