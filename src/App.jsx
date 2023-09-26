import Nav from "./components/nav";
import Banner from "./components/banner";
import Card from "./components/card";
import "./components/card.css";
import SignupForm from "./components/signup-form";
import FoodList from './components/FoodList';

function App() {
  const cardData = [
    {
      id: 1,
      title: "Burger",
      description: "Bu Bu Burger",
      imageUrl: "https://images.news18.com/ibnlive/uploads/2023/08/untitled-2023-08-01t135356.080-16908783073x2.jpg?impolicy=website&width=510&height=356"
    },
    {
      id: 2,
      title: "Pizza",
      description: "Pee Pee Pizzaaa",
      imageUrl:
        "https://c8.alamy.com/comp/KWJ0JE/portrait-of-happy-attractive-cook-with-a-pizza-in-studio-an-a-black-KWJ0JE.jpg"
    },
    {
      id: 3,
      title: "Swarma",
      description: "Swa Swa Swarma",
      imageUrl:
        "https://thumbs.dreamstime.com/b/hungry-kid-eating-shawarma-restaurant-terrace-254304871.jpg"
    },
  ];

  return (
    <>
      <div>
        <Nav />
        <div>
          <Banner />
        </div>
        <div className="card-parent">
          {cardData.length > 0 &&
            cardData.map((card, i) => {
              return (
                <div key={card.id}>
                  <Card
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}

                  />
                </div>
              );
            })}
        </div>

        < SignupForm />

        <FoodList />
      </div>
    </>
  );
}

export default App;
