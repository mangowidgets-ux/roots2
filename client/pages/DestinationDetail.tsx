import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { destinations } from "@/data/destinations";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { Clock, MapPin, Users } from "lucide-react";
import { SimpleGallery } from "@/components/SimpleGallery";
import { TimelineItinerary } from "@/components/TimelineItinerary";

export default function DestinationDetail() {
  const { id } = useParams();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const destination = destinations.find((d) => d.id === Number(id));

  if (!destination) {
    return (
      <div className="w-full min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ color: "rgb(35, 31, 32)" }}>Destination Not Found</h1>
            <p className="text-gray-500 mb-6">
              The destination you're looking for doesn't exist.
            </p>
            <Link to="/explore">
              <Button style={{ backgroundColor: "rgb(15, 62, 90)" }}>Back to Explore</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const BadgeIcon = destination.badge.icon;

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end p-8 max-w-7xl mx-auto w-full pb-16">
          <div className="text-white max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-wider mb-3 block opacity-90">
              {destination.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              {destination.title}
            </h1>
            <div className="w-24 h-1 mb-4" style={{ backgroundColor: "rgb(0, 50, 162)" }} />
            <p className="text-xl opacity-90 leading-relaxed">{destination.description}</p>
          </div>
        </div>
      </section>

      {/* Quick Facts Bar */}
      <section
        className="sticky top-0 z-40 border-b shadow-md"
        style={{ backgroundColor: "rgb(15, 62, 90)" }}
        id="booking-bar"
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-white/70" />
                <span className="font-medium text-white">{destination.duration}</span>
              </div>
              {destination.travelDetails.distance && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-white/70" />
                  <span className="text-white/90">{destination.travelDetails.distance}</span>
                </div>
              )}
              {destination.travelDetails.groupSize && (
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-white/70" />
                  <span className="text-white/90">
                    Min {destination.travelDetails.groupSize.min}
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-white/60 line-through">{destination.oldPrice}</div>
                <div className="text-2xl font-bold text-white">{destination.newPrice}</div>
                <div className="text-xs text-white/60">(Per Person)</div>
              </div>
              <Button
                onClick={() => setBookingModalOpen(true)}
                className="font-bold text-white border-2 border-white/50 hover:bg-white hover:text-[rgb(15,62,90)] transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                size="lg"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12 flex-1 w-full">

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-0" style={{ color: "rgb(35, 35, 35)" }}>Overview</h2>
          <div className="flex py-[15px]">
            <span className="w-[65%] border-t-[3px] border-solid" style={{ borderTopColor: "rgb(0, 50, 162)" }}></span>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-10">
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgb(60, 60, 60)" }}>
              {destination.fullDescription}
            </p>
            {destination.features && destination.features.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {destination.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm rounded-full border font-medium"
                    style={{
                      backgroundColor: "rgb(240, 245, 255)",
                      color: "rgb(15, 62, 90)",
                      borderColor: "rgb(0, 50, 162, 0.3)",
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Image Gallery */}
        {destination.images && destination.images.length > 0 && (
          <SimpleGallery images={destination.images} title={destination.title} />
        )}

        {/* Itinerary */}
        {destination.itinerary && destination.itinerary.length > 0 && (
          <TimelineItinerary itinerary={destination.itinerary} />
        )}

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-0" style={{ color: "rgb(35, 35, 35)" }}>What's Included</h2>
          <div className="flex py-[15px]">
            <span className="w-[65%] border-t-[3px] border-solid" style={{ borderTopColor: "rgb(0, 50, 162)" }}></span>
          </div>
          <div>
            {/* Inclusions */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: "rgb(35, 35, 35)" }}>Inclusions</h3>
              <ul className="space-y-3">
                {destination.travelDetails.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-bold text-lg flex-shrink-0" style={{ color: "rgb(0, 50, 162)" }}>✓</span>
                    <span style={{ color: "rgb(80, 80, 80)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="mt-8 bg-white rounded-xl shadow-md border-l-4 p-6" style={{ borderLeftColor: "rgb(0, 50, 162)" }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: "rgb(35, 35, 35)" }}>Best Time to Visit</h3>
            <p style={{ color: "rgb(80, 80, 80)" }}>{destination.travelDetails.bestTimeToVisit}</p>
          </div>

          {/* Important Notes */}
          {destination.travelDetails.importantNotes && destination.travelDetails.importantNotes.length > 0 && (
            <div className="mt-8 bg-white rounded-xl shadow-md border-l-4 p-6" style={{ borderLeftColor: "rgb(0, 50, 162)" }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: "rgb(35, 35, 35)" }}>Important Notes</h3>
              <ul className="space-y-2">
                {destination.travelDetails.importantNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-bold flex-shrink-0" style={{ color: "rgb(0, 50, 162)" }}>•</span>
                    <span style={{ color: "rgb(80, 80, 80)" }}>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Route Map */}
        {destination.routeMap && destination.routeMap.staticImageUrl && (
          <section id="route" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold mb-0" style={{ color: "rgb(35, 35, 35)" }}>Your Journey</h2>
            <div className="flex py-[15px]">
              <span className="w-[65%] border-t-[3px] border-solid" style={{ borderTopColor: "rgb(0, 50, 162)" }}></span>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <img
                src={destination.routeMap.staticImageUrl}
                alt="Route map"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {destination.routeMap.startPoint && destination.routeMap.endPoint && (
              <div className="mt-6 bg-white rounded-xl shadow-md border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Starting Point</div>
                    <div className="font-bold text-lg" style={{ color: "rgb(35, 35, 35)" }}>{destination.routeMap.startPoint.name}</div>
                  </div>
                  <div style={{ color: "rgb(0, 50, 162)" }} className="text-2xl font-bold">→</div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Destination</div>
                    <div className="font-bold text-lg" style={{ color: "rgb(35, 35, 35)" }}>{destination.routeMap.endPoint.name}</div>
                  </div>
                </div>
                {destination.travelDetails.distance && (
                  <div className="mt-4 text-center text-sm text-gray-500">
                    {destination.travelDetails.distance}
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* CTA Section */}
        <section className="mb-16">
          <div
            className="rounded-xl p-10 text-center"
            style={{ backgroundColor: "rgb(15, 62, 90)" }}
          >
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{ backgroundColor: "rgb(133, 212, 245)" }}
            />
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Explore?
            </h3>
            <p className="text-white/80 mb-8">Book your {destination.title} adventure today</p>

            <div className="mb-8">
              <div className="text-sm text-white/60 line-through mb-2">{destination.oldPrice}</div>
              <div className="text-5xl font-bold text-white mb-2">{destination.newPrice}</div>
              <div className="text-sm text-white/60">Per Person</div>
            </div>

            <Button
              onClick={() => setBookingModalOpen(true)}
              size="lg"
              className="font-bold px-12 py-6 text-lg border-2 border-white text-white hover:bg-white transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
            >
              Book Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        destinationName={destination.title}
      />
    </div>
  );
}
