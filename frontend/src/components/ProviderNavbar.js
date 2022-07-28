import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
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
        <button onClick={logout} className={'toprightbotton'}>
          sign out
        </button>
      </div>
    </nav>
  );
};

export default ProviderNavbar;
