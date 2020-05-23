import React from 'react';
import './Footer.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Logo from "../../static/images/logo_build.png"
import {Image} from "react-bootstrap";

function Footer() {
    return (
        <Container className="Footer">
            <Container>
                <Router>
                    <Row className="footerLine">
                        <Col md={2}></Col>
                        <Col md={8}>
                            <Row>
                                <Col style={{paddingLeft:'1.5em'}}>
                                    <Row><Image style={{height:'2em',marginLeft:0}} src={Logo}/></Row>
                                    <Row><span className="footerText">© 2020 TW BuildSecurityIn</span></Row>
                                </Col>
                                <Col>

                                </Col>
                                <Col><Row>Info</Row>
                                    <Row><span className="footerText">Terms</span></Row>
                                    <Row><span className="footerText">Privacy</span></Row>
                                    <Row><span className="footerText">Contract</span></Row>
                                </Col>
                                <Col>
                                    <Row>SiteMap</Row>
                                    <Row><span className="footerText"><Link to="/home">Home</Link></span></Row>
                                </Col>
                                <Col><Row>Focus</Row>
                                    <Row><span className="footerText">Weibo</span></Row>
                                    <Row><span className="footerText">WeChat</span></Row>
                                    <Row><span className="footerText">Twitter</span></Row>
                                </Col>
                                <Col>
                                    <Row>Links</Row>
                                    <Row><a href={"https://www.thoughtworks.com/"}><span className="footerText">ThoughtWorks</span></a></Row>
                                    <Row><a href={"https://github.com/nerososft/InSecurity"}><span className="footerText">Git</span></a></Row>
                                    <Row><a href={"http://www.owasp.org.cn/"}><span className="footerText">OWASP 中国</span></a></Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Router>
            </Container>
        </Container>
    );
}

export default Footer;
