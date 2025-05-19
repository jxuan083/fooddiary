
import { Restaurant } from "../types/restaurant";
import FavoriteButton from "./FavoriteButton";
import StarRating from "./StarRating";

interface RestaurantHeroProps {
  restaurant: Restaurant;
}

const RestaurantHero = ({ restaurant }: RestaurantHeroProps) => {
  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={restaurant.images[0]}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Restaurant Info */}
      <div className="container mx-auto px-4 relative -mt-24 z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <StarRating rating={restaurant.rating} />
                  <span className="ml-2">({restaurant.rating})</span>
                </div>
                <div>{restaurant.cuisine}</div>
                <div>{restaurant.priceLevel}</div>
              </div>
              <p className="mb-4 text-gray-700 leading-relaxed">{restaurant.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-700">地址</p>
                  <p className="text-gray-600">{restaurant.address}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">電話</p>
                  <p className="text-gray-600">{restaurant.phone}</p>
                </div>
              </div>
            </div>
            <FavoriteButton 
              initialState={restaurant.isFavorite} 
              restaurantId={restaurant.id}
              restaurantName={restaurant.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHero;
