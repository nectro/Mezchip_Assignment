import React from 'react'
import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap'
import { IoSearchOutline } from 'react-icons/io5'
import { BsDot } from 'react-icons/bs'

function HeaderComponent() {
    return (
        <div className="w-100 p-0 d-flex justify-content-between align-items-center customShadow">
            <Navbar className="w-100 px-2" bg="light" expand="xl">
                <Container fluid>
                    <Navbar.Brand href="#">guarented</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 ms-4 fw-normal"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="mx-2">Furniture</Nav.Link>
                        <Nav.Link href="#action2" className="mx-2">Appliance</Nav.Link>
                        <Nav.Link href="#action2" className="mx-2">Packages</Nav.Link>
                        <Nav.Link href="#action2" className="mx-2">FAQ</Nav.Link>
                    </Nav>
                    <Form className="d-flex" style={{width:400}} >
                        <Form.Control
                        type="search"
                        placeholder="Search the website"
                        className="me-0"
                        aria-label="Search"
                        />
                        <Button variant="success" className="d-flex px-4 bg-btnPrimary justify-content-center align-items-center" style={{marginLeft: -3}} color="#ea1d63"><IoSearchOutline className="lead text-white" /></Button>
                    </Form>
                    <Nav
                        className="my-2 my-lg-0 ms-5 fw-normal"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action2" className="mx-2">Login</Nav.Link>
                        <Nav.Link href="#action2" className="mx-2 text-btnPrimary">Cart<BsDot className={'indicator'}/></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default HeaderComponent
