

const accountReducer = ( state = getInitialState(), action ) => {
	switch( action.type ){
		case 'REQUEST_SIGN_IN':
			return Object.assign({}, state, {
				waiting: 		true,
				notification: 	"Logging in..."
			});
		case 'FINISH_SIGN_IN':
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
}

const getInitialState = () => {
	return {
		waiting: 		false,
		notification: 	"",
		isLoggedIn: 	false
	}
}




export default accountReducer;