import {Meteor} from "meteor/meteor";

export function acProjectMember( value ) {
	const usersList = Meteor.users.find({
                        username: { $regex: value }                            
                    }).fetch();
	let hintMembers = [];
	for (let user of usersList){
		hintMembers.push(user.username);
	}
	return {
		type: 'AUTOCOMPLETE_PROJECT_MEMBER',
		hintMembers: hintMembers
	}
}
