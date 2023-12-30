import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="sidebarContainer">
        <ul>
          <Link to="/">Home</Link>

          <Link to="/About">About Me</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/work">Work</Link>
          <Link to="/inspiration">Inspiration</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
