import React, {Component} from 'react';
import './Topic.css';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Menu from "../../components/menu/Menu";
import {bindActionCreators} from "redux";
import {articlesByTopic} from "../../actions/actions";
import {connect} from "react-redux";
import ArticleList from "../../components/articlelists/ArticleList";
import HotPanel from "../../components/hotpanel/HotPanel";
import Subscribe from "../../components/subscribe/Subscribe";
import {withTranslation} from 'react-i18next';


class Topic extends Component {
    render() {
        let topic = this.props.location.state.tag;
        return (<Container style={{padding: 0}} className="Home">
            <Menu selected={topic}/>
            <Container className="Events">
                <Row style={{padding: 0}}>
                    <Col md={8} style={{padding: 0}}>
                        <Container className="Left-Card">
                            <h3>{this.renderBestIcon()}{topic}</h3>
                            <Row>
                                <Col>
                                {
                                this.props.i18n.language === 'zh' ? 
                                <p style={{color: '#888'}}>&nbsp;{this.props.t('Recorded')} <strong>{topic}</strong> {this.props.t('Channel')}{this.props.t('ChineseDe')}  <strong>{this.props.articlesByTopicResult.articles.length}</strong> {this.props.t('ChinesePian')}{this.props.t('Articles')}</p>
                                :
                                <p style={{color: '#888'}}>&nbsp;{this.props.t('WeGotYou')} <strong>{this.props.articlesByTopicResult.articles.length}</strong> {this.props.t('Articles')} {this.props.t('About')} {this.props.t('Channel')} <strong>{topic}</strong></p>

                                }
                                </Col>
                            </Row>
                        </Container>
                        <Container style={{
                            background: '#fff',
                            padding: '1em',
                            marginTop: 0,
                            boxShadow: '0 1px 3px rgba(27,95,160,.1)',
                            textAlign: 'left'
                        }}>
                            <h4>{this.props.t('Total')}</h4>

                            <ArticleList articles={this.props.articlesByTopicResult.articles}/>

                        </Container>
                    </Col>
                    <Col md={4} style={{paddingRight: 0, textAlign: 'left'}}>
                        <Row>
                            <Container>
                                <HotPanel/>
                            </Container>
                            <Container style={{marginTop:'1em'}}>
                                <Subscribe/>
                            </Container>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>);
    };

    componentWillMount() {
        let topic = this.props.location.state.tag;
        this.props.articlesByTopic(topic);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        let topic = this.props.location.state.tag;
        if (nextProps.location.state.tag !== topic) {
            this.props.articlesByTopic(nextProps.location.state.tag);
        }
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

const mapStateToProps = state => ({
    articlesByTopicResult: state.reduxResult.articlesByTopicResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    articlesByTopic
}, dispatch);


export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Topic));

