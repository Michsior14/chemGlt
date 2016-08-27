import { combineReducers } from 'redux';

import accountReducer from './account';


const appReducer = combineReducers({
	accountReducer
});

export default appReducer;