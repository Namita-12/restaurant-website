import "../styles/hero.css";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Welcome to Foodie's Paradise</h1>

          <p>
            Experience delicious food, elegant ambiance, and unforgettable
            dining moments.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Reserve a Table</button>

            <button className="btn-secondary">View Menu</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;