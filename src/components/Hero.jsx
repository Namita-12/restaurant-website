import "../styles/hero.css";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">

          

          <h1>
            An Elevated <br />
            Dining Experience
          </h1>

          <p className="hero-description">
            Discover handcrafted dishes made with the finest ingredients,
            exceptional flavors, and warm hospitality that transforms every
            meal into an unforgettable experience.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Book Now</button>
            <button className="btn-secondary">Explore Menu</button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;