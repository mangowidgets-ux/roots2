import { X, Trash2, Plus } from "lucide-react";
import { useWishList } from "@/hooks/useWishList";
import { useState } from "react";

interface WishListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDestinationSelect?: (destinationName: string) => void;
}

export function WishListModal({
  isOpen,
  onClose,
  onDestinationSelect
}: WishListModalProps) {
  const { wishList, removeFromWishList, clearWishList, addToWishList } =
    useWishList();
  const [showAddForm, setShowAddForm] = useState(false);
  const [destinationName, setDestinationName] = useState("");

  if (!isOpen) return null;

  const handleAddDestination = () => {
    if (destinationName.trim()) {
      const trimmedDestination = destinationName.trim();
      // Create a custom destination with a unique ID based on timestamp
      const customDestination = {
        id: Date.now(),
        title: trimmedDestination,
        category: "Custom",
      };
      addToWishList(customDestination);
      setDestinationName("");
      setShowAddForm(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddDestination();
    }
  };

  const handleDestinationClick = (destinationName: string) => {
    if (onDestinationSelect) {
      onDestinationSelect(destinationName);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b flex items-center justify-between p-6 z-10">
          <h2 className="text-2xl font-bold text-[#232323]">My Wish List</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Count Summary */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm font-medium text-blue-900">
              {wishList.length === 0
                ? "Your wish list is empty. Start adding destinations!"
                : `You have ${wishList.length} destination${
                    wishList.length !== 1 ? "s" : ""
                  } in your wish list`}
            </p>
          </div>

          {/* Wish List Items */}
          {wishList.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-[#232323]">
                Saved Destinations
              </h3>
              <div className="space-y-2">
                {wishList.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer group"
                    onClick={() => handleDestinationClick(item.title)}
                  >
                    <div className="flex-1">
                      <p className="font-medium text-[#232323]">
                        {item.title}
                      </p>
                      {item.category && (
                        <p className="text-sm text-gray-600">
                          {item.category}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromWishList(item.id);
                      }}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      aria-label="Remove from wish list"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add Destination Section */}
          <div className="border-t pt-6">
            {!showAddForm ? (
              <button
                onClick={() => setShowAddForm(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Plus size={20} />
                Add Destination
              </button>
            ) : (
              <div className="space-y-4">
                <h3 className="font-semibold text-[#232323]">
                  Add a Destination to Your Wish List
                </h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={destinationName}
                    onChange={(e) => setDestinationName(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter destination name (e.g., Machu Picchu, Swiss Alps)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />

                  <div className="flex gap-2">
                    <button
                      onClick={handleAddDestination}
                      disabled={!destinationName.trim()}
                      className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
                    >
                      Add to Wish List
                    </button>
                    <button
                      onClick={() => {
                        setShowAddForm(false);
                        setDestinationName("");
                      }}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Clear All Button */}
          {wishList.length > 0 && (
            <div className="border-t pt-4">
              <button
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to clear your entire wish list?"
                    )
                  ) {
                    clearWishList();
                  }
                }}
                className="w-full px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors font-medium"
              >
                Clear All Destinations
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
