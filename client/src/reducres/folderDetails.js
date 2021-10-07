import { FOLDERDETAILS } from "../constants/actionTypes";

const folderDetails = (state = { folderDetails: null }, action) => {
    switch (action.type) {
        case FOLDERDETAILS:
            return { ...state, folderDetails: action?.data?.result };
        default:
            return state;
    }
}

export default folderDetails;