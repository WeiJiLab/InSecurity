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
import {withTranslation} from 'react-i18next';


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
                                <h3>{this.props.t('Register')}</h3>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>{this.props.t('UserName')}</Form.Label>
                                        <Form.Control type="text" placeholder={this.props.t('InputUserName')} onChange={this.onUsernameChange.bind(this)}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>{this.props.t('Email')}</Form.Label>
                                        <Form.Control type="email" placeholder={this.props.t('InputEmail')} onChange={this.onEmailChange.bind(this)}/>
                                        <Form.Text className="text-muted">
                                            {this.props.t('NoDisclosureEmail')}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>{this.props.t('Password')}</Form.Label>
                                        <Form.Control type="password" placeholder={this.props.t('InputPassword')} onChange={this.onPasswordChange.bind(this)}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>{this.props.t('ConfirmPassword')}</Form.Label>
                                        <Form.Control type="password" placeholder={this.props.t('ConfirmPassword')} onChange={this.onRePasswordChange.bind(this)}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label={this.props.t('RemeberMe')}/>
                                    </Form.Group>
                                    {!this.props.registerResult.registerStatus && this.props.registerResult.message !== null ?
                                        <Alert variant="danger">{this.props.registerResult.message}</Alert> : null
                                    }
                                    <Button variant="outline-dark" type="button" onClick={this.ajaxRegister.bind(this)}>{this.props.t('Register')}</Button>
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
            alert(this.props.t('PasswordNotConsistent')); 
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


export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Register));
