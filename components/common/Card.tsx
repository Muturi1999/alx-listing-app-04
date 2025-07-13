import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  price,
  location,
  className = '',
  onClick,
}) => {
  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-md bg-white transition-shadow hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        
        {location && (
          <p className="text-sm text-gray-600 mb-2">
            <span className="inline-block mr-1">📍</span> {location}
          </p>
        )}
        
        {description && (
          <p className="text-sm text-gray-700 mb-3 line-clamp-2">{description}</p>
        )}
        
        {price !== undefined && (
          <div className="flex justify-between items-center mt-4">
            <p className="text-blue-600 font-bold">
              ${price} <span className="text-gray-500 font-normal text-sm">/ night</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;