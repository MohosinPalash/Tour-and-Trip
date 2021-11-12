import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/basic/logo.png'
import useAuth from '../../../contexts/useAuth';
const Header = () => {
    const { user, logout } = useAuth();
    console.log(user);
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home" style={{ fontSize: "25px" }}><img style={{ height: "40px", width: "40px" }} src={logo} alt="" />TOUR & TRIP</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text><Nav.Link as={Link} to="/home">Home</Nav.Link></Navbar.Text>
                        <Navbar.Text><Nav.Link as={Link} to="/hotels">Hotels</Nav.Link></Navbar.Text>
                        <Navbar.Text><Nav.Link as={Link} to="/transports">Transports</Nav.Link></Navbar.Text>

                        {user?.email ?
                            <>
                                <Navbar.Text><Nav.Link as={Link} to="/myOrder">My Order</Nav.Link></Navbar.Text>
                                <Navbar.Text><Nav.Link as={Link} to="/manageOrder">Manage Order</Nav.Link></Navbar.Text>
                                <Navbar.Text><Nav.Link as={Link} to="/addService">Add Service</Nav.Link></Navbar.Text>
                                <Navbar.Text style={{ color: "white", cursor: "pointer" }} onClick={logout}>Logout</Navbar.Text>
                                <Navbar.Text>
                                    <Nav.Link as={Link} to="/home" style={{ marginTop: "0" }}>Welcome {user?.displayName.split(" ")[0]}<img src={user?.photoURL} style={{
                                        height: "40px",
                                        width: "40px",
                                        borderRadius: "50%",
                                        border: "2px solid white",
                                        marginLeft: "10px",
                                        margin: "-15px 10px"
                                    }} alt="" /></Nav.Link>
                                </Navbar.Text>
                            </>
                            :
                            <Navbar.Text><Nav.Link as={Link} to="/login">Login</Nav.Link></Navbar.Text>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;