import React, { useState, useEffect } from "react";
import alerting from "../helper/Alerting";
import FormData from 'form-data'
import axios from 'axios';
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const SignUpProviderThree = () => {
  const navigate = useNavigate();
  // data from pages before.
  const location = useLocation();
  const [data, setData] = useState(location.state);

  const [selectedImage, setSelectedImage] = useState(null);
  let image = new FormData();
  useEffect(() => {
    image = new FormData();
    image.append('file', selectedImage);
  }, [selectedImage]);

  
  const handleChange = (input, fieldName) => {
    setData({...data, [fieldName]: input.value});
  };

  // post data to register provider
  const signUp = async () => {
    await axios.post('http://localhost:5000/api/providers',data)
    .then(response => {
      alerting("Created!", "info");
      console.log(response);
    })
    .catch(err => {
      if(err.response.data.message)
        alerting(err.response.data.message, "danger");
      else 
        alerting(err.message, "danger");
    });
  };

  // post data to register provider
  const submit = async () => {
    if(!data || !selectedImage){
      alerting("there's field you didn't input!", "danger")
    } else {
      await axios.post('http://localhost:5000/file/upload',image, 
        {headers:{
          'Content-Type': `multipart/form-data`,
        }}
      ).then(response => {
        handleChange(response.data.image_id, "imageFilename");
        signUp();
        navigate("/");
      })
      .catch(err => {
        if(err.response.data.message)
          alerting(err.response.data.message, "danger");
        else 
          alerting(err.message, "danger");
      });
    }
  };
  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      <button onClick={(e) => submit(e)}>finish</button>
    </div>
  );
};

export default SignUpProviderThree;