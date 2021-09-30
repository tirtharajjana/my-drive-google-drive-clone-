import { AUTH, ERROR, LOGOUT, NOERROR } from '../constants/actionTypes';

const authReducer = (state = { authData: null, error: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case ERROR:
            
            return { ...state, error: action?.error }
        case NOERROR:
           
            return { ...state, error: null }
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null }
        default:
            return state;
    }
}

export default authReducer;