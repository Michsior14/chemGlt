import {Meteor} from "meteor/meteor";

export const CreateProjectActions = {
	addMember: ( ) => {
		return {
			type: 				'CREATE_PROJECT.ADD_MEMBER'
		}
	},
	autocompleteMember: ( value ) => {
		const hintMembers = [];
		if ( value.length > 2 ){
			const usersList = 
				Meteor.users.find({
                    username: { 
                    	$regex: 	value,
                    	$options: 	'i'
                    }                            
                }).fetch();
			for (let user of usersList){
				hintMembers.push(user.username);
			}	
		}
		return {
			type: 				'CREATE_PROJECT.AUTOCOMPLETE_MEMBER',
			hintMembers: 		hintMembers,
			addMemberField: 	value
		}		
	},
	updateMemberField: ( value ) => {
		return {
			type: 				'CREATE_PROJECT.UPDATE_MEMBER_FIELD',
			addMemberField: 	value
		}		
	}
};

