import React, { useState, useEffect } from "react";
import alerting from "../components/Alerting";
import FormData from 'form-data'
import { useNavigate, useLocation } from "react-router-dom";


/**
 * bug: the react-alerting stuff does not show all error
 * and the email should be unique, we did not show that out, this might throw error
 */


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

  // loading the usestate of selectedImage (it won't work is we don't use this, if we directly do signUp inside submit, the field would be blank "")
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!loading) {
      signUp();
    }
  }, [loading]);

  const handleChange = (input, fieldName) => {
    setData({...data, [fieldName]: input});
    setLoading(false);
  };


  // post data to register provider
  const signUp = async () => {
    console.log("frontned",data)
    await fetch('/api/providers',{
      method: "POST",
      body: JSON.stringify(data),
      headers:{          
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      alerting("Created!", "info");
      navigate("/");
    })
    .catch(err => {
      if(err.response.data.message)
        alerting(err.response.data.message, "danger");
      else
        alerting(err.message, "danger");
    });
  };

  // post data to register provider
  // post image first here
  const submit = async () => {
    if(!data || !selectedImage){
      alerting("there's field you didn't input!", "danger")
    } else {
      await fetch("/file/upload/", {
        method: "POST",
        body: image,
      })
      .then(response => response.json())
      .then(response => {
        // here we do the post of provider signup
        handleChange(response.image_id, "imageFilename");
      })
      .catch(err => {
        if(err.response)
          alerting(err.response.data.message, "danger");
        else
          alerting(err.message, "danger");
      });
    }
  };

  
  return (
    <div>
      <h1>Upload your profile image!</h1>
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
        style={{color:"transparent"}}
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