import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Dixit</h2>

      <ul>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;