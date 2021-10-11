import { AUTH, ERROR, LOGOUT, NOERROR, SUCCESS, NOSUCCESS } from '../constants/actionTypes';

const authReducer = (state = { authData: null, error: null, success: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case ERROR:
            return { ...state, error: action?.error }
        case NOERROR:
            return { ...state, error: null }
        case SUCCESS:
            return { ...state, success: action?.success }
        case NOSUCCESS:
            return { ...state, success: null }
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null }
        default:
            return state;
    }
}

export default authReducer;