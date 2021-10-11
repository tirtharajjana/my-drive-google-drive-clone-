import { FOLDERDETAILS, CURRENTFOLDERDETAILS, FILEDETAILS } from "../constants/actionTypes";

const folderDetails = (state = { folderDetails: null, currentFolder: null, fileDetails: null }, action) => {
    switch (action.type) {
        case FOLDERDETAILS:
            return { ...state, folderDetails: action?.data?.result };
        case CURRENTFOLDERDETAILS:
            return { ...state, currentFolder: action?.data?.result };
        case FILEDETAILS:
            return { ...state, fileDetails: action?.data?.result }
        default:
            return state;
    }
}

export default folderDetails;