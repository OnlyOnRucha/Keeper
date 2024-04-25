import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/sign-up', {name, email, password} )
        .then(result => {console.log(result)}, navigate('/log-in'))
        .catch(err => console.error(err));
    }
    
    return (
      <div className="containersignup">
        <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form method="POST" className="register-form" id="register-form" >
                <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="password" name="pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <h5 className="linktologin"> Already have an account? <Link to="/log-in">Log In</Link></h5>
                <div className=" form-button">
                    <Link name="signup" className="form-submit" onClick={handleSubmit}>Register</ Link >
                </div>
            </form>
        </div>
      </div>
    );
  }
  
  export default SignUp;
  