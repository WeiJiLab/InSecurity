import React, {Component} from 'react';
import './Subscribe.css';
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Row} from "react-bootstrap";

class Subscribe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subscribed: false,
        };
        this.subscribeDTO = {
            Email: '',
            Country: "China",
            consent_events: "no",
            Subscription_Technology_Radar__c: "yes",
            consent_Privacy_Policy: "yes",
            utm_medium: null,
            utm_source: null,
            utm_campaign: null,
            utm_content: null,
            utm_term: null,
            Sync_to_Marketo__c: "True",
            isSpam: null,
            formid: 8228,
            munchkinId: "199-QDE-291",
            _mkt_trk: null,
            id: "199-QDE-291&token:_mch-thoughtworks.com-1563934326603-86370",
            formVid: 8228,
            _mktoReferrer: "https://www.thoughtworks.com/radar"
        };
    }

    render() {
        return (
            <Container style={{background: '#fff', padding: '1em', boxShadow: '0 1px 3px rgba(27,95,160,.1)'}}>
                <h4>
                    订阅
                </h4>
                <h5>
                    <strong>BuildSecurityIn</strong>每周精要
                </h5>
                <h6 style={{background: '#eee', padding: '0.5em'}}>你将获得</h6>
                <ul>
                    <li style={{color: '#828a92'}}>资深编辑编译的全球 网络安全 要闻</li>
                    <li style={{color: '#828a92'}}>一线技术专家撰写的实操技术案例</li>
                    <li style={{color: '#828a92'}}>BuildSecurityIn 出品的课程和线下活动报名通道</li>
                </ul>
                {this.state.subscribed ?
                    <Row style={{color:'#09aca8',textAlign:'center'}}>
                        <Col><h4 style={{textAlign:'center'}}>你已订阅.</h4></Col>
                    </Row> :
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="请输入邮箱" style={{border: 'solid 1px #09aca8'}}
                                          onChange={this.onEmailChange.bind(this)}/>
                            <Form.Text className="text-muted">
                                我们不会向任何人泄露您的邮箱信息
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="button"
                                onClick={this.subscribe.bind(this)}
                                style={{background: '#09aca8', color: '#fff', border: 'solid 1px #09aca8', width: '100%'}}>
                            立即订阅 >
                        </Button>
                    </Form>
                }
            </Container>
        );
    }

    onEmailChange(e) {
        this.subscribeDTO.Email = e.currentTarget.value;
    }

    subscribe() {
        this.setState({
            subscribed: true
        })
        // https://info.thoughtworks.com/index.php/leadCapture/save2
    }
}

export default Subscribe;
