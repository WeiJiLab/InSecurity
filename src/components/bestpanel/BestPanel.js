import React, {Component, Fragment} from 'react';
import './BestPanel.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

class BestPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container className="Left-Card">
                <h4>{this.renderBestIcon()}精选内容</h4>
                {
                    this.props.bestArticles[0] ? this.renderTheBestArticle(this.props.bestArticles[0]) : null
                }

                <Row style={{padding: '0 1em 0 1em'}}>
                    {this.renderBestArticle(this.props.bestArticles[1])}
                    {this.renderBestArticle(this.props.bestArticles[2])}
                    {this.renderBestArticle(this.props.bestArticles[3])}
                </Row>
            </Container>
        );
    }

    renderTheBestArticle(article) {
        const path = {
            pathname: "/article",
            state: {
                article: article
            }
        };
        return <Row style={{padding: '0 1em 0 1em'}}>
            <Col style={{padding: '1em 0em 0em 1em'}}>
                <Row className={"imgContainer"}><Image style={{width: '100%', borderRadius: '4px', height: '12em'}}
                            src={article.article.imgUrl}/></Row>
            </Col>
            <Col style={{paddingLeft: '3em', paddingTop: '0em'}}>
                <Row style={{marginTop: '1em'}}>
                    <Link to={path}>
                        <h6 className={"title"}>{article.article.title.substr(0, 50)}</h6>
                    </Link>
                </Row>
                <Row style={{fontSize: '0.8em'}}><span style={{color: 'gray'}}>作者:</span>{article.authorName}</Row>
                <Row style={{marginTop: '1em', color: 'gray'}}>{article.article.content.substr(0,50)}...</Row>

                <Row style={{marginTop: '1em'}}>
                    {this.renderTags(article.tags)}
                </Row>
            </Col>
        </Row>;
    }

    renderBestArticle(bestArticles) {
        if (!bestArticles) {
            return null;
        }
        let title = bestArticles.article.title;
        if (title.length > 26) {
            title = title.substr(0, 26) + '...';
        }
        const path = {
            pathname: "/article",
            state: {
                article: bestArticles
            }
        };
        return <>
            {
                bestArticles ? <Col style={{padding: '1em 1.5em 0 1em'}}>
                    <Row className={"imgContainer"}><Image style={{width: '100%', borderRadius: '4px', height: '8em'}}
                                src={bestArticles.article.imgUrl}/></Row>
                    <Row style={{marginTop: '1em'}}>
                        <Link to={path}>
                            <h6 className={"title"}>{title}</h6>
                        </Link>
                    </Row>
                    <Row style={{fontSize: '0.8em'}}><span style={{color: 'gray'}}>作者:</span>{bestArticles.authorName}</Row>
                    <Row style={{marginTop: '0.5em'}}>
                        {this.renderTags(bestArticles.tags)}
                    </Row>
                </Col> : <Col style={{padding: '1em 1.5em 0 1em'}}> </Col>
            }
        </>;
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


export default BestPanel;
