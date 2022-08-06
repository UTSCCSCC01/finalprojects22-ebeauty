import { useContext } from "react";
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from "../Authentication/AuthProvider";
import alerting from "../components/Alerting";
import '../css/index.css';
import '../css/Navbar.css';

const ProviderNavbar = () => {
  const { setAuth } = useContext(AuthContext);

  let navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  const logout = async () => {
    alerting("logged out successfully");
    setAuth({});
  }

  return (
    <nav className="navbar">
      <h1 onClick={handleClick}>Amorr</h1>
      <div className="links">
        <Link to="/providerservice">Your Services</Link>
        <Link to="/providerschedule" style={{marginRight:"10pt"}}>Schedules</Link>
        <button onClick={logout} className={'btn-toprightbutton'}>
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default ProviderNavbar;
