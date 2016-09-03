import {Meteor} from "meteor/meteor";

export function acProjectMember( value ) {
	const hintMembers = [];
	if ( value.length > 2 ){
		const usersList = Meteor.users.find({
	                        username: { $regex: value }                            
	                    }).fetch();
		for (let user of usersList){
			hintMembers.push(user.username);
		}	
	}
	return {
		type: 'AUTOCOMPLETE_PROJECT_MEMBER',
		hintMembers: hintMembers
	}
}
