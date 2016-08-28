import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import accountReducer from '/lib/reducers/account';


const appReducer = combineReducers({
	accountReducer,
	form: formReducer
});

export default appReducer;