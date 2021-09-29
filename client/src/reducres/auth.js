import { AUTH, ERROR,LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null, error: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case ERROR:
            localStorage.setItem('error', action?.error );
            return { ...state, error: action?.error }
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData:null }
        default:
            return state;
    }
}

export default authReducer;