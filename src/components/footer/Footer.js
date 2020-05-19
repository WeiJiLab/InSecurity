import React from 'react';
import './Footer.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Logo from "../../static/images/logo.png"
import {Image} from "react-bootstrap";

function Footer() {
    return (
        <Container className="Footer">
            <Container>
                <Router>
                    <Row className="footerLine">
                        <Col md={1}></Col>
                        <Col>
                            <Row><Image style={{width:'30%'}} src={Logo}/></Row>
                        </Col>
                        <Col>
                            <Row>Copyright</Row>
                            <Row><span className="footerText">© 2020 ThoughtWorks, Inc</span></Row>
                        </Col>
                        <Col>
                            <Row>SiteMap</Row>
                            <Row><span className="footerText"><Link to="/home">Home</Link></span></Row>
                        </Col>
                        <Col><Row>Info</Row>
                            <Row><span className="footerText">Terms</span></Row>
                            <Row><span className="footerText">Privacy</span></Row>
                            <Row><span className="footerText">Contract</span></Row>
                        </Col>
                        <Col>
                            <Row>Links</Row>
                            <Row><span className="footerText">ThoughtWorks</span></Row>
                            <Row><span className="footerText">Git</span></Row>
                        </Col>
                    </Row>
                </Router>
            </Container>
        </Container>
    );
}

export default Footer;
