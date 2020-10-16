import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Badge from 'react-bootstrap/Badge'
import shoppingCart from './shopping-cart.svg'

import Link from 'next/link'

function Header() {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col lg="12">
            <Navbar bg="light" expand="lg">
              <Link href="/"><Navbar.Brand> Test </Navbar.Brand></Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link href="/"><a className="nav-link">Home</a></Link>
                  <Link href="/products"><a className="nav-link">Products</a></Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
              </Navbar.Collapse>
              <div className="header-cart">
                <div className="header-cart-image">
                  <img src={shoppingCart} className="img-fluid" alt='cart-image' />
                  <Badge variant="success">0</Badge>
                </div>
              </div>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header
