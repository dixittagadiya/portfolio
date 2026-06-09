import { useState } from "react";
import "./Navbar.css";
import {
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Dixit<span>.</span>
      </a>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <a
            href="/Dixit_Resume.pdf"
            download="Dixit_Tagadiya_Resume.pdf"
            className="resume-btn mobile-btn"
          >
            <FaDownload />
            Resume
          </a>
        </li>
      </ul>

      <a
        href="/Dixit_Resume.pdf"
        download="Dixit_Tagadiya_Resume.pdf"
        className="resume-btn desktop-btn"
      >
        <FaDownload />
        Download Resume
      </a>

      <div
        className="menu-icon"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        {menuOpen ? (
          <FaTimes />
        ) : (
          <FaBars />
        )}
      </div>
    </nav>
  );
}

export default Navbar;