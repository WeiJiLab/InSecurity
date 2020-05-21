import React, {Component, Fragment} from 'react';
import './Menu.css';
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {topics} from "../../actions/actions";
import {Dropdown, Navbar} from "react-bootstrap";

class Menu extends Component {

    render() {
        const topics = this.props.topicsResult.topics;
        return (
            <Container className="Menu">
                <Row>
                    <Col>
                        <Navbar bg="#fff" variant="light">
                            <Nav className="mr-auto">
                                {this.renderTopics()}
                                {topics.length > 10 ?
                                    <Navbar.Collapse className="justify-content-end" style={{position:'absolute',right:'0'}}>
                                        <Dropdown style={{float: 'right'}}>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{background:'transparent',color:'#4a4a4a',border:'none'}}>
                                                更多
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {this.renderDropDownTags()}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Navbar.Collapse> : null
                                }
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        );
    };

    renderDropDownTags() {
        const topics = this.props.topicsResult.topics;
        const result = [];
        if (topics.length > 10) {
            for (let i = 10; i < topics.length; i++) {
                result.push(topics[i]);
            }
        }
        return <>
            {
                result.map((item, index) => {
                    let path = {
                        pathname: "/topic",
                        state: {
                            tag: item,
                        }
                    };
                    return <Dropdown.Item href="#/action-1"><Link style={{color: '#4a4a4a'}}
                                                           to={path}>{item}</Link></Dropdown.Item>
                })
            }
        </>;
    }

    componentWillMount() {
        this.props.topics();
    }

    renderTopics() {
        const topics = this.props.topicsResult.topics;
        const result = [];
        if (topics.length < 10) {
            for (let i = 0; i < topics.length; i++) {
                result.push(topics[i]);
            }
        } else {
            for (let i = 0; i < 10; i++) {
                result.push(topics[i]);
            }
        }

        return (<Fragment>
                <Nav.Link className="nav-tag" style={{color: "#000"}}><Link style={{color: '#1458d4'}} to={"/"}>首页</Link></Nav.Link>
                {
                    result.map((item, index) => {
                        let path = {
                            pathname: "/topic",
                            state: {
                                tag: item,
                            }
                        };
                        return <Nav.Link className="nav-tag" style={{color: "#000", paddingRight: '2em'}}><Link style={{color: '#4a4a4a'}}
                                                                                                                to={path}>{item}</Link></Nav.Link>
                    })
                }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    topicsResult: state.reduxResult.topicsResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    topics
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
