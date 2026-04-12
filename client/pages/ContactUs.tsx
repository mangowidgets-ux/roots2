import { Header } from "@/components/Header";
import { BookingForm } from "@/components/BookingForm";
import { MessageSquare, Mail, MapPin } from "lucide-react";

export default function ContactUs() {

  return (
    <div
      className="w-full h-screen overflow-hidden flex flex-col relative"
      style={{
        backgroundImage: 'url(/images/sakrebailu_elephant_camp.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col overflow-y-auto">
        <Header />

        {/* Hero */}
        <section className="relative pt-8 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          </div>
        </section>

        {/* Main Content */}
        <section className="flex-1 py-6 flex flex-col items-center justify-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Contact Methods */}
              <div className="flex flex-col gap-6 justify-start items-start">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919449695251?text=Hi%20Roots2!%20I%20want%20to%20plan%20a%20trip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 p-4 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 mt-1">
                    <MessageSquare className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-medium text-white">WhatsApp us</span>
                    <span className="text-sm text-white/80">+919449695251</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:roots@gmail.com"
                  className="flex items-center justify-center gap-4 p-4 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-medium text-white">Email us</span>
                    <span className="text-sm text-white/80">roots@gmail.com</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center justify-center gap-4 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-medium text-white">We are at Shivmogga, India</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Form Section */}
              <div className="rounded-2xl p-6 border border-border/50" style={{ backgroundColor: "rgba(171, 165, 165, 0.6)", margin: "-1px 0 200px" }}>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
