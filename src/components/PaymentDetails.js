import React from "react";
import { Link } from "react-router-dom";

const PaymentDetails = () =>{
    return (
        <div className="PaymentDetails form">
            <h1>Payment Details</h1>
            <label htmlFor="credit">Credit card number: </label>
            <input type="text" id="credit" name="credit"/>
            <label htmlFor="exp" >Expiration Date: </label>
            <input type="text" id="exp" name="exp-date"/>
            <Link to='/car'>Previous</Link>
            <button>Submit</button>
        </div>
    )
}

export default PaymentDetails;