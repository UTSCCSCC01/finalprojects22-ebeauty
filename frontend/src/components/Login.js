import { useState } from 'react';
import '../css/Login.css'

const Login = () => {
    const [data, setData] = useState({
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
        <div className={"login_container"} >
            <div className={"login_form_container"}>
                <div className={"left"}>
                <form className={"form_container"}>
                    <h1 className={"form_container h1"}>Login to Your Account</h1>
                    <input 
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        requiredclassName={"form_container input"}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        requiredclassName={"form_container input"}
                    />
                    <button type="submit" className={"green_btn"}>
                        Login
                    </button>
                </form>
            </div>
            <div className={"right"}>
                <h1>New Here?</h1>
                    <a href = "/signup">
                        <button type='button' className={"white_btn"}>
                            Sign Up
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Login;
