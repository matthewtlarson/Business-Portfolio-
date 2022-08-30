import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WYD from "../assets/wyd-logo.PNG";
import STOCK from "../assets/stock application.png";
import DBD from "../assets/DBD.PNG";

function Portfolio() {
  return (
    <div style={{backgroundColor: 'black', color: 'white', marginBottom: '0px', display: 'flex', flexDirection: 'row', fontFamily: 'roboto', height: '100vh', width: '100%'}}>
      <h1>Take a look at some of my projects...</h1>
      <div>
      <Card style={{ width: '18rem', marginTop: '20vh', marginRight: '200px' }}>
      <Card.Img variant="top" src={WYD}/>
      <Card.Body>
        <Card.Title style={{color: 'black', fontSize: '30px', fontWeight: '700'}}>WYD</Card.Title>
        <Card.Text style={{color: 'black'}}>
        An application to make event planning and coordination much easier for all events from small-group hangouts to professional, full-scale events.
        </Card.Text>
        <Button variant="primary" href="https://peaceful-reef-29677.herokuapp.com/" target="_" style={{backgroundColor: 'black'}}>Check it out!</Button>
      </Card.Body>
    </Card>
      </div>
      <div style={{ marginBottom: '0px', marginTop: '20vh', marginRight: '200px'   }}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={STOCK} />
      <Card.Body>
        <Card.Title style={{color: 'black', fontSize: '30px', fontWeight: '700'}}>Market Moment</Card.Title>
        <Card.Text style={{color: 'black'}}>
        This application can be used to keep track of your favorite stocks, stay on top of latest news, and read-up on only the most vital, up-to-date information.
        </Card.Text>
        <Button variant="primary" href="https://brandtdavidson.github.io/interactive-stock/" target="_" style={{backgroundColor: 'black'}}>Check it out!</Button>
      </Card.Body>
    </Card>
      </div>
      <div>
      <Card style={{ width: '18rem', marginTop: '20vh' }}>
      <Card.Img variant="top" src={DBD} style={{height: '24vh'}} />
      <Card.Body>
        <Card.Title style={{color: 'black', fontSize: '30px', fontWeight: '700'}}>DayByDay</Card.Title>
        <Card.Text style={{color: 'black'}}>
        The DayByDay application was created with the intention to help motivate, track, and urge you to stay consistent in a specific area of your life.
        </Card.Text>
        <Button variant="primary" href="https://daybyday-application.herokuapp.com/login" target="_" style={{backgroundColor: 'black'}}>Check it out!</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default Portfolio;