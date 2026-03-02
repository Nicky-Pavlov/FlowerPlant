import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/my-plants">My Plants</Link>&nbsp;&nbsp;
        <Link to="/about-us">About Us</Link>
      </nav>
    </header>
  );
}
