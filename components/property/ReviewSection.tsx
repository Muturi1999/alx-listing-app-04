import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  comment: string;
  // You can add more fields here like author, rating etc. if needed
}

interface ReviewSectionProps {
  propertyId: string | string[] | undefined;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!propertyId) return;
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews found.</p>;
  }

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4 p-2 border rounded">
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
