import "./card.css";
import Button from "./button";
import React, { useState } from "react";

const Card = ({ title, description, imageUrl }) => {
    const [count, setCount] = useState(0);

    const handleOrderClick = () => {
        setCount(count + 1);
    };
    return (

        <>
            <div className="card-section">
                <div className="card">
                    <img src={imageUrl} alt="Card Image" />
                    <div className="card-content">
                        <h2 className="card-title">{title}</h2>
                        <p className="card-text">{description}</p>
                        <Button text="Order" className="card-button" onClick={handleOrderClick} />

                        <Button text={count} className="count-button" onClick={() => alert("Count Clicked!")} />

                    </div>
                </div>
            </div>



        </>

    )



}

export default Card