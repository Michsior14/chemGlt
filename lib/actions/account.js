import {Meteor} from "meteor/meteor";
import {Accounts} from "meteor/accounts-base";
import {closeDialog} from "/lib/actions/navigation";
import projectActions from "/lib/actions/projects";

export function signIn(credentials) {

	return (dispatch) => {
		dispatch(waitingForResponse("REQUEST_SIGN_IN"));
		return Meteor.loginWithPassword(credentials.email, credentials.password, (error) => {
			if (!error) {
				let userId = Meteor.userId();
				dispatch(finishSignIn(userId));
				dispatch(projectActions.updateList());
				dispatch(closeDialog());
			} else {
				dispatch(stopWaiting());
                // dispatch(addNotification({
                // 	message: error.message,
                // 	level: 'error'
                // }));
			}
		});
	};
}

export function signUp(data) {
	Accounts.createUser(data);
	return closeDialog();
}

export function waitingForResponse(request) {
	return {
		type: "WAITING_FOR_RESPONSE",
		request: request
	};
}

export function stopWaiting() {
	return {
		type: "STOP_WAITING"
	};
}

export function finishSignIn(userId) {
	return {
		type: "FINISH_SIGN_IN",
		userId
	};
}

export function addNotification(notification) {
	return {
		type: "ADD_NOTIFICATION",
		notification
	};
}

export function logOut() {
	Meteor.logout();
	return {
		type: "LOG_OUT"
	};
}