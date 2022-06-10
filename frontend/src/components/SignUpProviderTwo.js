import { useState }  from "react";
import { useNavigate } from "react-router-dom";
// reactstrap components
import {
  Form,
  Card,
  CardBody,
} from "reactstrap";
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';


const SignUpProviderTwo = () => {
  
  //use for sign up states
  const [WprkType, setWprkType] = useState("");
  const [Individual, setIndividual] = useState("");

  // trigger when clicked sign up button
  function signUpForm(e){
    e.preventDefault();
    //reset fields
    e.target[0].value = '';
  }

  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }


  return (
    <div style={{display:'flex',justifyContent: 'center', paddingTop:'10pt', paddingBottom:'30pt'}}>
      <Card  className="Card">
        <CardBody>
          <Form onSubmit={signUpForm.bind(this)} className="Form" style={{display:'flex',justifyContent: 'center'}}>
            <h3 >What kind of work are you planning to serve?</h3>
            {/*https://iambumblehead.github.io/react-dropdown-now/?path=/story/docs-introduction--page */}
            <div className="center">
              <Dropdown
                placeholder="Hairdress"
                options={['Hairdress', 'Barber', 'Clean', 'Landscape', 'Massage', 'Makeup', 'Eyebrow Eyelash Tech']}
                value="Hairdress"
                onChange={(value) => console.log('change!', value)}
              />
            </div>
            {/*
              onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
              onOpen={() => console.log('open!')}  */}
            <h3 >Are You Individual?</h3>
            <div className="center">
              <Dropdown
                placeholder="Yes"
                options={['Yes', 'No']}
                value="Yes"
                onChange={(value) => console.log('change!', value)}
              />
            </div>
            <div className="center">
              <button className={"Button"} onClick={handleClick} type="submit">Next Step</button>
            </div>
          </Form>

        </CardBody>
      </Card>
    </div>
  );
}
 
export default SignUpProviderTwo;
