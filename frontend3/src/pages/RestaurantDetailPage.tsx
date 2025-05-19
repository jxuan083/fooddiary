
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { restaurants, reviews } from "../data/restaurants";
import { Restaurant, Review } from "../types/restaurant";
import RestaurantHero from "../components/RestaurantHero";
import RestaurantDetails from "../components/RestaurantDetails";

const RestaurantDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [restaurantReviews, setRestaurantReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch restaurant details
    const fetchRestaurantDetails = () => {
      setLoading(true);
      setTimeout(() => {
        const foundRestaurant = restaurants.find(r => r.id === id);
        
        if (foundRestaurant) {
          setRestaurant(foundRestaurant);
          setRestaurantReviews(reviews[id as string] || []);
        }
        
        setLoading(false);
      }, 300); // Simulate network delay
    };

    fetchRestaurantDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em]"></div>
          <p className="mt-2 text-gray-600">載入中...</p>
        </div>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">找不到餐廳</h2>
          <p className="text-gray-600">抱歉，我們找不到您要查詢的餐廳資訊。</p>
          <a href="/" className="mt-4 inline-block text-primary hover:underline">
            返回首頁
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <RestaurantHero restaurant={restaurant} />
      <RestaurantDetails restaurant={restaurant} reviews={restaurantReviews} />
    </div>
  );
};

export default RestaurantDetailPage;
