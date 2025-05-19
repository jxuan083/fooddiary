
import { useState } from "react";
import { restaurants } from "../data/restaurants";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import { motion } from "framer-motion";

const RecommendationPage = () => {
  const [randomRestaurant, setRandomRestaurant] = useState(null);
  const [selectedCuisine, setSelectedCuisine] = useState("");

  // Extract unique cuisines from restaurants data
  const cuisines = [...new Set(restaurants.map((r) => r.cuisine))];

  const getRandomRestaurant = () => {
    const filteredRestaurants = selectedCuisine 
      ? restaurants.filter(r => r.cuisine === selectedCuisine)
      : restaurants;
      
    if (filteredRestaurants.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * filteredRestaurants.length);
    return filteredRestaurants[randomIndex];
  };

  const handleRandomize = () => {
    const restaurant = getRandomRestaurant();
    setRandomRestaurant(restaurant);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">今天吃什麼？</h1>
        <p className="text-lg text-gray-700 mb-8">讓我們幫您決定今天的美食！</p>
        
        <div className="max-w-md mx-auto mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            選擇美食類型（選填）
          </label>
          <select 
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
          >
            <option value="">所有類型</option>
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>
        
        <Button 
          onClick={handleRandomize}
          size="lg"
          className="px-8 py-6 text-lg rounded-full mb-12"
        >
          抽選美食
        </Button>
        
        {randomRestaurant && (
          <motion.div 
            className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={randomRestaurant.images[0]}
                alt={randomRestaurant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{randomRestaurant.name}</h2>
              <div className="flex justify-between items-center mb-4">
                <StarRating rating={randomRestaurant.rating} size={20} />
                <span className="text-gray-600">{randomRestaurant.priceLevel}</span>
              </div>
              <p className="text-gray-600 mb-2">{randomRestaurant.cuisine}</p>
              <p className="text-gray-700 mb-4">{randomRestaurant.address}</p>
              
              <div className="flex justify-between">
                <Button variant="outline" onClick={handleRandomize}>
                  重新抽選
                </Button>
                <Link to={`/restaurant/${randomRestaurant.id}`}>
                  <Button>查看詳情</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RecommendationPage;
