export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  timing?: string;
  meals?: string[];
}

export interface RouteMap {
  type: 'interactive' | 'static' | 'both';
  staticImageUrl?: string;
  embedUrl?: string;
  startPoint?: { lat: number; lng: number; name: string };
  endPoint?: { lat: number; lng: number; name: string };
  waypoints?: { lat: number; lng: number; name: string }[];
}

export interface TravelDetails {
  distance?: string;
  travelTime?: string;
  bestTimeToVisit?: string;
  difficulty?: 'easy' | 'moderate' | 'hard';
  groupSize?: { min: number; max: number };
  inclusions?: string[];
  importantNotes?: string[];
}

export interface Destination {
  // Existing fields
  id: number;
  title: string;
  category: string;
  duration: string;
  description: string; // short description for cards
  badge: { type: string; text: string; icon: any };
  features: string[];
  oldPrice: string;
  newPrice: string;
  image: string; // primary image for card

  // New fields for detail page
  images: string[]; // gallery images
  fullDescription: string; // detailed description
  itinerary: ItineraryDay[];
  routeMap: RouteMap;
  travelDetails: TravelDetails;
}
