import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';

function FoodMenu() {
    const [menuData, setMenuData] = useState([]);
    const { cart } = useCart();


    useEffect(() => {
        setMenuData(cart);
    }, [cart]);

    return (
        <div>
            <h2>Food Menu</h2>
            <ul>
                {menuData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default FoodMenu;
