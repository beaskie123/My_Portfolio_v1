import React, { Component } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

export default class Contact extends Component {
  render() {
    return (
      <Card className='Contact'>
        <Card.Body className='body' >
        <Row className='Contact-page1'> 
        <Card.Text className='contact-base'>
         I'd love to hear from you
        </Card.Text>
        </Row>
        <Row className='Contact-page2'>
            <Col></Col>
            <Col>
            <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form>
            </Col>
        </Row>
        </Card.Body>

      </Card>
    )
  }
}
