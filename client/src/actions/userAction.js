import * as api from '../api/index';
import { ERROR, NOERROR, USERDETAILS, FOLDERDETAILS, CURRENTFOLDERDETAILS } from '../constants/actionTypes';

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
        const { data } = await api.uploadLogo(formData);
        // console.log(data);
        dispatch({ type: USERDETAILS, data })
    } catch (error) {
        console.error(error.response.data.message);
        dispatch({ type: NOERROR })
        dispatch({ type: ERROR, error: error.response.data.message })
    }
}

export const createFolder = ({ name, parentId, userId }) => async (dispatch) => {
    try {
        // console.log(formData);
        dispatch({ type: NOERROR });
        await api.createFolder({ name, parentId, userId });
        const { data } = await api.getFolders(parentId);
        // console.log(data);
        dispatch({ type: FOLDERDETAILS, data });
    } catch (error) {
        console.error(error.response.data.message);
        dispatch({ type: NOERROR })
        dispatch({ type: ERROR, error: error.response.data.message })
    }
}

export const getFolders = (parentId, history) => async (dispatch) => {
    try {
        dispatch({ type: NOERROR });
        // console.log(parentId);
        var { data } = await api.getFolders(parentId);
        // console.log(data);
        dispatch({ type: FOLDERDETAILS, data });
        var { data } = await api.getCurrentFolder(parentId);
        // console.log(data);
        dispatch({ type: CURRENTFOLDERDETAILS, data });

    } catch (error) {
        history.push('/');
        // console.error(error.response);
        console.error(error.response.data.message);
        dispatch({ type: NOERROR })
        dispatch({ type: ERROR, error: error.response.data.message })
    }
}

export const getCurrentFolder = (currentFolderId, history) => async (dispatch) => {
    try {
        dispatch({ type: NOERROR });
        console.log(currentFolderId);
        // const { data } = await api.getCurrentFolder(currentFolderId);
        // console.log(data);
        // dispatch({ type: CURRENTFOLDERDETAILS, data });
    } catch (error) {
        history.push('/');
        // console.error(error.response);
        console.error(error.response.data.message);
        dispatch({ type: NOERROR })
        dispatch({ type: ERROR, error: error.response.data.message })
    }
}