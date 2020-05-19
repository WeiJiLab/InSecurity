import {combineReducers} from 'redux'
import {ArticleActions, LoginActions, RegisterActions, TopicActions} from '../actions/actions'

const initialState = {
    loginResult: {
        loginStatus: false,
        message: null,
        userInfo: null
    },
    registerResult: {
        registerStatus: false,
        message: null,
        userInfo: null
    },
    editResult: {
        title: '',
        content: '',
    },
    postResult: {
        postStatus: false,
        title: '',
        content: '',
    },
    topicsResult: {
        topicsStatus: false,
        message: null,
        topics: []
    },
    articlesResult: {
        articlesStatus: false,
        message: null,
        articles: []
    },
    articlesByTopicResult: {
        articlesStatus: false,
        message: null,
        articles: []
    }
};

export function reduxResult(state = initialState, action) {
    switch (action.type) {
        case LoginActions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loginResult: action.payload,
            });
        case LoginActions.LOGIN_FAILED:
            return Object.assign({}, state, {
                loginResult: action.payload,
            });
        case RegisterActions.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                registerResult: action.payload,
            });
        case RegisterActions.REGISTER_FAILED:
            return Object.assign({}, state, {
                registerResult: action.payload,
            });

        case ArticleActions.WRITE_ARTICLE_CHANGE:
            return Object.assign({}, state, {
                editResult: action.payload,
            });

        case TopicActions.GET_TOPICS_FAILED:
            return Object.assign({}, state, {
                topicResult: action.payload,
            });

        case TopicActions.GET_TOPICS_SUCCESS:
            return Object.assign({}, state, {
                topicResult: action.payload,
            });

        case ArticleActions.ARTICLE_POST_FAILED:
            return Object.assign({}, state, {
                postResult: action.payload,
            });

        case ArticleActions.ARTICLE_POST_SUCCESS:
            return Object.assign({}, state, {
                postResult: action.payload,
            });

        case ArticleActions.GET_ARTICLE_LIST_ALL_FAILED:
            return Object.assign({}, state, {
                articlesResult: action.payload,
            });

        case  ArticleActions.GET_ARTICLE_LIST_ALL_SUCCESS:
            return Object.assign({}, state, {
                articlesResult: action.payload,
            });


        case ArticleActions.GET_ARTICLE_LIST_ALL_BY_TOPIC_FAILED:
            return Object.assign({}, state, {
                articlesByTopicResult: action.payload,
            });

        case  ArticleActions.GET_ARTICLE_LIST_ALL_BY_TOPIC_SUCCESS:
            return Object.assign({}, state, {
                articlesByTopicResult: action.payload,
            });

        default:
            return state;
    }
}


const InSecurityReducer = combineReducers({
    reduxResult,
});

export default InSecurityReducer
