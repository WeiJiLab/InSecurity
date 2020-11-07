import React, {Component} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import {Button, Col, Image, Row} from "react-bootstrap";
import Menu from "../../components/menu/Menu";
import {Link} from "react-router-dom";
import {articles} from "../../actions/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import HotPanel from "../../components/hotpanel/HotPanel";
import Subscribe from "../../components/subscribe/Subscribe";
import BestPanel from "../../components/bestpanel/BestPanel";
import SuggestPanel from "../../components/suggestpanel/SuggestPanel";
import QRCode from "../../components/qrcode/QRCode";
import {withTranslation} from 'react-i18next';


class Home extends Component {
    render() {
        return (<Container style={{padding: 0}} className="Home">
                <Menu/>
                <Container className="Events">
                    <Row style={{padding: 0}}>
                        <Col md={8} style={{padding: 0}}>
                            <BestPanel bestArticles={this.props.articlesResult.articles}/>
                            <SuggestPanel articlesResult={this.props.articlesResult}/>
                        </Col>
                        <Col md={4} style={{paddingRight: 0, textAlign: 'left'}}>
                            <Row>
                                <Container className="Right-Top-Card">
                                    <Container className="Write-Card">
                                        <h2 className="Write-Card-Title">BuildSecurityIn {this.props.t('WritingPlatform')}</h2>
                                        <h3 className="Write-Card-Content">{this.props.t('FreshOnline')}</h3>
                                        <Link to={"/write"}><Button variant="outline-light" style={{marginTop: "0em"}}>{this.props.t('StartToWrite')}</Button></Link>
                                    </Container>
                                </Container>

                                <Container style={{marginTop:'1em'}}>
                                    <HotPanel/>
                                </Container>

                                <Container style={{marginTop:'1em'}}>
                                    <Subscribe/>
                                </Container>

                                <Container style={{marginTop:'1em'}}>
                                    <QRCode/>
                                </Container>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    };

    componentWillMount() {
        this.props.articles();
    }
}

const mapStateToProps = state => ({
    articlesResult: state.reduxResult.articlesResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    articles
}, dispatch);


export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Home));
