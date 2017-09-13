import { Meteor } from "meteor/meteor";
import Seed from "../seed";

Meteor.methods({

	seedProjects() {

		Seed("projects", {
			data: [
				{
					name: "Testing Project",
					dateUpdated: Date.now(),
					dateCreated: Date.now(),
					members: [
						Meteor.users.findOne({
							username: "HopkinsFBI"
						})._id,
						Meteor.users.findOne({
							username: "Samantha"
						})._id
					]
				}
			]
		});
	}
});