import {Meteor} from "meteor/meteor";
import { Accounts } from "meteor/accounts-base"


export function openDialog( name ){
	return {
		type: 'OPEN_DIALOG',
		name: name
	}
}

export function closeDialog(){
	return {
		type: 'CLOSE_DIALOG'
	}
}

export function signIn( credentials ){

	return ( dispatch ) => {
		dispatch(waitingForResponse('REQUEST_SIGN_IN'));
		return Meteor.loginWithPassword(credentials.email, credentials.password,
			( error ) => {
				if(!error){
					let user = Meteor.user();
					console.log(user);
					dispatch(finishSignIn(user));
				}
				else{
					console.log(error);
					dispatch(errorSignIn(error));
				}
		});		

	}
}

export function signUp( data ){
	console.log(data);
	return ( dispatch ) => {
		dispatch(waitingForResponse('REQUEST_SIGN_UP'));
		const cc = Accounts.createUser(data).then(( res ) => {
			console.log(res);
		});
	}
}

export function waitingForResponse( request ){
	return {
		type: 'WAITING_FOR_RESPONSE',
		request: request
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

export function requestSignUp(){
	return {
		type: 'REQ'
	}
}

export function logOut(){
	return {
		type: 'LOG_OUT'
	}
}
