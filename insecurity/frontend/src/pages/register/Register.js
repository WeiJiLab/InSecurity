import React, {Component} from 'react';
import './Register.css';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Alert, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/logo_g.png";
import {register} from "../../actions/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Register extends Component {

    constructor(props) {
        super(props);
        this.registerDTO = {
            username: '',
            email: '',
            password: '',
            rePassword: ''
        }
    }

    render() {
        return (<Container className="Register">
            <Row>
                <Col md={1}> </Col>
                <Col md={10} style={{background: "#fff", padding: "0em"}}>
                    <Col style={{padding: "0em"}}>
                        <Row style={{padding: 0,margin:0,boxShadow:'0 1px 3px rgba(27,95,160,.1)'}}>
                            <Col style={{textAlign: "left",padding: 0,background:'rgb(75,166,127)'}}>
                                <Image src={Logo} style={{padding:"4em",paddingTop:'10em',paddingBottom:'10em', width: '100%',height:'100%'}}/>
                            </Col>
                            <Col style={{padding:"3em"}}>
                                <h3>注册</h3>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>用户名</Form.Label>
                                        <Form.Control type="text" placeholder="请输入用户名" onChange={this.onUsernameChange.bind(this)}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>邮箱</Form.Label>
                                        <Form.Control type="email" placeholder="请输入邮箱" onChange={this.onEmailChange.bind(this)}/>
                                        <Form.Text className="text-muted">
                                            我们绝不会与其他任何人共享您的电子邮件。
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>密码</Form.Label>
                                        <Form.Control type="password" placeholder="请输入密码" onChange={this.onPasswordChange.bind(this)}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>确认密码</Form.Label>
                                        <Form.Control type="password" placeholder="请确认输入密码" onChange={this.onRePasswordChange.bind(this)}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="记住我"/>
                                    </Form.Group>
                                    {!this.props.registerResult.registerStatus && this.props.registerResult.message !== null ?
                                        <Alert variant="danger">{this.props.registerResult.message}</Alert> : null
                                    }
                                    <Button variant="outline-dark" type="button" onClick={this.ajaxRegister.bind(this)}>注册</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>);
    };

    onUsernameChange(e) {
        this.registerDTO.username = e.currentTarget.value;
    }

    onEmailChange(e) {
        this.registerDTO.email = e.currentTarget.value;
    }

    onPasswordChange(e) {
        this.registerDTO.password = e.currentTarget.value;
    }

    onRePasswordChange(e) {
        this.registerDTO.rePassword = e.currentTarget.value;
    }

    ajaxRegister() {
        if (this.registerDTO.rePassword !== this.registerDTO.password) {
            alert("两次密码不一致");
        } else {
            this.props.register(this.registerDTO);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.registerResult !== this.props.registerResult) {
            if (nextProps.registerResult.registerStatus) {
                this.props.history.push("/login");
            }
        }
    }
}

const mapStateToProps = state => ({
    registerResult: state.reduxResult.registerResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    register
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Register);
