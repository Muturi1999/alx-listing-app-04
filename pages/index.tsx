import { useEffect, useState } from "react";
import axios from "axios";

interface Property {
  id: number;
  name: string;
  price: number;
  location: string;
  imageUrl: string;
}

export default function HomePage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/api/properties");
        setProperties(res.data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        Property Listings
      </h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={property.imageUrl}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{property.name}</h2>
              <p className="text-gray-500">{property.location}</p>
              <p className="text-green-600 font-bold">KES {property.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
