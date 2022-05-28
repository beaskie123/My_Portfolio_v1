import React, { Component } from 'react'
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'

export default class Featured extends Component {
  render() {
    return (
      <Card className="featured-container">
         <Row className='title-holder'>
        <Card className='title-container'>
          <h2> MY PROJECTS</h2></Card>
        </Row>
        <Row className='row-project'>
          <Col className='project-column'>
            <Card className='card-container'>
            <Card.Img className="img-project" variant="top" src='img/intro3.jpg' alt =""  />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col className='project-column'>
          <Card className='card-container'>
            <Card.Img  className="img-project"  variant="top" src='img/intro2.jpg' alt ="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col className='project-column'>
          <Card className='card-container'>
            <Card.Img  className="img-project"  variant="top"src='img/intro1.jpg' alt =""  />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
      </Row>
        
      </Card>
    )
  }
}
