import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  departureCity: string;
  travelDate: string;
  tripDuration: string;
  ticketBooked: string;
}

interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

// Comprehensive list of countries with flags and dial codes
const COUNTRIES: Country[] = [


  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },

  // Europe
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹" },
  { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸" },
  { code: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱" },
  { code: "BE", name: "Belgium", dialCode: "+32", flag: "🇧🇪" },
  { code: "CH", name: "Switzerland", dialCode: "+41", flag: "🇨🇭" },
  { code: "AT", name: "Austria", dialCode: "+43", flag: "🇦🇹" },
  { code: "SE", name: "Sweden", dialCode: "+46", flag: "🇸🇪" },
  { code: "NO", name: "Norway", dialCode: "+47", flag: "🇳🇴" },
  { code: "DK", name: "Denmark", dialCode: "+45", flag: "🇩🇰" },
  { code: "FI", name: "Finland", dialCode: "+358", flag: "🇫🇮" },
  { code: "PL", name: "Poland", dialCode: "+48", flag: "🇵🇱" },
  { code: "PT", name: "Portugal", dialCode: "+351", flag: "🇵🇹" },
  { code: "GR", name: "Greece", dialCode: "+30", flag: "🇬🇷" },
  { code: "IE", name: "Ireland", dialCode: "+353", flag: "🇮🇪" },
  { code: "CZ", name: "Czech Republic", dialCode: "+420", flag: "🇨🇿" },
  { code: "RO", name: "Romania", dialCode: "+40", flag: "🇷🇴" },
  { code: "HU", name: "Hungary", dialCode: "+36", flag: "🇭🇺" },
  { code: "RU", name: "Russia", dialCode: "+7", flag: "🇷🇺" },
  { code: "UA", name: "Ukraine", dialCode: "+380", flag: "🇺🇦" },

  // Americas
  { code: "US", name: "USA", dialCode: "+1", flag: "🇺🇸" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽" },
  { code: "AR", name: "Argentina", dialCode: "+54", flag: "🇦🇷" },
  { code: "CO", name: "Colombia", dialCode: "+57", flag: "🇨🇴" },
  { code: "CL", name: "Chile", dialCode: "+56", flag: "🇨🇱" },
  { code: "PE", name: "Peru", dialCode: "+51", flag: "🇵🇪" },
  { code: "VE", name: "Venezuela", dialCode: "+58", flag: "🇻🇪" },

  // Oceania
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "NZ", name: "New Zealand", dialCode: "+64", flag: "🇳🇿" },
  { code: "FJ", name: "Fiji", dialCode: "+679", flag: "🇫🇯" },


  // Asia

  { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳" },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵" },
  { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬" },
  { code: "MY", name: "Malaysia", dialCode: "+60", flag: "🇲🇾" },
  { code: "TH", name: "Thailand", dialCode: "+66", flag: "🇹🇭" },
  { code: "VN", name: "Vietnam", dialCode: "+84", flag: "🇻🇳" },
  { code: "ID", name: "Indonesia", dialCode: "+62", flag: "🇮🇩" },
  { code: "PH", name: "Philippines", dialCode: "+63", flag: "🇵🇭" },
  { code: "PK", name: "Pakistan", dialCode: "+92", flag: "🇵🇰" },
  { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "🇧🇩" },
  { code: "LK", name: "Sri Lanka", dialCode: "+94", flag: "🇱🇰" },
  { code: "NP", name: "Nepal", dialCode: "+977", flag: "🇳🇵" },
  { code: "HK", name: "Hong Kong", dialCode: "+852", flag: "🇭🇰" },
  { code: "TW", name: "Taiwan", dialCode: "+886", flag: "🇹🇼" },
  { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷" },

  // Middle East
  { code: "AE", name: "UAE", dialCode: "+971", flag: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦" },
  { code: "QA", name: "Qatar", dialCode: "+974", flag: "🇶🇦" },
  { code: "KW", name: "Kuwait", dialCode: "+965", flag: "🇰🇼" },
  { code: "BH", name: "Bahrain", dialCode: "+973", flag: "🇧🇭" },
  { code: "OM", name: "Oman", dialCode: "+968", flag: "🇴🇲" },
  { code: "IL", name: "Israel", dialCode: "+972", flag: "🇮🇱" },
  { code: "TR", name: "Turkey", dialCode: "+90", flag: "🇹🇷" },

  
  // Africa
  { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦" },
  { code: "NG", name: "Nigeria", dialCode: "+234", flag: "🇳🇬" },
  { code: "KE", name: "Kenya", dialCode: "+254", flag: "🇰🇪" },
  { code: "EG", name: "Egypt", dialCode: "+20", flag: "🇪🇬" },
  { code: "MA", name: "Morocco", dialCode: "+212", flag: "🇲🇦" },
  { code: "GH", name: "Ghana", dialCode: "+233", flag: "🇬🇭" },
  { code: "TZ", name: "Tanzania", dialCode: "+255", flag: "🇹🇿" },
  { code: "MU", name: "Mauritius", dialCode: "+230", flag: "🇲🇺" },
  { code: "MV", name: "Maldives", dialCode: "+960", flag: "🇲🇻" },
];

interface BookingFormProps {
  destinationName?: string;
  onSuccess?: () => void;
  showWhyTravelSection?: boolean;
}

// India Flag SVG Component
const IndiaFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" className="rounded-sm flex-shrink-0">
    <rect width="24" height="5.33" fill="#FF9933"/>
    <rect y="5.33" width="24" height="5.33" fill="#FFFFFF"/>
    <rect y="10.66" width="24" height="5.34" fill="#138808"/>
    <circle cx="12" cy="8" r="2" fill="#000080"/>
  </svg>
);

// Why Travel With Us Icons
const DealsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2">
    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"/>
  </svg>
);

const PackagesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="#e74c3c">
    <circle cx="12" cy="12" r="10"/>
  </svg>
);

const AssistantIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="#d4a853">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

export function BookingForm({ destinationName, onSuccess, showWhyTravelSection = false }: BookingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    departureCity: "",
    travelDate: "",
    tripDuration: "",
    ticketBooked: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  // Country selection state
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    COUNTRIES.find(c => c.code === "IN") || COUNTRIES[0]
  );
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    const cleanPhone = formData.phone.replace(/[\s\-\+]/g, "").slice(-10);
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Other required fields
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.departureCity.trim()) newErrors.departureCity = "Departure city is required";
    if (!formData.travelDate) newErrors.travelDate = "Travel date is required";
    if (!formData.tripDuration) newErrors.tripDuration = "Trip duration is required";
    if (!formData.ticketBooked) newErrors.ticketBooked = "Please select ticket booking status";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Format phone number for display
    const cleanPhone = formData.phone.replace(/[\s\-\+]/g, "").slice(-10);

    // Create WhatsApp message with all new fields
    const message = `Hi Roots2! I'd like to plan a trip${destinationName ? ` to ${destinationName}` : ""}.

📋 *Booking Details:*
━━━━━━━━━━━━━━━━
👤 Name: ${formData.name}
📞 Phone: ${selectedCountry.dialCode} ${cleanPhone}
✉️ Email: ${formData.email}
🛫 Departure City: ${formData.departureCity}
📅 Travel Date: ${formData.travelDate}
⏱️ Trip Duration: ${formData.tripDuration}
🎫 Ticket Status: ${formData.ticketBooked}

Looking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/919449695251?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form and show confirmation
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      departureCity: "",
      travelDate: "",
      tripDuration: "",
      ticketBooked: "",
    });
    setErrors({});

    setTimeout(() => {
      setSubmitted(false);
      if (onSuccess) onSuccess();
    }, 3000);
  };

  const tripDurations = ["1 day(8 AM to 6 PM)","2 days / 1 night","1-3 Days", "4-7 Days", "1+ Weeks"];

  const ticketStatuses = [
    "Yes, My Ticket is Booked",
    "Just Exploring the Destinations",
    "My Destination is Fixed",
  ];

  const inputStyles = `w-full h-[43px] px-[14px] bg-white border rounded-[1px] focus:outline-none focus:ring-0 transition-[border,box-shadow] duration-150 text-base text-black/70`;
  const boxShadow = '0 0 0 1px rgb(6, 106, 171), 0 1px 2px 0 rgba(0, 0, 0, 0.15)';

  return (
    <div className="w-full">
      {submitted && (
        <div className="mb-4 p-4 bg-primary/10 border border-primary rounded-lg animate-fade-in">
          <p className="text-primary font-medium text-sm">
            Thanks! Your message has been sent. Check your WhatsApp for our response!
          </p>
        </div>
      )}

      <h2 className="text-xl font-bold text-gray-900 mb-1">
        {destinationName
          ? `Get the Best ${destinationName} Tour Packages`
          : "Get the Best Tour Packages"
        }
      </h2>
      <p className="text-gray-500 text-sm mb-5">
        We promise that your information is completely secure with us, and we won't send you any unwanted messages.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name */}
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputStyles} ${errors.name ? "border-red-500" : "border-[#066aab]"}`}
            style={{ boxShadow }}
            placeholder="Enter Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone with Country Selector */}
        <div>
          <div className="flex items-stretch gap-0">
            {/* Country Code Dropdown */}
            <Popover open={countryDropdownOpen} onOpenChange={setCountryDropdownOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="h-[43px] px-3 flex items-center gap-1.5 bg-white border border-[#066aab] border-r-0 rounded-l-[1px] hover:bg-gray-50 focus:outline-none focus:ring-0 transition-colors"
                  style={{ boxShadow }}
                  aria-label="Select country code"
                >
                  <span className="text-xl leading-none">{selectedCountry.flag}</span>
                  <span className="text-sm text-gray-700 font-medium">{selectedCountry.dialCode}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-gray-500" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[280px] p-0" align="start">
                <div className="max-h-[280px] overflow-y-auto">
                  {COUNTRIES.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(country);
                        setCountryDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 flex items-center gap-2 hover:bg-gray-100 transition-colors text-left ${
                        selectedCountry.code === country.code ? "bg-blue-50" : ""
                      }`}
                    >
                      <span className="text-xl leading-none flex-shrink-0">{country.flag}</span>
                      <span className="text-sm flex-1 truncate">{country.name}</span>
                      <span className="text-sm text-gray-500 font-medium flex-shrink-0">{country.dialCode}</span>
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Phone Input */}
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`flex-1 h-[43px] px-[14px] bg-white border rounded-r-[1px] focus:outline-none focus:ring-0 transition-[border,box-shadow] duration-150 text-base text-black/70 ${
                errors.phone ? "border-red-500" : "border-[#066aab]"
              }`}
              style={{ boxShadow }}
              placeholder="Enter Phone Number"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputStyles} ${errors.email ? "border-red-500" : "border-[#066aab]"}`}
            style={{ boxShadow }}
            placeholder="Enter Your Email Address"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Departure City */}
        <div>
          <input
            type="text"
            id="departureCity"
            name="departureCity"
            value={formData.departureCity}
            onChange={handleChange}
            className={`${inputStyles} ${errors.departureCity ? "border-red-500" : "border-[#066aab]"}`}
            style={{ boxShadow }}
            placeholder="Your Departure City Name"
          />
          {errors.departureCity && (
            <p className="text-red-500 text-xs mt-1">{errors.departureCity}</p>
          )}
        </div>

        {/* Travel Date */}
        <div>
          <input
            type="text"
            id="travelDate"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            onFocus={(e) => e.target.type = 'date'}
            onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
            min={new Date().toISOString().split('T')[0]}
            className={`${inputStyles} ${errors.travelDate ? "border-red-500" : "border-[#066aab]"}`}
            style={{ boxShadow }}
            placeholder="Date of Travel (yyyy-mm-dd) (Ex: 2024-06-26)"
          />
          {errors.travelDate && (
            <p className="text-red-500 text-xs mt-1">{errors.travelDate}</p>
          )}
        </div>

        {/* Trip Duration */}
        <div>
          <select
            id="tripDuration"
            name="tripDuration"
            value={formData.tripDuration}
            onChange={handleChange}
            className={`${inputStyles} ${errors.tripDuration ? "border-red-500" : "border-[#066aab]"} ${!formData.tripDuration ? 'text-gray-400' : ''}`}
            style={{ boxShadow }}
          >
            <option value="" disabled>Trip Duration: Number of Days</option>
            {tripDurations.map((duration) => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            ))}
          </select>
          {errors.tripDuration && (
            <p className="text-red-500 text-xs mt-1">{errors.tripDuration}</p>
          )}
        </div>

        {/* Ticket Booking Status */}
        <div>
          <select
            id="ticketBooked"
            name="ticketBooked"
            value={formData.ticketBooked}
            onChange={handleChange}
            className={`${inputStyles} ${errors.ticketBooked ? "border-red-500" : "border-[#066aab]"} ${!formData.ticketBooked ? 'text-gray-400' : ''}`}
            style={{ boxShadow }}
          >
            <option value="" disabled>Yes, My Ticket is Booked</option>
            {ticketStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          {errors.ticketBooked && (
            <p className="text-red-500 text-xs mt-1">{errors.ticketBooked}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-8 py-2.5 bg-[#0891b2] hover:bg-[#0e7490] text-white font-medium rounded transition-colors text-sm mt-2"
        >
          Submit
        </button>
      </form>

      {/* Why Travel With Us Section */}
      {showWhyTravelSection && (
        <div className="mt-6 pt-5 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Why Travel With Us?</h3>
          <div className="flex justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <svg width="40" height="40" viewBox="0 0 512 512" fill="#dc6c00" className="transition-all duration-300 flex-shrink-0">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
              </svg>
              <span className="text-[13px] font-semibold leading-tight" style={{ color: '#0f3e5a' }}>Cheapest<br/>Deals</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg width="40" height="40" viewBox="0 0 576 512" fill="#dc6c00" className="transition-all duration-300 flex-shrink-0">
                <path d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/>
              </svg>
              <span className="text-[13px] font-semibold leading-tight" style={{ color: '#0f3e5a' }}>Customizable<br/>Packages</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg width="40" height="40" viewBox="0 0 640 512" fill="#dc6c00" className="transition-all duration-300 flex-shrink-0">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z"/>
              </svg>
              <span className="text-[13px] font-semibold leading-tight" style={{ color: '#0f3e5a' }}>Dedicated<br/>Trip Assistant</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
