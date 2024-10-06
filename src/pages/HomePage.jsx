// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { FaHome, FaWallet, FaCog } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import exampleData from '../example.json'; // Import the JSON data
import ProductCard from '../components/ProductCard/Product'; // Import the ProductCard component

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setProducts(exampleData.results);
  }, []);

  return (
    <div className="flex flex-col h-screen pb-16">
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <input 
          type="text" 
          placeholder="Search.." 
          className="flex-1 p-2 border border-gray-300 rounded" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>
      <h2 className="text-xl font-bold p-4">Best Sale Product</h2>
      <div className="flex flex-col p-4 overflow-y-auto">
        {products
          .filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(product => (
            <ProductCard key={product.id} product={product} /> // Use the ProductCard component
          ))}
      </div>
      <nav className="flex justify-around p-4 bg-gray-100 fixed bottom-0 w-full">
        <div className="text-xl"><FaHome /></div>
        <div className="text-xl"><FaWallet /></div>
        <div className="text-xl"><FaCartShopping /></div>
      </nav>
    </div>
  );
};

export default HomePage;