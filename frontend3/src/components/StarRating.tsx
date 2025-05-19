
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  showNumber?: boolean;
  size?: number;
}

const StarRating = ({ rating, showNumber = true, size = 20 }: StarRatingProps) => {
  // Create an array of 5 elements to represent stars
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));

  return (
    <div className="star-rating">
      {stars.map((filled, index) => (
        <Star
          key={index}
          size={size}
          className={`${filled ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
        />
      ))}
      {showNumber && <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>}
    </div>
  );
};

export default StarRating;
