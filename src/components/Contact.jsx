import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <h4>Contact Us</h4>
      <h2>Visit Aurelia</h2>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>MG Road, Bangalore, Karnataka</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>info@Aurelia.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Opening Hours</h3>
            <p>Mon - Sun</p>
            <p>11:00 AM – 11:00 PM</p>
          </div>

        </div>

        <div className="map">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps?q=MG+Road+Bangalore&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;