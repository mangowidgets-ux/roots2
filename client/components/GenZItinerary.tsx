import { motion } from "framer-motion";
import { Car, Mountain, Camera, UtensilsCrossed, Home, Coffee, Sun, Moon } from "lucide-react";

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  timing?: string;
  activities: string[];
  meals?: string[];
}

interface GenZItineraryProps {
  itinerary: ItineraryDay[];
}

const activityEmojis: Record<string, string> = {
  arrive: "🚗",
  trek: "🥾",
  photography: "📸",
  lunch: "🍽️",
  dinner: "🍝",
  breakfast: "🍳",
  return: "🏠",
  visit: "🏛️",
  explore: "🗺️",
  coffee: "☕",
  sunrise: "🌅",
  sunset: "🌇",
};

const gradients = [
  "gradient-fire",
  "gradient-ocean",
  "gradient-purple",
  "gradient-mint",
  "gradient-peach",
  "gradient-sky",
];

function getActivityEmoji(activity: string): string {
  const lowerActivity = activity.toLowerCase();
  for (const [key, emoji] of Object.entries(activityEmojis)) {
    if (lowerActivity.includes(key)) {
      return emoji;
    }
  }
  return "✨";
}

function getMealEmoji(meal: string): string {
  const lowerMeal = meal.toLowerCase();
  if (lowerMeal.includes("breakfast")) return "🍳";
  if (lowerMeal.includes("lunch")) return "🍱";
  if (lowerMeal.includes("dinner")) return "🍝";
  if (lowerMeal.includes("snack")) return "🍪";
  return "🍽️";
}

export function GenZItinerary({ itinerary }: GenZItineraryProps) {
  return (
    <section id="itinerary" className="mb-16 scroll-mt-32">
      <h2 className="text-3xl font-bold mb-6">🗓️ Your Adventure Timeline</h2>
      
      <div className="space-y-6">
        {itinerary.map((day, index) => {
          const gradient = gradients[index % gradients.length];
          
          return (
            <motion.div
              key={day.day}
              className={`${gradient} rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-all`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02, rotate: 0.5 }}
            >
              <div className="bg-white rounded-xl p-6">
                {/* Day Badge */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className={`flex-shrink-0 w-20 h-20 rounded-full ${gradient} text-white flex items-center justify-center font-bold text-xl shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    Day {day.day}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{day.title}</h3>
                    <p className="text-gray-600 mb-2">{day.description}</p>
                    
                    {day.timing && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                        <Sun className="w-4 h-4" />
                        {day.timing}
                      </div>
                    )}
                  </div>
                </div>

                {/* Activities */}
                <div className="space-y-3 mb-4">
                  {day.activities.map((activity, actIndex) => (
                    <motion.div
                      key={actIndex}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: actIndex * 0.05 }}
                    >
                      <span className="text-2xl flex-shrink-0">
                        {getActivityEmoji(activity)}
                      </span>
                      <span className="text-gray-700">{activity}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Meals */}
                {day.meals && day.meals.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                    <span className="text-sm font-semibold text-gray-600">Meals Included:</span>
                    {day.meals.map((meal, mealIndex) => (
                      <motion.span
                        key={mealIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: mealIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span>{getMealEmoji(meal)}</span>
                        <span>{meal}</span>
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fun Footer */}
      <motion.div
        className="mt-8 p-6 rounded-xl glass-dark text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-white font-medium text-lg">
          🎉 Ready to make these memories? Let's gooo! 🚀
        </p>
      </motion.div>
    </section>
  );
}
