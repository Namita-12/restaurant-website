import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">🍽 Foodie's Paradise</div>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</Link>

        <Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About</Link>

        <Link to="menu" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Menu</Link>

        <Link to="gallery" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Gallery</Link>

        <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;