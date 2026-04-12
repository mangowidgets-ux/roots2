import { Destination } from "@/types/destination";
import { Flame, Sparkles } from "lucide-react";

export const destinations: Destination[] = [
  {
    id: 1,
    title: "Jog Falls",
    category: "Waterfalls",
    duration: "Day Trip",
    description: "4th highest waterfall in India, 253m cascade",
    badge: { type: "discount", text: "25% Off", icon: null },
    features: ["Photography", "Nature Walks", "Viewpoints", "Trekking"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F08f44ed2fce54a71b66a1a4a1f234f46?format=webp&width=800&height=1200",
    images: [
      "https://images.pexels.com/photos/35367645/pexels-photo-35367645.jpeg",
      "https://images.pexels.com/photos/33889675/pexels-photo-33889675.jpeg",
      "https://images.pexels.com/photos/14734484/pexels-photo-14734484.jpeg",
      "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F08f44ed2fce54a71b66a1a4a1f234f46?format=webp&width=800&height=1200",
    ],
    fullDescription: "Jog Falls, created by the Sharavathi River plunging from a height of 253 meters, is one of the highest plunge waterfalls in India. Located in the Shimoga district of Karnataka, this magnificent natural wonder is formed by four distinct cascades: Raja, Rani, Rover, and Rocket. The monsoon season transforms this into a breathtaking spectacle with massive volumes of water creating a misty spray that can be seen from kilometers away. The surrounding Western Ghats forest provides a lush green backdrop and opportunities for nature walks and wildlife spotting.",
    itinerary: [
      {
        day: 1,
        title: "Jog Falls Exploration",
        description: "Full day adventure at India's highest plunge waterfall",
        activities: [
          "Depart from Shivamogga at 6:00 AM",
          "Arrive at Jog Falls viewpoint (8:00 AM)",
          "Trek down to the base of the falls",
          "Photography session at multiple viewpoints",
          "Visit nearby Linganamakki Dam",
          "Return to Shivamogga by 6:00 PM"
        ],
        timing: "6:00 AM - 6:00 PM",
        meals: []
      }
    ],
    routeMap: {
      type: "static",
      staticImageUrl: "https://images.pexels.com/photos/2724241/pexels-photo-2724241.jpeg",
      startPoint: { lat: 13.9299, lng: 75.5681, name: "Shivamogga" },
      endPoint: { lat: 14.2294, lng: 74.8146, name: "Jog Falls" },
    },
    travelDetails: {
      distance: "105 km from Shivamogga",
      travelTime: "2 hours by car",
      bestTimeToVisit: "June to September (Monsoon) for maximum water flow",
      difficulty: "moderate",
      groupSize: { min: 2, max: 15 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Professional guide",
        "Entry fees to viewpoints",
        "Bottled water"
      ],
      importantNotes: [
        "Wear comfortable trekking shoes",
        "Carry raincoat during monsoon season",
        "Photography equipment should be protected from spray",
        "Swimming at the base is prohibited",
        "Best light for photography: early morning"
      ]
    }
  },
  {
    id: 2,
    title: "Agumbe Rainforest",
    category: "Rainforest",
    duration: "2 Days / 1 Night",
    description: "Cherrapunji of South, Sunset Point, Biodiversity",
    badge: { type: "hot", text: "Hot Deal", icon: Flame },
    features: ["Photography", "Nature Walks", "Viewpoints", "Wildlife"],
    oldPrice: "INR 4,999",
    newPrice: "INR 3,999",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Fb98a7f86f9034c319ada9e0243252c9c?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Fb98a7f86f9034c319ada9e0243252c9c?format=webp&width=800&height=1200",
      "https://images.pexels.com/photos/27023315/pexels-photo-27023315.jpeg",
      "https://images.pexels.com/photos/14734484/pexels-photo-14734484.jpeg",
      "https://images.pexels.com/photos/33889675/pexels-photo-33889675.jpeg",
    ],
    fullDescription: "Agumbe, often called the 'Cherrapunji of South India', is a small village in the Shimoga district renowned for receiving one of the highest rainfalls in India. Nestled in the Western Ghats, it offers breathtaking sunset views, dense rainforests teeming with biodiversity, and the famous Agumbe Rainforest Research Station. The region is a paradise for nature enthusiasts, offering opportunities to spot King Cobras, diverse bird species, and unique flora found nowhere else in the world.",
    itinerary: [
      {
        day: 1,
        title: "Arrival and Sunset Point",
        description: "Check-in and explore the iconic sunset viewpoint",
        activities: [
          "Depart from Shivamogga at 9:00 AM",
          "Arrive at Agumbe and check-in to accommodation (12:00 PM)",
          "Lunch at homestay",
          "Visit Agumbe Sunset Point",
          "Nature walk through rainforest trails",
          "Dinner and overnight stay"
        ],
        timing: "9:00 AM - 9:00 PM",
        meals: ["Lunch", "Dinner"]
      },
      {
        day: 2,
        title: "Rainforest Exploration",
        description: "Discover waterfalls and biodiversity",
        activities: [
          "Early morning bird watching",
          "Breakfast at homestay",
          "Trek to Barkana Falls (India's 10th highest waterfall)",
          "Visit Agumbe Rainforest Research Station",
          "Lunch",
          "Return to Shivamogga by 6:00 PM"
        ],
        timing: "6:00 AM - 6:00 PM",
        meals: ["Breakfast"]
      }
    ],
    routeMap: {
      type: "static",
      staticImageUrl: "https://images.pexels.com/photos/2724241/pexels-photo-2724241.jpeg",
      startPoint: { lat: 13.9299, lng: 75.5681, name: "Shivamogga" },
      endPoint: { lat: 13.5167, lng: 75.0917, name: "Agumbe" },
    },
    travelDetails: {
      distance: "95 km from Shivamogga",
      travelTime: "2.5 hours by car",
      bestTimeToVisit: "October to February for pleasant weather, June to September for monsoon experience",
      difficulty: "easy",
      groupSize: { min: 2, max: 12 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Accommodation (1 night in homestay)",
        "Breakfast on Day 2",
        "All dinners and lunches",
        "Professional naturalist guide",
        "Entry fees to research station",
        "Bottled water"
      ],
      importantNotes: [
        "Carry rain gear throughout the year",
        "Wear leech-proof socks during monsoon",
        "Respect wildlife - maintain safe distance",
        "Photography restrictions may apply at research station",
        "Mobile network may be limited in some areas"
      ]
    }
  },
  {
    id: 3,
    title: "Kundadri Hills",
    category: "Trek",
    duration: "Day Trip",
    description: "Ancient Jain temple, 360° mountain views, sunset",
    badge: { type: "trending", text: "Best Selling", icon: Sparkles },
    features: ["Photography", "Viewpoints", "Nature Walks", "Trekking"],
    oldPrice: "INR 2,299",
    newPrice: "INR 1,799",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Facd47e66520a4ce18ce4f7db7111704b?format=webp&width=800&height=1200",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Facd47e66520a4ce18ce4f7db7111704b?format=webp&width=800&height=1200",
      "https://images.pexels.com/photos/9068562/pexels-photo-9068562.jpeg",
      "https://images.pexels.com/photos/12217361/pexels-photo-12217361.jpeg",
      "https://images.pexels.com/photos/27023315/pexels-photo-27023315.jpeg",
    ],
    fullDescription: "Kundadri Hills, rising to an elevation of 3,200 feet in the Western Ghats, is home to an ancient Jain temple perched atop the peak. The trek to the summit is moderate and rewards hikers with spectacular 360-degree panoramic views of the surrounding mountain ranges, valleys, and forests. The hilltop temple, believed to be over 500 years old, adds a spiritual dimension to the adventure. Sunset views from Kundadri are legendary, with the sun painting the Western Ghats in shades of gold and crimson.",
    itinerary: [
      {
        day: 1,
        title: "Kundadri Peak Trek",
        description: "Trek to ancient Jain temple and witness breathtaking sunset",
        activities: [
          "Depart from Shivamogga at 2:00 PM",
          "Arrive at Kundadri Hills base (4:00 PM)",
          "Begin trek to the peak (moderate difficulty)",
          "Visit ancient Jain temple at summit",
          "360° panoramic viewpoint photography",
          "Watch mesmerizing sunset over Western Ghats",
          "Descend with torchlight assistance",
          "Return to Shivamogga by 9:00 PM"
        ],
        timing: "2:00 PM - 9:00 PM",
        meals: []
      }
    ],
    routeMap: {
      type: "static",
      staticImageUrl: "https://images.pexels.com/photos/2724241/pexels-photo-2724241.jpeg",
      startPoint: { lat: 13.9299, lng: 75.5681, name: "Shivamogga" },
      endPoint: { lat: 13.6167, lng: 75.2167, name: "Kundadri Hills" },
    },
    travelDetails: {
      distance: "70 km from Shivamogga",
      travelTime: "2 hours by car",
      bestTimeToVisit: "October to March for clear skies and best sunset views",
      difficulty: "moderate",
      groupSize: { min: 2, max: 15 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Professional trekking guide",
        "Torchlight for descent",
        "First aid kit",
        "Bottled water"
      ],
      importantNotes: [
        "Wear comfortable trekking shoes with good grip",
        "Carry a light jacket - it gets cool at the summit",
        "Bring camera with good low-light capability for sunset",
        "Temple visit requires modest clothing",
        "Trek duration: 45 minutes up, 30 minutes down",
        "Starting in afternoon ensures perfect sunset timing"
      ]
    }
  },
  {
    id: 4,
    title: "Kodachadri Trek",
    category: "Trek",
    duration: "2 Days / 1 Night",
    description: "Challenging trek, camping, sunset & sunrise views",
    badge: { type: "discount", text: "20% Off", icon: null },
    features: ["Trekking", "Photography", "Viewpoints", "Nature Walks"],
    oldPrice: "INR 3,999",
    newPrice: "INR 3,199",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F5b76655ca7f44d308ae5dd2200effb27?format=webp&width=800&height=1200",
    images: [],
    fullDescription: "Kodachadri Trek is a challenging adventure through dense forests and grasslands leading to one of the highest peaks in Western Ghats.",
    itinerary: [
      {
        day: 1,
        title: "Trek to Summit & Camping",
        description: "Challenging trek through dense forests and grasslands",
        activities: [
          "Depart from Shivamogga at 5:00 AM",
          "Reach Kodachadri base camp (7:00 AM)",
          "Begin challenging trek through grasslands",
          "Reach summit at 3,200+ meters elevation",
          "Watch stunning sunset views",
          "Set up camping at designated site",
          "Dinner and overnight camping under stars"
        ],
        timing: "5:00 AM - 8:00 PM",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 2,
        title: "Sunrise & Descent",
        description: "Early morning sunrise views and descent",
        activities: [
          "Early morning wake-up for sunrise (5:30 AM)",
          "Watch magnificent sunrise from summit",
          "Breakfast at campsite",
          "Descent through different forest trail",
          "Visit ancient temples en route",
          "Reach base by 2:00 PM",
          "Return to Shivamogga by 6:00 PM"
        ],
        timing: "5:30 AM - 6:00 PM",
        meals: ["Breakfast"]
      }
    ],
    routeMap: { type: "static" },
    travelDetails: {
      distance: "140 km from Shivamogga",
      travelTime: "3 hours by car",
      bestTimeToVisit: "October to March for clear weather",
      difficulty: "hard",
      groupSize: { min: 2, max: 12 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Accommodation (1 night camping)",
        "Breakfast on Day 2",
        "All dinners and lunches",
        "Professional guide",
        "Camping equipment",
        "Bottled water"
      ],
      importantNotes: [
        "Advanced trekking skills recommended",
        "Carry proper trekking shoes",
        "Weather can be unpredictable - bring rain gear",
        "Altitude: 1,343 meters"
      ]
    }
  },
  {
    id: 5,
    title: "Sakrebyle Elephant Camp",
    category: "Wildlife",
    duration: "Day Trip",
    description: "Elephant bathing, feeding & interaction experience",
    badge: { type: "trending", text: "Trending", icon: Sparkles },
    features: ["Photography", "Wildlife", "Nature Walks", "Viewpoints"],
    oldPrice: "INR 1,999",
    newPrice: "INR 1,599",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Fbe2d5b88d16047febb357236b3b58c87?format=webp&width=800&height=1200",
    images: [],
    fullDescription: "Experience close encounters with elephants in their natural habitat at Sakrebyle Elephant Camp.",
    itinerary: [
      {
        day: 1,
        title: "Elephant Camp Adventure",
        description: "Interact with elephants in their natural environment",
        activities: [
          "Depart from Shivamogga at 8:00 AM",
          "Arrive at Sakrebyle Elephant Camp (10:00 AM)",
          "Orientation and safety briefing",
          "Watch elephant bathing in natural water body",
          "Learn about elephant behavior from trained handlers",
          "Hands-on feeding experience with elephants",
          "Photography session with elephants",
          "Return to Shivamogga by 2:00 PM"
        ],
        timing: "8:00 AM - 2:00 PM",
        meals: []
      }
    ],
    routeMap: { type: "static" },
    travelDetails: {
      distance: "85 km from Shivamogga",
      travelTime: "2 hours by car",
      bestTimeToVisit: "October to May for pleasant weather",
      difficulty: "easy",
      groupSize: { min: 2, max: 10 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Elephant interaction experience",
        "Professional handler",
        "Bottled water"
      ],
      importantNotes: [
        "Children must be accompanied by adults",
        "Wear comfortable clothes",
        "Remove loose items before interaction",
        "Follow all safety instructions"
      ]
    }
  },
  {
    id: 6,
    title: "Hebbe Falls",
    category: "Waterfalls",
    duration: "Day Trip",
    description: "Majestic waterfall, scenic trek, coffee plantations",
    badge: { type: "hot", text: "Popular", icon: Flame },
    features: ["Photography", "Trekking", "Nature Walks", "Viewpoints"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://cdn.builder.io/o/assets%2F350c85029eed47748b7045d4f507277c%2F42cd380561ea4abdb65553a4ad5f2fce?alt=media&token=5fd45f32-4a55-4ae8-93d3-6cba55ebe80b&apiKey=350c85029eed47748b7045d4f507277c",
    images: [],
    fullDescription: "Hebbe Falls is a beautiful twin waterfall surrounded by coffee estates offering trekking opportunities.",
    itinerary: [
      {
        day: 1,
        title: "Hebbe Falls Trek",
        description: "Experience twin waterfalls amid coffee plantations",
        activities: [
          "Depart from Shivamogga at 6:00 AM",
          "Arrive at trek starting point (8:30 AM)",
          "Trek through coffee plantations and forests",
          "Reach Upper Hebbe Falls viewpoint",
          "Trek to Lower Hebbe Falls (main cascade)",
          "Photography at multiple viewpoints",
          "Nature walk through plantation trails",
          "Return to Shivamogga by 6:00 PM"
        ],
        timing: "6:00 AM - 6:00 PM",
        meals: []
      }
    ],
    routeMap: { type: "static" },
    travelDetails: {
      distance: "75 km from Shivamogga",
      travelTime: "2.5 hours by car",
      bestTimeToVisit: "June to September for maximum water flow",
      difficulty: "moderate",
      groupSize: { min: 2, max: 12 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Professional guide",
        "Entry fees",
        "Bottled water"
      ],
      importantNotes: [
        "Wear comfortable trekking shoes",
        "Carry rain gear during monsoon",
        "Trek is moderately strenuous",
        "Surrounded by coffee plantations"
      ]
    }
  },
  {
    id: 7,
    title: "Kavaledurga Fort",
    category: "Trek",
    duration: "Day Trip",
    description: "Historic fort ruins, panoramic views, moderate trek",
    badge: { type: "discount", text: "15% Off", icon: null },
    features: ["Trekking", "Photography", "Heritage", "Viewpoints"],
    oldPrice: "INR 1,899",
    newPrice: "INR 1,599",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Fd7280ea5bc214085b53ce8f5c614fa1f?format=webp&width=800&height=1200",
    images: [],
    fullDescription: "Trek through history at the ancient Kavaledurga Fort with centuries-old ruins and panoramic views.",
    itinerary: [
      {
        day: 1,
        title: "Kavaledurga Fort Exploration",
        description: "Trek to ancient fort ruins and explore historical heritage",
        activities: [
          "Depart from Shivamogga at 7:00 AM",
          "Arrive at fort base (9:00 AM)",
          "Begin moderate trek to fort summit",
          "Explore ancient fort structures and ruins",
          "Visit old temple within fort premises",
          "Photography at panoramic viewpoints",
          "Explore surrounding areas and valleys",
          "Return to Shivamogga by 6:00 PM"
        ],
        timing: "7:00 AM - 6:00 PM",
        meals: []
      }
    ],
    routeMap: { type: "static" },
    travelDetails: {
      distance: "60 km from Shivamogga",
      travelTime: "2 hours by car",
      bestTimeToVisit: "October to March for clear weather",
      difficulty: "moderate",
      groupSize: { min: 2, max: 12 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Professional guide",
        "Entry fees",
        "Bottled water"
      ],
      importantNotes: [
        "Fort ruins are centuries old",
        "Wear comfortable trekking shoes",
        "Moderate climbing required",
        "Panoramic views from fort top"
      ]
    }
  },
  {
    id: 8,
    title: "Shri Bheemeshwara Temple & Waterfalls",
    category: "Waterfalls",
    duration: "Day Trip",
    description: "Sacred temple, twin waterfalls, spiritual atmosphere",
    badge: { type: "hot", text: "Family Favorite", icon: Flame },
    features: ["Photography", "Nature Walks", "Heritage", "Viewpoints"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F1a8a0978cbd846908aa3256300435a4e?format=webp&width=800&height=1200",
    images: [],
    fullDescription: "Visit the sacred Shri Bheemeshwara Temple and enjoy the twin waterfalls in spiritual surroundings.",
    itinerary: [
      {
        day: 1,
        title: "Temple & Waterfall Visit",
        description: "Experience spiritual atmosphere and natural beauty",
        activities: [
          "Depart from Shivamogga at 9:00 AM",
          "Arrive at Shri Bheemeshwara Temple (10:30 AM)",
          "Darshan at the sacred temple",
          "Visit nearby twin waterfall cascades",
          "Photography at designated points",
          "Nature walk along river banks",
          "Return to Shivamogga by 4:00 PM"
        ],
        timing: "9:00 AM - 4:00 PM",
        meals: []
      }
    ],
    routeMap: { type: "static" },
    travelDetails: {
      distance: "45 km from Shivamogga",
      travelTime: "1.5 hours by car",
      bestTimeToVisit: "June to September for water flow, October to March for pleasant weather",
      difficulty: "easy",
      groupSize: { min: 2, max: 15 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Professional guide",
        "Entry fees",
        "Bottled water"
      ],
      importantNotes: [
        "Temple requires modest clothing",
        "Twin waterfalls are seasonal",
        "Family-friendly location",
        "Photography restricted in sanctum"
      ]
    }
  },
  {
    id: 9,
    title: "Bhadra Wildlife Safari",
    category: "Wildlife",
    duration: "Day Trip",
    description: "Tiger sightings, bird watching, forest exploration",
    badge: { type: "trending", text: "Adventure Pick", icon: Sparkles },
    features: ["Wildlife", "Photography", "Nature Walks", "Viewpoints"],
    oldPrice: "INR 3,499",
    newPrice: "INR 2,899",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Ff6667fa78b5c454b9682d1ae68254be0?format=webp&width=800&height=1200",
    images: [],
    fullDescription: "Experience thrilling wildlife safari in the Bhadra Tiger Reserve, one of India's best wildlife destinations.",
    itinerary: [
      {
        day: 1,
        title: "Bhadra Tiger Reserve Safari",
        description: "Explore wildlife in natural habitat with expert guides",
        activities: [
          "Depart from Shivamogga at 6:00 AM",
          "Early morning safari (best for wildlife sightings)",
          "Explore reserve in open safari jeep",
          "Tiger sighting opportunities",
          "Bird watching and nature photography",
          "Return to base for rest (10:00 AM)",
          "Afternoon safari (2:00 PM - 5:00 PM)",
          "Evening wildlife exploration",
          "Return to Shivamogga by 8:00 PM"
        ],
        timing: "6:00 AM - 8:00 PM",
        meals: []
      }
    ],
    routeMap: { type: "static" },
    travelDetails: {
      distance: "120 km from Shivamogga",
      travelTime: "2.5 hours by car",
      bestTimeToVisit: "October to May for wildlife sightings",
      difficulty: "easy",
      groupSize: { min: 2, max: 6 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Safari guide",
        "Safari jeep",
        "Entry fees to reserve",
        "Bottled water"
      ],
      importantNotes: [
        "Early morning and evening safaris recommended",
        "Tiger sightings not guaranteed",
        "Wear neutral colored clothes",
        "No flash photography in wildlife areas"
      ]
    }
  },
  {
    id: 10,
    title: "Sri Devagange Temple & Pond",
    category: "Heritage",
    duration: "Day Trip",
    description: "Ancient temple complex, sacred pond, cultural heritage",
    badge: { type: "discount", text: "10% Off", icon: null },
    features: ["Photography", "Heritage", "Nature Walks", "Viewpoints"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Fcfbeff8684b7438ebbffc139ee1cbe06?format=webp&width=800&height=1200",
    images: [],
    fullDescription: "Explore the ancient temple complex and sacred pond with rich cultural heritage.",
    itinerary: [
      {
        day: 1,
        title: "Temple & Sacred Pond Exploration",
        description: "Discover ancient architecture and spiritual significance",
        activities: [
          "Depart from Shivamogga at 10:00 AM",
          "Arrive at Sri Devagange Temple (11:00 AM)",
          "Explore ancient temple architecture",
          "Visit the sacred pond and surrounding areas",
          "Learn about temple history from guides",
          "Photography at heritage sites",
          "Explore nearby ancient structures",
          "Return to Shivamogga by 4:00 PM"
        ],
        timing: "10:00 AM - 4:00 PM",
        meals: []
      }
    ],
    routeMap: { type: "static" },
    travelDetails: {
      distance: "35 km from Shivamogga",
      travelTime: "1 hour by car",
      bestTimeToVisit: "October to March for pleasant weather",
      difficulty: "easy",
      groupSize: { min: 2, max: 20 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Professional guide",
        "Entry fees",
        "Bottled water"
      ],
      importantNotes: [
        "Ancient temple with rich cultural heritage",
        "Sacred pond is significant religious site",
        "Modest clothing required in temple",
        "Photography allowed in common areas"
      ]
    }
  },
  {
    id: 12,
    title: "Sringeri Temple",
    category: "Heritage",
    duration: "Day Trip",
    description: "Ancient temple, riverside location, spiritual retreat",
    badge: { type: "trending", text: "Peaceful", icon: Sparkles },
    features: ["Photography", "Heritage", "Nature Walks", "Viewpoints"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://images.pexels.com/photos/14563423/pexels-photo-14563423.jpeg",
    images: [],
    fullDescription: "Visit the ancient Sringeri temple nestled by the riverside offering spiritual retreat.",
    itinerary: [
      {
        day: 1,
        title: "Sringeri Temple Pilgrimage",
        description: "Peaceful spiritual experience at riverside temple",
        activities: [
          "Depart from Shivamogga at 8:00 AM",
          "Arrive at Sringeri Temple (9:30 AM)",
          "Darshan at the ancient temple",
          "Explore temple architecture and religious sculptures",
          "Walk along the riverside",
          "Visit nearby botanical gardens",
          "Photography at scenic spots",
          "Return to Shivamogga by 2:00 PM"
        ],
        timing: "8:00 AM - 2:00 PM",
        meals: []
      }
    ],
    routeMap: { type: "static" },
    travelDetails: {
      distance: "50 km from Shivamogga",
      travelTime: "1.5 hours by car",
      bestTimeToVisit: "October to March for pleasant weather",
      difficulty: "easy",
      groupSize: { min: 2, max: 15 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Professional guide",
        "Entry fees",
        "Bottled water"
      ],
      importantNotes: [
        "Ancient spiritual temple",
        "Riverside location provides peaceful atmosphere",
        "Modest clothing required",
        "Best visited in early morning for spiritual experience"
      ]
    }
  },
  {
    id: 15,
    title: "Tunga River",
    category: "Nature",
    duration: "Day Trip",
    description: "River adventure, scenic picnic spots, water activities",
    badge: { type: "trending", text: "Refreshing", icon: Sparkles },
    features: ["Photography", "Nature Walks", "Wildlife", "Viewpoints"],
    oldPrice: "INR 1,699",
    newPrice: "INR 1,299",
    image: "https://images.pexels.com/photos/2724241/pexels-photo-2724241.jpeg",
    images: [],
    fullDescription: "Enjoy river adventures and scenic picnic spots along the beautiful Tunga River.",
    itinerary: [
      {
        day: 1,
        title: "Tunga River Adventure",
        description: "Riverside activities and scenic exploration",
        activities: [
          "Depart from Shivamogga at 9:00 AM",
          "Arrive at Tunga River scenic spot (10:00 AM)",
          "River orientation and safety briefing",
          "Wading and water activities in safe zones",
          "Photography along scenic riverbanks",
          "Nature walk along river trails",
          "Bird watching opportunities",
          "Return to Shivamogga by 3:00 PM"
        ],
        timing: "9:00 AM - 3:00 PM",
        meals: []
      }
    ],
    routeMap: { type: "static" },
    travelDetails: {
      distance: "30 km from Shivamogga",
      travelTime: "1 hour by car",
      bestTimeToVisit: "October to May for water activities",
      difficulty: "easy",
      groupSize: { min: 2, max: 20 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Professional guide",
        "Picnic spot access",
        "Bottled water"
      ],
      importantNotes: [
        "Water activity safety gear recommended",
        "River conditions vary by season",
        "Scenic picnic spots available",
        "Best for family outings"
      ]
    }
  },
  {
    id: 17,
    title: "Bababudangiri",
    category: "Trek",
    duration: "2 Days / 1 Night",
    description: "High altitude trek, sacred caves, trekking challenge",
    badge: { type: "hot", text: "Challenge", icon: Flame },
    features: ["Trekking", "Photography", "Heritage", "Viewpoints"],
    oldPrice: "INR 4,299",
    newPrice: "INR 3,599",
    image: "https://images.pexels.com/photos/10121815/pexels-photo-10121815.jpeg",
    images: [],
    fullDescription: "Challenge yourself with this high altitude trek featuring sacred caves and breathtaking mountain views.",
    itinerary: [
      {
        day: 1,
        title: "Trek to Summit & Sacred Caves",
        description: "High altitude trekking with spiritual exploration",
        activities: [
          "Depart from Shivamogga at 4:00 AM",
          "Reach Bababudangiri base by 7:30 AM",
          "Begin high altitude trek (challenging)",
          "Stop at beautiful viewpoints",
          "Explore ancient sacred caves",
          "Photography at alpine meadows",
          "Reach summit (1,930m) by 3:00 PM",
          "Set up accommodation at base camp",
          "Dinner and overnight stay"
        ],
        timing: "4:00 AM - 8:00 PM",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 2,
        title: "Sunrise & Descent",
        description: "Mountain sunrise and return journey",
        activities: [
          "Early morning wake-up (5:00 AM)",
          "Watch magnificent sunrise over Western Ghats",
          "Breakfast at camp",
          "Explore more caves and spiritual sites",
          "Photography session on descent",
          "Complete descent by 3:00 PM",
          "Return to Shivamogga by 6:30 PM"
        ],
        timing: "5:00 AM - 6:30 PM",
        meals: ["Breakfast"]
      }
    ],
    routeMap: { type: "static" },
    travelDetails: {
      distance: "150 km from Shivamogga",
      travelTime: "3.5 hours by car",
      bestTimeToVisit: "October to March for clear weather",
      difficulty: "hard",
      groupSize: { min: 2, max: 10 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Accommodation (1 night)",
        "Breakfast on Day 2",
        "All dinners and lunches",
        "Professional guide",
        "Cave exploration",
        "Bottled water"
      ],
      importantNotes: [
        "High altitude trek - excellent fitness required",
        "Sacred caves with religious significance",
        "Altitude: 1,930 meters",
        "Weather can change rapidly",
        "Carry proper trekking shoes and rain gear"
      ]
    }
  },
  {
    id: 18,
    title: "Jogigundi Falls",
    category: "Waterfall",
    duration: "Day Trip",
    description: "Hidden waterfall, jungle trail, family-friendly",
    badge: { type: "trending", text: "Hidden Gem", icon: Sparkles },
    features: ["Photography", "Nature Walks", "Trekking", "Viewpoints"],
    oldPrice: "INR 2,499",
    newPrice: "INR 1,899",
    image: "https://images.pexels.com/photos/2214386/pexels-photo-2214386.jpeg",
    images: [],
    fullDescription: "Discover the hidden gem of Jogigundi Falls tucked away in jungle trails.",
    itinerary: [
      {
        day: 1,
        title: "Jogigundi Falls Exploration",
        description: "Trek through jungle to discover hidden waterfall",
        activities: [
          "Depart from Shivamogga at 8:00 AM",
          "Arrive at trek starting point (9:30 AM)",
          "Easy to moderate jungle trek begins",
          "Explore lush forest and wildlife habitat",
          "Reach Jogigundi Falls cascade (11:00 AM)",
          "Enjoy waterfall pool and scenic views",
          "Photography at multiple viewpoints",
          "Nature walk and bird watching",
          "Return to Shivamogga by 3:00 PM"
        ],
        timing: "8:00 AM - 3:00 PM",
        meals: []
      }
    ],
    routeMap: { type: "static" },
    travelDetails: {
      distance: "55 km from Shivamogga",
      travelTime: "1.5 hours by car",
      bestTimeToVisit: "June to September for maximum water flow",
      difficulty: "easy",
      groupSize: { min: 2, max: 15 },
      inclusions: [
        "Transportation",
        "Private Vehicle",
        "Professional guide",
        "Jungle trail access",
        "Bottled water"
      ],
      importantNotes: [
        "Hidden waterfall - off beaten path",
        "Family-friendly location",
        "Jungle trail requires comfortable shoes",
        "Water flow depends on rainfall"
      ]
    }
  },
];
