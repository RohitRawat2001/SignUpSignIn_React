import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const Header = () => {

 

  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Go Shopping🛒</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
         
        </Container>
      </Navbar>

    </>
  )
}

export default Header