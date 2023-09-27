
import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([

    ]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    };

    const contextValue = {
        cart,
        addToCart,
        removeFromCart,
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
