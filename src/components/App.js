
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerDetails from "./CustomerDetails";
import CarDetails from "./CarDetails";
import PaymentDetails from "./PaymentDetails";
const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CustomerDetails />}/>
            <Route path="/car" element={<CarDetails/>} />
            <Route path="/payment" element={<PaymentDetails />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
