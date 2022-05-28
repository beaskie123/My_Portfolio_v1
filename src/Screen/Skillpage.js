import { Card, Container, Row } from 'react-bootstrap'
import skills from '../components/skills'

function Projects () {
return (
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
)
}

export default Projects