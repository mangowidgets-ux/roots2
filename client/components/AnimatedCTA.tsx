import { motion } from "framer-motion";
import { Sparkles, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";

interface AnimatedCTAProps {
  destinationName: string;
  price: string;
  onBookNow: () => void;
}

export function AnimatedCTA({ destinationName, price, onBookNow }: AnimatedCTAProps) {
  return (
    <section id="pricing" className="scroll-mt-32">
      <motion.div
        className="relative overflow-hidden rounded-3xl p-12 text-center shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #F093FB 100%)",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Background Circles */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Emoji Confetti */}
          <motion.div
            className="text-6xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Go!
          </h2>
          
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Don't miss out on this epic adventure to <span className="font-bold underline">{destinationName}</span>! 
            Your next unforgettable story starts here 🌟
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
            <motion.div
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-5 h-5 text-white" />
              <span className="text-white font-medium">500+ adventurers joined</span>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-medium">Limited spots!</span>
            </motion.div>
          </div>

          {/* Price */}
          <motion.div
            className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-white/80 text-sm mb-1">Starting at</div>
            <div className="text-4xl font-bold text-white">{price}</div>
            <div className="text-white/80 text-sm">per person</div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={onBookNow}
              size="lg"
              className="bg-white text-purple-700 hover:bg-white/90 text-xl px-12 py-6 h-auto rounded-full font-bold shadow-2xl animate-pulse-glow"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              Book Your Spot Now!
            </Button>
          </motion.div>

          {/* FOMO Text */}
          <motion.p
            className="text-white/70 text-sm mt-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚡ Hurry! This deal won't last forever
          </motion.p>
        </div>
      </motion.div>

      {/* Review Section */}
      <div id="reviews" className="mt-8 scroll-mt-32">
        <h3 className="text-2xl font-bold mb-4 text-center">⭐ What Others Are Saying</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Priya S.", text: "Absolutely stunning! Best trip ever 😍", rating: 5 },
            { name: "Rahul K.", text: "No cap, this place hits different! 🔥", rating: 5 },
            { name: "Ananya M.", text: "Main character vibes all day! ✨", rating: 5 },
          ].map((review, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-2">"{review.text}"</p>
              <p className="text-sm text-gray-500 font-medium">- {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
