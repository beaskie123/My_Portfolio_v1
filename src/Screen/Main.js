
import { Card, Col, Container, Form, ListGroup, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import proj from '../components/projects'
import skills from '../components/skills'
import Social from '../components/socials'

function Main () {
return (
    <div>
        {/* MAIN PAGE */}
        <Card className='cardcard'>
            <Navbar className="navbar" expand={false} placement="end">
                <Container fluid>
                <Navbar.Brand href="#" ><h3 className='brand'>Dream Big </h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className='toggler'/>
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Welcome to my profile </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            
            <Card className='mains'>
                <Card className='main-background'>
                    <img src="/img/intro3.jpg" alt=''/>
                <Card className='main-content'>
                        <Card.Img className="img-holder"src='img/main.jpg' alt =""/>
                        <Card className="card-body" >
                        <Card.Body>
                        <Card.Text className='content-text'>
                        <h4>Hi! I'm Bea Andrea Caballero.</h4> I'm an aspiring web application developer that aims to create various websites that makes people lives easier. I am curious and passionate learner that loves to build websites using React JS.
                        </Card.Text>
                        </Card.Body>
                        </Card>
                            <ListGroup horizontal className='bg-none'>
                            <Social alt="fb" src="/icons/facebook.png" link="https://web.facebook.com/beaandrea.caballero.1/"/>
                            <Social alt="ig" src="/icons/instagram.png" link="https://www.instagram.com/beyacbllr/"/>
                            <Social alt="linkedin" src="/icons/linkedin.png" link="https://github.com/beaskie123"/>
                            <Social alt="github" src="/icons/github.png" link="https://github.com/beaskie123"/>
                            </ListGroup>
                </Card>
                </Card>
            </Card>
        </Card>
        
        {/* PROJECTS */}

        <Card className="featured-container">
         <Row className='title-holder'>
        <Card className='title-container'>
          <h2> MY PROJECTS</h2></Card>
        </Row>
            <Row className='row-project'>
            {proj.data.map(data => {
            return (
            <Col className='project-column'>
            <Card className='card-container'>
            <Card.Img className="img-project" variant="top" src={data.image} alt =""  />
            <Card.Body>
            <Link to={`/Project`}>
            <Card.Title>{data.pname}</Card.Title>
              </Link>
              <Card.Text>
                {data.discription}
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
           )
          })}
     </Row>
      </Card>

        {/* SKILLPAGE */}
        <Card className='project-container'>
        <Container className='container' >
        <Row className='skill-headline'><h1> Skills </h1>
        </Row>
        <Row className='skill-body'>
            {skills.icon.map(icon  => {
            return (
            <Card className='skill-card'>
            <Card.Img className='card-img' variant="top" src={icon.image}/>
            <Card.Title className='skill-text'>{icon.name}</Card.Title> 
                </Card>
        )
        }
        )}
      </Row>
    </Container>
        </Card>

        {/* CONTACT */}
        <Card className='Contact'>
        <Card.Body className='body' >
        <Row className='Contact-page1'> 
        <Card.Text className='contact-base'>
         I'd love to hear from you
        </Card.Text>
        </Row>
        <Row className='Contact-page2'>
            <Col> </Col>
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
              
    </div>
  )

}

export default Main