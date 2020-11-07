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
import {withTranslation} from 'react-i18next';


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
        let login = JSON.parse(Cookies.get("login")||"{}");
        if (!Cookies.get("login") || login == null || !login.loginStatus) {
            this.props.history.push("/login");
        }
    }

    render() {
        return (<Container style={{padding: "1em"}} className="Write">
            <Row style={{background: "#fff", padding: "2em", boxShadow: '0 1px 3px rgba(27,95,160,.1)'}}>
                <Col md={12} style={{padding: 0, textAlign: "left", paddingRight: "1em"}}>
                    <Container style={{marginBottom: '2em'}}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon" className={"label"}>{this.props.t('Title')}:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                className={"input"}
                                placeholder={this.props.t('InputTitle')}
                                aria-label="title"
                                aria-describedby="basic-addon" onChange={this.onTitleChange.bind(this)}/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon" className={"label"}>{this.props.t('Tag')}:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                className={"input"}
                                placeholder={this.props.t('InputTag')}
                                aria-label="tags"
                                aria-describedby="basic-addon" onChange={this.onTagsChange.bind(this)}/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon" className={"label"}>{this.props.t('PicLink')}:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                className={"input"}
                                placeholder={this.props.t('InputLink')}
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
                        onClick={this.post.bind(this)}>{this.props.t('Publish')}</Button>
                <Modal
                    size="sm"
                    show={this.state.showModal}
                    onHide={this.returnHome.bind(this)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            {this.props.t('SuccInPub')}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.t('CloseAndReturnToHome')}</Modal.Body>
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
                showModal: true,
            });
        }
    }

    returnHome() {
        this.setState({
            showModal: false,
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


export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Write));
