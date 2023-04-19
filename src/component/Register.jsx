import React from "react";
import { useNavigate } from "react-router-dom";

import './about.css';

const Register = () => {
    const navigate = useNavigate();

    return(
        <div className="ctr-box">
            <h3>Create your account.</h3>
        <form>
            
            <label for="mail">Email id:</label><br/>
            <input type="email" id="mail" name="email" required/>
            <br />
            <label for="lname">Password:</label><br/>
            <input type="text" id="lname" name="lname" required/>
            <br />
            <br />
            <button className="bg-light"  onClick={() => navigate("/", { replace: true })} > Sign up !</button>
            
            </form>            
        </div>
    )
}

export default Register;