import React, {Component} from 'react';
import './QRCode.css';
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import QrCode from "../../static/images/qrcode.jpg"

class QRCode extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={{background: '#fff', padding: '1em', boxShadow: '0 1px 3px rgba(27,95,160,.1)'}}>
                <Row>
                    <Col md={5}> <Image style={{width:'100%'}} src={QrCode}/></Col>
                    <Col md={7} style={{paddingTop:'1.5em'}}>
                        <Row><h5>关注我们的公众号</h5></Row>
                        <Row><p>致力于传播信息安全</p></Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default QRCode;
