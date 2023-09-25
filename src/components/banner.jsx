import "./banner.css";
import FoodButton from "./food-button";

const Banner = () => {

    return (

        <>

            <div className="banner">
                <div className="banner-left">
                    <div className="search-wrapper">
                        <h1>It's the food and groceries you love, delivered</h1>
                        <div className="search-parent">
                            <div className="search-left">
                                <input type="text" />
                            </div>

                            <div className="search-right">
                                <FoodButton />
                            </div>
                        </div>
                    </div>

                </div>


                <div className="banner-right">
                    <img src="../src/assets/panda.jpg" alt="" />
                </div>
            </div>

        </>

    )



}

export default Banner