import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Form from './components/AddressForm'
import Footer from './components/Footer'
import Map from './components/MapContainer';

function AddressPage() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Form />
      <Map />
      <div className='address-form'>
        <button onClick={{}} className='complete-btn' id='complete-btn'>Complete</button>
      </div>
      <Footer />
      </div>
    </Router>
  );
}

export default AddressPage;
