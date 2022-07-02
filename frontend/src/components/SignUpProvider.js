import { useState }  from "react";
import { useNavigate } from "react-router-dom";

// reactstrap components
import {
  Form,
  Card,
  CardBody,
} from "reactstrap";

import '../css/providerRegister.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import alerting from "../helper/Alerting";


const SignUpProvider = () => {
  // controll show password
  const [passShow, setPassShow] = useState(false);
  const [confirmPass, setConfirmPassShow] = useState(false);


  //use for sign up states
  const [data, setData] = useState({
    name: "",
    email:"",
    phone: "",
    bill:"",
    postal:"",
    password:"", 
    confirmPassword: "",
    title:"Hairdress", 
    individual:"Yes",
    imageFilename:""
  })

  const handleChange = (input, fieldName) => {
      setData({...data, [fieldName]: input});
  };

  let navigate = useNavigate();
  // trigger when clicked sign up button
  function signUpForm(e){
    e.preventDefault();
    console.log(data);
    if(data.password != data.confirmPassword){
      alerting("passwords are not matching!", "danger");
    } else{
      //jump page
      navigate("/signupprovidertwo", {state: data}); 

      //reset fields
      e.target.reset();
    }
  }

  return (
    <div style={{display:'flex',justifyContent: 'center', paddingTop:'10pt', paddingBottom:'30pt'}}>
      <Card  className="Card">
          <Form onSubmit={signUpForm.bind(this)} className={"Form"}>
            <h1 className={"header"}>Create Account</h1>
            <input 
              type="text" 
              placeholder="Enter Name" 
              onChange={(e) => handleChange(e.target.value, "name")} 
              required
            />                            
            <input 
              type="email" 
              placeholder="Enter Email" 
              onChange={(e) => handleChange(e.target.value, "email")} 
              required
            />         
            <input 
              type="text" 
              placeholder="Enter Phone Number"
              onChange={(e) => handleChange(e.target.value, "phone")}  
              required 
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <div>
              <input 
                type="text" 
                placeholder="Billing Address" 
                onChange={(e) => handleChange(e.target.value, "bill")} 
                required
                className={"half-input leftside"}
              />
              <input 
                type="text" 
                placeholder="Postal Code" 
                onChange={(e) => handleChange(e.target.value, "postal")} 
                required
                className={"half-input"}
              />
            </div>
            <div className="input-pass-container" >
              <input 
                type={passShow ? "text" : "password"}
                placeholder="Enter password"
                onChange={(e) => handleChange(e.target.value, "password")} 
                required
                className="password"
              />
              {passShow ?
                <FontAwesomeIcon 
                  className={"toggleEye"} 
                  icon={faEyeSlash} 
                  onClick={(e) => {
                    e.preventDefault();
                    setPassShow(false);
                  }}
                />
              : 
                <FontAwesomeIcon 
                  className={"toggleEye"} 
                  icon={faEye} 
                  onClick={(e) => {
                    e.preventDefault();
                    setPassShow(true);
                  }}
                />              
              }
            </div>
            <div className="input-pass-container" >
              <input 
                type={confirmPass ? "text" : "password"}
                placeholder="Enter again password" 
                onChange={(e) => handleChange(e.target.value, "confirmPassword")} 
                required
                className="password"
              />
              {confirmPass ?
                <FontAwesomeIcon 
                  className={"toggleEye"} 
                  icon={faEyeSlash} 
                  onClick={(e) => {
                    e.preventDefault();
                    setConfirmPassShow(false);
                  }}
                />
              : 
                <FontAwesomeIcon 
                  className={"toggleEye"} 
                  icon={faEye} 
                  onClick={(e) => {
                    e.preventDefault();
                    setConfirmPassShow(true);
                  }}
                />              
              }
            </div>
            <button type="submit" className={"Button"}>
                Sign Up
            </button>
          </Form>
      </Card>
    </div>
  );
}
 
export default SignUpProvider;
