import { useState } from 'react';
import '../css/SignUp.css'

const SignUp = () => {
  const [error, setError] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [data, setData] = useState({
  //     firstName: "",
  //     lastName:"",
  //     email:"",
  //     password:""
  // })

  // const handleChange = ({currentTarget: input}) => {
  //     setData({...data, [input.name]: input.value});
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = { firstName, lastName, email, password };

    const response = await fetch("/api/register-customer/", {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }

  return (
      <div className={"signup_container"} >
          <div className={"signup_form_container"}>
              <div className={"leftsignup"}>
                  <h1>Welcome Back</h1>
                  <a href = "/login">
                      <button type='button' className={"white_btnsignup"}>
                          Sign In
                      </button>
                  </a>
              </div>
              <div className={"rightsignup"}>
                  <form className={"form_containersignup"}>
                      <h1 className={"form_containersignup h1"}>Create Account</h1>
                      <input 
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
                          value={firstName}
                          requiredclassname={"form_containersignup input"}
                      />
                      <input 
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                          value={lastName}
                          requiredclassname={"form_containersignup input"}
                      />
                      <input 
                          type="email"
                          placeholder="Email"
                          name="email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          value={email}
                          requiredclassname={"form_containersignup input"}
                      />
                      <input 
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          value={password}
                          requiredclassname={"form_containersignup input"}
                      />
                      <button type="submit" className={"green_btnsignup"} onClick={handleSubmit}>
                          Sign Up
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}
 
export default SignUp;