import { useState } from "react";
import logo from "../../assets/LOGO.svg";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }
      };

    return (
        <nav>
            <ul>
                <div className="logo">
                    <img onClick={() => scrollToSection("hero")} src={logo} alt="logo" />
                </div>
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li onClick={() => scrollToSection("services")}>Services</li>
                    <li onClick={() => scrollToSection("projects")}>Projects</li>
                    <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
                    <button className="contact-button" onClick={() => scrollToSection("contact")}>Contact</button>
                </div>
                <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;