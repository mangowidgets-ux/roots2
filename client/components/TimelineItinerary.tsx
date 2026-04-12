interface ItineraryDay {
  day: number;
  title: string;
  description?: string;
  timing?: string;
  activities: string[];
  meals?: string[];
}

interface TimelineItineraryProps {
  itinerary: ItineraryDay[];
}

export function TimelineItinerary({ itinerary }: TimelineItineraryProps) {
  if (!itinerary || itinerary.length === 0) {
    return null;
  }

  const totalDays = itinerary.length;

  return (
    <section id="itinerary" className="mb-16 scroll-mt-32">
      <h2 className="text-3xl font-bold mb-0" style={{ color: "rgb(35, 35, 35)" }}>Itinerary</h2>
      <div className="flex py-[15px]">
        <span className="w-[65%] border-t-[3px] border-solid" style={{ borderTopColor: "rgb(0, 50, 162)" }}></span>
      </div>
      <p className="text-gray-500 mb-8">
        {totalDays === 1 ? "A full day of adventure awaits" : `${totalDays} days of unforgettable experiences`}
      </p>

      <div className="relative">
        <div className="space-y-0">
          {itinerary.map((day, index) => (
            <div key={day.day} className="relative pb-12 md:pb-0">

              {/* Desktop Layout */}
              <div className="hidden md:flex">
                <div className="flex flex-col items-center mr-8 relative w-12">
                  <div
                    className="w-8 h-8 rounded-full z-10 flex items-center justify-center font-bold text-sm text-white"
                    style={{ backgroundColor: "rgb(0, 50, 162)" }}
                  >
                    {day.day}
                  </div>
                  {index < itinerary.length - 1 && (
                    <div
                      className="w-0.5 h-32 mt-2"
                      style={{ backgroundColor: "rgb(0, 50, 162, 0.3)", background: "linear-gradient(to bottom, rgb(0,50,162), rgb(200,210,240))" }}
                    ></div>
                  )}
                </div>

                <div className="flex-1 pb-12">
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 transition-shadow hover:shadow-lg">
                    <h3 className="text-xl font-bold mb-1" style={{ color: "rgb(35, 35, 35)" }}>
                      {day.title}
                    </h3>

                    {day.description && (
                      <p className="text-sm text-gray-500 mb-3">{day.description}</p>
                    )}

                    {day.timing && (
                      <div
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                        style={{ backgroundColor: "rgb(240, 245, 255)", color: "rgb(15, 62, 90)" }}
                      >
                        {day.timing}
                      </div>
                    )}

                    <div className="space-y-2 mb-4">
                      {day.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex gap-3 text-sm text-gray-600">
                          <span className="font-bold flex-shrink-0" style={{ color: "rgb(0, 50, 162)" }}>•</span>
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>

                    {day.meals && day.meals.length > 0 && (
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                          {day.meals.map((meal, mealIndex) => (
                            <span
                              key={mealIndex}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium border"
                              style={{
                                backgroundColor: "rgb(240, 245, 255)",
                                color: "rgb(15, 62, 90)",
                                borderColor: "rgba(0,50,162,0.2)",
                              }}
                            >
                              {meal}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                      style={{ backgroundColor: "rgb(0, 50, 162)" }}
                    >
                      {day.day}
                    </div>
                    {index < itinerary.length - 1 && (
                      <div
                        className="w-0.5 h-32 mt-2"
                        style={{ background: "linear-gradient(to bottom, rgb(0,50,162), rgb(200,210,240))" }}
                      ></div>
                    )}
                  </div>

                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 flex-1 mb-6">
                    <h3 className="text-lg font-bold mb-1" style={{ color: "rgb(35, 35, 35)" }}>
                      {day.title}
                    </h3>

                    {day.description && (
                      <p className="text-xs text-gray-500 mb-2">{day.description}</p>
                    )}

                    {day.timing && (
                      <div
                        className="inline-block px-2 py-1 rounded text-xs font-medium mb-3"
                        style={{ backgroundColor: "rgb(240, 245, 255)", color: "rgb(15, 62, 90)" }}
                      >
                        {day.timing}
                      </div>
                    )}

                    <div className="space-y-1 mb-3">
                      {day.activities.slice(0, 3).map((activity, actIndex) => (
                        <div key={actIndex} className="flex gap-2 text-xs text-gray-600">
                          <span className="font-bold flex-shrink-0" style={{ color: "rgb(0, 50, 162)" }}>•</span>
                          <span>{activity}</span>
                        </div>
                      ))}
                      {day.activities.length > 3 && (
                        <div className="text-xs text-gray-400 italic">
                          + {day.activities.length - 3} more activities
                        </div>
                      )}
                    </div>

                    {day.meals && day.meals.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {day.meals.map((meal, mealIndex) => (
                          <span
                            key={mealIndex}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium border"
                            style={{
                              backgroundColor: "rgb(240, 245, 255)",
                              color: "rgb(15, 62, 90)",
                              borderColor: "rgba(0,50,162,0.2)",
                            }}
                          >
                            {meal}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Bottom Info Box */}
      <div
        className="mt-12 p-6 rounded-xl border-l-4 bg-white shadow-md"
        style={{ borderLeftColor: "rgb(0, 50, 162)" }}
      >
        <h4 className="font-bold mb-2" style={{ color: "rgb(35, 35, 35)" }}>What's Included</h4>
        <p className="text-sm text-gray-500">
          Transportation via private vehicle • Professional guide • All meals as mentioned in the itinerary •
          Entry fees to attractions • Bottled water & snacks
        </p>
      </div>
    </section>
  );
}
