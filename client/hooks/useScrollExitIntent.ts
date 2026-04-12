import { useState, useEffect } from 'react';

const SESSION_STORAGE_KEY = 'offerModalShownInSession';
const SCROLL_THRESHOLD = 50; // 50% scroll depth

export function useScrollExitIntent() {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if modal was already shown in this session
    const hasShownModal = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (hasShownModal) {
      return; // Don't set up listeners if already shown
    }

    let hasTriggered = false;

    // Scroll depth handler
    const handleScroll = () => {
      if (hasTriggered) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Calculate scroll percentage
      const scrollableHeight = documentHeight - windowHeight;
      const scrollPercentage = scrollableHeight > 0 
        ? (scrollTop / scrollableHeight) * 100 
        : 0;

      if (scrollPercentage >= SCROLL_THRESHOLD) {
        hasTriggered = true;
        setShouldShow(true);
      }
    };

    // Exit intent handler (mouse leaving viewport at top)
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered) return;

      // Detect if mouse is leaving from the top of the page
      // clientY will be close to 0 or negative when mouse exits at top
      if (e.clientY <= 10 && e.relatedTarget === null) {
        hasTriggered = true;
        setShouldShow(true);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseout', handleMouseLeave);

    // Check immediately in case user is already scrolled down
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  // Function to mark modal as shown
  const markModalShown = () => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    setShouldShow(false);
  };

  // Function to reset (for testing purposes)
  const resetTrigger = () => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    setShouldShow(false);
  };

  return {
    shouldShow,
    markModalShown,
    resetTrigger,
  };
}
