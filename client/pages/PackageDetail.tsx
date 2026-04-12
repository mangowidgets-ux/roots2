import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { Clock, MapPin, Users, Check } from "lucide-react";

interface PackageData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
  groupSize: string;
  heroImage: string;
  galleryImages: string[];
  highlights: string[];
  itinerary: {
    day: string;
    title: string;
    description: string;
    activities: string[];
  }[];
  inclusions: string[];
  whatToBring: string[];
}

const PACKAGES: PackageData[] = [
  {
    id: 1,
    title: "The Daybreak",
    subtitle: "One Day of Pure Discovery",
    description: "Experience the essence of Malnad in a single unforgettable day. Perfect for those who want to taste the adventure without the overnight commitment.",
    price: "₹1,999",
    duration: "1 Day (8 AM - 6 PM)",
    groupSize: "Min 4",
    heroImage: "https://images.pexels.com/photos/5329539/pexels-photo-5329539.jpeg?w=1920&h=1080&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/5329539/pexels-photo-5329539.jpeg?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/33155669/pexels-photo-33155669.jpeg?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/8728586/pexels-photo-8728586.jpeg?w=800&h=600&fit=crop",
    ],
    highlights: [
      "Private vehicle for your group",
      "Flexible route - choose your adventure",
      "Expert local guide",
      "Lunch at authentic local restaurant",
      "Entry fees to all attractions included",
    ],
    itinerary: [
      {
        day: "Morning",
        title: "Sunrise & Exploration",
        description: "Start your day with the magic of dawn in the Western Ghats",
        activities: [
          "8:00 AM - Pickup from your location",
          "9:00 AM - Visit first destination of your choice",
          "10:30 AM - Tea break at scenic viewpoint",
        ],
      },
      {
        day: "Afternoon",
        title: "Cultural Immersion",
        description: "Dive into local culture and cuisine",
        activities: [
          "12:30 PM - Traditional lunch at local eatery",
          "2:00 PM - Explore second destination",
          "3:30 PM - Short nature walk or local market visit",
        ],
      },
      {
        day: "Evening",
        title: "Golden Hour Returns",
        description: "Capture the sunset and return with memories",
        activities: [
          "5:00 PM - Sunset photography session",
          "6:00 PM - Drop back to your location",
        ],
      },
    ],
    inclusions: [
      "Transportation in private vehicle",
      "Professional local guide",
      "Lunch at local restaurant",
      "All entry fees and permits",
      "Refreshments and water",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Sun protection (hat, sunscreen)",
      "Camera for memories",
      "Light jacket (weather dependent)",
      "Valid ID proof",
    ],
  },
  {
    id: 2,
    title: "The Overnight",
    subtitle: "Two Days, One Night of Magic",
    description: "Immerse yourself in the rhythm of Malnad life. Wake up to birdsong, sleep under stars, and truly disconnect to reconnect.",
    price: "₹5,999",
    duration: "2 Days / 1 Night",
    groupSize: "Min 4",
    heroImage: "https://images.pexels.com/photos/7510730/pexels-photo-7510730.jpeg?w=1920&h=1080&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/7510730/pexels-photo-7510730.jpeg?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/27219984/pexels-photo-27219984.jpeg?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/35629751/pexels-photo-35629751.jpeg?w=800&h=600&fit=crop",
    ],
    highlights: [
      "Authentic homestay experience",
      "Traditional breakfast included",
      "Private vehicle throughout",
      "Evening bonfire session",
      "Guided nature walks",
    ],
    itinerary: [
      {
        day: "Day 1 - Morning",
        title: "Journey Begins",
        description: "Travel into the heart of Malnad",
        activities: [
          "9:00 AM - Pickup and journey begins",
          "11:00 AM - First scenic stop",
          "1:00 PM - Check-in to homestay & traditional lunch",
        ],
      },
      {
        day: "Day 1 - Afternoon & Evening",
        title: "Explore & Unwind",
        description: "Experience local life and natural beauty",
        activities: [
          "3:00 PM - Guided exploration of nearby attractions",
          "5:30 PM - Return to homestay for tea",
          "7:00 PM - Dinner with bonfire and stargazing",
        ],
      },
      {
        day: "Day 2 - Morning",
        title: "Sunrise & Departure",
        description: "One last morning in paradise",
        activities: [
          "6:30 AM - Optional sunrise hike",
          "8:00 AM - Traditional breakfast",
          "10:00 AM - Check-out and scenic route back",
          "1:00 PM - Drop at your location",
        ],
      },
    ],
    inclusions: [
      "Transportation in private vehicle",
      "1 night homestay accommodation",
      "Breakfast on Day 2",
      "Bonfire arrangement",
      "Professional guide",
      "All entry fees",
    ],
    whatToBring: [
      "Comfortable clothes for 2 days",
      "Trekking shoes",
      "Toiletries & personal items",
      "Flashlight or headlamp",
      "Camera and power bank",
      "Valid ID proof",
    ],
  },
  {
    id: 3,
    title: "The Deep Roots",
    subtitle: "Your Journey, Your Way",
    description: "Go beyond the itinerary. Design a multi-day adventure that speaks to your soul. From cultural deep-dives to adrenaline-packed expeditions - we craft it together.",
    price: "Custom Quote",
    duration: "3+ Days (Flexible)",
    groupSize: "Min 2",
    heroImage: "https://images.pexels.com/photos/12585935/pexels-photo-12585935.jpeg?w=1920&h=1080&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/12585935/pexels-photo-12585935.jpeg?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/8974284/pexels-photo-8974284.jpeg?w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/12361970/pexels-photo-12361970.jpeg?w=800&h=600&fit=crop",
    ],
    highlights: [
      "Fully customizable itinerary",
      "Choose your duration and destinations",
      "Premium accommodation options",
      "Specialized activities on request",
      "Dedicated trip coordinator",
    ],
    itinerary: [
      {
        day: "Planning Phase",
        title: "Your Vision, Our Expertise",
        description: "We collaborate to design your perfect journey",
        activities: [
          "Discovery call to understand your interests",
          "Custom itinerary proposal within 48 hours",
          "Unlimited revisions until perfect",
          "Transparent pricing breakdown",
        ],
      },
      {
        day: "During Trip",
        title: "Seamless Execution",
        description: "Sit back while we handle everything",
        activities: [
          "Private transportation throughout",
          "Handpicked accommodations",
          "Curated experiences based on your interests",
          "24/7 trip coordinator support",
          "Flexibility to adjust on the go",
        ],
      },
      {
        day: "Popular Add-ons",
        title: "Enhance Your Experience",
        description: "Optional activities to make it extraordinary",
        activities: [
          "Adventure sports (rafting, rock climbing)",
          "Wildlife safaris and bird watching",
          "Cooking classes with local families",
          "Photography workshops",
          "Wellness and yoga retreats",
        ],
      },
    ],
    inclusions: [
      "Custom designed itinerary",
      "All transportation",
      "Accommodation (as per selection)",
      "Meals (breakfast included, others optional)",
      "Professional guides and experts",
      "All permits and entry fees",
      "Trip coordinator support",
    ],
    whatToBring: [
      "Based on your custom itinerary",
      "We provide a detailed packing list",
      "After itinerary confirmation",
    ],
  },
];

export default function PackageDetail() {
  const { id } = useParams();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const pkg = PACKAGES.find((p) => p.id === Number(id));

  if (!pkg) {
    return (
      <div className="w-full min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The package you're looking for doesn't exist.
            </p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pkg.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end p-8 max-w-7xl mx-auto w-full pb-16">
          <div className="text-white max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-wider mb-3 block opacity-90">
              Curated Escape Package
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              {pkg.title}
            </h1>
            <div className="w-24 h-1 mb-4" style={{ backgroundColor: "rgb(0, 50, 162)" }} />
            <p className="text-xl opacity-90 leading-relaxed">{pkg.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Quick Facts Bar */}
      <section className="sticky top-0 z-40 border-b shadow-md" style={{ backgroundColor: "rgb(15, 62, 90)" }}>
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-white/70" />
                <span className="font-medium text-white">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-white/70" />
                <span className="text-white/90">{pkg.groupSize}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-white/60 uppercase tracking-wide">Starting From</p>
                <p className="text-2xl font-bold text-white">{pkg.price}</p>
                {pkg.id !== 3 && <p className="text-xs text-white/60">per person</p>}
              </div>
              <Button
                onClick={() => setBookingModalOpen(true)}
                className="font-bold text-white border-2 border-white/50 hover:bg-white hover:text-[rgb(15,62,90)] transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-8 py-12 flex-1">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-0" style={{ color: "rgb(35, 35, 35)" }}>Overview</h2>
          <div className="flex py-[15px]">
            <span className="w-[65%] border-t-[3px] border-solid" style={{ borderTopColor: "rgb(0, 50, 162)" }}></span>
          </div>
          <p className="text-lg leading-relaxed max-w-4xl" style={{ color: "rgb(60, 60, 60)" }}>
            {pkg.description}
          </p>
        </section>

        {/* Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-0" style={{ color: "rgb(35, 35, 35)" }}>Gallery</h2>
          <div className="flex py-[15px]">
            <span className="w-[65%] border-t-[3px] border-solid" style={{ borderTopColor: "rgb(0, 50, 162)" }}></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pkg.galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <img
                  src={image}
                  alt={`${pkg.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-0" style={{ color: "rgb(35, 35, 35)" }}>Highlights</h2>
          <div className="flex py-[15px]">
            <span className="w-[65%] border-t-[3px] border-solid" style={{ borderTopColor: "rgb(0, 50, 162)" }}></span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {pkg.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "rgb(0, 50, 162)" }} />
                <span style={{ color: "rgb(60, 60, 60)" }}>{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Itinerary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-0" style={{ color: "rgb(35, 35, 35)" }}>
            {pkg.id === 3 ? "How It Works" : "Itinerary"}
          </h2>
          <div className="flex py-[15px]">
            <span className="w-[65%] border-t-[3px] border-solid" style={{ borderTopColor: "rgb(0, 50, 162)" }}></span>
          </div>
          <div className="space-y-8">
            {pkg.itinerary.map((item, index) => (
              <div key={index} className="relative pl-8 pb-8 last:border-0" style={{ borderLeft: "2px solid rgba(0,50,162,0.3)" }}>
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full" style={{ backgroundColor: "rgb(0, 50, 162)" }} />
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md">
                  <div className="mb-4">
                    <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "rgb(0, 50, 162)" }}>
                      {item.day}
                    </span>
                    <h3 className="text-xl font-bold mt-1" style={{ color: "rgb(35, 35, 35)" }}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-500">{item.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {item.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-2 text-gray-600">
                        <span className="font-bold mt-1" style={{ color: "rgb(0, 50, 162)" }}>•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inclusions & What to Bring */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-xl p-8 border border-emerald-200/50 dark:border-emerald-800/30">
              <h3 className="text-2xl font-serif font-bold mb-6 text-emerald-900 dark:text-emerald-100">
                What's Included
              </h3>
              <ul className="space-y-3">
                {pkg.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-emerald-800 dark:text-emerald-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to Bring */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl p-8 border border-amber-200/50 dark:border-amber-800/30">
              <h3 className="text-2xl font-serif font-bold mb-6 text-amber-900 dark:text-amber-100">
                What to Bring
              </h3>
              <ul className="space-y-3">
                {pkg.whatToBring.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-800 dark:text-amber-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-8 rounded-2xl mb-16" style={{ backgroundColor: "rgb(15, 62, 90)" }}>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: "rgb(133, 212, 245)" }} />
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready for Your Adventure?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {pkg.id === 3
              ? "Let's design your perfect journey together. Reach out and we'll create something extraordinary."
              : "Book your spot now and get ready for an unforgettable experience in the heart of Malnad."}
          </p>
          <Button
            onClick={() => setBookingModalOpen(true)}
            size="lg"
            className="font-bold text-lg px-12 py-6 border-2 border-white text-white hover:bg-white transition-colors"
            style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
          >
            {pkg.id === 3 ? "Get Custom Quote" : "Book This Package"}
          </Button>
        </section>
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        destinationName={pkg.title}
      />
    </div>
  );
}
