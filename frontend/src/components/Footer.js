import { Link } from "react-router-dom";
import '../css/index.css';

const Footer = () => {

  return (
    <nav className="footer">
      <Link to="/">About Us</Link>
      <Link to="/">Contact Us</Link>
    </nav>
  );
}
 
export default Footer;