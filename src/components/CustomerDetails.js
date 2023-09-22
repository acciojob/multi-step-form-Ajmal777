import React from "react";
import { Link } from "react-router-dom";

const CustomerDetails = () =>{
    return (
        <div className="CustomerDetails form">
            <h1>Customer Details</h1>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" id="firstName" name="firstName"/>
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" id="lastName" name="lastName"/>
            <Link to="/car">Next</Link>
        </div>
    )
}

export default CustomerDetails;