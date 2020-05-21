import {
    API_ARTICLE_ALL,
    API_ARTICLE_KEY,
    API_ARTICLE_POST,
    API_ARTICLE_TOPIC,
    API_ARTICLE_TOPICS, API_ARTICLE_USER,
    API_LOGIN,
    API_REGISTER
} from "../api/insecurityApi";

export const LoginActions = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
};

export const RegisterActions = {
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAILED: 'REGISTER_FAILED',
};

export const ArticleActions = {
    WRITE_ARTICLE_CHANGE: 'ARTICLE_CHANGE',
    ARTICLE_POST_SUCCESS: 'ARTICLE_POST_SUCCESS',
    ARTICLE_POST_FAILED: 'ARTICLE_POST_FAILED',
    GET_ARTICLE_LIST_ALL_SUCCESS: 'GET_ARTICLE_LIST_ALL_SUCCESS',
    GET_ARTICLE_LIST_ALL_FAILED: 'GET_ARTICLE_LIST_ALL_FAILED',
    GET_ARTICLE_LIST_ALL_BY_TOPIC_SUCCESS: 'GET_ARTICLE_LIST_ALL_BY_TOPIC_SUCCESS',
    GET_ARTICLE_LIST_ALL_BY_TOPIC_FAILED: 'GET_ARTICLE_LIST_ALL_BY_TOPIC_FAILED',
    GET_ARTICLE_LIST_ALL_BY_KEY_SUCCESS: 'GET_ARTICLE_LIST_ALL_BY_KEY_SUCCESS',
    GET_ARTICLE_LIST_ALL_BY_KEY_FAILED: 'GET_ARTICLE_LIST_ALL_BY_KEY_FAILED',
    GET_ARTICLE_LIST_ALL_BY_UID_FAILED:'GET_ARTICLE_LIST_ALL_BY_UID_FAILED',
    GET_ARTICLE_LIST_ALL_BY_UID_SUCCESS:'GET_ARTICLE_LIST_ALL_BY_UID_SUCCESS'
};

export const TopicActions = {
    GET_TOPICS_SUCCESS: 'GET_TOPICS_SUCCESS',
    GET_TOPICS_FAILED: 'GET_TOPICS_FAILED',
};

export const login = (loginDTO) => (dispatch) => {
    ajaxLoginFromApi(loginDTO, dispatch);
};

export const register = (registerDTO) => (dispatch) => {
    ajaxRegisterFromApi(registerDTO, dispatch);
};

export const post = (registerDTO) => (dispatch) => {
    ajaxPostArticleFromApi(registerDTO, dispatch);
};

export const topics = () => (dispatch) => {
    ajaxGetTopicsFromApi(dispatch);
};

export const articles = () => (dispatch) => {
    ajaxGetArticlesFromApi(dispatch);
};

export const articlesByTopic = (topic) => (dispatch) => {
    ajaxGetArticlesByTopicFromApi(topic, dispatch);
};

export const articlesByKey = (key) => (dispatch) => {
    ajaxGetArticlesByKeyFromApi(key, dispatch);
};

export const articlesByUid = (uid) => (dispatch) => {
    ajaxGetArticlesByUidFromApi(uid, dispatch);
};



export const edit = (articleDTO) => (dispatch) => {
    dispatch({
        type: ArticleActions.WRITE_ARTICLE_CHANGE,
        payload: {
            title: articleDTO.title,
            content: articleDTO.content,
        }
    })
};


export function ajaxLoginFromApi(loginDTO, dispatch) {
    fetch(API_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDTO),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.status == null && data.errorCode != null) {
                dispatch({
                    type: LoginActions.LOGIN_FAILED,
                    payload: {
                        loginStatus: false,
                        message: data.message,
                        userInfo: null
                    }
                })
            } else {
                dispatch({
                    type: LoginActions.LOGIN_SUCCESS,
                    payload: {
                        loginStatus: true,
                        message: null,
                        userInfo: data.data
                    }
                })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            dispatch({
                type: LoginActions.LOGIN_FAILED,
                payload: {
                    loginStatus: false,
                    message: error.message,
                    userInfo: null
                }
            })
        });
}

export function ajaxRegisterFromApi(loginDTO, dispatch) {
    fetch(API_REGISTER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDTO),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.status == null && data.errorCode != null) {
                dispatch({
                    type: RegisterActions.REGISTER_FAILED,
                    payload: {
                        registerStatus: false,
                        message: data.message,
                        userInfo: null
                    }
                })
            } else {
                dispatch({
                    type: RegisterActions.REGISTER_SUCCESS,
                    payload: {
                        registerStatus: true,
                        message: null,
                        userInfo: data.data
                    }
                })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            dispatch({
                type: RegisterActions.REGISTER_FAILED,
                payload: {
                    registerStatus: false,
                    message: error.message,
                    userInfo: null
                }
            })
        });
}


export function ajaxPostArticleFromApi(articleDTO, dispatch) {
    fetch(API_ARTICLE_POST, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleDTO),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.status == null && data.errorCode != null) {
                dispatch({
                    type: ArticleActions.ARTICLE_POST_FAILED,
                    payload: {
                        postStatus: false,
                        title: data.title,
                        content: data.content,
                    }
                })
            } else {
                dispatch({
                    type: ArticleActions.ARTICLE_POST_SUCCESS,
                    payload: {
                        postStatus: true,
                        title: data.title,
                        content: data.content,
                    }
                })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            dispatch({
                type: ArticleActions.ARTICLE_POST_FAILED,
                payload: {
                    postStatus: false,
                    title: null,
                    content: null,
                }
            })
        });
}


export function ajaxGetTopicsFromApi(dispatch) {
    fetch(API_ARTICLE_TOPICS, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.status == null && data.errorCode != null) {
                dispatch({
                    type: TopicActions.GET_TOPICS_FAILED,
                    payload: {
                        topicsStatus: false,
                        message: data.message,
                        topics: null
                    }
                })
            } else {
                dispatch({
                    type: TopicActions.GET_TOPICS_SUCCESS,
                    payload: {
                        topicsStatus: true,
                        message: data.message,
                        topics: data.data
                    }
                })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            dispatch({
                type: TopicActions.GET_TOPICS_FAILED,
                payload: {
                    topicsStatus: false,
                    message: error.message,
                    topics: null
                }
            })
        });
}


export function ajaxGetArticlesFromApi(dispatch) {
    fetch(API_ARTICLE_ALL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.status == null && data.errorCode != null) {
                dispatch({
                    type: ArticleActions.GET_ARTICLE_LIST_ALL_FAILED,
                    payload: {
                        articlesStatus: false,
                        message: data.message,
                        articles: null
                    }
                })
            } else {
                dispatch({
                    type: ArticleActions.GET_ARTICLE_LIST_ALL_SUCCESS,
                    payload: {
                        articlesStatus: true,
                        message: data.message,
                        articles: data.data
                    }
                })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            dispatch({
                type: ArticleActions.GET_ARTICLE_LIST_ALL_FAILED,
                payload: {
                    articlesStatus: false,
                    message: error.message,
                    articles: null
                }
            })
        });
}


export function ajaxGetArticlesByTopicFromApi(topic, dispatch) {
    fetch(API_ARTICLE_TOPIC + "?topic=" + topic, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.status == null && data.errorCode != null) {
                dispatch({
                    type: ArticleActions.GET_ARTICLE_LIST_ALL_BY_TOPIC_FAILED,
                    payload: {
                        articlesStatus: false,
                        message: data.message,
                        articles: null
                    }
                })
            } else {
                dispatch({
                    type: ArticleActions.GET_ARTICLE_LIST_ALL_BY_TOPIC_SUCCESS,
                    payload: {
                        articlesStatus: true,
                        message: data.message,
                        articles: data.data
                    }
                })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            dispatch({
                type: ArticleActions.GET_ARTICLE_LIST_ALL_BY_TOPIC_FAILED,
                payload: {
                    articlesStatus: false,
                    message: error.message,
                    articles: null
                }
            })
        });
}



export function ajaxGetArticlesByKeyFromApi(key, dispatch) {
    fetch(API_ARTICLE_KEY + "?key=" + key, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.status == null && data.errorCode != null) {
                dispatch({
                    type: ArticleActions.GET_ARTICLE_LIST_ALL_BY_KEY_FAILED,
                    payload: {
                        articlesStatus: false,
                        message: data.message,
                        articles: null
                    }
                })
            } else {
                dispatch({
                    type: ArticleActions.GET_ARTICLE_LIST_ALL_BY_KEY_SUCCESS,
                    payload: {
                        articlesStatus: true,
                        message: data.message,
                        articles: data.data
                    }
                })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            dispatch({
                type: ArticleActions.GET_ARTICLE_LIST_ALL_BY_KEY_FAILED,
                payload: {
                    articlesStatus: false,
                    message: error.message,
                    articles: null
                }
            })
        });
}

export function ajaxGetArticlesByUidFromApi(uid, dispatch) {
    fetch(API_ARTICLE_USER + "?uid=" + uid, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.status == null && data.errorCode != null) {
                dispatch({
                    type: ArticleActions.GET_ARTICLE_LIST_ALL_BY_UID_FAILED,
                    payload: {
                        articlesStatus: false,
                        message: data.message,
                        articles: null
                    }
                })
            } else {
                dispatch({
                    type: ArticleActions.GET_ARTICLE_LIST_ALL_BY_UID_SUCCESS,
                    payload: {
                        articlesStatus: true,
                        message: data.message,
                        articles: data.data
                    }
                })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            dispatch({
                type: ArticleActions.GET_ARTICLE_LIST_ALL_BY_UID_FAILED,
                payload: {
                    articlesStatus: false,
                    message: error.message,
                    articles: null
                }
            })
        });
}

