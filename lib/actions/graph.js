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
						origin: 'dataset',
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
		return Object.assign(loadGraphList(projectId), {
			type: 'UPDATE_GRAPHS_LIST'
		});
	},

	removeGraph: (graphId ) => {
		Graphs.remove(graphId);
		return graphActions.updateList();
	},

	subscribed: ( projectId ) => {
		return Object.assign(loadGraphList(projectId), {
			type: 'GRAPHS_SUBSCRIBED'
		});
	},

	orderSub: ( projectId ) => {
		return {
			type: 		'GRAPHS_ORDER_SUB',
			projectId: 	projectId
		}
	},

	refreshLocal: ( local ) => {
		return {
			type: 		'GRAPHS_REFRESH_LOCAL',
			local: 		local
		}
	}


}

function loadGraphList ( projectId ) {
	const graphs = Graphs.find({
		projectId: projectId
	}).fetch();
	return {
		graphs: graphs,
		locals: initGraphLocals(graphs)
	}
}

function initGraphLocals ( graphs ) {
	return graphs.map(( graph ) => {
		
		const datasets = graph.datasets.map(( item ) => {
			switch ( item.origin ) {
				case 'dataset':
					return {
						label: item.label,
						menu: {
							expanded: 	false
						},
						fitting: {
							type: 'POLYNOMIAL',
							degree: 1
						}
					};
				default:
					return {};
			}
		});
		return {
			_id: 				graph._id,
			name: 				graph.name,
			datasets:			datasets
		};
	});
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