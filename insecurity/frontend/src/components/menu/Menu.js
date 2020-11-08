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
import {withTranslation} from 'react-i18next';


class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const topics = this.props.topicsResult.topics;
        return (
            <Container className="Menu">
                <Row style={{padding:0,margin:0}}>
                    <Col style={{padding:0,margin:0}}>
                        <Navbar bg="#fff" variant="light">
                            <Row style={{padding:0,margin:0}}>
                                <Col md={10} style={{overflowX:'hidden',padding:0,margin:0}}>
                                    <Nav className="mr-auto">
                                        {this.renderTopics()}
                                    </Nav>
                                </Col>
                                <Col md={2} style={{padding:0,margin:0,textAlign:'left'}}>
                                    <Nav className="mr-auto">
                                        {topics && topics.length > 10 ?
                                            <Navbar.Collapse className="justify-content-end" style={{position: 'absolute', right: '0'}}>
                                                <Dropdown style={{float: 'right'}}>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic"
                                                                     style={{background: 'transparent', color: '#4a4a4a', border: 'none'}}>
                                                        {this.props.t('More')}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        {this.renderDropDownTags()}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Navbar.Collapse> : null
                                        }
                                    </Nav>
                                </Col>
                            </Row>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        );
    };

    renderDropDownTags() {
        const topics = this.props.topicsResult.topics;
        const result = [];
        if (topics) {
            if (topics.length > 10) {
                for (let i = 10; i < topics.length; i++) {
                    result.push(topics[i]);
                }
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
        if (topics) {
            if (topics.length < 10) {
                for (let i = 0; i < topics.length; i++) {
                    result.push(topics[i]);
                }
            } else {
                for (let i = 0; i < 10; i++) {
                    result.push(topics[i]);
                }
            }
        }

        return (<Fragment>
                <Nav.Link className="nav-tag" style={{color: "#000"}}><Link
                    style={{
                        color: this.props.selected ? '#4a4a4a' : 'rgb(75,166,127)',
                        fontWeight: this.props.selected ? 'normal' : 'bold',
                        paddingRight: '0.5em'
                    }}
                    to={"/"}>{this.props.t('Homepage')}</Link></Nav.Link>
                {
                    result.map((item, index) => {
                        let path = {
                            pathname: "/topic",
                            state: {
                                tag: item,
                            }
                        };
                        let color = '#4a4a4a';
                        let bold = 'normal';
                        if (this.props.selected === item) {
                            color = 'rgb(75,166,127)';
                            bold = 'bold';
                        }
                        return <Nav.Link style={{color: "#000", paddingRight: '1em'}}>
                            <Link style={{color: color, fontWeight: bold, whiteSpace:'nowrap'}} to={path}>{item}</Link>
                        </Nav.Link>
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


export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Menu));
