import { useNavigate } from "react-router-dom";
import { useState }  from "react";
import {
    Card,
    CardBody,
  } from "reactstrap";

const ProfileProvider = () => {

    const [Name, setName] = useState("");
    const [ServiceOne, setServiceOne] = useState("");
    const [ServiceTwo, setServiceTwo] = useState("");
    const [Title, setTitle] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Adress, setAdress] = useState("");
    const [City, setCity] = useState("");
    const [Province, setProvince] = useState("");
    const [Country, setCountry] = useState("");
    const [PostalCode, setPostalCode] = useState("");
    const [CurrentPassword, setCurrentPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [NewPassword, setNewPassword] = useState("");

    return (
      <div className="profile" style={{display:'flex',justifyContent: 'center', paddingTop:'10pt', paddingBottom:'30pt'}}>
        
        <br></br>
        <Card  className="profileCard">
          <h1>My Profile</h1>
          <p>
            <img src={require('../images/barber.jpg')} className="image-barber"/>
            <button>Change Profile Picture</button>
          </p>
        
          <input className="profileInfoLine" type="text" placeholder="Service Provider Name" onChange={ (e) => setName(e.target.value)}/>
          <input className="profileBasicInfo" type="text" placeholder="Service provided one" onChange={ (e) => setServiceOne(e.target.value)}/>
          <input className="profileBasicInfo" type="text" placeholder="Service provided two" onChange={ (e) => setServiceTwo(e.target.value)}/>
          <br></br>
          <input className="profileBasicInfo" type="text" placeholder="Title" onChange={ (e) => setTitle(e.target.value)}/>
          <input className="profileBasicInfo" type="text" placeholder="Phone Number" onChange={ (e) => setPhoneNumber(e.target.value)}/>
          <input className="profileInfoLine" type="text" placeholder="Adress" onChange={ (e) => setAdress(e.target.value)}/>
          <input className="profileBasicInfo" type="text" placeholder="City" onChange={ (e) => setCity(e.target.value)}/>
          <input className="profileBasicInfo" type="text" placeholder="Province" onChange={ (e) => setProvince(e.target.value)}/>
          <input className="profileBasicInfo" type="text" placeholder="Country" onChange={ (e) => setCountry(e.target.value)}/>
          <input className="profileBasicInfo" type="text" placeholder="Postal Code" onChange={ (e) => setPostalCode(e.target.value)}/>
          <p>
            <button>Save Edit on profile</button>
            <button>Cancel</button>
          </p>

          <p>
            <button>Upload more photos for display</button>
          </p>

          <h3>Account Info</h3>
          <input className="profileInfoLine" type="text" placeholder="Email" onChange={ (e) => setEmail(e.target.value)}/>
          <h3>Change Password</h3>
          <input className="profileInfoLine" type="text" placeholder="Current Password" onChange={ (e) => setCurrentPassword(e.target.value)}/>
          <input className="profileInfoLine" type="text" placeholder="New Password" onChange={ (e) => setNewPassword(e.target.value)}/>
          <button className="ProfileButton">Edit password</button>
        </Card>
      </div>
    );
  };
  export default ProfileProvider;