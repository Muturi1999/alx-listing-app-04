// pages/property/[id].tsx
import { useRouter } from "next/router";
import axios from "axios";
// import axios from "@/utils/axios";

import { useEffect, useState } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;

      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching property:", err);
        setError("Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading property...</p>;
  if (error) return <p>{error}</p>;
  if (!property) return <p>No property found.</p>;

  return <PropertyDetail property={property} />;
}
