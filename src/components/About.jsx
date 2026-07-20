import "../styles/about.css";
import galleryImage from "../assets/images/gallery1.jpg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-text">

        <div className="section-title">
          <span></span>
          <p>About Us</p>
          <span></span>
        </div>

        <h2>
          We Serve Good Food &
          <br />
          Create Great Memories
        </h2>

        <p>
          At Foodie's Paradise, we believe that good food brings people together.
          Our chefs craft each dish with love and the finest ingredients to give
          you an unforgettable dining experience.
        </p>

        <button>Learn More About Us</button>

      </div>

      <div className="about-image">
        <img src={galleryImage} alt="Restaurant" />
      </div>

    </section>
  );
}

export default About;