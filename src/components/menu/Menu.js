import React, {Component, Fragment} from 'react';
import './Menu.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {topics} from "../../actions/actions";

class Menu extends Component {
    render() {
        return (
            <Container className="Menu">
                <Row>
                    <Col>
                        <Navbar bg="#fff" variant="light">
                            <Nav className="mr-auto">
                                {this.renderTopics()}
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        );
    };

    componentWillMount() {
        this.props.topics();
    }

    renderTopics() {
        return (<Fragment>
                {
                    this.props.topicsResult.topics.map((item, index) => {
                        return <Nav.Link className="nav-tag" style={{color: "#000"}}><Link to={"/topic/" + item}>{item}</Link></Nav.Link>
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
