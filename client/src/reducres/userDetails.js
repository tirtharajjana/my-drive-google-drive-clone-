import { USERDETAILS } from "../constants/actionTypes";

const userDetails = (state = { userDetails: null }, action) => {
    switch (action.type) {
        case USERDETAILS:
            return { ...state, userDetails: action?.data }
        default:
            return state;
    }
}

export default userDetails;