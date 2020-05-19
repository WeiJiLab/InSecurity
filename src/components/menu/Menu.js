import React from 'react';
import './Menu.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Menu() {
    return (
        <Container className="Menu">
            <Row>
                <Col>
                    <Navbar bg="#fff" variant="light">
                        <Nav className="mr-auto">
                            <Nav.Link className="nav-tag" href="#blogs" style={{color:"#000"}}>架构</Nav.Link>
                            <Nav.Link className="nav-tag" href="#events" style={{color:"#000"}}>安全</Nav.Link>
                            <Nav.Link className="nav-tag" href="#events" style={{color:"#000"}}>产业互联网</Nav.Link>
                            <Nav.Link className="nav-tag" href="#events" style={{color:"#000"}}>区块链</Nav.Link>
                            <Nav.Link className="nav-tag" href="#events" style={{color:"#000"}}>云原生</Nav.Link>
                            <Nav.Link className="nav-tag" href="#events" style={{color:"#000"}}>AI</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
}

export default Menu;
