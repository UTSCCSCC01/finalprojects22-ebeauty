import { useState }  from "react";
import { useNavigate } from "react-router-dom";
// reactstrap components
import {
  Form,
  Card,
  CardBody,
} from "reactstrap";

import '../css/providerRegister.css'



const SignUpProvider = () => {
  
  //use for sign up states
  const [data, setData] = useState({
    FirstName: "",
    LastName:"",
    Email:"",
    Phone: "",
    Bill:"",
    City:"",
    Province: "",
    Country:"",
    Postal:"",
    Password:"", 
    title:"", 
    Individual:""
  })

  const handleChange = (input, setVariable) => {
      setData({...data, [setVariable]: input});
  };


  let navigate = useNavigate();
  // trigger when clicked sign up button
  function signUpForm(e){
    console.log(data);
    e.preventDefault();

    //jump page
    navigate("/signupprovidertwo"); 

    //reset fields
    e.target.reset();
  }

  return (
    <div style={{display:'flex',justifyContent: 'center', paddingTop:'10pt', paddingBottom:'30pt'}}>
      <Card  className="Card">
        <CardBody>
          <Form onSubmit={signUpForm.bind(this)} className="Form">
            <h3 >Sign Up As Service Provider</h3>
            <div>
              <input className="sign" type="text" placeholder="First Name" onChange={(e) => handleChange(e.target.value, "FirstName")} required/>
              <input className="sign" type="text" placeholder="Last Name" onChange={(e) => handleChange(e.target.value, "LastName")} required/>
              <input className={"sign line"} type="email" placeholder="Email" onChange={(e) => handleChange(e.target.value, "Email")} required/>
              <input className={"sign line"} type="text" placeholder="Phone Number"onChange={(e) => handleChange(e.target.value, "Phone")}  required onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}/>
              <input className={"sign line"} type="text" placeholder="Billing Address" onChange={(e) => handleChange(e.target.value, "Bill")} required/>
              <input className="sign" type="text" placeholder="City" onChange={(e) => handleChange(e.target.value, "City")} required/>
              <input className="sign" type="text" placeholder="Province" onChange={(e) => handleChange(e.target.value, "Province")} required/>
              <input className="sign" type="text" placeholder="Country" onChange={(e) => handleChange(e.target.value, "Country")} required/>
              <input className="sign" type="text" placeholder="Postal Code" onChange={(e) => handleChange(e.target.value, "Postal")} required/>
              <input className={"sign line"} type="password" placeholder="Enter password" onChange={(e) => handleChange(e.target.value, "Password")} required/>
            </div>
            <div className="center">
              <button className={"Button"} type="submit">Next Step</button>
            </div>
          </Form>

        </CardBody>
      </Card>
    </div>
  );
}
 
export default SignUpProvider;
