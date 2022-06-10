import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Form from './components/AddressForm'
import Footer from './components/Footer'

function AddressPage() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Form />
      <Footer />
      </div>
    </Router>
  );
}

export default AddressPage;
