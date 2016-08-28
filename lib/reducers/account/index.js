

const accountReducer = ( state = getInitialState(), action ) => {
	switch( action.type ){
		case 'OPEN_SIGN_IN_DIALOG':
			return Object.assign({}, state, {
				isDialog: 		true,
				openedDialog: 	"SIGN_IN"
			});
		case 'CLOSE_DIALOG':
			return Object.assign({}, state, {
				isDialog: 		false,
				openedDialog: 	""
			});			
		case 'REQUEST_SIGN_IN':
			return Object.assign({}, state, {
				waiting: 		true,
				notification: 	"Logging in..."
			});
		case 'FINISH_SIGN_IN':
			console.log(userAccount);
			return Object.assign({}, state, {
				isLoggedIn: 	true,
				waiting: 		false,
				notification: 	"",
				userAccount
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
	return {
		waiting: 		false,
		notification: 	"",
		isLoggedIn: 	false,
		isDialog: 		false,
		openedDialog: 	""
	}
};




export default accountReducer;