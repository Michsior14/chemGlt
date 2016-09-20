import {Meteor} from "meteor/meteor";

import Projects from "/lib/collections/projects";
import Graphs from "/lib/collections/graphs";
import utilities from "/imports/helpers/utilities";

const graphActions = {

	createMultipleGraphs: ( files, projectId ) => {

		return ( dispatch ) => {
			for(let file of files){
				let reader = new window.FileReader();
				reader.onloadend = ( e ) => {
					let data = loadCSV(e.target.result);
					dispatch(graphActions.insertGraph({
						name: 		file.name,
						projectId:  projectId,
						datasets: 	[{
							label: 	item.name,
							data: 	data
						}],
						updatedAt:  utilities.getNow(),
						createdAt:  utilities.getNow() 
					}));

				}
				reader.readAsText(file);
			}			
		}
	},

	createSingleGraph: ( files, projectId ) => {

		return ( dispatch ) => {
			utilities.manageAsyncTasks(files, (item, idx, callback) =>{
				let reader = new window.FileReader();
				reader.onloadend = ( e ) => {
					let data = loadCSV(e.target.result);
					callback({
						label: 	item.name,
						data: 	data,
						borderColor: utilities.randomColor()
					});

				},
				reader.readAsText(item);				
			}, ( graphArray ) => {
				dispatch(graphActions.insertGraph({
					name: 		"upload " + utilities.getNow(),
					projectId:  projectId,
					datasets: 	graphArray,
					updatedAt:  utilities.getNow(),
					createdAt:  utilities.getNow() 
				}));				
			});
		
		}
	},	

	insertGraph: ( graph ) => {
		Graphs.insert(graph);
		return graphActions.updateList();
	},

	updateList: ( projectId ) => {
		return {
			type: 		'UPDATE_GRAPHS_LIST',
			graphs: 	Graphs.find({  }).fetch()
		}
	},

	removeGraph: (graphId ) => {
		Graphs.remove(graphId);
		return graphActions.updateList();
	},

	subscribed: ( projectId ) => {
		return {
			type: 'GRAPHS_SUBSCRIBED',
			graphs: Graphs.find({  }).fetch()
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
		const rowArray = row.split(",")
		return {
			x: rowArray[0],
			y: rowArray[1]
		};
	});
}

export default graphActions;