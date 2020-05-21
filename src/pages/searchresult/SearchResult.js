import React, {Component} from 'react';
import './SearchResult.css';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Menu from "../../components/menu/Menu";
import {bindActionCreators} from "redux";
import {articlesByKey} from "../../actions/actions";
import {connect} from "react-redux";
import ArticleList from "../../components/articlelists/ArticleList";
import HotPanel from "../../components/hotpanel/HotPanel";

class SearchResult extends Component {
    render() {
        let key = this.props.location.state.key;
        let html = {
            __html: key
        };

        return (<Container style={{padding: 0}} className="Home">
            <Menu/>
            <Container className="Events">
                <Row style={{padding: 0}}>
                    <Col md={8} style={{padding: 0}}>
                        <Container className="Left-Card">
                            <h3>{this.renderBestIcon()}搜索结果</h3>
                            <Row>
                                <Col>
                                    <p style={{color: '#888'}}>&nbsp;收录了关于 <div style={{display: 'inline-block'}} dangerouslySetInnerHTML={html}/> 的 {this.props.articlesByKeyResult.articles ? this.props.articlesByKeyResult.articles.length : 0} 篇内容
                                    </p>
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
                            <h4>全部</h4>

                            <ArticleList articles={this.props.articlesByKeyResult.articles}/>

                        </Container>
                    </Col>
                    <Col md={4} style={{paddingRight: 0, textAlign: 'left'}}>
                        <Row>
                            <Container>
                                <HotPanel/>
                            </Container>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>);
    };

    componentWillMount() {
        let key = this.props.location.state.key;
        this.props.articlesByKey(key);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        let key = this.props.location.state.key;
        if (nextProps.location.state.key !== key) {
            this.props.articlesByKey(nextProps.location.state.key);
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
    articlesByKeyResult: state.reduxResult.articlesByKeyResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    articlesByKey
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
