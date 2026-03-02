import { Link } from 'react-router-dom';
import icon from '../assets/Asset 2.svg';

export default function Header() {
  return (
    <header className="nav">
      <Link to="/" className="nav__logo" aria-label="Go to home">
        <img src={icon} alt="Flower Plant icon" />
        <span className="nav__brand">FlowerPlant</span>
      </Link>

      <nav className="nav__links" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/my-plants">My Plants</Link>
        <Link to="/about-us">About Us</Link>
      </nav>
    </header>
  );
}
