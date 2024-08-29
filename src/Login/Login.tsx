import { useState } from "react";

import user_i from '../assets/person.png'
import email_i from '../assets/email.png'
import password_i from '../assets/password.png'
import './Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {

    const [action, setAction] = useState("Log In");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const HandleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
        e.preventDefault()
        axios.post("http://localhost:5000/login",{email, password})
        .then(result => {
            console.log(result)
            if (result.data === "Success") {
                navigate('/home')
            }
            else {
                alert(result.data)
            }
        })
        .catch(err => console.log(err))
    }
    
    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <div className="container container-fluid">
            <div className="header">
                <div className = "text ">{action}</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={HandleSubmit}>
            <div className="inputs">
                {action === "Sign Up" && <div className="input">
                    <img src={user_i} alt=""/>
                    <input type="text" placeholder="Name"/>
                </div>}
                
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_i} alt=""/>
                    <input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={password_i} alt=""/>
                    <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
            </div>
            {action === "Log In" && <div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
            <div className="submit-container">
                <div className="submit   gray" onClick={handleSignupClick}>Sign Up</div>
                <div className="submit" onClick={HandleSubmit}>Log In</div>
            </div>  
            <button className="btn" type="submit" style ={{display : 'none'}}>Submit</button>
            </form>
            {/* <div className="text">{email}  {password}</div> */}
        </div>
    )
} 

export default Login; 