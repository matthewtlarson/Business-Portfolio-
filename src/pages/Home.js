import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../App.css';
import {Link} from "react-router-dom";


function Home() {
  return (
    <div className="home d-flex justify-content-center video-wrapper">
      <div style={{ marginTop: '20%'}}>
      <h1 className='d-flex justify-content-center' style={{fontSize: '75px', fontFamily: 'roboto', fontWeight: '900', color: 'white', marginRight: '90px'}}>Matthew Larson</h1>
      <h4 className='d-flex justify-content-center' style={{fontSize: '25px', fontFamily: 'roboto', fontWeight: '700', fontStyle: 'italic', color: 'white', marginLeft:'40px'}}>Junior Full-Stack Web Developer</h4>
      </div>
      <div style={{ marginTop: '22%', marginRight: '800px'}}>
      <Link to="/about">
      <button class="glow-on-hover" type="button">LEARN ABOUT ME</button>
      </Link>
      </div>
    </div>
  )
}




export default Home;
