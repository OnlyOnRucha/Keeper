import React from "react";
import {Link} from 'react-router-dom';

const SignUp = () => {
    
    return (
      <div className="containersignup">
        <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                    <input type="text" name="name" id="name" placeholder="Your Name" fdprocessedid="abv31p" />
                </div>
                <div className="form-group">
                    <input type="email" name="email" id="email" placeholder="Your Email" fdprocessedid="h9r5bi" />
                </div>
                <div className="form-group">
                    <input type="password" name="pass" id="pass" placeholder="Password" fdprocessedid="11elyr" />
                </div>
                <h5 className="linktologin"> Already have an account? <Link to="/log-in">Log In</Link></h5>
                <div className=" form-button">
                    <Link type="submit" name="signup" id="signup" className="form-submit" value="Register" fdprocessedid="5j2use">Register</ Link >
                </div>
            </form>
        </div>
      </div>
    );
  }
  
  export default SignUp;
  