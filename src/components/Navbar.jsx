import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
         Foodie's Paradise
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="menu" smooth={true} duration={500} onClick={closeMenu}>
            Menu
          </Link>
        </li>

        <li>
          <Link to="gallery" smooth={true} duration={500} onClick={closeMenu}>
            Gallery
          </Link>
        </li>

        <li>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>

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