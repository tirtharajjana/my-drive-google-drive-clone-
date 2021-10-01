import * as api from '../api/index';
import { ERROR, NOERROR, USERDETAILS } from '../constants/actionTypes';

export const getUserDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: NOERROR });

        const { data } = await api.getUserDetails(id);

        // console.log(data);

        dispatch({ type: USERDETAILS, data })

    } catch (error) {
        console.error(error.response.data.message);
        dispatch({ type: NOERROR })
        dispatch({ type: ERROR, error: error.response.data.message })
    }
}

export const uploadLogo = (formData) => async (dispatch) => {
    try {
        dispatch({ type: NOERROR });
        const  {data}  = await api.uploadLogo(formData);
        // console.log(data);
        dispatch({ type: USERDETAILS, data })
    } catch (error) {
        console.error(error.response.data.message);
        dispatch({ type: NOERROR })
        dispatch({ type: ERROR, error: error.response.data.message })
    }
}