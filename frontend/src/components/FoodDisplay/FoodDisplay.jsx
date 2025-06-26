import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext); // Getting food list from context
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  // Filter food items based on category and search query
  const filteredFoodList = food_list.filter(item => {
    const matchesCategory = category === "All" || category === item.food_category;
    const matchesSearch = item.food_name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <input
        type="text"
        placeholder="Search for food..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <div className='food-display-list'>
        {filteredFoodList.map(item => (
          <FoodItem
            key={item.food_id} // Using food_id from static data
            image={item.food_image}
            name={item.food_name}
            desc={item.food_desc}
            price={item.food_price}
            id={item.food_id} // Using food_id from static data
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
