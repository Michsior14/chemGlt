import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import accountReducer from "/lib/reducers/account";
import navigationReducer from "/lib/reducers/navigation";


const appReducer = combineReducers({
    accountReducer,
    navigationReducer,
    form: formReducer
});

export default appReducer;