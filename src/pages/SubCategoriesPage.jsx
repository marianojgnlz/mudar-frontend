import React from 'react';
import { useState } from 'react';
import CategoryItem from '../components/CategoryItem';
import { Card, CardHeader, ListedCardBody, CardFooter } from '../components/Card/Card';
import { useNavigate } from 'react-router-dom';
const category = {
    "id": "MLA5726",
    "name": "Electrodomesticos y Aires Ac.",
    "children_categories": [
      { "id": "MLA6355", "name": "Artefactos de Cuidado Personal" },
      { "id": "MLA385177", "name": "Climatizacion" },
      { "id": "MLA1618", "name": "Coccion" },
      { "id": "MLA117258", "name": "Dispensadores y Purificadores" },
      { "id": "MLA438282", "name": "Lavado" },
      { "id": "MLA438284", "name": "Pequenos Electrodomesticos" },
      { "id": "MLA1576", "name": "Refrigeracion" },
      { "id": "MLA5977", "name": "Otros" }
    ]
  };

const SubCategoriesPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const handleCategoryClick = (subCategory, event) => {
    event.preventDefault();
    setSelectedCategories((prevSelected) => [...prevSelected, subCategory]);
  };

  const handleContinue = () => {
    console.log(selectedCategories);
    navigate('/home'); 
  };

  return (
    <Card>
      <CardHeader>
        {category.name}
      </CardHeader>
      <ListedCardBody>
        {category.children_categories.map((subCategory) => (
          <CategoryItem
            key={subCategory.id}
            name={subCategory.name}
            onClick={(event) => handleCategoryClick(subCategory, event)}
            isSelected={selectedCategories.includes(subCategory)}
          />
        ))}
      </ListedCardBody>
      <CardFooter onContinue={handleContinue}>
        Continuar
      </CardFooter>
    </Card>
  );
};

export default SubCategoriesPage;

