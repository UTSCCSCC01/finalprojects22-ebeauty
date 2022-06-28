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
    name: "",
    email:"",
    phone: "",
    bill:"",
    city:"",
    province: "",
    country:"",
    postal:"",
    password:"", 
    confirmPassword: "",
    title:"Hairdress", 
    individual:"Yes"
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
      alert("passwords are not matching!");
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
        <CardBody>
          <Form onSubmit={signUpForm.bind(this)} className="Form">
            <h3 >Sign Up As Service Provider</h3>
            <div>
              <input className={"sign line"} type="text" placeholder="Name" onChange={(e) => handleChange(e.target.value, "name")} required/>
              <input className={"sign line"} type="email" placeholder="Email" onChange={(e) => handleChange(e.target.value, "email")} required/>
              <input className={"sign line"} type="text" placeholder="Phone Number"onChange={(e) => handleChange(e.target.value, "phone")}  required onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}/>
              <input className={"sign line"} type="text" placeholder="Billing Address" onChange={(e) => handleChange(e.target.value, "bill")} required/>
              <input className="sign" type="text" placeholder="City" onChange={(e) => handleChange(e.target.value, "city")} required/>
              <input className="sign" type="text" placeholder="Province" onChange={(e) => handleChange(e.target.value, "province")} required/>
              <input className="sign" type="text" placeholder="Country" onChange={(e) => handleChange(e.target.value, "country")} required/>
              <input className="sign" type="text" placeholder="Postal Code" onChange={(e) => handleChange(e.target.value, "postal")} required/>
              <input className={"sign line"} type="password" placeholder="Enter password" onChange={(e) => handleChange(e.target.value, "password")} required/>
              <input className={"sign line"} type="password" placeholder="Enter again password" onChange={(e) => handleChange(e.target.value, "confirmPassword")} required/>
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
