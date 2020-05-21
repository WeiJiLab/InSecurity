import React, {Component} from 'react';
import './Me.css';
import Container from "react-bootstrap/Container";
import {Col, Form, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/logo_w.png";
import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";

class Me extends Component {

    constructor(props){
        super(props);
    }

    render() {
        let login = JSON.parse(Cookies.get("login"));

        return (<Container className="Me">
            <Row>
                <Col md={1}> </Col>
                <Col md={10} style={{background: "#fff", padding: "0em"}}>
                    <Col style={{padding: "0em"}}>
                        <Row style={{padding: 0,margin:0,boxShadow:'0 1px 3px rgba(27,95,160,.1)'}}>
                            <Col style={{textAlign: "left",padding:0,background:'#000'}}>
                                <Image src={Logo} style={{padding: "4em", width: '100%', height: '100%'}}/>
                            </Col>
                            <Col style={{padding: "3em", textAlign: "left"}}>
                                <h3>我的资料</h3>
                                <Form>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>用户名</Form.Label>
                                        <Form.Control type="text" readOnly placeholder={login.userInfo.userDTO.username}/>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>邮箱</Form.Label>
                                        <Form.Control type="email" readOnly placeholder={login.userInfo.userDTO.email}/>
                                    </Form.Group>
                                </Form>
                                <Button variant="outline-dark" type="button" onClick={this.logout.bind(this)}>登出</Button>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>);
    };

    logout() {
        Cookies.set("login", null);
        this.props.history.push("/");
    }
}

export default Me;
