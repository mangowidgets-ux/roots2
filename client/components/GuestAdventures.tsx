import { useNavigate } from "react-router-dom";

export function GuestAdventures() {
  const navigate = useNavigate();

  return (
    <section className="py-[80px] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-[1366px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Real Adventures.{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Real Stories.
            </span>
          </h2>
          <div className="flex">
            <span className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></span>
          </div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl">
            Every journey brings new friends and unforgettable memories. Experience the magic of travel with real adventurers like you.
          </p>
        </div>

        {/* Featured Image Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <img
                src="https://images.pexels.com/photos/3753039/pexels-photo-3753039.jpeg?w=1200&h=800&fit=crop"
                alt="Happy friends sharing smiles and laughter during an adventure road trip"
                className="relative w-full rounded-2xl shadow-2xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ minHeight: "500px" }}
              />
            </div>
          </div>

          {/* Story Section */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Why Roots2?</h3>
                <p className="text-gray-300 leading-relaxed">
                  We don't just organize trips—we create communities. Every journey is a chance to meet like-minded travelers, explore hidden gems, and make memories that last a lifetime.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-700">
                <div className="flex gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Expert Guides</span>
                    {" "}who know every corner
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Small Groups</span>
                    {" "}for intimate experiences
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Authentic Moments</span>
                    {" "}not tourist traps
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate("/explore")}
                className="group relative w-full px-6 py-4 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/50 mt-6"
              >
                <span className="relative z-10">Start Your Adventure</span>
                <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-gray-700">
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-400 mb-2">500+</p>
            <p className="text-gray-300">Happy Travelers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-400 mb-2">50+</p>
            <p className="text-gray-300">Destinations</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-400 mb-2">4.9★</p>
            <p className="text-gray-300">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
