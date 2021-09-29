import { AUTH, ERROR } from '../constants/actionTypes';

const authReducer = (state = { authData: null, error: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case ERROR:
            localStorage.setItem('error', action?.error );
            return { ...state, error: action?.error }
        default:
            return state;
    }
}

export default authReducer;