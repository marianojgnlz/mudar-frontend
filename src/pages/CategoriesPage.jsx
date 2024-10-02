"use client"
import React, { useState } from 'react';
import CategoryItem from '../components/CategoryItem';
import { Card, CardHeader, ListedCardBody, CardFooter } from '../components/Card/Card';
import { useNavigate } from 'react-router-dom'; // Add this import

const categories = require('../examples/categories.json');

export default function CategoriesPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCategoryClick = (category, event) => {
    event.preventDefault();
    setSelectedCategories((prevSelected) => [...prevSelected, category]);
  };

  const handleContinue = () => {
    console.log(selectedCategories);
    navigate('/subcategories'); // Update this line
  };

  return (
    <Card>
      <CardHeader>
        Categorías
      </CardHeader>
      <ListedCardBody>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            name={category.name}
            onClick={(event) => handleCategoryClick(category, event)}
            isSelected={selectedCategories.includes(category)}
          />
        ))}
      </ListedCardBody>
      <CardFooter onContinue={handleContinue} >
        Continuar
      </CardFooter>
    </Card>
  );
}

