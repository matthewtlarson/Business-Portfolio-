import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <div style={{backgroundColor: 'black', color: 'white', marginBottom: '0px', fontFamily: 'roboto'}}>
    <Container style={{width:'100vh', height: '100vh'}}>
    <Row className="row justify-content-between">
      <h1 style={{fontStyle:'italic', marginTop: '20px', fontSize: '50px'}}>Want to get in touch?</h1><h4>Phone 📞: 650-400-1884</h4>
      <button class="glow-on-hover" type="button" style={{width: '120px', marginTop: '90px'}}><a href="mailTo:matthewtlarson@arizona.edu" style={{color: 'white', fontSize: '20px' }}>Email ✉</a></button>
      <button class="glow-on-hover" type="button" style={{width: '120px', marginTop: '90px'}}><a href="https://www.linkedin.com/in/matthew-larson51/" target="_" style={{color: 'white', fontSize: '20px' }}> LinkedIn </a></button>
      <button class="glow-on-hover" type="button" style={{width: '120px', marginTop: '90px'}}><a href="https://github.com/matthewtlarson" target="_" style={{color: 'white', fontSize: '20px' }}>Github</a></button>
      <button class="glow-on-hover" type="button" style={{width: '120px', marginTop: '90px'}}><a href="https://www.instagram.com/matt_larson33/?hl=en" target="_" style={{color: 'white', fontSize: '20px' }}>Instagram</a></button>
    </Row>
    </Container>
    </div>
  )
}

export default Contact;