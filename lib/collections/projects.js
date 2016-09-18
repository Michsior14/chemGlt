import { Meteor } from "meteor/meteor";
import { Mongo } from 'meteor/mongo';
import { Tracker } from "meteor/tracker";


const Projects = new Mongo.Collection('projects');

if ( Meteor.isServer ){
	Meteor.publish('projects', function projectsPublication(){
		return Projects.find({
			members: this.userId
		});
	});
}


export default Projects;