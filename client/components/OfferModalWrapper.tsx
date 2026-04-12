import { useState, useEffect } from 'react';
import { OfferModal } from './OfferModal';
import { BookingModal } from './BookingModal';
import { useScrollExitIntent } from '../hooks/useScrollExitIntent';

export function OfferModalWrapper() {
  const { shouldShow, markModalShown } = useScrollExitIntent();
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Show offer modal when trigger is detected
  useEffect(() => {
    if (shouldShow) {
      setShowOfferModal(true);
    }
  }, [shouldShow]);

  // Handle closing the offer modal
  const handleOfferClose = () => {
    setShowOfferModal(false);
    markModalShown(); // Mark as shown so it doesn't trigger again
  };

  // Handle "Grab Offer" button click
  const handleGrabOffer = () => {
    setShowOfferModal(false); // Close offer modal
    markModalShown(); // Mark as shown
    setShowBookingModal(true); // Open booking modal
  };

  // Handle closing booking modal
  const handleBookingClose = () => {
    setShowBookingModal(false);
  };

  return (
    <>
      {/* Offer Modal */}
      <OfferModal
        isOpen={showOfferModal}
        onClose={handleOfferClose}
        onGrabOffer={handleGrabOffer}
      />

      {/* Booking Modal - opens when "Grab Offer" is clicked */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={handleBookingClose}
        destinationName="Shivamogga"
      />
    </>
  );
}
