import { useState }  from "react";
// reactstrap components
import {
  Form,
  Card
} from "reactstrap";




const LogIn = () => {
  
  //use for sign up states
  const [UpUser, setUpUser] = useState("");
  const [UpPass, setUpPass] = useState("");
  const [UpEmail, setUpEmail] = useState("");


  // trigger when clicked sign up button
  function logInForm(e){
    e.preventDefault();
    //reset fields
    e.target[0].value = ''; 
    e.target[1].value = '';
    e.target[2].value = '';
  }



  return (
    <div style={{display:'flex',justifyContent: 'center', paddingTop:'10pt', paddingBottom:'30pt'}}>
      <Card className="Card">
        <Form onSubmit={logInForm.bind(this)} className="Form">
          <h3 style={{width:"100%"}}>Login to Continue</h3>
          <div>
            <input className={"sign line"} type="email" placeholder="Email" onChange={ (e) => setUpPass(e.target.value)}/>
            <input className={"sign line"} type="password" placeholder="Password" onChange={ (e) => setUpPass(e.target.value)}/>
          </div>
          <div className="center">
            <button className={"Button"} type="submit">Log In</button>
          </div>
          <div className="center">
            <a >no account? sign up <a href="/signup" style={{color:'blue'}}>here</a></a>
          </div>
        </Form>
      </Card>
    </div>
  );
}
 
export default LogIn;
