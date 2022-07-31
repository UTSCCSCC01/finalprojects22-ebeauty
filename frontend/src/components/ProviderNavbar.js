import { useContext } from "react";
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from "../Authentication/AuthProvider";
import '../css/index.css';
import '../css/Navbar.css';

const ProviderNavbar = () => {
  const { setAuth } = useContext(AuthContext);

  let navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  const logout = async () => {
    setAuth({});
  }

  return (
    <nav className="navbar">
      <h1 onClick={handleClick}>Amorr</h1>
      <div className="links">
        <Link to="/providerschedule">Schedules</Link>
        <button onClick={logout} className={'toprightbotton'}>
          provider sign out
        </button>
      </div>
    </nav>
  );
};

export default ProviderNavbar;
