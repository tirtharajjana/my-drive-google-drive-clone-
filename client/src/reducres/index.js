import { combineReducers } from 'redux';

import auth from './auth';
import userDetails from './userDetails';

export const reducers = combineReducers({ auth, userDetails });