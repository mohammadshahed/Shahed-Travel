import React, { useContext } from 'react';
import './Navbar.css'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from './travel.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const TopNav = () => {
    const [user, setUser] = useContext(UserContext);

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" id="nav">
            <Container fluid>
                <Link to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="Travel Guru" width="100px" height="50px" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
                    <Nav className="ml-auto">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav.Link className="text-white" href="/">Home</Nav.Link>
                        <Nav.Link className="text-white">Contact</Nav.Link>
                        <Nav.Link className="text-white" href="/about">About Us</Nav.Link>
                        {
                            user.signed ?
                                <Button onClick={() => setUser({
                                    signed: false,
                                    name: '',
                                    email: '',
                                    password: '',
                                    message: ''
                                })} variant="warning" className="mx-2">Logout, {user.name}</Button> :
                                <Link to="/login">
                                    <Button variant="warning" className="mx-2">Login</Button>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;