import React, {Component, Fragment} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import {Button, Col, Image, Row} from "react-bootstrap";
import Menu from "../../components/menu/Menu";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {articles} from "../../actions/actions";
import {connect} from "react-redux";

class Home extends Component {
    render() {
        return (<Container style={{padding: 0}} className="Home">
            <Menu/>
            <Container className="Events">
                <Row style={{padding: 0}}>
                    <Col md={8} style={{padding: 0}}>
                        <Container className="Left-Card">
                            <h3>{this.renderBestIcon()}精选内容</h3>
                            <Row>
                                <Col><span style={{color: '#ccc'}}>&nbsp;&nbsp;无</span></Col>
                            </Row>
                        </Container>
                        <Container style={{
                            background: '#fff',
                            padding: '1em',
                            marginTop: '1em',
                            boxShadow: '0 1px 3px rgba(27,95,160,.1)',
                            textAlign: 'left'
                        }}>
                            <h3>{this.renderSuggestIcon()}推荐内容</h3>

                            {this.renderSuggestArticlesList()}

                        </Container>
                    </Col>
                    <Col md={4} style={{paddingRight: 0, textAlign: 'left'}}>
                        <Row>
                            <Container className="Right-Top-Card">
                                <Container className="Write-Card">
                                    <h2 className="Write-Card-Title">InSecurity写作平台</h2>
                                    <h3 className="Write-Card-Content">全新上线</h3>
                                    <Link to={"/write"}><Button variant="outline-light" style={{marginTop: "1em"}}>开始写作</Button></Link>
                                </Container>
                            </Container>
                            <Container>
                                <Container style={{background: '#fff', padding: '1em', boxShadow: '0 1px 3px rgba(27,95,160,.1)'}}>
                                    <h3>
                                        {this.renderHotIcon()}
                                        热点
                                    </h3>
                                    <Row>
                                        <Col><span style={{color: '#ccc'}}>&nbsp;&nbsp;无</span></Col>
                                    </Row>
                                </Container>
                            </Container>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>);
    };

    componentWillMount() {
        this.props.articles();
    }

    renderSuggestArticlesList() {
        return (<Fragment>
            {
                this.props.articlesResult.articles.map((item, index) => {
                    return <Row className={"Article-Card"}>
                        <Col md={8}>
                            <h5>{item.article.title}</h5>
                            <p>作者: {item.authorName}</p>
                            <h6 style={{color: '#aaa'}}>{item.article.content}</h6>
                            <Button variant="link" style={{padding: 0, margin: 0}}>{this.renderTagIcon()}</Button>
                            {
                                item.tags.map((item, index) => {
                                    return <Button variant="link" style={{padding: 0, margin: 0}}><Link to={"/topic/" + item}>{item}</Link></Button>
                                })
                            }
                        </Col>
                        <Col md={4}>
                            <Image style={{width: '100%'}} src={item.article.imgUrl}/>
                        </Col>
                    </Row>
                })
            }

        </Fragment>);
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

    renderSuggestIcon() {
        return (<svg id="icon-icon-6" className="SvgIcon" viewBox="0 0 1024 1024">
            <path
                d="M588.406751 21.6726a144.664604 144.664604 0 0 0-108.501704 49.547898A144.668938 144.668938 0 0 0 371.403343 21.6726H9.726663v868.017964h361.67668a72.347473 72.347473 0 0 1 53.526987 24.953832l54.974717 62.568796v-108.501704a144.673273 144.673273 0 0 0-108.501704-51.359727H82.061132V94.007069h289.337877a72.347473 72.347473 0 0 1 53.526987 24.953831l18.083617 20.614977v496.822679h72.334469V141.023607l18.083617-20.614977a72.343138 72.343138 0 0 1 54.974717-26.401561H877.740293v493.129667h72.334469V21.6726h-361.668011z"
                fill="#1B5A97"/>
            <path
                d="M118.228367 238.676007h253.170642v72.33447H118.228367zM118.228367 455.683749h180.836172v72.33447h-180.836172zM571.471781 238.676007h253.170642v72.33447h-253.170642zM571.471781 455.683749h253.170642v72.33447h-253.170642z"
                fill="#1B5A97"/>
            <path d="M686.375571 999.197877l-233.869025-233.869025 55.737592-55.741927 179.9606 179.964935 277.608666-259.698429 53.852076 57.562425z"
                  fill="#106A37"/>
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
    };
}

const mapStateToProps = state => ({
    articlesResult: state.reduxResult.articlesResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    articles
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
