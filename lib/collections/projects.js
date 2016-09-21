import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { Tracker } from "meteor/tracker";


const Projects = new Mongo.Collection("projects");

if (Meteor.isServer) {
	Meteor.publish("projects", function projectsPublication() {
		return Projects.find({
			members: this.userId
		});
	});

	Projects.allow({
		insert(userId) {
			if (userId) {
				return true;
			}
			return false;
		},
		remove(userId, project) {
			if (userId && project.members.includes(userId)) {
				return true;
			}
			return false;
		},
		update(userId, project) {
			if (userId && project.members.includes(userId)) {
				return true;
			}
			return false;
		}	
	});

}




export default Projects;