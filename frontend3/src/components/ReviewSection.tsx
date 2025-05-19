
import { useState } from "react";
import { Review } from "../types/restaurant";
import { Button } from "@/components/ui/button";
import StarRating from "./StarRating";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

interface ReviewSectionProps {
  reviews: Review[];
  restaurantId: string;
}

const ReviewSection = ({ reviews, restaurantId }: ReviewSectionProps) => {
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast.error("請選擇評分");
      return;
    }

    if (comment.trim() === "") {
      toast.error("請填寫評論內容");
      return;
    }

    // Here we would typically make an API call to submit the review
    toast.success("評論已送出，謝謝您的分享！");
    setIsWritingReview(false);
    setRating(0);
    setComment("");
  };

  return (
    <div>
      {!isWritingReview ? (
        <div className="text-center mb-8">
          <Button onClick={() => setIsWritingReview(true)} className="bg-primary hover:bg-primary/90">
            撰寫評論
          </Button>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">分享您的用餐體驗</h3>
          <form onSubmit={handleSubmitReview}>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">您的評分</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`p-1 rounded-full transition-all ${
                      rating >= star ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        fill={rating >= star ? "currentColor" : "none"}
                      />
                    </svg>
                  </button>
                ))}
                {rating > 0 && <span className="ml-2 text-lg">{rating}/5</span>}
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="comment" className="block mb-2 text-gray-700">
                您的評論
              </label>
              <Textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                placeholder="分享您的用餐體驗、菜色推薦或是值得注意的事項..."
                className="resize-none"
              />
            </div>

            {/* Image upload would go here */}
            
            <div className="flex gap-2 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsWritingReview(false)}
              >
                取消
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                送出評論
              </Button>
            </div>
          </form>
        </div>
      )}
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="pb-6">
            <div className="flex items-start gap-3">
              <img 
                src={review.userAvatar}
                alt={review.userName}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{review.userName}</h4>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <StarRating rating={review.rating} size={16} />
                <p className="mt-2 text-gray-600">{review.comment}</p>
                
                {review.images.length > 0 && (
                  <div className="mt-3 flex gap-2 overflow-x-auto py-2">
                    {review.images.map((image, index) => (
                      <div key={index} className="flex-none w-24 h-24 rounded overflow-hidden">
                        <img
                          src={image}
                          alt={`評論照片 ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {reviews.indexOf(review) < reviews.length - 1 && <Separator className="mt-6" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
