import { combineReducers } from 'redux';

import auth from './auth';
import userDetails from './userDetails';
import folderDetails from './folderDetails';

export const reducers = combineReducers({ auth, userDetails,folderDetails });