import { useNavigate } from "react-router-dom";
import { useState }  from "react";
import {
    Card,
    CardBody,
  } from "reactstrap";

const ViewProfileProvider = () => {
    return (
      <div className="profile" style={{display:'flex',justifyContent: 'center', paddingTop:'10pt', paddingBottom:'30pt'}}>
        
        <br></br>
        <Card  className="profileCard">
          <h1>[Provider Name] Profile</h1>
          <p>
            <img src={require('../images/barber.jpg')} className="image-barber"/>
            
          </p>
        
          <h3 className="displayProfileLine" >Service Provider Name</h3>
          <p className="displayProfileLine" >Service provided one</p>
          <p className="displayProfileLine" >Service provided two</p>
          <br></br>
          <p className="displayProfileLine" >Title</p>
          <p className="displayProfileLine" >Adress</p>
          <p className="displayProfileLine" >City</p>
          <p className="displayProfileLine" >Province</p>
          <p className="displayProfileLine" >Country</p>    
        </Card>
      </div>
    );
  };
  export default ViewProfileProvider;