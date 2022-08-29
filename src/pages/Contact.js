import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <div style={{backgroundColor: 'black', color: 'white', marginBottom: '0px', fontFamily: 'roboto'}}>
    <Container style={{width:'100vh'}}>
    <Row className="row justify-content-between">
      <h1>Want to get in touch?</h1>
      <Form style={{width: '75%'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Response within 1 business day.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="I am messaging because..." />
      </Form.Group>
      <Button variant="outline-success">Send!</Button>
    </Form>
    </Row>
    </Container>
    </div>
  )
}

export default Contact;