import React, {Component} from 'react';
import './Write.css';
import Container from "react-bootstrap/Container";
import {Col, FormControl, InputGroup, Row} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import {bindActionCreators} from "redux";
import {edit,post} from "../../actions/actions";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";

class Write extends Component {

    constructor(props) {
        super(props);
        this.article = {
            title: '',
            content: ''
        };
        this.doEdit = this.doEdit.bind(this);
    }

    render() {
        return (<Container style={{padding: "1em"}} className="Write">
            <Row style={{background: "#fff", padding: "2em",boxShadow:'0 1px 3px rgba(27,95,160,.1)'}}>
                <Col md={6} style={{padding: 0, textAlign: "left", borderRight: "solid 1px #eee", paddingRight: "1em"}}>
                    <h3>写作</h3>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon">标题</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="请输入标题"
                            aria-label="title"
                            aria-describedby="basic-addon" onChange={this.onTitleChange.bind(this)}/>
                    </InputGroup>
xw
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>内容</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl style={{height:'30em'}} as="textarea" aria-label="With textarea" onChange={this.onContentChange.bind(this)}/>
                    </InputGroup>
                </Col>
                <Col md={6} style={{padding: 0, paddingLeft: "1em", textAlign: "left"}}>
                    <h3 style={{display: 'block'}}>预览</h3>
                    <h4>{this.props.article.title}</h4>
                    <ReactMarkdown source={this.props.article.content}/>
                </Col>
                <Button variant="outline-dark" type="button" style={{marginTop:'1em'}} onClick={this.post.bind(this)}>发布</Button>
            </Row>
        </Container>);
    };

    onTitleChange(e) {
        this.article.title = e.currentTarget.value;
        this.doEdit();
    }

    onContentChange(e) {
        this.article.content = e.currentTarget.value;
        this.doEdit()
    }

    doEdit(){
        this.props.edit(this.article);
    }

    post(){
        this.props.post(this.article);
    }
}


const mapStateToProps = state => ({
    article: state.reduxResult.editResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    edit,
    post
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Write);
