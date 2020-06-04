import React, {Component} from 'react';
import './Write.css';
import Container from "react-bootstrap/Container";
import {Col, FormControl, InputGroup, Modal, Row} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {edit, post} from "../../actions/actions";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";
import BraftEditor from "braft-editor";
import 'braft-editor/dist/index.css'

class Write extends Component {

    constructor(props) {
        super(props);
        this.article = {
            uid: null,
            title: '',
            tags: '',
            imgUrl: '',
            content: ''
        };
        this.state = {
            editorState: null,
            showModal: false
        };
        this.doEdit = this.doEdit.bind(this);
    }

    componentWillMount() {
        let login = JSON.parse(Cookies.get("login"));
        if (login == null || !login.loginStatus) {
            this.props.history.push("/login");
        }
    }

    componentDidMount() {
        if (this.props.postResult.postStatus) {
            this.props.history.push("/");
        }
    }

    render() {
        return (<Container style={{padding: "1em"}} className="Write">
            <Row style={{background: "#fff", padding: "2em", boxShadow: '0 1px 3px rgba(27,95,160,.1)'}}>
                <Col md={12} style={{padding: 0, textAlign: "left", paddingRight: "1em"}}>
                    <Container style={{marginBottom: '2em'}}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon" className={"label"}>标题:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                className={"input"}
                                placeholder="请输入标题"
                                aria-label="title"
                                aria-describedby="basic-addon" onChange={this.onTitleChange.bind(this)}/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon" className={"label"}>标签:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                className={"input"}
                                placeholder="请输入标签,用逗号隔开"
                                aria-label="tags"
                                aria-describedby="basic-addon" onChange={this.onTagsChange.bind(this)}/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon" className={"label"}>标题图片链接:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                className={"input"}
                                placeholder="请输入链接"
                                aria-label="tags"
                                aria-describedby="basic-addon" onChange={this.onImageUrlChange.bind(this)}/>
                        </InputGroup>
                    </Container>
                    <Container>
                        <BraftEditor
                            value={this.props.editorState}
                            onChange={this.handleEditorChange.bind(this)}
                            style={{marginBottom: '1em'}}
                        />
                    </Container>
                </Col>
                <Button variant="outline-dark" type="button" style={{marginTop: '0em', marginLeft: '1.5em', zIndex: '99'}}
                        onClick={this.post.bind(this)}>发布</Button>
                <Modal
                    size="sm"
                    show={this.state.showModal}
                    onHide={this.returnHome.bind(this)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            发布成功
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>关闭弹框返回主页</Modal.Body>
                </Modal>
            </Row>
        </Container>);
    };

    handleEditorChange(editorState) {
        this.setState({editorState})
    }


    onTagsChange(e) {
        this.article.tags = e.currentTarget.value;
    }

    onImageUrlChange(e) {
        this.article.imgUrl = e.currentTarget.value;
    }

    onTitleChange(e) {
        this.article.title = e.currentTarget.value;
        this.doEdit();
    }

    doEdit() {
        this.props.edit(this.article);
    }

    post() {
        const htmlContent = this.state.editorState.toHTML();
        this.article.content = htmlContent;

        let login = JSON.parse(Cookies.get("login"));
        this.article.uid = login.userInfo.userDTO.uid;

        this.props.post(this.article);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.postResult.postStatus === true) {
            this.setState({
                showModal:true,
            });
        }
    }
    returnHome(){
        this.setState({
            showModal:false,
        });
        this.props.history.push("/home");
    }
}


const mapStateToProps = state => ({
    article: state.reduxResult.editResult,
    postResult: state.reduxResult.postResult,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    edit,
    post
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Write);
