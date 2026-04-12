import { Link } from "react-router-dom";

interface Package {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

const PACKAGES: Package[] = [
  {
    id: 1,
    title: "The Daybreak (1 Day)",
    description: "Private vehicle, choose your route.",
    price: "From ₹1,999 per person",
    image: "https://images.pexels.com/photos/5329539/pexels-photo-5329539.jpeg?w=800&h=600&fit=crop",
    alt: "Happy group of friends having fun on a road trip adventure"
  },
  {
    id: 2,
    title: "The Overnight (2D/1N)",
    description: "Stay, breakfast, private vehicle, bonfire.",
    price: "From ₹5,999 per person",
    image: "https://images.pexels.com/photos/7510730/pexels-photo-7510730.jpeg?w=800&h=600&fit=crop",
    alt: "Group of friends enjoying bonfire experience together at night"
  },
  {
    id: 3,
    title: "The Deep Roots (3D+ / Custom)",
    description: "Completely customizable. Tell us your interests.",
    price: "Get a Quote",
    image: "https://images.pexels.com/photos/12585935/pexels-photo-12585935.jpeg",
    alt: "Adventure enthusiast enjoying rock climbing and outdoor activity experience"
  }
];

export function CuratedEscapes() {
  return (
    <section className="py-[60px] px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1366px] mx-auto">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-[30px] font-bold mb-0" style={{ color: "rgb(35, 35, 35)", letterSpacing: "-1px", lineHeight: "30px" }}>
            Roots Curated Escapes
          </h2>
          <div className="flex py-[15px]">
            <span className="w-[65%] border-t-[3px] border-solid" style={{ borderTopColor: "rgb(0, 50, 162)" }}></span>
          </div>
          <p className="text-[16px] text-[#232323] font-medium leading-[24px] mt-4">
            Your journey, your pace. Select from our thoughtfully designed packages.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-[10px] flex flex-col p-[10px] pb-5 relative transition-all duration-300 h-full"
              style={{ boxShadow: "0 0 10px -5px rgb(0, 0, 0)" }}
            >
              {/* Image Container */}
              <div className="relative text-center mb-3">
                <img
                  src={pkg.image}
                  alt={pkg.alt}
                  className="rounded-[10px] w-full object-cover"
                  style={{ height: "275px" }}
                />
              </div>

              {/* Title */}
              <div className="mb-3">
                <p className="text-[#232323] text-[18px] font-bold leading-[20px]">{pkg.title}</p>
              </div>

              {/* Description */}
              <div className="mb-3">
                <p className="text-[#232323] text-[14px] font-medium leading-[20px]">{pkg.description}</p>
              </div>

              {/* Pricing */}
              <div className="font-medium mb-3 flex-grow">
                <p className="text-[rgb(0,128,0)] text-[14.6667px] font-bold leading-[23.4667px]">
                  {pkg.price}
                </p>
              </div>

              {/* Plan My Trip Button */}
              <div className="w-full mt-auto">
                <Link to={`/package/${pkg.id}`}>
                  <button
                    className="w-full rounded-[5px] px-[13px] py-[13px] text-white text-[15px] font-medium leading-[15px] text-center transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: "rgb(15, 62, 90)" }}
                  >
                    <span className="flex gap-[5px] justify-center">
                      <span>View Details</span>
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
