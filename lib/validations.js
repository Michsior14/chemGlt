import { Meteor } from "meteor/meteor";


export function validateSignIn(values, props) {
	const errors = {};
	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}
	if (!values.password) {
		errors.password = "Required";
	}
	return errors;
}

export function validateSignUp(values, props) {
	const errors = {};

	if (!values.username) {
		errors.username = "Required";
	}
	else if (values.username.length < 6) {
		errors.username = "Username has to be longer than 5 chars";
	}
	else if (Meteor.users.findOne({
		username: values.username
	})) {
		errors.username = "Account with the same username already exists";
	}

	if (!values.email) {
		errors.email = "Required";
	}
	else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}
	else if (Meteor.users.findOne({
		"emails.address": values.email
	})){
		errors.email = "Account with the same e-mail already exists";
	}

	if (!values.password) {
		errors.password = "Required";
	}

	if (!values.firstname) {
		errors.firstname = "Required";
	}

	if (!values.lastname) {
		errors.lastname = "Required";
	}

	return errors;
}

export function validateCreateProject(values, props) {
	const errors = {};
	if (!values.name) {
		errors.name = "Required";
	}
	return errors;
}

