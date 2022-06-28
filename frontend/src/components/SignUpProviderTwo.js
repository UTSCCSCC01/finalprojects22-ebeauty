import { useEffect, useState  }  from "react";
import { useNavigate, useLocation } from "react-router-dom";
// reactstrap components
import {
  Form,
  Card,
  CardBody,
} from "reactstrap";
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import '../css/providerRegister.css'
import axios from 'axios';

const SignUpProviderTwo = () => {
  // read passed in data
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(location.state);

  const handleChange = (input, fieldName) => {
    setData({...data, [fieldName]: input.value});
  };

  // post data to register provider
  const signUp = async () => {
    await axios.post('http://localhost:5000/api/providers',data)
    .then(response => {
      alert("Created!");
      console.log(response);
    })
    .catch(err => {
      if(err.response.data.message)
        alert(err.response.data.message);
      else 
        alert(err.message);
    });
  };

// trigger when clicked sign up button
  function signUpForm(e){
    if (!data || Object.values(data).includes("")){
      alert("there's field you didn't input!")
    } else {
      signUp();
      navigate("/");
    }
    e.preventDefault();
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
                onChange={(option) => handleChange(option, "Title")}
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
                onChange={(option) => handleChange(option, "Individual")}
              />
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
 
export default SignUpProviderTwo;
