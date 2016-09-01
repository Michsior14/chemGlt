import {Meteor} from "meteor/meteor";

const accountReducer = ( state = getInitialState(), action ) => {
	switch( action.type ){
		case 'WAITING_FOR_RESPONSE':
			return Object.assign({}, state, {
				waiting: 		true,
				notification: 	action.request
			});
		case 'STOP_WAITING':
			return Object.assign({}, state, {
				waiting: 		false
			});
		case 'FINISH_SIGN_IN':
			return Object.assign({}, state, {
				isLoggedIn: 	true,
				waiting: 		false,
				notification: 	"",
				userAccount: 	action.userAccount
			});
		case 'ERROR_SIGN_IN':
			return Object.assign({}, state, {
				waiting: 		false,
				notification: 	""
			});
		case 'LOG_OUT':
			return Object.assign({}, state, {
				isLoggedIn: 	false,
				userAccount: 	null
			});
		default:
			return state;
	}
};

const getInitialState = () => {
	let userAccount = Meteor.user();
	const userId = Meteor.userId();
	console.log(Meteor.loggingIn());
	console.log(userId);
	console.log(Meteor.user());
	console.log(Meteor.users.findOne({ id: userId}));
	return {
		waiting: 		false,
		notification: 	"",
		isLoggedIn: 	userAccount != null,
		userAccount: 	userAccount
	}
};




export default accountReducer;