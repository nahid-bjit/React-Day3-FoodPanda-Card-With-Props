import React, { useState } from 'react';
import FoodItem from './FoodItem';
import "./fooditems.css"

function FoodList() {
    const [selectedFood, setSelectedFood] = useState([]);
    const foods = [
        { id: 1, name: 'Burger' },
        { id: 2, name: 'Pizza' },
        { id: 3, name: 'Sushi' },
    ];

    const handleFoodSelect = (food) => {
        if (!selectedFood.find((selected) => selected.id === food.id)) {
            setSelectedFood([...selectedFood, food]);
        }
    };

    return (
        <div className='container'>
            <div className='food-item-parent'>
                <h2>Food List</h2>
                {foods.map((food) => (
                    <FoodItem key={food.id} food={food} onClick={handleFoodSelect} />
                ))}
                {selectedFood.length > 0 && (
                    <div>
                        <h3>Selected Food</h3>
                        <ul>
                            {selectedFood.map((food) => (
                                <li key={food.id}>{food.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FoodList;
