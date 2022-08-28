import React from 'react';
// import '../styles/Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <ul className="justify-content-end d-flex mb-0" style={{ width: "100%", backgroundColor:'black', listStyleType: 'none', padding: '30px' }}>
        <li className="me-5 mt-1 p-1">
          <Link to="/home" style={{color:'white', fontFamily: 'oswald', fontSize: '25px'}}>
            Home
          </Link>
        </li>
        <li className="me-5 mt-1 p-1">
          <Link to="/about" style={{color:'white', fontFamily: 'oswald', fontSize: '25px'}}>
            About
          </Link>
        </li>
        <li className="me-5 mt-1 p-1">
          <Link to="/portfolio" style={{color:'white', fontFamily: 'oswald', fontSize: '25px'}}>
            Portfolio
          </Link>
        </li>
        <li className="me-5 mt-1 p-1">
          <Link to="/contact" style={{color:'white', fontFamily: 'oswald', fontSize: '25px'}}>
            Contact
          </Link>
        </li>
    </ul>
  );
}

export default Navbar;