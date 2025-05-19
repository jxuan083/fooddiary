
import { Restaurant, Review } from "../types/restaurant";

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "紅燒肉大王",
    description: "專門提供正宗台灣紅燒肉，以傳統醬料慢燉三層肉，口感軟嫩多汁，是台北知名的美食名店。店內裝潢充滿懷舊風，牆上掛著數十年來的老照片，展現出濃厚的人情味。",
    cuisine: "台灣菜",
    address: "台北市大安區信義路四段123號",
    phone: "02-2345-6789",
    rating: 4.7,
    priceLevel: "$$",
    hours: {
      "星期一": "11:00 - 20:00",
      "星期二": "11:00 - 20:00",
      "星期三": "11:00 - 20:00",
      "星期四": "11:00 - 20:00",
      "星期五": "11:00 - 21:00",
      "星期六": "11:00 - 21:00",
      "星期日": "11:00 - 20:00"
    },
    images: [
      "https://images.unsplash.com/photo-1626102297553-9bb7a7296d8f",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
    ],
    isFavorite: false
  },
  {
    id: "2",
    name: "海港點心樓",
    description: "最具代表性的台北港式飲茶餐廳，供應各式精緻點心、燒臘及粵菜。每天超過80種手工製作的港式點心，由香港師傅主理，保持最道地的口味。",
    cuisine: "港式料理",
    address: "台北市中山區南京東路二段99號",
    phone: "02-2507-7777",
    rating: 4.5,
    priceLevel: "$$$",
    hours: {
      "星期一": "10:00 - 22:00",
      "星期二": "10:00 - 22:00",
      "星期三": "10:00 - 22:00",
      "星期四": "10:00 - 22:00",
      "星期五": "10:00 - 22:30",
      "星期六": "09:30 - 22:30",
      "星期日": "09:30 - 22:00"
    },
    images: [
      "https://images.unsplash.com/photo-1569143151111-62b4845303a2",
      "https://images.unsplash.com/photo-1491960693564-421771d727d6",
      "https://images.unsplash.com/photo-1616500411542-c83358b01d78"
    ],
    isFavorite: true
  },
  {
    id: "3",
    name: "鐵板燒匠人",
    description: "高級日式鐵板燒餐廳，使用來自日本的A5和牛及現撈海鮮，由日籍主廚現場烹調。座位圍繞著鐵板設計，讓顧客可以近距離欣賞主廚精湛的烹飪技巧。",
    cuisine: "日式料理",
    address: "台北市信義區松仁路88號5樓",
    phone: "02-8780-1234",
    rating: 4.9,
    priceLevel: "$$$$",
    hours: {
      "星期一": "休息",
      "星期二": "18:00 - 22:00",
      "星期三": "18:00 - 22:00",
      "星期四": "18:00 - 22:00",
      "星期五": "18:00 - 22:30",
      "星期六": "12:00 - 14:30, 18:00 - 22:30",
      "星期日": "12:00 - 14:30, 18:00 - 22:00"
    },
    images: [
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252",
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba",
      "https://images.unsplash.com/photo-1624507941061-d51c37d2ddfc"
    ],
    isFavorite: false
  }
];

export const reviews: { [key: string]: Review[] } = {
  "1": [
    {
      id: "101",
      userId: "u1",
      userName: "小明",
      userAvatar: "https://ui-avatars.com/api/?name=小明&background=random",
      rating: 5,
      date: "2023-05-15",
      comment: "紅燒肉真的超棒！肥而不膩，入口即化，醬汁濃郁帶甜，配上白飯超級下飯。一定會再來！",
      images: ["https://images.unsplash.com/photo-1544025162-d76694265947"]
    },
    {
      id: "102",
      userId: "u2",
      userName: "小花",
      userAvatar: "https://ui-avatars.com/api/?name=小花&background=random",
      rating: 4,
      date: "2023-04-20",
      comment: "肉質不錯，但有點太鹹了。環境還算乾淨，服務態度親切。",
      images: []
    },
    {
      id: "103",
      userId: "u3",
      userName: "大雄",
      userAvatar: "https://ui-avatars.com/api/?name=大雄&background=random",
      rating: 5,
      date: "2023-03-11",
      comment: "老字號的好味道！每次來台北必訪的餐廳，從小吃到大，口味始終如一。老板很用心，記得常客喜好。",
      images: ["https://images.unsplash.com/photo-1626102297553-9bb7a7296d8f", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"]
    }
  ],
  "2": [
    {
      id: "201",
      userId: "u4",
      userName: "靜香",
      userAvatar: "https://ui-avatars.com/api/?name=靜香&background=random",
      rating: 4,
      date: "2023-06-05",
      comment: "點心種類很多，口味不錯，蝦餃和叉燒包很推薦。但週末人潮較多，建議提前訂位。",
      images: ["https://images.unsplash.com/photo-1491960693564-421771d727d6"]
    },
    {
      id: "202",
      userId: "u5",
      userName: "胖虎",
      userAvatar: "https://ui-avatars.com/api/?name=胖虎&background=random",
      rating: 5,
      date: "2023-05-22",
      comment: "超愛這裡的燒賣和蘿蔔糕！每次來都點這兩樣，香港師傅的手藝真的很道地。",
      images: []
    }
  ],
  "3": [
    {
      id: "301",
      userId: "u6",
      userName: "阿福",
      userAvatar: "https://ui-avatars.com/api/?name=阿福&background=random",
      rating: 5,
      date: "2023-06-10",
      comment: "絕佳的用餐體驗！和牛入口即化，主廚的刀工和火候掌握得恰到好處。雖然價格不便宜，但值得特別場合來慶祝。",
      images: ["https://images.unsplash.com/photo-1611143669185-af224c5e3252"]
    },
    {
      id: "302",
      userId: "u7",
      userName: "小蓉",
      userAvatar: "https://ui-avatars.com/api/?name=小蓉&background=random",
      rating: 4.5,
      date: "2023-05-30",
      comment: "環境優雅，服務一流。海鮮非常新鮮，特別是鮑魚非常肥美。鐵板燒的表演也很精彩，是視覺和味覺的雙重享受。",
      images: ["https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba"]
    }
  ]
};
