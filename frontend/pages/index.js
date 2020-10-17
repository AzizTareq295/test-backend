import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import home from './Home/home.module.scss'


export default function Home() {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col lg="12">
            <h1 className={home.homeHeader}>Home Page</h1>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}
