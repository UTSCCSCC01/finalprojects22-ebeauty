import { useEffect, useState } from "react";
import "../css/Login.css";
import useAuth from '../Authentication/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = ({ currentTarget: input }) => {
  //   setData({ ...data, [input.name]: input.value });
  // };
  function handleClick() {
    navigate('/onlyproviderview');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = { email, password };    
    if(!checked){
      // customer login
      await fetch("/api/customers/login-customer/", {
        method: "POST",
        body: JSON.stringify(fields),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => res.json())
      .then((res) => {
        if (res._id == null) {
          alert(`LOGIN FAILED with ${email}`);
        } else {
          const _id = res._id;
          const name = res.firstName + res.lastName;
          const role = [2]; 
          const token = res.token;
          setAuth({ _id, name, role, token });
          setError(null);
          setEmail("");
          setPassword("");
          alert(`LOGIN SUCCESS with ${email}`);
        }
      })  
    } else {
      // provider login
      await fetch("/api/providers/login", {
        method: "POST",
        body: JSON.stringify(fields),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => res.json())
      .then((res) => {
        if(res._id){
          const _id = res._id;
          const name = res.name;
          const password = res.password; 
          const role = [1]; 
          const token = res.token;
          setAuth({ _id, name, password, role, token });
          navigate(from, { replace: true });
          setEmail("");
          setPassword("");
          alert(`LOGIN SUCCESS with ${email}`);
        } else {
          alert(res.message)
        }
      })
    }
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="left">
          <form className="form_container" id="login-form">
            <h1 className="form_container h1">Login to Your Account</h1>
            {/* <h1 onClick={handleClick} style={{cursor:"pointer"}}>111</h1> */}
            <label className="checkbox_label">
              <input 
                type="checkbox"
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
                className="checkbox_provider"
                />
              Sign in as service provider
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="form_container input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="form_container input"
            />
            <button type="submit" className="green_btn" onClick={handleSubmit}>
              Login
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Here?</h1>
          <a href="/signup">
            <button type="button" className="white_btn">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
