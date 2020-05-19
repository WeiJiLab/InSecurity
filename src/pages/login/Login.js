import React, {Component} from 'react';
import './Login.css';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {login} from "../../actions/actions";
import {Alert, Col, Row} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/logo.png"
import Cookies from 'js-cookie';

class Login extends Component {

    constructor(props) {
        super(props);
        this.loginDTO = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        if (this.props.loginResult.loginStatus) {
            this.props.history.push("/");
        }
    }

    render() {
        return (<Container className="Login">
            <Row>
                <Col md={1}> </Col>
                <Col md={10} style={{background:"#fff",padding:"0em"}}>
                    <Col style={{padding:"0em"}}>
                        <Row style={{padding:0,margin:0,boxShadow:'0 1px 3px rgba(27,95,160,.1)'}}>
                            <Col style={{textAlign: "left",padding:0}}>
                                <Image src={Logo} style={{padding:"4em", width: '100%',height:'100%'}}/>
                            </Col>
                            <Col style={{padding:"3em"}}>
                                <h3>登录</h3>
                                <Form>
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
                                    {
                                        !this.props.loginResult.loginStatus && this.props.loginResult.message !== null ?
                                        <Alert variant="danger">{this.props.loginResult.message}</Alert> : null
                                    }
                                    <Button variant="outline-dark" type="button" onClick={this.ajaxLogin.bind(this)}>登录</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>);
    };

    onEmailChange(e) {
        this.loginDTO.email = e.currentTarget.value;
    }

    onPasswordChange(e) {
        this.loginDTO.password = e.currentTarget.value;
    }

    ajaxLogin() {
        this.props.login(this.loginDTO);
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.loginResult !== this.props.loginResult) {
            if (nextProps.loginResult.loginStatus) {
                Cookies.set("login",nextProps.loginResult);
                this.props.history.push("/");
            }
        }
    }
}

const mapStateToProps = state => ({
    loginResult: state.reduxResult.loginResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    login
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Login);
