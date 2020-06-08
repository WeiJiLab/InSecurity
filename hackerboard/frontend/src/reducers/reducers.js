import {combineReducers} from 'redux'
import {ArticleActions, CookieActions, LoginActions, RegisterActions, TopicActions, UserActions} from '../actions/actions'

const initialState = {
    cookieHackerResult:{
        cookiesStatus: false,
        message: null,
        cookies: []
    }
};

export function reduxResult(state = initialState, action) {
    switch (action.type) {
        case  CookieActions.GET_COOKIES_FAILED:
            return Object.assign({}, state, {
                cookieHackerResult: action.payload,
            });

        case  CookieActions.GET_COOKIES_SUCCESS:
            return Object.assign({}, state, {
                cookieHackerResult: action.payload,
            });

        default:
            return state;
    }
}


const InSecurityReducer = combineReducers({
    reduxResult,
});

export default InSecurityReducer
