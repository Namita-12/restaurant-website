import "../styles/gallery.css";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

function Gallery() {
  return (
    <section className="gallery" id="gallery" data-aos="fade-up">

      <h4>Our Gallery</h4>
      <h2>Discover Our Restaurant</h2>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
    <img src={image} alt={`Gallery ${index + 1}`} />

    <div className="gallery-overlay">
        <h3>Aurelia</h3>
    </div>
</div>
        ))}
      </div>

    </section>
  );
}

export default Gallery;