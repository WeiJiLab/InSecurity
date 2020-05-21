import React, {Component} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import Menu from "../../components/menu/Menu";
import {Link} from "react-router-dom";
import {articles} from "../../actions/actions";
import ArticleList from "../../components/articlelists/ArticleList";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import HotPanel from "../../components/hotpanel/HotPanel";
import Subscribe from "../../components/subscribe/Subscribe";

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

                                <ArticleList articles={this.props.articlesResult.articles}/>

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

                                <Container style={{marginTop:'1em'}}>
                                    <HotPanel/>
                                </Container>

                                <Container style={{marginTop:'1em'}}>
                                    <Subscribe/>
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
}

const mapStateToProps = state => ({
    articlesResult: state.reduxResult.articlesResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    articles
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
