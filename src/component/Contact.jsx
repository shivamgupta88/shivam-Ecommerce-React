import React from "react";
import './about.css';

const Contact = () => {

    return(
        <div className="ctr-box">
            <h3>We will contact you !</h3>
        <form>
            <label for="fname">First name</label>
            <br/>
            <input type="text" id="fname" name="fname"/>
            <br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname"/>
            <br />
            <label for="mail">Email id:</label><br/>
            <input type="mail" id="mail" name="email"/>
            <br />
            <button className="bg-light" >Submit</button>
            </form>            
        </div>
    )
}

export default Contact;