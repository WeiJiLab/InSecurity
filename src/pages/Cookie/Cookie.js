import React, {Component} from 'react';
import './Cookie.css';
import Container from "react-bootstrap/Container";
import {Col, Row, Table} from "react-bootstrap";
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
                            <Container style={{padding: '3em'}}>
                                <h4>Hacker Board:</h4>
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>key</th>
                                        <th>value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.props.cookieHackerResult.cookies ? this.props.cookieHackerResult.cookies.map((item, index) => {
                                            return  <tr>
                                                <th>{index}</th>
                                                <th>{item.cid}</th>
                                                <th>{item.value}</th>
                                            </tr>
                                        }):null
                                    }
                                    </tbody>
                                </Table>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>);
    }

    componentWillReceiveProps(nextProps) {
        console.log(999,this.props.cookieHackerResult.cookies)
    }

}

const mapStateToProps = state => ({
    cookieHackerResult: state.reduxResult.cookieHackerResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getCookies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cookie);
