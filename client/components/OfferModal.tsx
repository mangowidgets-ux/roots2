import { X } from "lucide-react";

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGrabOffer: () => void;
}

export function OfferModal({ isOpen, onClose, onGrabOffer }: OfferModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal with entrance animation */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-[540px] w-full overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-all duration-200 z-20 group"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-700 group-hover:text-gray-900 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-12 text-center">
          {/* Leaf emoji as decorative element */}
          <div className="text-6xl mb-4">🌿</div>
          
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-serif">
            Planning a Trip to Shivamogga?
          </h2>
          
          {/* Subtext */}
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Get <span className="text-[#d4a853] font-bold text-2xl">₹500 OFF</span> on your first weekend trip with us.
          </p>

          {/* Gold decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0d084] mx-auto mb-8 rounded-full" />

          {/* CTA Button */}
          <button
            onClick={onGrabOffer}
            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#d4a853] to-[#f0d084] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg"
          >
            Grab Offer
          </button>

          {/* Small disclaimer text */}
          <p className="text-xs text-gray-500 mt-6">
            Limited time offer. Terms and conditions apply.
          </p>
        </div>
      </div>
    </div>
  );
}
