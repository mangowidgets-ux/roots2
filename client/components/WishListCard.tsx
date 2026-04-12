import { Heart } from "lucide-react";
import { useWishList } from "@/hooks/useWishList";

interface WishListCardProps {
  onViewDetails: () => void;
}

export function WishListCard({ onViewDetails }: WishListCardProps) {
  const { getWishList } = useWishList();
  const wishListItems = getWishList();

  return (
    <div
      className="rounded-[10px] flex flex-col p-[10px] pb-5 relative transition-all duration-300 h-full"
      style={{ boxShadow: "0 0 10px -5px rgb(0, 0, 0)" }}
    >
      {/* Image Container */}
      <div className="relative text-center mb-[15px]">
        <div
          className="rounded-[10px] w-full flex items-center justify-center bg-gradient-to-br from-red-100 to-pink-100"
          style={{
            height: "275px",
          }}
        >
          <Heart
            size={80}
            className="text-red-500"
            fill="currentColor"
          />
        </div>
      </div>

      {/* Duration */}
      <div className="text-[#232323] text-[13px] font-medium leading-[20.8px] mb-[15px]">
        <p>My Wish List</p>
      </div>

      {/* Title */}
      <div className="mb-[15px]">
        <p className="text-[#232323] text-[18px] font-bold leading-[20px]">
          Custom Destinations
        </p>
      </div>

      {/* Description */}
      <div className="mb-[15px]">
        <p className="text-[#232323] text-[14px] font-medium leading-[20px]">
          {wishListItems.length === 0
            ? "Create your personalized list of dream destinations"
            : `You have ${wishListItems.length} destination${wishListItems.length !== 1 ? "s" : ""} in your wish list`}
        </p>
      </div>

      {/* Count Display */}
      <div className="w-full overflow-hidden mb-[15px]">
        <div className="flex items-center gap-2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
            style={{ backgroundColor: "rgb(15, 62, 90)" }}
          >
            {wishListItems.length}
          </div>
          <span className="text-[#232323] text-[13px] font-medium">
            {wishListItems.length === 0
              ? "No items yet"
              : "items saved"}
          </span>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* View Details Button */}
      <div className="w-full mt-auto">
        <button
          onClick={onViewDetails}
          className="w-full rounded-[5px] px-[13px] py-[13px] text-white text-[15px] font-medium leading-[15px] text-center transition-all duration-300"
          style={{ backgroundColor: "rgb(15, 62, 90)" }}
        >
          <span className="flex gap-[5px] justify-center">
            <span>View Details</span>
          </span>
        </button>
      </div>
    </div>
  );
}
