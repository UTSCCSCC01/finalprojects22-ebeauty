import { Link } from "react-router-dom";
import '../css/index.css';

const Footer = () => {

  return (
    // <nav className="footer">
    //   <Link to="/">About Us</Link>
    //   <Link to="/">Contact Us</Link>
    // </nav>

    <div className="footer-container">
      <footer>
        <div className="footer-social">
          <div className="footer-social-container">
            <span>Follow Us!</span>
            <a>Instagram</a>
            <a>Facebook</a>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-content-container">
            <div className="footer-content-column">
              <span className="footer-content-title">Discover</span>
              <div className="footer-links">
                <a>Become a Service Provider</a><br/>
                <a>Service By City</a><br/>
                <a>All Services</a><br/>
                <a>Help</a>
              </div>
            </div>
            <div className="footer-content-column">
              <span className="footer-content-title">Company</span>
              <div className="footer-links">
                <a>About Us</a><br/>
                <a>Careers</a><br/>
                <a>Press</a><br/>
                <a>Blog</a><br/>
                <a>Terms & Privacy</a>
              </div>
            </div>
          </div>
        </div>



      </footer>

    </div>
  );
}
 
export default Footer;