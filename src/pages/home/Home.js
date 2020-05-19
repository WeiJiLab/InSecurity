import React, {Component} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import Menu from "../../components/menu/Menu";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (<Container style={{padding: 0}} className="Home">
            <Menu/>
            <Container className="Events">
                <Row style={{padding: 0}}>
                    <Col md={8} style={{padding: 0}}>
                        <Container className="Left-Card">
                            <p className="Card-Title">复杂风控场景下，如何打造一款高效的规则引擎</p>
                            <p className="Card-Content">本文介绍美团在打造自有规则引擎 Zeus 的过程中，信息安全团队遇到的挑战以及对应的解决方案。</p>
                        </Container>
                        <Container style={{background: '#fff', padding: '1em', boxShadow: '0 1px 3px rgba(27,95,160,.1)'}}>
                            <h3>推荐内容</h3>
                            <Row className={"Article-Card"}>
                                <h1>title</h1>
                                <h3>desc</h3>
                            </Row>
                            <Row className={"Article-Card"}>
                                <h1>title</h1>
                                <h3>desc</h3>
                            </Row>
                            <Row className={"Article-Card"}>
                                <h1>title</h1>
                                <h3>desc</h3>
                            </Row>
                            <Row className={"Article-Card"}>
                                <h1>title</h1>
                                <h3>desc</h3>
                            </Row>
                        </Container>
                    </Col>
                    <Col md={4} style={{paddingRight: 0}}>
                        <Row>
                            <Container className="Right-Top-Card">
                                <Container className="Write-Card">
                                    <h2 className="Write-Card-Title">InSecurity写作平台</h2>
                                    <h3 className="Write-Card-Content">全新上线</h3>
                                    <Link to={"/write"}><Button variant="outline-light" style={{marginTop: "1em"}}>开始写作</Button></Link>
                                </Container>
                            </Container>
                            <Container>
                                <Container style={{background: '#fff', padding: '1em', boxShadow: '0 1px 3px rgba(27,95,160,.1)'}}>
                                    <h3>热点</h3>
                                    <button>sss</button>
                                </Container>
                            </Container>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>);
    };
}

export default Home;
