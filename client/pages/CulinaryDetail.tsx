import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { Utensils, Clock, Coffee, Fish, CalendarDays } from "lucide-react";

interface SignatureDish {
  name: string;
  description: string;
  image: string;
  culturalSignificance: string;
}

interface TourStop {
  meal: string;
  title: string;
  description: string;
  stops: string[];
}

interface Restaurant {
  name: string;
  location: string;
  specialty: string;
  priceRange: string;
  description: string;
}

interface CulinaryRegionData {
  id: number;
  title: string;
  region: string;
  subtitle: string;
  description: string;
  heroImage: string;
  history: {
    title: string;
    content: string[];
  };
  signatureDishes: SignatureDish[];
  tourItinerary: TourStop[];
  restaurants: Restaurant[];
  seasonalHighlights: string[];
  dietaryInfo: string;
  iconicDishes: string;
}

const CULINARY_REGIONS_DATA: CulinaryRegionData[] = [
  {
    id: 1,
    title: "Malnad Cuisine",
    region: "Malnad",
    subtitle: "Coffee Plantations Meet Traditional Spice-Rich Cuisine",
    description: "Journey through the lush Western Ghats where coffee estates and spice plantations have shaped a unique culinary tradition. Malnad cuisine is a celebration of biodiversity, featuring indigenous ingredients like bamboo shoots, colocasia, and jackfruit, combined with aromatic spices and traditional cooking methods passed down through generations.",
    heroImage: "https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?w=1920&h=1080&fit=crop",
    iconicDishes: "Akki Rotti • Bamboo Shoot Curry • Kadabu • Jackfruit Delicacies",
    history: {
      title: "The Heritage of Malnad Flavors",
      content: [
        "Malnad, meaning 'land of hills,' encompasses the Western Ghats region of Karnataka, blessed with abundant rainfall and rich biodiversity. The cuisine evolved from the forest-dwelling tribal communities and later influenced by the coffee plantation culture introduced in the 19th century.",
        "The region's geographical isolation preserved unique cooking traditions. Ingredients like bamboo shoots (kalale), colocasia (kesuvina gedde), and wild mushrooms became staples, creating a cuisine distinct from other Karnataka regions.",
        "Coffee estates brought Kodava and Coorgi influences, adding pork and unique spice combinations. The intermingling of tribal wisdom and plantation culture created the rich tapestry of Malnad gastronomy we experience today."
      ]
    },
    signatureDishes: [
      {
        name: "Akki Rotti",
        description: "Fresh rice flour flatbread mixed with finely chopped onions, green chilies, curry leaves, and coconut. Cooked on a hot griddle until crispy, served with chutney or spicy curries.",
        image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F7891a88db8f142318b8e231d7a14e456?format=webp&width=800&height=600",
        culturalSignificance: "A daily breakfast staple in every Malnad household, representing the region's rice-growing heritage. The art of spreading the dough evenly is passed from mothers to daughters."
      },
      {
        name: "Bamboo Shoot Curry (Kalale Gassi)",
        description: "Tender bamboo shoots slow-cooked with coconut, tamarind, and aromatic spices. A monsoon delicacy with an earthy, slightly tangy flavor profile unique to the region.",
        image: "https://images.pexels.com/photos/27039845/pexels-photo-27039845.jpeg?w=800&h=600&fit=crop",
        culturalSignificance: "Harvested during monsoons from the wild, this dish connects Malnad people to their forest-foraging heritage. Each family guards their secret spice blend."
      },
      {
        name: "Kadabu",
        description: "Steamed rice dumplings with sweet or savory fillings - jaggery and coconut for sweet version, spiced lentils for savory. Wrapped in turmeric leaves or jackfruit leaves for aromatic steaming.",
        image: "https://images.pexels.com/photos/6692047/pexels-photo-6692047.jpeg?w=800&h=600&fit=crop",
        culturalSignificance: "Prepared during festivals and special occasions. The leaf-wrapping technique preserves moisture and imparts subtle flavors, showcasing Malnad's sustainable cooking practices."
      },
      {
        name: "Jackfruit Dishes (Halasina Hannina Gojju)",
        description: "Raw jackfruit cooked into tangy, spicy curries or crispy fritters. Also made into sweet preparations during ripening season.",
        image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Ffee98587ee61426caa9f6651f6d4d966?format=webp&width=800&height=600",
        culturalSignificance: "Jackfruit trees are revered in Malnad. Every part is used - unripe for savory, ripe for sweets, seeds roasted as snacks. Symbolizes zero-waste traditional wisdom."
      },
      {
        name: "Coorg-Style Pork Curry",
        description: "Tender pork cooked with Coorg's signature spice blend including kachampuli (sour fruit), black pepper, and coriander. Dark, rich, and intensely flavorful.",
        image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Fba6b4fc0a01649708bc45708b8b9e22c?format=webp&width=800&height=600",
        culturalSignificance: "Brought by Kodava communities working in coffee estates. The use of kachampuli (Garcinia) reflects the integration of forest ingredients into plantation cuisine."
      },
      {
        name: "Nuchina Unde",
        description: "Energy balls made from roasted groundnuts, jaggery, and dry coconut. Crunchy, sweet, and nutritious bite-sized treats.",
        image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F2daf88795024469d85226d6ec0b0177c?format=webp&width=800&height=600",
        culturalSignificance: "Traditional travel food for long journeys through forest paths. High-energy snack that reflects Malnad's practical approach to sustenance during harvest seasons."
      }
    ],
    tourItinerary: [
      {
        meal: "Breakfast",
        title: "Traditional Malnad Morning",
        description: "Start your day with authentic breakfast in a traditional Malnad home or heritage homestay",
        stops: [
          "Akki Rotti with coconut chutney and enne badanekayi",
          "Filter coffee from local plantation beans",
          "Kadabu (steamed rice dumplings) - sweet and savory varieties",
          "Fresh honey and homemade jaggery"
        ]
      },
      {
        meal: "Mid-Morning",
        title: "Spice Plantation & Coffee Estate Tour",
        description: "Walk through working plantations to understand ingredient origins",
        stops: [
          "Coffee plantation walk and processing demonstration",
          "Spice garden tour (cardamom, pepper, vanilla)",
          "Taste freshly picked fruits and learn about seasonal ingredients",
          "Traditional toddy tapping demonstration (non-alcoholic introduction)"
        ]
      },
      {
        meal: "Lunch",
        title: "Grand Malnad Feast",
        description: "Traditional lunch served on banana leaf in authentic style",
        stops: [
          "Bamboo shoot curry (kalale gassi)",
          "Jackfruit gojju and colocasia curry",
          "Steamed rice with ghee",
          "Pork curry or chicken sukka",
          "Traditional payasa (kheer) for dessert"
        ]
      },
      {
        meal: "Evening",
        title: "Sunset Snacks & Local Markets",
        description: "Explore local snack culture and market ingredients",
        stops: [
          "Visit local market to see seasonal produce",
          "Taste bajji, bonda, and local fritters",
          "Learn about wild mushrooms and forest produce",
          "Evening tea with homemade murukku and mixture"
        ]
      },
      {
        meal: "Dinner",
        title: "Cooking Experience",
        description: "Hands-on cooking session followed by dinner",
        stops: [
          "Learn to prepare akki rotti from scratch",
          "Traditional spice grinding techniques",
          "Cook 2-3 signature dishes with local family",
          "Dinner featuring your prepared dishes",
          "Bonfire with local stories and coffee"
        ]
      }
    ],
    restaurants: [
      {
        name: "Malnad Heritage Homestays",
        location: "Chikmagalur, Sakleshpur, Koppa",
        specialty: "Authentic home-cooked Malnad meals",
        priceRange: "₹500-800 per meal",
        description: "Experience genuine Malnad hospitality with meals prepared by families using recipes passed down generations. Advance booking required."
      },
      {
        name: "Hoysala Village Restaurant",
        location: "Hassan",
        specialty: "Traditional Malnad thali",
        priceRange: "₹300-500",
        description: "Popular spot serving comprehensive Malnad meals with seasonal specialties. Known for their bamboo shoot preparations during monsoon."
      },
      {
        name: "Coffee Day Square",
        location: "Chikmagalur",
        specialty: "Malnad breakfast items",
        priceRange: "₹150-300",
        description: "Great for breakfast - serves various akki rotti, dosa, and kadabu varieties along with estate-fresh coffee."
      },
      {
        name: "Surabhi's Plantation Kitchen",
        location: "Sakleshpur",
        specialty: "Estate-to-table dining",
        priceRange: "₹600-1000",
        description: "Fine dining experience in coffee estate setting. Ingredients sourced from their own plantation. Perfect for special occasions."
      }
    ],
    seasonalHighlights: [
      "Monsoon (June-Sep): Best time for bamboo shoots, wild mushrooms, and colocasia dishes",
      "Winter (Oct-Feb): Jackfruit preparations, coffee harvest season celebrations",
      "Summer (Mar-May): Ripe jackfruit sweets, mango pickles, and preserves making",
      "Festival Seasons: Special kadabu varieties during Ugadi and Ganesha Chaturthi"
    ],
    dietaryInfo: "Predominantly vegetarian with rich use of coconut, rice, and forest produce. Non-vegetarian options include pork, chicken, and fish preparations influenced by Coorg culture. Pure vegetarian and vegan options widely available with advance notice."
  },
  {
    id: 2,
    title: "Karavali Cuisine",
    region: "Karavali (Coastal Karnataka)",
    subtitle: "Where Fresh Seafood Meets Coconut-Infused Traditions",
    description: "Explore the vibrant coastal cuisine of Karnataka - from Mangalore to Udupi - where Arabian Sea bounty meets centuries-old culinary traditions. Karavali cuisine is characterized by generous use of coconut, tangy tamarind, and fresh seafood, creating a flavor profile that's both comforting and bold.",
    heroImage: "https://images.pexels.com/photos/35532834/pexels-photo-35532834.jpeg?w=1920&h=1080&fit=crop",
    iconicDishes: "Neer Dosa • Kane Rava Fry • Kori Rotti • Mangalorean Fish Curry",
    history: {
      title: "Coastal Culinary Heritage",
      content: [
        "Karavali, the coastal belt of Karnataka, has been a melting pot of cultures due to its historical role as a trading port. Arab, Portuguese, and Konkani influences merged with indigenous Tulu and Havyaka traditions to create the distinctive Mangalorean cuisine.",
        "The region's cuisine is divided into several sub-styles: Mangalorean Catholic (influenced by Portuguese), Bunt (indigenous land-owning community), Konkani GSB (traders), and Udupi (temple-influenced vegetarian cuisine). Each brings unique preparations while sharing common ingredients.",
        "Fresh seafood has always been central, but the region's vegetarian temple cuisine from Udupi has gained worldwide fame. The balance between seafood-rich and purely vegetarian traditions makes Karavali cuisine uniquely diverse."
      ]
    },
    signatureDishes: [
      {
        name: "Neer Dosa",
        description: "Delicate, paper-thin rice crepes made from a watery batter, hence 'neer' (water). Soft, lacy texture that pairs perfectly with coconut chutney or spicy curries.",
        image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2Fbe044d75a6604de08033ff008197da98?format=webp&width=800&height=600",
        culturalSignificance: "Quintessential Mangalorean breakfast. The skill of spreading the thin batter evenly is an art form. Traditionally served during Konkani weddings and festivals."
      },
      {
        name: "Kane Rava Fry (Lady Fish Fry)",
        description: "Fresh lady fish marinated in spicy coastal masala, coated with semolina, and shallow-fried until crispy. Served with lemon and onions.",
        image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F1915485ec93148b6834c651309a4a4c4?format=webp&width=800&height=600",
        culturalSignificance: "Kane fish is considered a delicacy in coastal Karnataka. This preparation showcases the coastal love for crispy, spice-crusted seafood that pairs with rice meals."
      },
      {
        name: "Kori Rotti",
        description: "Crispy, dry rice wafers (rotti) served with spicy chicken curry (kori gassi). The rotti soaks up the curry, creating a unique texture contrast.",
        image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F3099830b583e4e56b50012e698b1ea2c?format=webp&width=800&height=600",
        culturalSignificance: "A Bunt community specialty, now iconic to Mangalore. The art of making paper-thin rotti requires skill. Often served during special occasions and celebrations."
      },
      {
        name: "Mangalorean Fish Curry",
        description: "Tangy, coconut-based curry with tamarind, kokum, and a special roasted spice blend. Works beautifully with pomfret, mackerel, or kingfish.",
        image: "https://images.pexels.com/photos/35532834/pexels-photo-35532834.jpeg?w=800&h=600&fit=crop",
        culturalSignificance: "The soul of Mangalorean cuisine. Each household has its unique spice ratio. The use of kokum instead of tamarind in some versions reflects cross-coastal influences."
      },
      {
        name: "Goli Baje",
        description: "Fluffy, golden-fried fritters made from maida, yogurt, and subtle spices. Crispy outside, soft and airy inside.",
        image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F83386ed2737b436ca7e7213ddfa42027?format=webp&width=800&height=600",
        culturalSignificance: "The ultimate Mangalorean evening snack, served with coconut chutney. Tea stalls across coastal Karnataka serve these fresh every evening, creating a social gathering tradition."
      },
      {
        name: "Bangude (Mackerel) Fry",
        description: "Fresh mackerel marinated with chili, tamarind, and coastal spices, then shallow-fried. A monsoon and winter favorite.",
        image: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F1230250fcca84224812184dd79706057?format=webp&width=800&height=600",
        culturalSignificance: "Mackerel fishing season is celebrated along the coast. This simple preparation honors the fish's natural flavor. Paired with steamed rice and sol kadhi."
      }
    ],
    tourItinerary: [
      {
        meal: "Breakfast",
        title: "Classic Coastal Morning",
        description: "Traditional breakfast at a local Mangalorean home or heritage restaurant",
        stops: [
          "Neer dosa with coconut chutney varieties",
          "Buns (soft bread) with coconut milk curry",
          "Sweet appam or banana buns",
          "Filter coffee South Indian style"
        ]
      },
      {
        meal: "Mid-Morning",
        title: "Fish Market & Spice Shopping",
        description: "Experience the vibrant morning fish market and spice bazaars",
        stops: [
          "Visit fishing harbor to see fresh catch",
          "Learn to identify local fish varieties - kane, bangude, tarle",
          "Spice market tour - seeing coastal spice blends",
          "Fresh toddy demonstration (traditional palm beverage)"
        ]
      },
      {
        meal: "Lunch",
        title: "Seafood Extravaganza",
        description: "Elaborate Mangalorean meal featuring the day's fresh catch",
        stops: [
          "Mangalorean fish curry with rice",
          "Kane rava fry or bangude fry",
          "Prawn ghee roast or squid sukka",
          "Veg sides - dalitoy, pumpkin curry",
          "Sol kadhi (kokum drink) and pickle varieties",
          "Payasa or pineapple kesari for dessert"
        ]
      },
      {
        meal: "Evening",
        title: "Beach Snacks & Temple Food",
        description: "Contrast between beach snacks and Udupi temple cuisine",
        stops: [
          "Goli baje and coconut chutney at beach shack",
          "Visit Udupi Krishna temple area",
          "Sample Udupi snacks - masala dosa, set dosa",
          "Fresh sugarcane juice or coconut water"
        ]
      },
      {
        meal: "Dinner",
        title: "Coastal Cooking Class",
        description: "Interactive cooking session with Mangalorean family",
        stops: [
          "Learn to grind fresh coconut for curry base",
          "Prepare kori rotti or fish curry from scratch",
          "Master the art of making neer dosa",
          "Dinner featuring your cooked dishes",
          "Traditional Konkani desserts and coastal stories"
        ]
      }
    ],
    restaurants: [
      {
        name: "Machali",
        location: "Mangalore",
        specialty: "Authentic Mangalorean seafood",
        priceRange: "₹600-1200",
        description: "Premium seafood restaurant known for traditional coastal preparations. Try their kori rotti and crab ghee roast. Reservations recommended."
      },
      {
        name: "Mitra Samaj",
        location: "Udupi",
        specialty: "Pure vegetarian Udupi cuisine",
        priceRange: "₹150-300",
        description: "Legendary eatery serving authentic Udupi meals since decades. Famous for masala dosa and special thali. Always crowded, worth the wait."
      },
      {
        name: "Giri Manja's",
        location: "Mangalore",
        specialty: "Seafood thali and fish fry",
        priceRange: "₹400-700",
        description: "Family-run restaurant popular with locals. Known for their fish fry varieties and authentic coastal curries. Casual dining atmosphere."
      },
      {
        name: "Shetty Lunch Home",
        location: "Mangalore",
        specialty: "Traditional coastal meals",
        priceRange: "₹300-600",
        description: "Old-school restaurant serving meals on banana leaf. Excellent fish curry, prawn preparations, and authentic coastal ambiance."
      },
      {
        name: "Pai Restaurant",
        location: "Multiple locations - Mangalore, Manipal",
        specialty: "Vegetarian and seafood varieties",
        priceRange: "₹250-500",
        description: "Popular chain maintaining quality traditional food. Good for both vegetarian Udupi cuisine and Mangalorean seafood."
      }
    ],
    seasonalHighlights: [
      "Monsoon (June-Sep): Fresh mackerel season, best fish curry weather, traditional monsoon dishes like kotte kadubu",
      "Winter (Oct-Feb): Prime fishing season, crab and prawn at their best, festival preparations for Christmas",
      "Summer (Mar-May): Mango season - raw mango curries, pickles; lighter seafood preparations",
      "Festival Seasons: Christmas and New Year (Mangalorean Catholic specialties), Ganesh Chaturthi (modak and sweet preparations)"
    ],
    dietaryInfo: "While seafood is central, the region also boasts excellent vegetarian cuisine from Udupi tradition. Jain and pure vegetarian options widely available. Most dishes can be adapted to spice preferences. Coconut allergy should be communicated as it's ubiquitous in coastal cooking."
  }
];

export default function CulinaryDetail() {
  const { id } = useParams();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const region = CULINARY_REGIONS_DATA.find((r) => r.id === Number(id));

  if (!region) {
    return (
      <div className="w-full min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Culinary Region Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The culinary region you're looking for doesn't exist.
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

  const regionIcon = region.id === 1 ? Coffee : Fish;
  const RegionIcon = regionIcon;

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${region.heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end p-8 max-w-7xl mx-auto w-full pb-16">
          <div className="text-white max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-600/90 px-4 py-2 rounded-full mb-4">
              <RegionIcon className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {region.region}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
              {region.title}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-4" />
            <p className="text-xl opacity-95 leading-relaxed">{region.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200 shadow-md">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <Utensils className="w-4 h-4 text-amber-600" />
                <span className="font-medium text-gray-800">{region.iconicDishes}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-gray-600 uppercase tracking-wide">Experience</p>
                <p className="text-lg font-bold text-amber-700">Custom Culinary Tour</p>
              </div>
              <Button
                onClick={() => setBookingModalOpen(true)}
                className="bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:shadow-xl hover:shadow-amber-600/30 transition-all duration-300 font-semibold px-6"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-8 py-12 flex-1">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">Overview</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mb-8" />
          <p className="text-lg text-gray-700 leading-relaxed">
            {region.description}
          </p>
        </section>

        {/* History & Culture */}
        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">{region.history.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mb-8" />
          <div className="space-y-6">
            {region.history.content.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Signature Dishes Gallery */}
        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">Signature Dishes</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {region.signatureDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-amber-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{dish.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{dish.description}</p>
                  <div className="pt-4 border-t border-amber-100">
                    <p className="text-sm text-amber-700 font-semibold mb-2">Cultural Significance</p>
                    <p className="text-sm text-gray-600 italic">{dish.culturalSignificance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Food Tour Itinerary */}
        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">Sample Food Tour Itinerary</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mb-8" />
          <p className="text-gray-600 mb-8">A day in the culinary life of {region.region}</p>
          <div className="space-y-8">
            {region.tourItinerary.map((stop, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-amber-300 last:border-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-600" />
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border border-amber-200 shadow-md">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">
                        {stop.meal}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {stop.title}
                    </h3>
                    <p className="text-gray-700">{stop.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {stop.stops.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                        <Utensils className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seasonal Highlights */}
        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">When to Visit</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mb-8" />
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
            <div className="flex items-center gap-2 mb-6">
              <CalendarDays className="w-6 h-6 text-green-700" />
              <h3 className="text-2xl font-bold text-green-900">Seasonal Highlights</h3>
            </div>
            <ul className="space-y-4">
              {region.seasonalHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Dietary Information */}
        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">Dietary Information</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mb-8" />
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-gray-700 leading-relaxed">{region.dietaryInfo}</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-8 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 rounded-2xl border border-amber-300 shadow-xl">
          <Utensils className="w-16 h-16 text-amber-600 mx-auto mb-6" />
          <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">
            Plan Your Culinary Journey
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Every culinary tour is customized based on your preferences, dietary requirements, duration, and interests. 
            Connect with us to design your perfect food adventure through {region.region}.
          </p>
          <Button
            onClick={() => setBookingModalOpen(true)}
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:shadow-2xl hover:shadow-amber-600/40 transition-all duration-300 font-bold text-lg px-12 py-6"
          >
            Get Custom Quote
          </Button>
          <p className="text-sm text-gray-600 mt-4">
            Flexible durations • Dietary accommodations • Expert local guides
          </p>
        </section>
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        destinationName={`${region.title} Culinary Tour`}
      />
    </div>
  );
}
