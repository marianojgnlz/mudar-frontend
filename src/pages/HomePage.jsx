// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHome, FaWallet, FaCog, FaGift } from 'react-icons/fa';
import exampleData from '../example.json'; // Import the JSON data

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Use hardcoded data from example.json
    setProducts(exampleData.results); // Set products from the imported JSON data
  }, []);

  return (
    <div className="flex flex-col h-screen pb-16">
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <input type="text" placeholder="Search.." className="flex-1 p-2 border border-gray-300 rounded" />
        <div className="flex space-x-4">
          <div className="text-xl"><FaGift /></div>
          <div className="text-xl"><FaCog /></div>
        </div>
      </header>
      <h2 className="text-xl font-bold p-4">Best Sale Product</h2>
      <div className="flex flex-wrap justify-around p-4 overflow-y-auto">
        {products.map(product => (
          <div key={product.id} className="w-1/2 p-2 flex"> {/* Added flex to align items */}
            <div className="border rounded-lg shadow-lg p-4 text-center flex-1"> {/* Use flex-1 to fill available space */}
              <img src={product.thumbnail} alt={product.title} className="w-full h-auto rounded" />
              <div className="mt-2">
                <p className="font-semibold">{product.title}</p>
                <p className="text-green-600">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav className="flex justify-around p-4 bg-gray-100 fixed bottom-0 w-full">
        <div className="text-xl"><FaHome /></div>
        <div className="text-xl"><FaWallet /></div>
        <div className="text-xl"><FaCog /></div>
      </nav>
    </div>
  );
};

export default HomePage;