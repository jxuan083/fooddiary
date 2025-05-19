
import { Input } from "@/components/ui/input";
import { restaurants } from "../data/restaurants";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRestaurants = restaurants.filter(
    restaurant =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">探索美食</h1>
        
        <div className="mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="搜尋餐廳、位置或美食分類..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4 pr-10 py-2"
            />
            <Button className="absolute right-0 top-0 h-full" variant="ghost">
              搜尋
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurant/${restaurant.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={restaurant.images[0]}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{restaurant.name}</h3>
                <div className="flex justify-between items-center mb-2">
                  <StarRating rating={restaurant.rating} size={16} />
                  <span className="text-gray-600">{restaurant.priceLevel}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
                <p className="text-gray-700 text-sm">{restaurant.address}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
