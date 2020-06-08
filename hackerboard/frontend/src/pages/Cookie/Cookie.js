import React, {Component} from 'react';
import './Cookie.css';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {getCookies} from "../../actions/actions";
import {connect} from "react-redux";

class Cookie extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getCookies();
        console.log(this.props.cookieHackerResult.cookies)
    }

    render() {

        return (<Container style={{padding: 0, marginTop: '1em'}} className="Home">
            <Container className="Events">
                <Row style={{padding: 0}}>
                    <Col md={12} style={{padding: 0}}>
                        <Container className="Left-Card" style={{padding: 0}}>
                            <Container style={{padding: '3em',width:"100%"}}>
                                <Row style={{width:"100%"}}>
                                    <Col md={1} style={{color: 'green', border: "none"}}>ID</Col>
                                    <Col md={6} style={{color: 'green', border: "none"}}>完整COOKIE</Col>
                                    <Col md={5} style={{color: 'red', border: "none"}}>敏感信息</Col>
                                </Row>
                                {
                                    this.props.cookieHackerResult.cookies ? this.props.cookieHackerResult.cookies.map((item, index) => {
                                        return <Row style={{width:"100%"}}>
                                            <Col md={1} style={{color: 'green', border: "none"}}>{index}</Col>
                                            <Col md={6} style={{color: 'green', border: "none",textAlign:"left",wordBreak:"break-all"}}>{item}</Col>、
                                            <Col md={5} style={{color: 'red', border: "none",textAlign:"left",wordBreak:"break-all"}}>{item}</Col>
                                        </Row>
                                    }) : null
                                }
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>);
    }

    componentWillReceiveProps(nextProps) {
        console.log(999, this.props.cookieHackerResult.cookies)
    }

}

const mapStateToProps = state => ({
    cookieHackerResult: state.reduxResult.cookieHackerResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getCookies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cookie);
