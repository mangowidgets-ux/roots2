import { useState, useEffect } from "react";

export interface WishListItem {
  id: number;
  title: string;
  category: string;
}

const STORAGE_KEY = "destination_wishlist";

export function useWishList() {
  const [wishList, setWishList] = useState<WishListItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load wish list from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setWishList(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to load wish list:", error);
    }
    setIsLoaded(true);
  }, []);

  // Persist wish list to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(wishList));
      } catch (error) {
        console.error("Failed to save wish list:", error);
      }
    }
  }, [wishList, isLoaded]);

  const addToWishList = (item: WishListItem) => {
    setWishList((prev) => {
      // Avoid duplicates
      if (prev.some((i) => i.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromWishList = (id: number) => {
    setWishList((prev) => prev.filter((item) => item.id !== id));
  };

  const getWishList = () => wishList;

  const isInWishList = (id: number) => {
    return wishList.some((item) => item.id === id);
  };

  const clearWishList = () => {
    setWishList([]);
  };

  return {
    wishList,
    addToWishList,
    removeFromWishList,
    getWishList,
    isInWishList,
    clearWishList,
    isLoaded,
  };
}
