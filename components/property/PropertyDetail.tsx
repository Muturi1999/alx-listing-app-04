// components/property/PropertyDetail.tsx
import Image from "next/image";

type Property = {
  title: string;
  location: string;
  image: string;
  description: string;
  price: number;
};

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <Image src={property.image} alt={property.title} width={600} height={400} />
      <p className="mt-4">{property.description}</p>
      <p className="mt-2 text-xl text-green-600">${property.price}</p>
    </div>
  );
}
