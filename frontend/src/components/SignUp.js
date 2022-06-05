import { useState }  from "react";
// reactstrap components
import {
  Form,
  Card,
  CardBody,
} from "reactstrap";




const SignUp = () => {
  
  //use for sign up states
  const [UpUser, setUpUser] = useState("");
  const [UpPass, setUpPass] = useState("");
  const [UpEmail, setUpEmail] = useState("");


  // trigger when clicked sign up button
  function signUpForm(e){
    e.preventDefault();
    //reset fields
    e.target[0].value = ''; 
    e.target[1].value = '';
    e.target[2].value = '';
  }

  return (
    <div style={{display:'flex',justifyContent: 'center', paddingTop:'10pt', paddingBottom:'30pt'}}>
      <Card  className="Card">
        <CardBody>
          <Form onSubmit={signUpForm.bind(this)} className="Form">
            <h3 >Sign Up</h3>
            <div>
              <input className="sign" type="text" placeholder="First Name" onChange={ (e) => setUpEmail(e.target.value)}/>
              <input className="sign" type="text" placeholder="Last Name" onChange={ (e) => setUpPass(e.target.value)}/>
              <input className={"sign line"} type="email" placeholder="Email" onChange={ (e) => setUpPass(e.target.value)}/>
              <input className={"sign line"} type="text" placeholder="Phone Number" onChange={ (e) => setUpPass(e.target.value)} onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}/>
              <input className={"sign line"} type="text" placeholder="Billing Address" onChange={ (e) => setUpPass(e.target.value)}/>
              <input className="sign" type="text" placeholder="City" onChange={ (e) => setUpPass(e.target.value)}/>
              <input className="sign" type="text" placeholder="Province" onChange={ (e) => setUpPass(e.target.value)}/>
              <input className="sign" type="text" placeholder="Country" onChange={ (e) => setUpPass(e.target.value)}/>
              <input className="sign" type="text" placeholder="Postal Code" onChange={ (e) => setUpPass(e.target.value)}/>
              <input className={"sign line"} type="password" placeholder="Enter password" onChange={ (e) => setUpPass(e.target.value)}/>
            </div>
            <button className={"Button"} type="submit">Sign Up</button>
          </Form>

        </CardBody>
      </Card>
    </div>
  );
}
 
export default SignUp;
