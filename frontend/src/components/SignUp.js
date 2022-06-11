import { useState } from 'react';
import '../css/SignUp.css'

const SignUp = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName:"",
        email:"",
        password:""
    })

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={"signup_container"} >
            <div className={"signup_form_container"}>
                <div className={"leftsignup"}>
                    <h1>Welcome Back</h1>
                    <a href = "/login">
                        <button type='button' className={"white_btnsignup"}>
                            Sign In
                        </button>
                    </a>
                </div>
                <div className={"rightsignup"}>
                    <form className={"form_containersignup"}>
                        <h1 className={"form_containersignup h1"}>Create Account</h1>
                        <input 
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            requiredclassname={"form_containersignup input"}
                        />
                        <input 
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            requiredclassname={"form_containersignup input"}
                        />
                        <input 
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            requiredclassname={"form_containersignup input"}
                        />
                        <input 
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            requiredclassname={"form_containersignup input"}
                        />
                        <button type="submit" className={"green_btnsignup"}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;