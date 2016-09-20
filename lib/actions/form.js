import {Meteor} from "meteor/meteor";

import Projects from "/lib/collections/projects";
import projectActions from "/lib/actions/projects";

export const CreateProjectActions = {
	addMember: () => {
		return {
			type: "CREATE_PROJECT.ADD_MEMBER"
		};
	},
	deleteMember: (key) => {
		return {
			type: "CREATE_PROJECT.DELETE_MEMBER",
			memberKey: key
		};
	},
	autocompleteMember: (value) => {
		const hintMembers = [];
		if (value.length > 2) {
			const usersList =
				Meteor.users.find({
					username: {
						$regex: value,
						$options: "i"
					}
				}).fetch();
			for (let user of usersList) {
				hintMembers.push(user.username);
			}
		}
		return {
			type: "CREATE_PROJECT.AUTOCOMPLETE_MEMBER",
			hintMembers: hintMembers,
			addMemberField: value
		};
	},
	createProject: (data) => {
		Projects.insert({
			name: data.name,
			members: [Meteor.userId()],
			updatedAt: Date.now(),
			graphs: [],
			documents: []
		});
		return projectActions.updateList();
	},
	updateMemberField: (value) => {
		return {
			type: "CREATE_PROJECT.UPDATE_MEMBER_FIELD",
			addMemberField: value
		};
	}
};

