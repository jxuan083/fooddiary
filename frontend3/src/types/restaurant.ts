
export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  address: string;
  phone: string;
  rating: number;
  priceLevel: string; // $ - $$$$
  hours: {
    [key: string]: string; // day: hours
  };
  images: string[];
  isFavorite: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
  images: string[];
}
