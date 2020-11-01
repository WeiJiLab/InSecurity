import React, {Component} from 'react';
import './Subscribe.css';
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Row} from "react-bootstrap";
import {withTranslation} from 'react-i18next';


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
                {this.props.t('Subscribe')}
                </h4>
                <h5>
                    <strong>BuildSecurityIn</strong>{this.props.t('WeeklyEssentials')}
                </h5>
                <h6 style={{background: '#eee', padding: '0.5em'}}>{this.props.t('YouWillGet')}</h6>
                <ul>
                    <li style={{color: '#828a92'}}>{this.props.t('EditorGeneratedContent')}</li>
                    <li style={{color: '#828a92'}}>{this.props.t('ExpertGeneratedContent')}</li>
                    <li style={{color: '#828a92'}}>{this.props.t('OfflineCourseApplication')}</li>
                </ul>
                {this.state.subscribed ?
                    <Row style={{color:'#09aca8',textAlign:'center'}}>
                        <Col><h4 style={{textAlign:'center'}}>{this.props.t('YouHaveSubscribed')}</h4></Col>
                    </Row> :
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder={this.props.t('InputEmail')} style={{border: 'solid 1px #09aca8'}}
                                          onChange={this.onEmailChange.bind(this)}/>
                            <Form.Text className="text-muted">
                                 {this.props.t('NoDisclosureEmail')}
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="button"
                                onClick={this.subscribe.bind(this)}
                                style={{background: '#09aca8', color: '#fff', border: 'solid 1px #09aca8', width: '100%'}}>
                            {this.props.t('SubscribeNow')} >
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

export default withTranslation()(Subscribe);
