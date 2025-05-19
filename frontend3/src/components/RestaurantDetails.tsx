
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Restaurant, Review } from "../types/restaurant";
import ReviewSection from "./ReviewSection";

interface RestaurantDetailsProps {
  restaurant: Restaurant;
  reviews: Review[];
}

const RestaurantDetails = ({ restaurant, reviews }: RestaurantDetailsProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="info" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="info">餐廳資訊</TabsTrigger>
          <TabsTrigger value="photos">照片</TabsTrigger>
          <TabsTrigger value="reviews">評論 ({reviews.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="info" className="animate-fade">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">營業時間</h3>
              <table className="w-full">
                <tbody>
                  {Object.entries(restaurant.hours).map(([day, hours]) => (
                    <tr key={day} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 pr-4 text-gray-700">{day}</td>
                      <td className="py-3 font-medium">{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">地點與聯絡方式</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700">地址</p>
                  <p className="font-medium">{restaurant.address}</p>
                </div>
                <div>
                  <p className="text-gray-700">電話</p>
                  <p className="font-medium">{restaurant.phone}</p>
                </div>
                <div>
                  <p className="text-gray-700">料理類型</p>
                  <p className="font-medium">{restaurant.cuisine}</p>
                </div>
                <div>
                  <p className="text-gray-700">價位</p>
                  <p className="font-medium">{restaurant.priceLevel}</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="photos" className="animate-fade">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurant.images.map((image, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt={`${restaurant.name} - 照片 ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="animate-fade">
          <ReviewSection reviews={reviews} restaurantId={restaurant.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RestaurantDetails;
