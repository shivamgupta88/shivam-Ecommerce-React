import React from "react";
import { useNavigate } from "react-router-dom";

import './about.css';

const Login = () => {
    const navigate = useNavigate();

    return(
        <div className="ctr-box">
            <h3 className="fs2">Login </h3>
        <form>
            
            
            <label for="mail">Email id:</label><br/>
            <input type="email" id="mail" name="email" required/>
            <br />
            <label for="lname">Password:</label><br/>
            <input type="text" id="lname" name="lname" required/>
            <br />
            <br />
            <button className="bg-light" onClick={() => navigate("/", { replace: true })} >Log in</button>
            <br/><br/>
            <small className="ctr">If you forget your Password then contact us : ) </small>
            </form>            
        </div>
    )
}

export default Login;