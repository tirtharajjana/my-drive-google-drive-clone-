import { AUTH, ERROR } from '../constants/actionTypes';

import * as api from '../api/index';

export const signin = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

    } catch (error) {
        console.error(error.response.data.message);
        dispatch({ type: ERROR, error: error.response.data.message })
    }
}
export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        // console.log(data);

        dispatch({ type: AUTH, data });

    } catch (error) {
        console.error(error.response.data.message);
        dispatch({ type: ERROR, error: error.response.data.message })
    }
}