import React, {Component, Fragment} from 'react';
import './ArticleDetail.css';
import Container from "react-bootstrap/Container";
import {Button, Col, Image, Row} from "react-bootstrap";
import Menu from "../../components/menu/Menu";
import {bindActionCreators} from "redux";
import {articlesByKey} from "../../actions/actions";
import {connect} from "react-redux";
import HotPanel from "../../components/hotpanel/HotPanel";
import Subscribe from "../../components/subscribe/Subscribe";
import {Link} from "react-router-dom";
import SuggestListPanel from "../../components/suggestlistpanel/SuggestListPanel";
import {withTranslation} from 'react-i18next';


class ArticleDetail extends Component {
    render() {
        const article = this.props.location.state.article;
        let content = {
            __html:article.article.content
        };

        return (<Container style={{padding: 0}} className="Home">
            <Menu/>
            <Container className="Events">
                <Row style={{padding: 0}}>
                    <Col md={8} style={{padding: 0}}>
                        <Container className="Left-Card">
                            <h3>{this.renderBestIcon()}{this.props.t('ReadArticles')}</h3>
                            <Container style={{padding: '1em'}}>
                                <Row style={{marginTop: '1em'}}>

                                    <h4 className={"title"}>{this.renderTitle(article.article.title)}</h4>
                                </Row>

                                <Row>
                                    {this.renderTags(article.tags)}
                                </Row>

                                <Row style={{marginTop: '1em'}}>
                                    <Image style={{width: '100%', borderRadius: '4px'}} src={article.article.imgUrl}/>
                                </Row>

                                <Row style={{fontSize: '0.8em', marginTop: '1em'}}>
                                    <span style={{color: 'gray'}}>{this.props.t('Author')}:</span>
                                    {article.authorName}
                                </Row>
                                <Row style={{fontSize: '0.8em'}}>
                                    <span style={{color: 'gray'}}>{this.props.t('PublishedAt')}:</span>
                                    {article.article.createTime}
                                </Row>


                                <Row style={{marginTop: '3em', color: '#4a4a4a'}}><div style={{width:'100%'}} dangerouslySetInnerHTML={content}></div></Row>
                            </Container>
                        </Container>
                    </Col>
                    <Col md={4} style={{paddingRight: 0, textAlign: 'left'}}>
                        <Row>
                            <Container>
                                <HotPanel/>
                            </Container>
                            <Container style={{marginTop: '1em'}}>
                                <SuggestListPanel tags={article.tags}/>
                            </Container>
                            <Container style={{marginTop: '1em'}}>
                                <Subscribe/>
                            </Container>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>);
    };

    renderTitle(title){
        let html = {
            __html: title
        };
        // return <h5>{title}</h5>;
        return <h6 className={"title"}>
            <div style={{width: '100%'}} dangerouslySetInnerHTML={html}></div>
        </h6>;
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
                    return <Fragment><Button variant="link" style={{padding: 0, margin: 0}}><Link to={path}>{item}</Link></Button>,
                    </Fragment>
                })
            }
        </>;
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


export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(ArticleDetail));
