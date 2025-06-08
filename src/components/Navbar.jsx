import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📚 Aprender React
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              🏠
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/converter" className="navbar-link">
              💱
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/temperature" className="navbar-link">
              🌡️
            </Link>
          </li>          <li className="navbar-item">
            <Link to="/rectangle" className="navbar-link">
              📐
            </Link>
          </li>          <li className="navbar-item">
            <Link to="/travel" className="navbar-link">
              ✈️
            </Link>
          </li>          <li className="navbar-item">
            <Link to="/posts" className="navbar-link">
              📝
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/teleprompter" className="navbar-link">
              🎬
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
