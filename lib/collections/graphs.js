import { Meteor } from "meteor/meteor";
import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';
import { Tracker } from "meteor/tracker";

import Projects from "/lib/collections/projects";

const Graphs = new Mongo.Collection('graphs');

if ( Meteor.isServer ){
	Meteor.publish('graphs', function graphsPublication( projectId ){
		check(projectId, String);
		if ( !this.userId || !authorizeProject(projectId, this.userId) ){
			throw new Meteor.Error('not-authorized');
		}

		return Graphs.find({ projectId: projectId });
	});
}

Graphs.allow({
	insert( userId, graph ) {
		if ( userId || authorizeProject(graph.projectId, userId) ) {
			return true;
		}
		return false;
	},
	remove() {
		if( userId || authorizeProject(graph.projectId, userId)){
			return true;
		}
		return false;
	}
})

Meteor.methods({
	'graphs.insert'( graph ){
		checkGraph(graph);
		console.log("graph insert");

		Graphs.insert(Object.assign({}, graph, {
			createdAt: Date.now(),
			updatedAt: Date.now()
		}));
	},
	'graphs.remove'( graphId ){
		check(graphId, String);

		const graph = Graphs.findOne(graphId);
		if ( !graph ){
			throw new Meteor.Error(404, 'not-found');
		}

		Graphs.remove(graphId);
	},
	// 	checkGraph(graph);

	// 	const oldGraph = Graphs.findOne(graphId);
	// 	if ( !graph ){
	// 		throw new Meteor.Error(404, 'not-found');
	// 	}
	// 	else if( graph.projectId === oldGraph.projectId ) {
	// 		throw new Meteor.Error(400, "Match Failed");
	// 	}
	// 	Graphs.update(graphId, Object.assign({}, graph, {
	// 		updatedAt: Date.now()
	// 	}));
	// }

});

function checkGraph( graph ) {
	check(graph, {
			name: String,
			projectId: String,
			axis: [Match.Any]
	});
}

function authorizeProject( projectId, userId ){
	return Projects.findOne({ 
			_id: 		projectId,
 			members: 	userId
		}) ? true : false;
}


export default Graphs;