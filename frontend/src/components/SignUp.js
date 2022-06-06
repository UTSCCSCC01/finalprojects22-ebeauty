import { useState }  from "react";
// reactstrap components
import {
  Form,
  Card,
  CardBody,
} from "reactstrap";




const SignUp = () => {
  
  //use for sign up states
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Bill, setBill] = useState("");
  const [City, setCity] = useState("");
  const [Province, setProvince] = useState("");
  const [Country, setCountry] = useState("");
  const [Postal, setPostal] = useState("");
  const [Password, setPassword] = useState("");

  // trigger when clicked sign up button
  function signUpForm(e){
    e.preventDefault();
    //reset fields
    e.target[0].value = ''; 
    e.target[1].value = '';
    e.target[2].value = '';
    e.target[3].value = ''; 
    e.target[4].value = '';
    e.target[5].value = '';
    e.target[6].value = ''; 
    e.target[7].value = '';
    e.target[8].value = '';
    e.target[9].value = ''; 
  }

  return (
    <div style={{display:'flex',justifyContent: 'center', paddingTop:'10pt', paddingBottom:'30pt'}}>
      <Card  className="Card">
        <CardBody>
          <Form onSubmit={signUpForm.bind(this)} className="Form">
            <h3 >Sign Up</h3>
            <div>
              <input className="sign" type="text" placeholder="First Name" onChange={ (e) => setFirstName(e.target.value)}/>
              <input className="sign" type="text" placeholder="Last Name" onChange={ (e) => setLastName(e.target.value)}/>
              <input className={"sign line"} type="email" placeholder="Email" onChange={ (e) => setEmail(e.target.value)}/>
              <input className={"sign line"} type="text" placeholder="Phone Number" onChange={ (e) => setPhone(e.target.value)} onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}/>
              <input className={"sign line"} type="text" placeholder="Billing Address" onChange={ (e) => setBill(e.target.value)}/>
              <input className="sign" type="text" placeholder="City" onChange={ (e) => setCity(e.target.value)}/>
              <input className="sign" type="text" placeholder="Province" onChange={ (e) => setProvince(e.target.value)}/>
              <input className="sign" type="text" placeholder="Country" onChange={ (e) => setCountry(e.target.value)}/>
              <input className="sign" type="text" placeholder="Postal Code" onChange={ (e) => setPostal(e.target.value)}/>
              <input className={"sign line"} type="password" placeholder="Enter password" onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div className="center">
              <button className={"Button"} type="submit">Sign Up</button>
            </div>
          </Form>

        </CardBody>
      </Card>
    </div>
  );
}
 
export default SignUp;
