import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">FakePosts</Link>
    </nav>
  );
};

export default Navbar;
