import { motion } from "framer-motion";
import { Camera, Sparkles, Calendar, Map, DollarSign, Star } from "lucide-react";

interface HighlightItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  gradient: string;
}

const highlights: HighlightItem[] = [
  { id: "gallery", icon: Camera, label: "📸 Gallery", gradient: "gradient-fire" },
  { id: "vibe", icon: Sparkles, label: "✨ Vibes", gradient: "gradient-purple" },
  { id: "itinerary", icon: Calendar, label: "🗓️ Itinerary", gradient: "gradient-ocean" },
  { id: "route", icon: Map, label: "🗺️ Route", gradient: "gradient-mint" },
  { id: "pricing", icon: DollarSign, label: "💰 Pricing", gradient: "gradient-peach" },
  { id: "reviews", icon: Star, label: "⭐ Reviews", gradient: "gradient-sky" },
];

export function StoryHighlights() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-white border-b sticky top-16 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-2">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.button
                key={highlight.id}
                onClick={() => scrollToSection(highlight.id)}
                className="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`relative w-16 h-16 rounded-full ${highlight.gradient} p-[3px] shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
                  {highlight.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
