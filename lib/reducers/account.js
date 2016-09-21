import {Meteor} from "meteor/meteor";

const accountReducer = (state = getInitialState(), action) => {
	switch (action.type) {
		case "WAITING_FOR_RESPONSE":
			return Object.assign({}, state, {
				waiting: true,
				notification: action.request
			});
		case "STOP_WAITING":
			return Object.assign({}, state, {
				waiting: false
			});
		case "FINISH_SIGN_IN":
			return Object.assign({}, state, {
				isLoggedIn: true,
				waiting: false,
				notification: "",
				userId: action.userId
			});
		case "ERROR_SIGN_IN":
			return Object.assign({}, state, {
				waiting: false,
				notification: ""
			});
		case "LOG_OUT":
			return Object.assign({}, state, {
				isLoggedIn: false,
				userId: null
			});
		default:
			return state;
	}
};

const getInitialState = () => {
	let sub = Meteor.subscribe("users");
	return {
		subscription: sub,
		waiting: false,
		notification: "",
		isLoggedIn: Meteor.loggingIn(),
		userId: Meteor.userId()
	};
};


export default accountReducer;