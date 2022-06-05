import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../css/index.css';

const Navbar = () => {

  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <nav className="navbar">
      <h1 onClick={handleClick}>eBeauty</h1>
      <div className="links">
        <Link to="/">Service</Link>
        <Link to="/">Find a Job</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup" className={"toprightbotton"}>Sign Up</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;