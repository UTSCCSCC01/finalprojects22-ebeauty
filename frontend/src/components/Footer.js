import { Link } from "react-router-dom";
import "../css/index.css";

const Footer = () => {
  return (
    // <nav className="footer">
    //   <Link to="/">About Us</Link>
    //   <Link to="/">Contact Us</Link>
    // </nav>

    <div className="footer-container">
      <footer>
        <div className="footer-content">
          <div className="footer-content-container">
            <div className="footer-content-column">
              <span className="footer-content-title">Discover</span>
              <div className="footer-links">
                <Link to="/signup">Become a Service Provider</Link>
                
                <br />
                <a>Service By City</a>
                <br />
                <a>All Services</a>
                <br />
                <a>Help</a>
              </div>
            </div>
            <div className="footer-content-column">
              <span className="footer-content-title">Company</span>
              <div className="footer-links">
                <a>About Us</a>
                <br />
                <a>Careers</a>
                <br />
                <a>Press</a>
                <br />
                <a>Blog</a>
                <br />
                <a>Terms & Privacy</a>
              </div>
            </div>
            <div className="footer-content-column">
              <span className="footer-content-title">Follow Us</span>
              <div className="footer-links">
                <a>Instagram</a>                
                <br />
                <a>Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
