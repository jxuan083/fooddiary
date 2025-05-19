
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import { restaurants } from "../data/restaurants";

const ProfilePage = () => {
  const [isPublic, setIsPublic] = useState(true);
  
  // Mock data
  const user = {
    nickname: "美食家小明",
    email: "foodie123@example.com",
    avatar: "https://i.pravatar.cc/150?img=12",
  };
  
  const favoriteRestaurants = restaurants.filter(r => r.isFavorite);
  
  const reviews = [
    {
      id: "1",
      restaurantId: restaurants[0].id,
      restaurantName: restaurants[0].name,
      date: "2023-05-15",
      rating: 4.5,
      comment: "餐點美味，服務態度很好，環境舒適。下次還會再來！",
      images: [restaurants[0].images[1]]
    },
    {
      id: "2",
      restaurantId: restaurants[1].id,
      restaurantName: restaurants[1].name,
      date: "2023-05-10",
      rating: 3.5,
      comment: "餐點還不錯，但服務有待改進，等待時間太長。",
      images: []
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img 
                    src={user.avatar} 
                    alt="Profile" 
                    className="rounded-full w-32 h-32 object-cover border-4 border-primary/20"
                  />
                </div>
                <CardTitle className="text-2xl mb-1">{user.nickname}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-medium">個人資料頁面</p>
                    <p className="text-sm text-gray-500">
                      {isPublic ? "公開" : "私人"}
                    </p>
                  </div>
                  <Switch 
                    checked={isPublic} 
                    onCheckedChange={setIsPublic} 
                  />
                </div>
                
                <Button className="w-full" variant="outline">
                  編輯個人資料
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full md:w-2/3">
            <Tabs defaultValue="reviews" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="reviews" className="flex-1">我的評論</TabsTrigger>
                <TabsTrigger value="favorites" className="flex-1">我的最愛</TabsTrigger>
              </TabsList>
              
              <TabsContent value="reviews" className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">評論歷史</h2>
                
                {reviews.map(review => (
                  <Card key={review.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <Link to={`/restaurant/${review.restaurantId}`}>
                          <h3 className="font-bold text-lg hover:text-primary transition-colors">
                            {review.restaurantName}
                          </h3>
                        </Link>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      
                      <StarRating rating={review.rating} showNumber size={16} />
                      
                      <p className="mt-2 text-gray-700">{review.comment}</p>
                      
                      {review.images.length > 0 && (
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {review.images.map((img, idx) => (
                            <img 
                              key={idx}
                              src={img} 
                              alt="Review" 
                              className="rounded-md h-20 w-full object-cover" 
                            />
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="favorites">
                <h2 className="text-xl font-semibold mb-4">我的最愛餐廳</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {favoriteRestaurants.map(restaurant => (
                    <Link 
                      key={restaurant.id}
                      to={`/restaurant/${restaurant.id}`}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex"
                    >
                      <div className="w-1/3">
                        <img 
                          src={restaurant.images[0]} 
                          alt={restaurant.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-3 w-2/3">
                        <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>
                        <div className="flex items-center mb-1">
                          <StarRating rating={restaurant.rating} size={14} />
                        </div>
                        <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
