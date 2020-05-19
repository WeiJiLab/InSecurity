import {combineReducers} from 'redux'
import {LoginActions, RegisterActions, WriteActions} from '../actions/actions'

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

        case WriteActions.ARTICLE_CHANGE:
            return Object.assign({}, state, {
                editResult: action.payload,
            });

        default:
            return state;
    }
}


const InSecurityReducer = combineReducers({
    reduxResult,
});

export default InSecurityReducer
