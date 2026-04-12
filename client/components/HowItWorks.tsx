import { FileText, Sliders, CheckCircle } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className: string; style: React.CSSProperties }>;
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "Share your trip details",
    description: "Start and end in Shivamogga, tell us your travel dates, group size, and the places you'd like to visit.",
    icon: FileText,
  },
  {
    id: 2,
    title: "We customize your plan",
    description: "Our tour experts create the perfect route and email you a quote with multiple options to choose from.",
    icon: Sliders,
  },
  {
    id: 3,
    title: "Choose & book",
    description: "Pick the offer that suits you best and confirm your booking. Your adventure awaits!",
    icon: CheckCircle,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-[60px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1366px] mx-auto">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-[30px] font-bold mb-0" style={{ color: "rgb(35, 35, 35)", letterSpacing: "-1px", lineHeight: "30px" }}>
            How It Works
          </h2>
          <div className="flex py-[15px]">
            <span className="w-[65%] border-t-[3px] border-solid" style={{ borderTopColor: "rgb(0, 50, 162)" }}></span>
          </div>
          <p className="text-[16px] text-[#232323] font-medium leading-[24px] mt-4">
            Plan your perfect trip to Shivamogga in three simple steps. From sharing your preferences to confirming your booking.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="rounded-[10px] p-[15px] relative transition-all duration-300"
                style={{ boxShadow: "0 0 10px -5px rgb(0, 0, 0)" }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <Icon
                    className="w-[35px] h-[35px]"
                    style={{ stroke: "rgb(0, 50, 162)", strokeWidth: 1.5 }}
                  />
                </div>

                {/* Title */}
                <div className="text-center mb-2">
                  <h3
                    className="text-[16px] font-bold leading-[20px]"
                    style={{ color: "rgb(35, 35, 35)" }}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="text-center">
                  <p
                    className="text-[13px] leading-[20px]"
                    style={{ color: "rgb(134, 134, 134)" }}
                  >
                    {step.description}
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
