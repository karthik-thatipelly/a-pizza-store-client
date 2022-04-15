import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav className="navbar navbar-dark bg-dark">
          <a href="/"><span className="navbar-brand mb-0 h1">PIZZA STORE</span></a>
         
         <div className=" navbar" id="navbarNav">
                <a className="nav-link" href="/Authentication">
                <button className="btn btn-primary">Register/ Login</button> 
                </a>
                <a className="nav-link" href="/checkout">
                 <button className="btn btn-warning">Cart</button>
                </a>
         </div>
      </nav>
    );
}

export default Navbar;