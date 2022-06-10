import React from 'react'
import { BrowserRouter as Router,useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Map from './MapContainer'
import Form from './AddressForm'

function AddressPage() {
  let navigate = useNavigate();

  function redirect () {
    navigate("/searchpage")
  }

  return (
      <div className="App">
        <Form />
        <Map />
        <div className='address-form'>
          <button onClick={redirect} className='complete-btn' id='complete-btn'>Complete</button>
        </div>
        <Footer />
      </div>
  );
}

export default AddressPage;
