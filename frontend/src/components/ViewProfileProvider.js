import { useNavigate } from "react-router-dom";
import { useState }  from "react";
import {
    Card,
    CardBody,
  } from "reactstrap";

const ViewProfileProvider = () => {
    return (
      <div className="profile" style={{display:'flex',justifyContent: 'left', width:'100%', paddingTop:'10pt', paddingBottom:'30pt'}}>
        
        <br></br>
        <div>
        <Card  className="profileCardView">
          <CardBody>
          <div>
          <h1>[Provider Name] Profile</h1>
          <p>
            <img src={require('../images/barber.jpg')} className="profileImage"/>
          </p>
        
          <p className="displayProfileLine" >Service Provider Name</p>
          <div>
          <p className="displayProfileLine" >Service provided one</p>
          <p className="displayProfileLine" >Service provided two</p>
          </div>
          <br></br>
          <p className="displayProfileLine" >Title</p>
          <p className="displayProfileLine" >Adress</p>
          <p className="displayProfileLine" >City</p>
          <p className="displayProfileLine" >Province</p>
          <p className="displayProfileLine" >Country</p>
          </div>
          <button className="appointmentButton">Book an appointment</button>
          </CardBody>  
        </Card>
        </div>
        
        <img src={require('../images/makeup.jpg')} className="profileUploadedImg"/>
        
        
        
      </div>
    );
  };
  export default ViewProfileProvider;