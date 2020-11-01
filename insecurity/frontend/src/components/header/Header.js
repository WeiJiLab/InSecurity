import React, {Component, Fragment} from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/logo_build.png"
import Button from "react-bootstrap/Button";
import {bindActionCreators} from "redux";
import {login} from "../../actions/actions";
import {connect} from "react-redux";
import Cookies from "js-cookie";
import Search from "../search/Search";
import {Dropdown} from "react-bootstrap";
import {withTranslation} from 'react-i18next';

class Header extends Component {
    constructor(props) {
        super(props);
        let ck = Cookies.get("login");
        let login = null;
        if (ck != null) {
            login = JSON.parse(ck);
        }
        this.state = {
            user: login
        };
    }

    render() {
        return (
            <Container className="Header">
                <Row>
                    <Col md={2}> </Col>
                    <Col md={8}>
                        <Navbar bg="#fff" variant="light" style={{paddingLeft: '0.2em', paddingRight: 0}}>
                            <Link to="/home" style={{fontWeight: 'bolder', margin: 0, padding: 0}}>
                                <Image src={Logo} className="logo-img" rounded/>
                            </Link>

                            <Link to="/column" style={{fontWeight: 'bolder', margin: 0, padding: 0}}>
                                <Navbar.Brand className="icon-header" href="#home">
                                    <strong className={"headerTitleSpan"}>{this.props.t('Column')}</strong>
                                </Navbar.Brand>
                            </Link>

                            <Link to="/event" style={{fontWeight: 'bolder', margin: 0, padding: 0}}>
                                <Navbar.Brand className="icon-header" href="#home">
                                    <strong className={"headerTitleSpan"}>{this.props.t('Activities')}</strong>
                                </Navbar.Brand>
                            </Link>

                            <Link to="/report" style={{fontWeight: 'bolder', margin: 0, padding: 0}}>
                                <Navbar.Brand className="icon-header" href="#home">
                                    <strong className={"headerTitleSpan"}>{this.props.t('SecReport')}</strong>
                                </Navbar.Brand>
                            </Link>

                            <Link to="/service" style={{fontWeight: 'bolder', margin: 0, padding: 0}}>
                                <Navbar.Brand className="icon-header" href="#home">
                                    <strong className={"headerTitleSpan"}>{this.props.t('EntpriseService')}</strong>
                                </Navbar.Brand>
                            </Link>

                            <Navbar.Collapse className="justify-content-end">
                                <Search/>
                                {
                                    this.renderUserInfo()
                                }
                            </Navbar.Collapse>
                            <Navbar.Collapse className="justify-content-end">
                                <Dropdown>
                                    <Dropdown.Toggle variant="trans" id="dropdown-basic">
                                        {this.props.t('Language')}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => this.changeLanguage('zh')}>简体中文</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.changeLanguage('en')}>English</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        );
    }

    changeLanguage(lng) {
        this.props.i18n.changeLanguage(lng);
    };

    renderUserInfo() {
        let ck = Cookies.get("login");
        const login = this.state.user;
        if (ck == null || login == null || !login.loginStatus) {
            return (<Fragment><Link to="/login"><Button variant="link" style={{color: "#000"}}>
                {this.props.t('Login')}
            </Button></Link>|
                <Link to="/register"><Button variant="link" style={{color: "#000"}}>
                    {this.props.t('Register')}
                </Button></Link></Fragment>);
        } else {
            return (<Link to="/me">{
                login.userInfo.userDTO && login.userInfo.userDTO.username === 'admin' ?
                    <Button className={"buttonWrite"} variant="default" type="button" style={{background: '#3db24b', color: '#fff'}}><Link
                        style={{color: '#fff'}} to={"/admin"}>后台管理</Link>
                    </Button> :
                    <Button className={"buttonWrite"} variant="default" type="button" style={{background: '#3db24b', color: '#fff'}}><Link
                        style={{color: '#fff'}} to={"/write"}>写作平台</Link>
                    </Button>
            }
                <Button variant="link" style={{color: "#000"}}>
                    <strong>{login.userInfo.userDTO ? login.userInfo.userDTO.username:""}</strong> ({login.userInfo.userDTO ?login.userInfo.userDTO.email:""})
                </Button>
            </Link>);
        }
    }

    componentWillReceiveProps(nextProps) {
            let ck = Cookies.get("login");
            let login = null;
            if (ck != null) {
                login = JSON.parse(ck);
            }
            this.setState({
                user: login
            });
    }
}
const mapStateToProps = state => ({
    cookieResult:  state.reduxResult.cookieResult,
    loginResult: state.reduxResult.loginResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    login
}, dispatch);


export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Header));
