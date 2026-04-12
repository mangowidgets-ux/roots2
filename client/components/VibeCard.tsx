import { motion } from "framer-motion";
import { Camera, Mountain, Coffee, Sparkles } from "lucide-react";

interface VibeCardProps {
  title: string;
  description: string;
  features: string[];
}

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Photography: Camera,
  Trekking: Mountain,
  "Nature Walks": Coffee,
  Wildlife: Sparkles,
  Heritage: Sparkles,
  Viewpoints: Mountain,
};

export function VibeCard({ title, description, features }: VibeCardProps) {
  return (
    <section id="vibe" className="mb-16 scroll-mt-32">
      <h2 className="text-3xl font-bold mb-6">✨ The Vibe</h2>
      
      <motion.div
        className="gradient-purple rounded-2xl p-8 text-gray-800 shadow-xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start gap-3 mb-4">
          <span className="text-4xl">🔥</span>
          <div>
            <h3 className="text-2xl font-bold mb-2">What's Hot</h3>
            <p className="text-lg leading-relaxed">{description}</p>
          </div>
        </div>
        
        <div className="glass rounded-xl p-6 mt-6">
          <p className="text-sm font-bold mb-2 text-gray-700">💯 TL;DR:</p>
          <p className="text-base">
            This place is giving <span className="gradient-text font-bold">main character energy</span> with epic views and unforgettable vibes. No cap! 🎯
          </p>
        </div>
      </motion.div>

      {/* Feature Tags */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">🎯 Must-Do Experiences</h3>
        <div className="flex flex-wrap gap-3">
          {features.map((feature, index) => {
            const Icon = featureIcons[feature] || Sparkles;
            return (
              <motion.div
                key={feature}
                className="glass-dark rounded-full px-5 py-3 flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-5 h-5 text-white" />
                <span className="text-white font-medium">{feature}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Quick Facts Pills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          className="gradient-ocean rounded-xl p-6 text-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-3xl mb-2">📸</div>
          <div className="font-bold text-lg">Insta-Worthy</div>
          <div className="text-sm opacity-90">Perfect photo ops everywhere</div>
        </motion.div>

        <motion.div
          className="gradient-fire rounded-xl p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-3xl mb-2">🌟</div>
          <div className="font-bold text-lg">Adventure Vibes</div>
          <div className="text-sm opacity-90">Thrills and chill moments</div>
        </motion.div>

        <motion.div
          className="gradient-mint rounded-xl p-6 text-gray-800"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-3xl mb-2">✨</div>
          <div className="font-bold text-lg">Memory Maker</div>
          <div className="text-sm opacity-90">Stories you'll tell forever</div>
        </motion.div>
      </div>
    </section>
  );
}
