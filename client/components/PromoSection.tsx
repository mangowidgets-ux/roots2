import { useState } from "react";
import { BookingModal } from "./BookingModal";
import { HeroCTA } from "./HeroCTA";

const CAROUSEL_IMAGES = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/8728586/pexels-photo-8728586.jpeg?w=1920&h=1080&fit=crop",
    alt: "Adventure Sports - Rock climbing and outdoor adventure",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/14776256/pexels-photo-14776256.jpeg?w=1920&h=1080&fit=crop",
    alt: "Cultural Food Market - Local dining and street food experience",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/8974284/pexels-photo-8974284.jpeg?w=1920&h=1080&fit=crop",
    alt: "Adventure Travel - Friends exploring and traveling together",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/35316837/pexels-photo-35316837.jpeg?w=1920&h=1080&fit=crop",
    alt: "Local Interactions - Authentic cultural travel experiences",
  },
  {
    id: 5,
    url: "https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F7d2e594c65a5433096936cac17fc59af?format=webp&width=1920&height=1080",
    alt: "Happy Travelers - Group adventure and community travel experience",
  },
];

export function PromoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <HeroCTA
        title="Experience the Gateway to Malnad"
        buttonText="Plan Your Journey"
        onButtonClick={handleOpenModal}
        images={CAROUSEL_IMAGES}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        destinationName="Shivamogga Tour Package"
      />
    </>
  );
}
