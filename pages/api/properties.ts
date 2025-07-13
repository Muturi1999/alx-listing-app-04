import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const properties = [
    {
      id: 1,
      name: "Ocean View Apartment",
      price: 12000,
      location: "Mombasa",
      imageUrl: "/images/property1.jpg"
    },
    {
      id: 2,
      name: "Modern Villa",
      price: 20000,
      location: "Nairobi",
      imageUrl: "/images/property2.jpg"
    }
  ];

  res.status(200).json(properties);
}
