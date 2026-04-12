import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  // Column 1
  {
    question: "What makes Malanad a great destination?",
    answer:
      "Shivamogga, the 'Gateway to Malnad,' offers a perfect blend of natural beauty and cultural heritage. Nestled in the lush Western Ghats, it's home to majestic waterfalls like Jog Falls, pristine forests, diverse wildlife, and rich biodiversity. The region's unique culture, warm hospitality, and delicious Malnad cuisine make it an unforgettable destination for nature lovers and adventure seekers alike.",
  },
  {
    question: "What are the must-visit places around Malanad?",
    answer:
      "Top attractions include Jog Falls (India's second-highest waterfall), Sakrebailu Elephant Camp, Kundadri Hill (offering panoramic views), Agumbe (the 'Cherrapunji of South India'), Tyavarekoppa Lion Safari, and Bhadra Wildlife Sanctuary. Each location offers unique experiences from wildlife encounters to breathtaking landscapes and spiritual retreats.",
  },
  {
    question: "When is the best time to visit Malanad?",
    answer:
      "The monsoon season (June to September) is ideal for witnessing waterfalls in their full glory, with lush green landscapes and misty hills. Winter months (October to February) offer pleasant weather perfect for trekking, wildlife spotting, and outdoor activities. Each season has its unique charm, so the best time depends on your preferred experiences.",
  },
  {
    question: "What unique experiences does Roots2 offer?",
    answer:
      "Roots2 specializes in customized nature tours, guided waterfall treks, authentic cultural experiences with local communities, traditional Malnad cuisine tastings, elephant interactions at Sakrebailu, bird watching expeditions, and photography tours. We craft personalized itineraries that connect you deeply with the region's natural beauty and cultural heritage.",
  },
  // Column 2
  {
    question: "How can I reach Shivamogga?",
    answer:
      "Shivamogga is well-connected by road, rail, and air. By road, it's accessible via NH-206 and NH-66 from major cities like Bangalore (270 km), Mangalore (140 km), and Mysore (210 km). Regular train services connect to Bangalore, Mysore, and other cities. The nearest airport is in Shivmogga Rashtrakavi Kuvempu Airport, Shivamogga with connections from Bengaluru, Goa, Hyderabad, Tirupati, Chennai, and Jharsuguda, with Bangalore's Kempegowda International Airport (280 km) and Mangalore Airport offering more flight options.",
  },
  {
    question: "What activities can I do in Malanad?",
    answer:
      "Adventure and nature activities abound: trekking through Western Ghats trails, exploring magnificent waterfalls, wildlife spotting in Bhadra Sanctuary, bird watching (home to 300+ species), nature photography, forest bathing, river rafting during monsoons, visiting coffee and spice plantations, and experiencing village life. There's something for every type of traveler.",
  },
  {
    question: "What local foods should I try in Malanad?",
    answer:
      "Don't miss authentic Malnad cuisine specialties like Akki Rotti (rice roti), Neer Dosa, Kadubu (steamed rice dumplings), Chicken Gassi, Coorg Pandi Curry, bamboo shoot curry, and jackfruit preparations. The region is famous for its aromatic coffee, especially from nearby Chikmagalur estates. Traditional meals served on banana leaves offer an authentic cultural experience.",
  },
  {
    question: "Do you offer customized tour packages?",
    answer:
      "Absolutely! We specialize in creating tailored experiences based on your interests, group size, duration, and budget. Whether you're seeking adventure, relaxation, cultural immersion, wildlife encounters, or photography expeditions, we'll craft a personalized itinerary. Contact us to discuss your vision, and we'll design an unforgettable journey through Shivamogga's natural wonders.",
  },
];

export function FAQ() {
  return (
    <section className="py-[60px] px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1366px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2
            className="text-[30px] font-bold mb-0"
            style={{
              color: "rgb(35, 35, 35)",
              letterSpacing: "-1px",
              lineHeight: "30px",
            }}
          >
            Frequently Asked Questions
          </h2>
          {/* Decorative accent line */}
          <div className="flex py-[15px]">
            <div
              className="w-[65%] border-t-[3px] border-solid"
              style={{ borderColor: "rgb(0, 50, 162)" }}
            ></div>
          </div>
        </div>

        {/* Single Accordion with Grid Layout */}
        <Accordion type="single" collapsible className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="border-b border-[#d5d8dc]"
              >
                <AccordionTrigger
                  className="py-4 px-2 text-left text-base md:text-lg font-medium hover:no-underline hover:text-primary transition-colors"
                  style={{ color: "#232323" }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="px-2 text-sm md:text-base leading-relaxed"
                  style={{ color: "#232323" }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Accordion>
      </div>
    </section>
  );
}
