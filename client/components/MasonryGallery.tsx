import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";

interface MasonryGalleryProps {
  images: string[];
  title: string;
}

export function MasonryGallery({ images, title }: MasonryGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  const handleLike = (index: number) => {
    setLikedImages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <>
      <section id="gallery" className="mb-16 scroll-mt-32">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">📸 Gallery</h2>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-fire text-white font-medium text-sm">
            <span>{images.length} pics</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(index)}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-100 transition-opacity -z-10" style={{ padding: '2px' }} />
              
              <img
                src={img}
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover aspect-square"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <motion.button
                  className="opacity-0 group-hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart
                    className={`w-12 h-12 ${
                      likedImages.has(index)
                        ? 'fill-red-500 text-red-500'
                        : 'text-white'
                    }`}
                  />
                </motion.button>
              </div>
              
              {/* Like Indicator */}
              {likedImages.has(index) && (
                <motion.div
                  className="absolute top-2 right-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <Heart className="w-6 h-6 fill-red-500 text-red-500" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <motion.img
              src={images[selectedImage]}
              alt={`${title} ${selectedImage + 1}`}
              className="max-w-full max-h-full rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedImage
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
