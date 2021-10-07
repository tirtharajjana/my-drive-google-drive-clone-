import { AUTH, ERROR, NOERROR,LOGOUT } from '../constants/actionTypes';

import * as api from '../api/index';

export const signin = (formData, history) => async (dispatch) => {
    try {
        dispatch({ type: NOERROR })

        const { data } = await api.signIn(formData);
        dispatch({ type: 'USERDETAILS', data:data.result });

        dispatch({ type: AUTH, data });
        history.push(`/folder/${data.result?.rootFolder}`);

    } catch (error) {
        console.error(error.response.data.message);
        dispatch({ type: NOERROR })
        dispatch({ type: ERROR, error: error.response.data.message })
    }
}
export const signup = (formData, history) => async (dispatch) => {
    try {
        dispatch({ type: NOERROR })

        const { data } = await api.signUp(formData);
        // console.log(data);
        dispatch({ type: 'USERDETAILS', data:data.result });
        dispatch({ type: AUTH, data });
        history.push(`/folder/${data.result?.rootFolder}`);

    } catch (error) {
        console.error(error.response.data.message);
        dispatch({ type: NOERROR })
        dispatch({ type: ERROR, error: error.response.data.message })
    }
}

