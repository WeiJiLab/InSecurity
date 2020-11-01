import React, {Component} from 'react';
import './SuggestPanel.css';
import Container from "react-bootstrap/Container";
import ArticleList from "../articlelists/ArticleList";
import {withTranslation} from 'react-i18next';


class SuggestPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={{
                background: '#fff',
                padding: '1em',
                marginTop: '1em',
                boxShadow: '0 1px 3px rgba(27,95,160,.1)',
                textAlign: 'left'
            }}>
                <h4>{this.renderSuggestIcon()}{this.props.t('Recommended')}</h4>

                <ArticleList articles={this.props.articlesResult.articles}/>

            </Container>
        );
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
}

export default withTranslation()(SuggestPanel);
