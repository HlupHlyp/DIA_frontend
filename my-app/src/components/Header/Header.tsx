import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoImage from "../../assets/Logo.jpg";
import './Header.css';
import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="header" style={{ justifyContent: "end" }}>
                <Container className="header" style={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, paddingRight: 0 }}>
                    <Navbar.Brand href="/" className="image_box"><img src={LogoImage} className="image" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/items">Элементы</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
