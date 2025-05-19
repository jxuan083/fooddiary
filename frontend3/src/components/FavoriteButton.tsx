
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FavoriteButtonProps {
  initialState?: boolean;
  restaurantId: string;
  restaurantName: string;
}

const FavoriteButton = ({ 
  initialState = false, 
  restaurantId,
  restaurantName
}: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(initialState);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      toast.success(`已將 ${restaurantName} 加入我的最愛`);
    } else {
      toast(`已將 ${restaurantName} 從我的最愛移除`, {
        description: "您可以隨時重新加入"
      });
    }
    
    // Here we would typically make an API call to update the user's favorites
    // For now, we're just updating the local state
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`rounded-full p-2 transition-all duration-300 ${
        isFavorite 
          ? "bg-red-100 text-red-500" 
          : "bg-gray-100 text-gray-400 hover:text-red-500"
      }`}
      aria-label={isFavorite ? "從我的最愛移除" : "加入我的最愛"}
    >
      <Heart className={`${isFavorite ? "fill-red-500" : ""}`} size={24} />
    </button>
  );
};

export default FavoriteButton;
