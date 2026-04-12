import { Percent, Package, Heart } from "lucide-react";

const FEATURES = [
  {
    title: "100% Honest Prices",
    description:
      "Our top priority is to optimize the booking process, saving our customers' time and providing them with a smooth experience.",
    icon: Percent,
  },
  {
    title: "Best Packages Guaranteed",
    description:
      "Our personalized tour packages allow customers to tailor their itineraries, stays & activities for a unique and fulfilling experience.",
    icon: Package,
  },
  {
    title: "Trusted Networks",
    description:
      "We have the most reliable and trustworthy partners and our service providers ensure a seamless and efficient travel experience",
    icon: Heart,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-[60px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1366px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-[32px] font-bold leading-[50px] mb-6" style={{ color: "rgb(35, 31, 32)" }}>
            Why Choose Us?
          </h2>
          <p className="text-sm leading-8 mb-5" style={{ color: "rgb(0, 0, 0)" }}>
            Travel is best enjoyed via experiences, and at Roots2, our product team selects the most unusual and well-liked experiences to ensure that your trip is one to remember.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative p-[15px] transition-all duration-300"
              >
                <div className="text-center relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-[50px] h-[50px] mb-2 transition-all duration-300">
                    <Icon className="w-[30px] h-[30px]" style={{ stroke: "rgb(27, 27, 27)", fill: "rgb(27, 27, 27)" }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[15px] font-bold leading-[19px] mb-2 transition-all duration-300"
                    style={{
                      color: "rgb(27, 27, 27)",
                      letterSpacing: "2px"
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-[25px] transition-all duration-300"
                    style={{
                      color: "rgb(134, 134, 134)",
                      fontFamily: "Lato, sans-serif"
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
