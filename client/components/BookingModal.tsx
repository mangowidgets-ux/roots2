import { X } from "lucide-react";
import { BookingForm } from "./BookingForm";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinationName?: string;
}

// Checkmark Circle Icon
const CheckIcon = () => (
  <div className="w-[26px] h-[26px] rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
      <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

// Phone Icon in Circle
const PhoneIcon = () => (
  <div className="w-[42px] h-[42px] rounded-full bg-[#d4a853] flex items-center justify-center flex-shrink-0">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
    </svg>
  </div>
);

// Email Icon in Circle
const EmailIcon = () => (
  <div className="w-[42px] h-[42px] rounded-full bg-[#d4a853] flex items-center justify-center flex-shrink-0">
    <svg width="20" height="16" viewBox="0 0 24 20" fill="white">
      <path d="M22 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-10 6L2 4V2l10 6 10-6v2z"/>
    </svg>
  </div>
);

// WhatsApp Icon in Circle
const WhatsAppIcon = () => (
  <div className="w-[42px] h-[42px] rounded-full bg-[#d4a853] flex items-center justify-center flex-shrink-0">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </div>
);

export function BookingModal({ isOpen, onClose, destinationName }: BookingModalProps) {
  if (!isOpen) return null;

  const steps = [
    "Please provide us with the details of your holiday plan.",
    "Our tour experts will customize the plan based on your requirements and email the tour quote with different options.",
    "Choose and book the best offer available.",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal with entrance animation */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-[960px] w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 z-20 group"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-white group-hover:text-white/90 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Two-Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
          {/* LEFT PANEL - Premium Hero Section */}
          <div 
            className="relative p-8 lg:p-10 text-white overflow-y-auto hidden lg:block"
            style={{ backgroundColor: '#1e3a5f' }}
          >
            {/* Background image with gradient overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80)',
              }}
            />
            
            {/* Premium gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.95) 0%, rgba(30, 58, 95, 0.85) 100%)'
              }}
            />
            
            <div className="relative z-10">
              {/* Brand name with serif font */}
              <h2 className="text-3xl font-bold mb-2 font-serif tracking-wide">
                Roots<span className="text-[#d4a853]">2</span>
              </h2>
              
              {/* Gold decorative line */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0d084] mb-8 rounded-full" />
              
              <h3 className="text-xl font-bold mb-6 font-serif">
                How it works
              </h3>
              
              {/* Steps with improved spacing */}
              <div className="space-y-6 mb-10">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <CheckIcon />
                    <p className="text-[14px] leading-relaxed text-white/90">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              {/* Gold decorative divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4a853]/50 to-transparent mb-10" />

              {/* Contact Section with premium spacing */}
              <div className="space-y-5">
                <h4 className="text-sm font-semibold text-[#d4a853] uppercase tracking-wider mb-4">
                  Get in Touch
                </h4>
                
                {/* Phone */}
                <div className="flex gap-4 items-center group cursor-pointer">
                  <PhoneIcon />
                  <div>
                    <p className="text-[12px] text-white/70 mb-1">Call Us Now</p>
                    <a
                      href="tel:+919449695251"
                      className="text-base font-bold hover:text-[#d4a853] transition-colors"
                    >
                      +91 9449695251
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-center group cursor-pointer">
                  <EmailIcon />
                  <div>
                    <p className="text-[12px] text-white/70 mb-1">Email Us</p>
                    <a
                      href="mailto:helloroots2@gmail.com"
                      className="text-base font-bold hover:text-[#d4a853] transition-colors break-all"
                    >
                      helloroots2@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 items-center group cursor-pointer">
                  <WhatsAppIcon />
                  <div>
                    <p className="text-[12px] text-white/70 mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/919449695251?text=Hi%20Roots2%20Travel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold hover:text-[#d4a853] transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - Form with premium spacing */}
          <div className="p-8 lg:p-12 overflow-y-auto max-h-[90vh] bg-gradient-to-br from-white to-gray-50/30">
            {/* Form header with serif font */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3 font-serif">
                Let's Plan Your <span className="text-[#d4a853]">Adventure</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Share your travel dreams with us, and we'll craft a personalized itinerary that brings your vision to life.
              </p>
              
              {/* Small decorative accent */}
              <div className="w-12 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0d084] mt-4 rounded-full" />
            </div>
            
            <BookingForm
              destinationName={destinationName}
              onSuccess={onClose}
              showWhyTravelSection={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
