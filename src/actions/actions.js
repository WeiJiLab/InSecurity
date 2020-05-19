import {API_ARTICLE_POST, API_LOGIN, API_REGISTER} from "../api/insecurityApi";

export const LoginActions = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
};

export const RegisterActions = {
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAILED: 'REGISTER_FAILED',
};

export const WriteActions = {
    ARTICLE_CHANGE: 'ARTICLE_CHANGE',
    ARTICLE_POST_SUCCESS: 'ARTICLE_POST_SUCCESS',
    ARTICLE_POST_FAILED: 'ARTICLE_POST_FAILED',
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

export const edit = (articleDTO) => (dispatch) => {
    dispatch({
        type: WriteActions.ARTICLE_CHANGE,
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
                    type: WriteActions.ARTICLE_POST_FAILED,
                    payload: {
                        title: data.title,
                        content: data.content,
                    }
                })
            } else {
                dispatch({
                    type: WriteActions.ARTICLE_POST_SUCCESS,
                    payload: {
                        title: data.title,
                        content: data.content,
                    }
                })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            dispatch({
                type: WriteActions.ARTICLE_POST_FAILED,
                payload: {
                    title: null,
                    content: null,
                }
            })
        });
}
