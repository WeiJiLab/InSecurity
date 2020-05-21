import React, {Component, Fragment} from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/logo.png"
import Button from "react-bootstrap/Button";
import {bindActionCreators} from "redux";
import {login} from "../../actions/actions";
import {connect} from "react-redux";
import Cookies from "js-cookie";
import Search from "../search/Search";
import Form from "react-bootstrap/Form";

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
                        <Navbar bg="#fff" variant="light">
                            <Link to="/home"><Image src={Logo} className="logo-img" rounded/>
                                <Navbar.Brand className="icon" href="#home"><span className="span-in">TW</span>
                                    <span className="span-security" style={{fontWeight:'bolder'}}>OWASP</span></Navbar.Brand>
                            </Link>

                            <Navbar.Collapse className="justify-content-end">
                                <Search/>

                                <Button className={"buttonWrite"} variant="default" type="button" style={{background:'#3db24b',color:'#fff'}}><Link style={{color:'#fff'}} to={"/write"}>写作平台</Link></Button>

                                {
                                    this.renderUserInfo()
                                }
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        );
    }


    renderUserInfo() {
        let ck = Cookies.get("login");
        let login = null;
        if (ck != null) {
            login = JSON.parse(ck);
        }

        if (ck == null || login == null || !login.loginStatus) {
            return (<Fragment><Link to="/login"><Button variant="link" style={{color: "#000"}}>
                登录
            </Button></Link>|
                <Link to="/register"><Button variant="link" style={{color: "#000"}}>
                    注册
                </Button></Link></Fragment>);
        } else {
            return (<Link to="/me"><Button variant="link" style={{color: "#000"}}>
                <strong>{login.userInfo.userDTO.username}</strong> ({login.userInfo.userDTO.email})
            </Button></Link>);
        }
    }
}

const mapStateToProps = state => ({
    loginResult: state.reduxResult.loginResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    login
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Header);
