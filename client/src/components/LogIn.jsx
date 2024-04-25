import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const LogIn = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/log-in', {email, password} )
        .then(result => 
            {console.log(result)
            if(result.data === "Success!!"){
                navigate('/') }
            })
        .catch(err => console.error(err))
    }
    
    return (
      <div className="containersignup">
        <div className="signup-form">
            <h2 className="form-title">Log In</h2>
            <form method="POST" className="register-form" id="register-form">
            <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="password" name="pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <h5 className="linktologin"> Don't have an account? <Link to="/sign-up">Register</Link></h5>
            <div className=" form-button">
                <Link  name="signup"  className="form-submit" onClick={handleSubmit}>Log In</Link>
            </div>
            </form>
        </div>
      </div>
    );
  }
  //#f5ba13
  export default LogIn;
  