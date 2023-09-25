import "./card.css";
import FoodButton from "./food-button";
import React, { useState } from "react";

const Card = ({ title, description, imageUrl }) => {
    const [count, setCount] = useState(0);

    const handleOrderClick = () => {
        setCount(count + 1);
    };
    return (

        <>

            <div class="card">
                <img src={imageUrl} alt="Card Image" />
                <div class="card-content">
                    <h2 class="card-title">{title}</h2>
                    <p class="card-text">{description}</p>
                    <button className="card-button" onClick={handleOrderClick}>
                        Order
                    </button>
                    <button className="count-button">
                        {count}
                    </button>

                </div>
            </div>


        </>

    )



}

export default Card