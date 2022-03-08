import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <>
            <Navbar bg='dark' variant='dark'>
                <Container className='container-fluid'>
                    <Navbar.Brand>
                        <Link to='/'>
                            <h1 className='text-light'>Launch Watch List</h1>
                        </Link>
                    </Navbar.Brand>
                    <Nav>
                        <Link className='px-2' to='/'>
                            <Navbar.Text>Home</Navbar.Text>
                        </Link>
                        <Link className='px-2' to='/launchlist'>
                            <Navbar.Text>Launch List</Navbar.Text>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
