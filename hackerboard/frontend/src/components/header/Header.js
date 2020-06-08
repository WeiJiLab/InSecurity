import React, {Component} from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/logo_build.png"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="Header">
                <Row>
                    <Col md={2}> </Col>
                    <Col md={8}>
                        <Navbar bg="#000" variant="light" style={{paddingLeft: '0.2em', paddingRight: 0}}>
                            <Link to="/home" style={{fontWeight: 'bolder', margin: 0, padding: 0}}>
                                <Image src={Logo} className="logo-img" rounded/>
                            </Link>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        );
    }

    componentWillReceiveProps(nextProps) {

    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Header);
