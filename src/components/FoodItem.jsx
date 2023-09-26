import React from 'react';
import "./fooditems.css"

function FoodItem({ food, onClick }) {
    const handleFoodItemClick = () => {
        onClick(food);
    };

    const handleSelectButtonClick = (e) => {
        e.stopPropagation();
        alert(`Selected: ${food.name}`);
        onClick(food);
    };

    return (
        <div onClick={handleFoodItemClick}>
            <p>{food.name}</p>
            <button onClick={handleSelectButtonClick}>
                Select
            </button>
        </div>
    );
}

export default FoodItem;
