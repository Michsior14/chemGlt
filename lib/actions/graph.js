import {Meteor} from "meteor/meteor";

import Projects from "/lib/collections/projects";
import Graphs from "/lib/collections/graphs";

const graphActions = {

	createMultipleGraphs: ( files, projectId ) => {
		let actions = this;

		return ( dispatch ) => {
			for(let file of files){
				let reader = new window.FileReader();
				reader.onloadend = ( e ) => {
					let graphArray = loadCSV(e.target.result);
					console.log(graphArray);
					dispatch(actions.insertGraph({
						name: 		file.name,
						projectId:  projectId,
						axis: 		graphArray 
					}));

				}
				reader.readAsText(file);
			}			
		}
	},

	insertGraph: ( graph ) => {
		Graphs.insert(graph);
		return this.updateGraphList();
	},

	updateList: ( projectId ) => {
		return {
			type: 		'UPDATE_GRAPHS_LIST',
			graphs: 	Graphs.find({ projectId: projectId }).fetch()
		}
	},

	subscribed: ( projectId ) => {
		return {
			type: 'GRAPHS_SUBSCRIBED',
			graphs: Graphs.find({ projectId: projectId }).fetch()
		}
	},

	orderSub: ( projectId ) => {
		return {
			type: 		'GRAPHS_ORDER_SUB',
			projectId: 	projectId
		}
	}

}


function loadCSV( txt ){
	return txt.split(/\r?\n/)
	.filter(( row ) => {
		return (row.indexOf(",") !== -1);
	})
	.map(( row ) => {
		// rowArray = row.replace(/\s/, "");
		return row.split(",");
	});
}

export default graphActions;