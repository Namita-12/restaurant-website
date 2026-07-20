import "../styles/menu.css";

import dish1 from "../assets/images/dish1.jpg";
import dish2 from "../assets/images/dish2.jpg";
import dish3 from "../assets/images/dish3.jpg";

const dishes = [
  {
    image: dish1,
    name: "Wild Mushroom Medley",
    price: "₹299",
  },
  {
    image: dish2,
    name: "Herb Grilled Chicken",
    price: "₹349",
  },
  {
    image: dish3,
    name: "Signature Chocolate Dome",
    price: "₹249",
  },
];
<div className="rating">★★★★★</div>

function Menu() {
  return (
    <section className="menu" id="menu">

      <h4>Our Menu</h4>

      <h2>Explore Our Signature Dishes</h2>

      <div className="menu-container">

        {dishes.map((dish, index) => (

          <div className="menu-card" key={index}>
<span className="badge">Chef's Special</span>
            <img src={dish.image} alt={dish.name} />

            <h3>{dish.name}</h3>

            <p>{dish.price}</p>

            <button>Order Now</button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Menu;