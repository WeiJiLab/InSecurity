import React, {Component, Fragment} from 'react';
import './ArticlesManage.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {articles, deleteArticleByAid, hotArticleByAid} from "../../actions/actions";
import {connect} from "react-redux";
import Col from "react-bootstrap/Col";
import {Badge, Button} from "react-bootstrap";

class ArticlesManage extends Component {
    render() {
        return (
            <Container style={{background: '#fff', padding: '1em', boxShadow: '0 1px 3px rgba(27,95,160,.1)'}}>
                <h4 style={{display: 'inline-block'}}>
                    {this.renderHotIcon()}
                    文章管理
                </h4><span
                style={{
                    color: 'gray',
                    marginLeft: '0.5em',
                    fontSize: '0.9em'
                }}>一共 <strong>{this.props.articlesResult.articles?this.props.articlesResult.articles.length:0}</strong> 篇文章</span>
                <Container style={{padding: 0, marginTop: '1em'}}>
                    <Container style={{padding: 0}}>
                        {this.renderAllArticlesList()}
                    </Container>
                </Container>
            </Container>
        );
    }

    renderAllArticlesList() {
        if (!this.props.articlesResult.articles) {
            return <Row><Col><span style={{color: '#ccc'}}>&nbsp;&nbsp;无</span></Col></Row>
        }

        return (<Fragment>{
            this.props.articlesResult.articles && this.props.articlesResult.articles.map((item, index) => {
                const path = {
                    pathname: "/article",
                    state: {
                        article: item
                    }
                };
                return <Container style={{marginBottom: '0em', paddingBottom: '0em'}}>
                    <Row>
                        <Col md={10} style={{marginBottom: '0.5em', paddingBottom: '0.5em'}}>
                            <Row style={{fontSize: '1em', color: '#303030'}}>
                                {item.article.hot ?
                                    <Col md={1} style={{padding: 0, margin: 0}}>
                                        <Badge variant="dark" className={"banBadge"}>热点</Badge>
                                    </Col>
                                    : null}
                                <Col md={11} style={{padding: 0, margin: 0}}>
                                    <Link className={"title"} to={path}>{item.article.title}</Link>
                                </Col>
                            </Row>
                            <Row style={{fontSize: '0.7em'}}>{this.renderTags(item.tags)}
                                <span style={{color: 'gray', marginLeft: '1em'}}>{item.authorName}</span>&nbsp;发布于&nbsp;<span
                                    style={{color: 'gray'}}>{item.article.createTime}</span>
                            </Row>
                        </Col>
                        <Col md={2} style={{padding: 0}}>
                            <Row style={{height: '100%'}}>
                                <Col onClick={this.deleteArticleById.bind(this, item.article.aid)} style={{color: '#000', height: '100%'}}><Link>删除</Link></Col>
                                <Col onClick={this.hotArticleById.bind(this, item.article.aid)}
                                     style={{color: '#000', height: '100%'}}><Link>{item.article.hot ? '降温' : '热点'}</Link></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>;
            })
        }</Fragment>);
    }

    renderTags(tags) {
        return <>
            <Button variant="link" style={{padding: 0, margin: 0}}>{this.renderTagIcon()}</Button>
            {
                tags.map((item, index) => {
                    let path = {
                        pathname: "/topic",
                        state: {
                            tag: item,
                        }
                    };
                    return <Fragment><Button variant="link" style={{padding: 0, margin: 0, fontSize: '0.7em'}}><Link to={path}>{item}</Link></Button>,
                    </Fragment>
                })
            }
        </>;
    }


    hotArticleById(aid) {
        this.props.hotArticleByAid(aid);
    }

    deleteArticleById(aid) {
        this.props.deleteArticleByAid(aid);
    }

    componentWillMount() {
        this.props.articles();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.hotArticleByAidResult !== this.props.hotArticleByAidResult) {
            this.props.articles();
        }
    }

    renderHotIcon() {
        return (
            <svg id="icon-icon-2" className="SvgIcon" viewBox="0 0 1024 1024">
                <path
                    d="M237.13426 364.040587h186.270239V301.953326H237.13426v62.087261zM237.13426 519.267195h496.719227V457.175706H237.13426v62.091489zM237.13426 674.493803h496.719227v-62.091489H237.13426V674.493803zM237.13426 829.716183h496.719227v-62.091489H237.13426v62.091489z"
                    fill="#1B5A97"/>
                <path
                    d="M826.988606 414.807346v508.048185a91.976428 91.976428 0 0 0 5.713111 31.04363H143.999141V146.726718h414.490186a222.680218 222.680218 0 0 1 24.273319-62.091489H81.907652v931.351193h807.172443v-81.88228c-1.361674-3.49299 0-7.277767 0-11.25284V390.41562a222.646387 222.646387 0 0 1-62.091489 24.391726z"
                    fill="#1B5A97"/>
                <path
                    d="M777.038006 388.444999c-105.927243 0-192.110213-86.178741-192.110214-192.110213S671.106534 4.228801 777.038006 4.228801s192.110213 86.178741 192.110213 192.110213-86.18297 192.105984-192.110213 192.105985z m0-324.437863c-72.967966 0-132.32765 59.363912-132.32765 132.32765s59.363912 132.32765 132.32765 132.327649 132.32765-59.363912 132.327649-132.327649-59.363912-132.32765-132.327649-132.32765z"
                    fill="#106A37"/>
            </svg>
        );
    }

    renderTagIcon() {
        return (
            <svg t="1589901720528" className="icon SvgIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1156"
                 width="200"
                 height="200">
                <path
                    d="M194.133333 388.266667c0 53.333333 42.666667 96 96 96s96-42.666667 96-96-42.666667-96-96-96-96 42.666667-96 96z m128 0c0 17.066667-14.933333 32-32 32s-32-14.933333-32-32 14.933333-32 32-32 32 14.933333 32 32zM951.466667 569.6L469.333333 104.533333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l458.666667 441.6-270.933333 273.066667c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333 8.533333 0 17.066667-2.133333 23.466667-8.533333l294.4-294.4c6.4-6.4 8.533333-14.933333 8.533333-23.466667 0-8.533333-4.266667-14.933333-10.666666-21.333333z"
                    fill="#007bff" p-id="1157"/>
                <path
                    d="M
                797.866667 593.066667c0-8.533333-4.266667-17.066667-8.533334-23.466667L371.2 151.466667l-12.8-12.8c-6.4-6.4-14.933333-8.533333-23.466667-8.533334H64c-17.066667 0-32 14.933333-32 32v270.933334c0 8.533333 4.266667 17.066667 8.533333 23.466666l430.933334 430.933334c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L789.333333 616.533333c4.266667-6.4 8.533333-14.933333 8.533334-23.466666zM494.933333 819.2L96 420.266667V194.133333h226.133333l398.933334 398.933334-226.133334 226.133333z"
                    fill="#007bff" p-id="1158"/>
            </svg>);
    }
}

const mapStateToProps = state => ({
    articlesResult: state.reduxResult.articlesResult,
    hotArticleByAidResult: state.reduxResult.hotArticleByAidResult,
    deleteArticleByAidResult: state.reduxResult.deleteArticleByAidResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    articles,
    hotArticleByAid,
    deleteArticleByAid,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ArticlesManage);
