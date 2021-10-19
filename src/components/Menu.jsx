import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Projeto Filmes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Hello World</Link>
                            <Link className="nav-link" to="/pagina1">Página 1</Link>
                            <Link className="nav-link" to="/pagina2">Página 2</Link>
                            <Link className="nav-link" to="/arrays">Arrays</Link>
                            <Link className="nav-link" to="/objetos">Objetos</Link>
                            <Link className="nav-link" to="/estados">Estados</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu
