import React from 'react';
import "./fooditems.css";
import { useCart } from "../contexts/CartContext";

function FoodItem({ food }) {
    // Use the useCart hook to access cart functions
    const { cart, addToCart } = useCart();

    const handleFoodItemClick = () => {
        // Notify the parent component about the selection
        addToCart(food);
    };

    const handleSelectButtonClick = (e) => {
        // e.stopPropagation();
        // alert(`Selected: ${food.name}`);

        // Use the addToCart function to add the selected food to the cart
        addToCart(food);
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
