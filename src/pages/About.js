import React from "react";
import Image from "../assets/sf_me.jpg";
import '../App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <div style={{backgroundColor: 'black', color: 'white', marginBottom: '0px'}} fluid="true">
    <Container style={{display: 'flex', flexDirection: 'row', fontFamily: 'roboto', fontSize: '20px', height: '100vh'}}>
    <Row className="row justify-content-between">
    <Col sm={6}>
    <div>
    <img src={Image} alt="me" style={{height: '50vh'}}/>
    </div>
    </Col>
    <Col sm={6}>
      <h1 style={{textShadow: '2px 2px blue' }}>Who am I?</h1>
      <p>
        A full-stack web developer earning a degree in Business Marketing.  I am driven by my desire to become a better developer and impact a company in a unique, creative, and positive way. Recognized as proactive, resourceful, and persistent problem-solver. Known for my enthusiasm and passion for web design. Excellent communicator with effective client relationship-building skills. I enjoy initiating connections and growing my network to engage with other developers. I completed a certificate in web development from the University of Arizona with skills in CSS, JavaScript, React, and much more. Successfully collaborated with a development team to create a front-end application that pinpoints specific stocks and offers users relevant news articles and vital information to assist in financial decision-making. I believe my technical acumen combined with problem-solving ability and desire for collaboration makes me a fierce candidate for any team.
      </p>
    </Col>
    <Col sm={6}>
      <h1 style={{textShadow: '2px 2px blue' }}>Skills?</h1>
      <p style={{marginBottom: '0px'}}>
      HTML, CSS, JavaScript, Node, React, MERN, SQL, MongoDB, UI/Design
      </p>
    </Col>
    <Col sm={6}>
      <h1 style={{textShadow: '2px 2px blue' }}>Current Goals</h1>
      <p style={{marginBottom: '0px'}}>
        At the moment, I am finishing up my studies at the University of Arizona and am actively looking for work as a front end developer. My goal for this school year, is to gain experience in the field as an intern or junior developer so that I can guranttee hitting the ground running post graduation. Having the skills and certifications as a full-stack developer, I am open to consider any and all work that may help hoan my skills as a software developer and/or have an impact on the community at large. 
      </p>
    </Col>
    </Row>
    </Container>
    </div>
  )
}




export default About;
