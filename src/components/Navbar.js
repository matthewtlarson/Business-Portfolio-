import React from 'react';
import '../styles/Navbar.css';
import {Link} from "react-router-dom"

const styles = {
  navbarStyle: {
    background: 'black',
    justifyContent: 'flex-end',
    border: "5px solid red"
  },
};

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
       <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/two">About</Link>
          </li>
          <li>
            <Link to="#">Topics</Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;