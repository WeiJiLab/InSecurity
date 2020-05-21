import {combineReducers} from 'redux'
import {ArticleActions, LoginActions, RegisterActions, TopicActions, UserActions} from '../actions/actions'

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
    articlesHotResult: {
        articlesHotStatus: false,
        message: null,
        articles: []
    },
    articlesByTopicResult: {
        articlesStatus: false,
        message: null,
        articles: []
    },
    articlesByKeyResult: {
        articlesStatus: false,
        message: null,
        articles: []
    },
    articlesByUidResult: {
        articlesStatus: false,
        message: null,
        articles: []
    },
    usersResult: {
        usersStatus: false,
        message: null,
        users: []
    },
    banUserResult: {
        banUserStatus: false,
        message: null,
        userInfo: null
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
                topicsResult: action.payload,
            });

        case TopicActions.GET_TOPICS_SUCCESS:
            return Object.assign({}, state, {
                topicsResult: action.payload,
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

        case ArticleActions.GET_ARTICLE_LIST_HOT_FAILED:
            return Object.assign({}, state, {
                articlesHotResult: action.payload,
            });

        case  ArticleActions.GET_ARTICLE_LIST_HOT_SUCCESS:
            return Object.assign({}, state, {
                articlesHotResult: action.payload,
            });

        case  UserActions.GET_USER_LIST_ALL_SUCCESS:
            return Object.assign({}, state, {
                usersResult: action.payload,
            });

        case UserActions.GET_USER_LIST_ALL_FAILED:
            return Object.assign({}, state, {
                usersResult: action.payload,
            });

        case ArticleActions.GET_ARTICLE_LIST_ALL_BY_TOPIC_FAILED:
            return Object.assign({}, state, {
                articlesByTopicResult: action.payload,
            });

        case  ArticleActions.GET_ARTICLE_LIST_ALL_BY_TOPIC_SUCCESS:
            return Object.assign({}, state, {
                articlesByTopicResult: action.payload,
            });

        case ArticleActions.GET_ARTICLE_LIST_ALL_BY_KEY_FAILED:
            return Object.assign({}, state, {
                articlesByKeyResult: action.payload,
            });

        case  ArticleActions.GET_ARTICLE_LIST_ALL_BY_KEY_SUCCESS:
            return Object.assign({}, state, {
                articlesByKeyResult: action.payload,
            });

        case ArticleActions.GET_ARTICLE_LIST_ALL_BY_UID_FAILED:
            return Object.assign({}, state, {
                articlesByUidResult: action.payload,
            });

        case  ArticleActions.GET_ARTICLE_LIST_ALL_BY_UID_SUCCESS:
            return Object.assign({}, state, {
                articlesByUidResult: action.payload,
            });

        case  UserActions.BAN_USER_BY_UID_FAILED:
            return Object.assign({}, state, {
                banUserByUidResult: action.payload,
            });

        case  UserActions.BAN_USER_BY_UID_SUCCESS:
            return Object.assign({}, state, {
                banUserByUidResult: action.payload,
            });


        default:
            return state;
    }
}


const InSecurityReducer = combineReducers({
    reduxResult,
});

export default InSecurityReducer
