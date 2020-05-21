import React, {Component} from 'react';
import './Search.css';
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {topics} from "../../actions/actions";
import Button from "react-bootstrap/Button";
import {FormControl, InputGroup} from "react-bootstrap";

class Search extends Component {
    render() {
        return (
            <Container className="Search" style={{width: '12em', padding: 0, margin: 0,marginRight:'1em'}}>
                <Row style={{padding: 0, margin: 0, width: '100%'}}>
                    <Col style={{paddingLeft: 0, paddingRight: 0}}>
                        <Navbar bg="#fff" variant="light" style={{paddingLeft: 0, paddingRight: 0}}>
                            <InputGroup>
                                <FormControl
                                    style={{borderTopLeftRadius: '10em', borderBottomLeftRadius: '10em', height: '2em'}}
                                    placeholder="请输入搜索内容"
                                    aria-label="search"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" style={{
                                        borderTopRightRadius: '10em',
                                        borderBottomRightRadius: '10em',
                                        height: '2em',
                                        lineHeight: '1em',
                                        border:'1px solid #ced4da'
                                    }}>{this.renderSearchIcon()}</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        );
    };

    renderSearchIcon() {
        return (
            <svg t="1590027607917" className="searchIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2060" width="200"
                 height="200">
                <path
                    d="M968.842667 908.501333L726.698667 666.357333A382.293333 382.293333 0 0 0 810.666667 426.666667C810.666667 214.592 638.752 42.666667 426.666667 42.666667 214.592 42.666667 42.666667 214.592 42.666667 426.666667s171.925333 384 384 384c90.666667 0 173.994667-31.413333 239.690666-83.978667l242.144 242.144a42.666667 42.666667 0 0 0 60.341334-60.330667zM426.666667 725.333333c-164.949333 0-298.666667-133.717333-298.666667-298.666666s133.717333-298.666667 298.666667-298.666667c164.96 0 298.666667 133.717333 298.666666 298.666667S591.626667 725.333333 426.666667 725.333333z"
                    p-id="2061"/>
            </svg>
        );
    }
}

const mapStateToProps = state => ({
    topicsResult: state.reduxResult.topicsResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    topics
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Search);
