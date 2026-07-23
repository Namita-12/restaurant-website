import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">

      <div className="footer-container">

        <div className="footer-about">
          <h2>Aurelia</h2>
          <p>
            Experience the finest dining with delicious cuisine,
            elegant ambience and unforgettable memories.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#reservation">Reservation</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📍 Bangalore, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ hello@Aurelia.com</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Aurelia. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;