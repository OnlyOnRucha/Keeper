import React from "react";
import {Link} from 'react-router-dom';

const LogIn = () => {
    
    return (
      <div className="containersignup">
        <div className="signup-form">
            <h2 className="form-title">Log In</h2>
            <form method="POST" className="register-form" id="register-form">
            <div className="form-group">
                <input type="email" name="email" id="email" placeholder="Your Email" fdprocessedid="h9r5bi" />
            </div>
            <div className="form-group">
                <input type="password" name="pass" id="pass" placeholder="Password" fdprocessedid="11elyr" />
            </div>
            <h5 className="linktologin"> Don't have an account? <Link to="/sign-up">Register</Link></h5>
            <div className=" form-button">
                <input type="submit" name="signup" id="signup" className="form-submit" value="Log In" fdprocessedid="5j2use" />
            </div>
            </form>
        </div>
      </div>
    );
  }
  
  export default LogIn;
  