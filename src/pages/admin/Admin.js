import React, {Component} from 'react';
import './Admin.css';
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import Cookies from "js-cookie";
import Logo from "../../static/images/logo_g.png"
import ArticlesManage from "../../components/articlesmanage/ArticlesManage";
import UsersManage from "../../components/usermanage/UsersManage";

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentShow: 'Article'
        }
    }

    render() {
        let login = JSON.parse(Cookies.get("login"));
        if (login == null || !login.loginStatus) {
            this.props.history.push("/login");
            return null;
        }

        let user = JSON.parse(Cookies.get("login")).userInfo.userDTO;
        return (<Container style={{padding: 0, marginTop: '1em'}} className="Home">
            <Container className="Events">
                {user.username === 'admin' ?
                    <Row style={{padding: 0}}>
                        <Col md={4} style={{padding: 0}}>
                            <Container className="Left-Card" style={{padding: 0}}>
                                <Container style={{padding: 0, background: 'rgb(75,166,127)'}}>
                                    <Image style={{width: '25%', height: '5em', background: 'rgb(75,166,127)', padding: '1em'}} src={Logo}/>
                                    <h3 style={{color: '#fff', padding: 0, margin: 0}}>后台管理</h3>
                                </Container>
                                <Container style={{padding: 0, paddingTop: '2em', paddingBottom: '2em'}}>
                                    <Row className={'adminItem'} onClick={this.changeToArticleAdmin.bind(this)}>
                                        <h5 style={{color: this.state.currentShow === "Article" ? 'rgb(75,166,127)' : '#000'}}>{this.renderBestIcon()}文章管理</h5>
                                        <h5 style={{
                                            position: 'absolute',
                                            right: '1.5em',
                                            color: this.state.currentShow === "Article" ? 'rgb(75,166,127)' : 'gray',
                                            fontWeight: 'lighter'
                                        }}> > </h5>
                                    </Row>
                                    <Row className={'adminItem'} onClick={this.changeToUserAdmin.bind(this)}>
                                        <h5 style={{color: this.state.currentShow === "User" ? 'rgb(75,166,127)' : '#000'}}>{this.renderBestIcon()}用户管理</h5>
                                        <h5 style={{
                                            position: 'absolute',
                                            right: '1.5em',
                                            color: this.state.currentShow === "User" ? 'rgb(75,166,127)' : 'gray',
                                            fontWeight: 'lighter'
                                        }}> > </h5>
                                    </Row>
                                </Container>
                            </Container>
                        </Col>
                        <Col md={8} style={{paddingRight: 0, textAlign: 'left'}}>
                            <Row>
                                {this.state.currentShow === 'Article' ?
                                    <Container style={{marginTop: '0em'}}>
                                        <ArticlesManage/>
                                    </Container> : null
                                }
                                {this.state.currentShow === 'User' ?
                                    <Container style={{marginTop: '0em'}}>
                                        <UsersManage/>
                                    </Container> : null
                                }
                            </Row>
                        </Col>
                    </Row> :
                    <Row style={{padding: 0}}>
                        <Col md={12} style={{padding: 0}}>
                            <Container className="Left-Card" style={{padding: '2em'}}>
                                <h3>抱歉, 你没有权限访问该页面.</h3>
                            </Container>
                        </Col>
                    </Row>
                }
            </Container>
        </Container>);
    }

    changeToArticleAdmin() {
        this.setState({
            currentShow: 'Article'
        });
    }

    changeToUserAdmin() {
        this.setState({
            currentShow: 'User'
        });
    }

    renderBestIcon() {
        return (<svg id="icon-icon-1" className="SvgIcon" viewBox="0 0 1024 1024">
            <path
                d="M946.612679 910.248381a33.235846 33.235846 0 0 1-66.471692 0v-432.084111h66.47622v432.084111z m-132.952439 33.235846H82.43993V79.316005h731.22031v830.932376a98.471551 98.471551 0 0 0 6.116554 33.235846h-6.116554z m66.476219-531.796177V12.839785H15.968237v997.120662h897.408596c55.07163 0 99.712066-44.640436 99.712066-99.712066V411.68805h-132.95244z"
                fill="#1B5A97"/>
            <path
                d="M182.151996 478.159742h531.796177V411.68805H182.151996v66.471692zM182.151996 644.348028h531.796177v-66.47622H182.151996v66.47622zM182.151996 810.536314h531.796177v-66.476219H182.151996v66.476219z"
                fill="#106A37"/>
        </svg>);
    }
}

export default Admin;
