import React from 'react';
import './Subscribe.css';
import Container from "react-bootstrap/Container";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

function Subscribe() {
    return (
        <Container style={{background: '#fff', padding: '1em', boxShadow: '0 1px 3px rgba(27,95,160,.1)'}}>
            <h4>
                订阅
            </h4>
            <h5>
                <strong>BuildSecurityIn</strong>每周精要
            </h5>
            <h6 style={{background:'#eee',padding:'0.5em'}}>你将获得</h6>
            <ul>
                <li style={{color:'#828a92'}}>资深编辑编译的全球 网络安全 要闻</li>
                <li style={{color:'#828a92'}}>一线技术专家撰写的实操技术案例</li>
                <li style={{color:'#828a92'}}>BuildSecurityIn 出品的课程和线下活动报名通道</li>
            </ul>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="请输入邮箱" style={{border: 'solid 1px #09aca8'}}/>
                    <Form.Text className="text-muted">
                        我们不会向任何人泄露您的邮箱信息
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="button" style={{background: '#09aca8', color: '#fff', border: 'solid 1px #09aca8', width: '100%'}}>
                    立即订阅 >
                </Button>
            </Form>
        </Container>
    );
}

export default Subscribe;
