
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BuddyPage = () => {
  const [friendEmail, setFriendEmail] = useState("");

  // Mock data
  const friends = [
    {
      id: "1",
      name: "小美",
      avatar: "https://i.pravatar.cc/150?img=5",
      status: "online",
      favoriteCuisine: "日式料理",
    },
    {
      id: "2",
      name: "大明",
      avatar: "https://i.pravatar.cc/150?img=3",
      status: "offline",
      favoriteCuisine: "泰式料理",
    },
    {
      id: "3",
      name: "佩佩",
      avatar: "https://i.pravatar.cc/150?img=9",
      status: "online",
      favoriteCuisine: "義式料理",
    },
  ];

  const requests = [
    {
      id: "1",
      name: "小華",
      avatar: "https://i.pravatar.cc/150?img=8",
      date: "2023-05-18",
    },
    {
      id: "2",
      name: "阿強",
      avatar: "https://i.pravatar.cc/150?img=15",
      date: "2023-05-17",
    },
  ];

  const sentRequests = [
    {
      id: "1",
      name: "小菁",
      avatar: "https://i.pravatar.cc/150?img=33",
      date: "2023-05-16",
    },
  ];

  const handleSendInvite = (e) => {
    e.preventDefault();
    // Logic to send invitation
    setFriendEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">我的餐友</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-xl">邀請新餐友</CardTitle>
              <CardDescription>
                邀請朋友加入您的餐友圈，一起分享美食體驗
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSendInvite} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="friend-email" className="text-sm font-medium">
                    朋友的Email
                  </label>
                  <Input
                    id="friend-email"
                    type="email"
                    placeholder="friend@example.com"
                    value={friendEmail}
                    onChange={(e) => setFriendEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  發送邀請
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="col-span-1 md:col-span-2">
            <Tabs defaultValue="friends">
              <TabsList className="w-full mb-6 grid grid-cols-3">
                <TabsTrigger value="friends">我的餐友</TabsTrigger>
                <TabsTrigger value="requests">收到的邀請</TabsTrigger>
                <TabsTrigger value="sent">已發送的邀請</TabsTrigger>
              </TabsList>

              <TabsContent value="friends" className="space-y-4">
                {friends.length === 0 ? (
                  <p className="text-center py-8 text-gray-500">您還沒有餐友</p>
                ) : (
                  friends.map((friend) => (
                    <Card key={friend.id}>
                      <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={friend.avatar} alt={friend.name} />
                              <AvatarFallback>{friend.name[0]}</AvatarFallback>
                            </Avatar>
                            <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                          </div>
                          <div>
                            <h3 className="font-medium">{friend.name}</h3>
                            <p className="text-sm text-gray-500">
                              喜好: {friend.favoriteCuisine}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            查看檔案
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                            移除
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </TabsContent>

              <TabsContent value="requests">
                {requests.length === 0 ? (
                  <p className="text-center py-8 text-gray-500">沒有待處理的邀請</p>
                ) : (
                  <div className="space-y-4">
                    {requests.map((request) => (
                      <Card key={request.id}>
                        <CardContent className="flex items-center justify-between p-4">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={request.avatar} alt={request.name} />
                              <AvatarFallback>{request.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{request.name}</h3>
                              <p className="text-sm text-gray-500">
                                {request.date} 發送邀請
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm">接受</Button>
                            <Button variant="outline" size="sm">
                              拒絕
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="sent">
                {sentRequests.length === 0 ? (
                  <p className="text-center py-8 text-gray-500">沒有已發送的邀請</p>
                ) : (
                  <div className="space-y-4">
                    {sentRequests.map((request) => (
                      <Card key={request.id}>
                        <CardContent className="flex items-center justify-between p-4">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={request.avatar} alt={request.name} />
                              <AvatarFallback>{request.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{request.name}</h3>
                              <p className="text-sm text-gray-500">
                                於 {request.date} 發送
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                            取消邀請
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuddyPage;
