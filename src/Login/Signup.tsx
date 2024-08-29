import React, { useState } from "react";

import user_i from '../assets/person.png'
import email_i from '../assets/email.png'
import password_i from '../assets/password.png'
import './Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate()
    // const switchAct = () => {
    //     if (action === "Sign Up")
    //         setAction("Log In")
    //     else setAction("Sign Up")
    // };
    // async function submit(e: Event) {
    //     e.preventDefault();
    //     try {
    //         await axios.post("http://localhost:5000",{
    //             email, password
    //         }
    //         )
    //     }
    //     catch(e) {
    //         console.log(e); 
    //     }
    // }
    const BacktoLogin = () => {
        navigate('/')
    }
    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.post("http://localhost:5000/user",{name, email, password})
        .then(result => {console.log(result)
            if (result) BacktoLogin()
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="container container-fluid">
            <div className="header">
                <div className = "text ">Sign Up</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={HandleSubmit}>

            <div className="inputs">
                <div className="input">
                    <img src={user_i} alt=""/>
                    <input type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}}/>
                </div>
                
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
            <div className="submit-container">
                <div className="submit gray" onClick={BacktoLogin}>Back to Log In</div>
                <button className="submit" type="submit">Sign Up</button>   
    
            </div>
            
            </form>
            {/* <div className="text">{email}  {password}</div> */}
        </div>
    )
} 

export default Signup; 