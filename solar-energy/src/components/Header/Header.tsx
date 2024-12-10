import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImage from "../../assets/Logo.jpg";
import './Header.css';
import { FC } from 'react';

export const Header: FC = () => (
    <Navbar expand="lg" className="header" style={{ justifyContent: "end", marginBottom: "2vh", paddingTop: "4vh", backgroundColor: "rgb(255, 255, 255)" }}>
        <div className="header" style={{ marginTop: 0, marginBottom: 0, marginLeft: "5%", marginRight: "5%", backgroundClip: "border-box" }}>
            <Navbar.Brand href="/" className="image_box"><img src={LogoImage} className="image_box" /></Navbar.Brand>
            <div className="routes">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="collapse">
                    <Nav className="me-auto">
                        <Nav.Link href=/*"/solar_plant_calc_front/"*/"/">Главная</Nav.Link>
                        <Nav.Link href=/*"/solar_plant_calc_front/items"*/"/items">Элементы</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </div>
    </Navbar >

)

