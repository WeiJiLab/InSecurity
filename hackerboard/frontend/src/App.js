import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import Header from "./components/header/Header";
import {Col, Container, Row} from "react-bootstrap";
import Cookie from "./pages/Cookie/Cookie";

function App() {
    return (
        <div className="App">
            <Header/>
            <Container>
                <Row>
                    <Col md={2}> </Col>
                    <Col md={8}>
                        <Switch>
                            <Route exact path="/" component={Cookie}/>
                            <Route exact path="/cookie" component={Cookie}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
