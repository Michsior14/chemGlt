import {Meteor} from "meteor/meteor";


export function openSignInForm(){
	return {
		type: 'OPEN_SIGN_IN_DIALOG'
	}
}

export function updateSignInFields( fields ){
	return {
		type: 'UPDATE_SIGN_IN_FIELDS',
		fields
	}
}

export function closeDialog(){
	return {
		type: 'CLOSE_DIALOG'
	}
}

export function signIn( credentials ){

	return function ( dispatch ){
		console.log("inside signIn action");
		dispatch(closeDialog());
		dispatch(requestSignIn());
		Meteor.loginWithPassword(credentials.login, credentials.password, 
			function( error ) {
				if(!error){
					let user = Meteor.user();
					dispatch(finishSignIn(user));
				}
				else{
					dispatch(errorSignIn(error));
				}
		});		

	}
}

export function requestSignIn(){
	return {
		type: 'REQUEST_SIGN_IN'
	}
}

export function finishSignIn( userAccount ){
	return {
		type: 'FINISH_SIGN_IN',
		userAccount
	}
}

export function errorSignIn( status ){
	return {
		type: 'ERROR_SIGN_IN',
		status
	}
}

export function logOut(){
	return {
		type: 'LOG_OUT'
	}
}


const signInUser = ( credentials, dispatch ) => {

}