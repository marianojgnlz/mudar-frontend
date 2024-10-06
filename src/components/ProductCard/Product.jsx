import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  // Calculate discount percentage
  const discountPercentage = product.original_price 
    ? Math.round(((product.original_price - product.price) / product.original_price) * 100) 
    : null;

  return (
    <div className="flex flex-row items-start bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-4">
      <img className="object-cover w-32 h-32 rounded-l-lg" src={product.thumbnail} alt={product.title} />
      <div className="flex flex-col justify-between p-4 leading-normal min-w-0"> {/* Added min-w-0 here */}
        <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 whitespace-nowrap truncate">{product.title}</p>
        <p className="mb-2 font-bold text-green-600">${product.price.toLocaleString()}</p>
        {product.original_price && (
          <div className="mb-2 flex items-center"> 
            <p className="text-sm text-gray-500 line-through mr-2"> 
              ${product.original_price.toLocaleString()}
            </p>
            <p className="text-sm text-red-600">
              {discountPercentage}% off
            </p>
          </div>
        )}
        {product.shipping?.free_shipping && (
          <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-1 py-0.5 rounded-full max-w-[100px]">
            <span className="w-1.5 h-1.5 mr-1 bg-blue-500 rounded-full"></span>
            Free Shipping
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
