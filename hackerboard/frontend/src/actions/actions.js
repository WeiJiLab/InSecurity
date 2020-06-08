import {API_COOKIES,} from "../api/insecurityApi";

export const CookieActions = {
    REFRESH_COOKIE: 'REFRESH_COOKIE',
    GET_COOKIES_SUCCESS: 'GET_COOKIES_SUCCESS',
    GET_COOKIES_FAILED: 'GET_COOKIES_FAILED',
};

export const getCookies = () => (dispatch) => {
    ajaxGetCookiesFromApi(dispatch);
};


export function ajaxGetCookiesFromApi(dispatch) {
    fetch(API_COOKIES, {
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
                    type: CookieActions.GET_COOKIES_FAILED,
                    payload: {
                        cookiesStatus: false,
                        message: data.message,
                        cookies: data
                    }
                })
            } else {
                dispatch({
                    type: CookieActions.GET_COOKIES_SUCCESS,
                    payload: {
                        cookiesStatus: true,
                        message: data.message,
                        cookies: data
                    }
                })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            dispatch({
                type: CookieActions.GET_COOKIES_FAILED,
                payload: {
                    cookiesStatus: false,
                    message: error.message,
                    cookies: null
                }
            })
        });
}
