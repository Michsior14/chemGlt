import { Meteor } from "meteor/meteor";
import { Mongo } from 'meteor/mongo';


const Projects = new Mongo.Collection('projects');

if ( Meteor.isServer ){
	Meteor.publish('projects', function projectsPublication() {
		return Projects.find();
	});
}


export default Projects;