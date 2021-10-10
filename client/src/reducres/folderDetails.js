import { FOLDERDETAILS, CURRENTFOLDERDETAILS } from "../constants/actionTypes";

const folderDetails = (state = { folderDetails: null, currentFolder: null }, action) => {
    switch (action.type) {
        case FOLDERDETAILS:
            return { ...state, folderDetails: action?.data?.result };
        case CURRENTFOLDERDETAILS:
            return { ...state, currentFolder: action?.data?.result };
        default:
            return state;
    }
}

export default folderDetails;