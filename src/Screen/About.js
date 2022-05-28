import React, { Component } from 'react'
import { Card, Navbar, Nav, Container, NavDropdown, Offcanvas, Row, Col, ListGroup} from 'react-bootstrap'
import Social from '../components/Social'


export default class About extends Component {
  render() {
    return (
      <Card>
        <Container fluid className='main-container'>
          <Row>
            <Col className='container1'>
            <Navbar className="child" expand={false}>
            <Navbar.Toggle aria-controls="offcanvasNavbar" className="toggle" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton className='off-header'>
                <Offcanvas.Title id="offcanvasNavbarLabel">My Portfolio</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="off-body">
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link className="link" href="#action1"> Home</Nav.Link>
                  <Nav.Link className="link" href="#action2"> Projects</Nav.Link>
                  <Nav.Link className="link" href="#action2"> Technologies</Nav.Link>
                  <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3"> Links</NavDropdown.Item>
                    <NavDropdown.Item href="#action4"> Blog</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Contact
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            </Navbar>
            <Card className='introduction2'>
                <Card.Img className="img-holder"src='img/main.jpg' alt =""/>
                <Card className="card-body" style={{ width: '50rem'}}>
                <Card.Body>
                  <Card.Text className='content-text'>
                    <h2>Hi! I'm Bea Andrea Caballero.</h2> I'm an aspiring web application developer that aims to create various websites that makes people lives easier. I am curious and passionate learner that loves to build websites using React JS.
                    </Card.Text>
                  </Card.Body>
                </Card>  
                <Row>
                <ListGroup horizontal className='bg-none'>
                  <Social alt="fb" src="/icons/facebook.png" link="https://web.facebook.com/beaandrea.caballero.1/"/>
                  <Social alt="ig" src="/icons/instagram.png" link="https://www.instagram.com/beyacbllr/"/>
                  <Social alt="linkedin" src="/icons/linkedin.png" link="https://github.com/beaskie123"/>
                  <Social alt="github" src="/icons/github.png" link="https://github.com/beaskie123"/>
                </ListGroup>
                </Row>
            </Card>
            </Col>
          </Row>
        </Container>
      </Card>
    )
  }
}

