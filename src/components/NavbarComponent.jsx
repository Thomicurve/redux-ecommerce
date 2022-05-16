import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" className='sticky-top' variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><b>OnHard</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <button className='cart-button' style={{outline: 'none', background: 'none', border: 'none'}}  >
                            <p className='cart-items-amount bg-primary'>0</p>
                            <FontAwesomeIcon icon={faCartShopping} className="text-light" size='lg' />
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;