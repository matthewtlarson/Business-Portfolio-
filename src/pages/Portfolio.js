import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Portfolio() {
  return (
    <div style={{backgroundColor: 'black', color: 'white', marginBottom: '0px', display: 'flex', flexDirection: 'row', fontFamily: 'roboto'}}>
      <h1>Take a look at some of my projects...</h1>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title style={{color: 'black'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'black'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Check it out!</Button>
      </Card.Body>
    </Card>
      </div>
      <div style={{ marginBottom: '0px' }}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title style={{color: 'black'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'black'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Check it out!</Button>
      </Card.Body>
    </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title style={{color: 'black'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'black'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Check it out!</Button>
      </Card.Body>
    </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title style={{color: 'black'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'black'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Check it out!</Button>
      </Card.Body>
    </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title style={{color: 'black'}}>Card Title</Card.Title>
        <Card.Text style={{color: 'black'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Check it out!</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default Portfolio;