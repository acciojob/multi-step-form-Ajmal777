import React from "react";
import { Link } from "react-router-dom";

const CarDetails = () =>{
    return (
        <div className="carDetails form">
            <h1>Car Details</h1>
            <label htmlFor="brand">Brand: </label>
            <input type="text" id="brand" name="make"/>
            <label htmlFor="model" >Model: </label>
            <input type="text" id="model" name="model"/>
            <Link to='/'>Previous</Link>
            <Link to="/payment" >Next</Link>
        </div>
    )
}

export default CarDetails;