import {Meteor} from "meteor/meteor";
import regression from "regression";

import Projects from "/lib/collections/projects";
import Graphs from "/lib/collections/graphs";
import utilities from "/imports/helpers/utilities";



const graphActions = {

	createMultipleGraphs: (files, projectId) => {

		return (dispatch) => {
			for (let file of files) {
				let reader = new window.FileReader();
				reader.onloadend = (e) => {
					let data = loadCSV(e.target.result);
					dispatch(graphActions.insertGraph({
						name: file.name,
						projectId: projectId,
						datasets: [{
							label: item.name,
							data: data
						}],
						updatedAt: utilities.getNow(),
						createdAt: utilities.getNow()
					}));

				};
				reader.readAsText(file);
			}
		};
	},

	createSingleGraph: (files, projectId) => {

		return (dispatch) => {
			utilities.manageAsyncTasks(files, (item, idx, callback) => {
				let reader = new window.FileReader();
				reader.onloadend = (e) => {
					let data = loadCSV(e.target.result);
					callback({
						origin: "dataset",
						label: item.name,
						data: data,
						borderColor: utilities.randomColor()
					});

				},
					reader.readAsText(item);
			}, (graphArray) => {
				dispatch(graphActions.insertGraph({
					name: "upload " + utilities.getNow(),
					projectId: projectId,
					datasets: graphArray
				}));
			});

		};
	},

	insertGraph: (graph) => {
		Graphs.insert(Object.assign(graph, {
			updatedAt: utilities.getNow(),
			createdAt: utilities.getNow()
		}));
		return graphActions.updateList(graph.projectId);
	},

	updateList: (projectId) => {
		return Object.assign(loadGraphList(projectId), {
			type: "UPDATE_GRAPHS_LIST"
		});
	},

	removeGraph: (projectId, graphId) => {
		Graphs.remove(graphId);
		return graphActions.updateList(projectId);
	},

	subscribed: (projectId) => {
		return Object.assign(loadGraphList(projectId), {
			type: "GRAPHS_SUBSCRIBED"
		});
	},

	orderSub: (projectId) => {
		return {
			type: "GRAPHS_ORDER_SUB",
			projectId: projectId
		};
	},
	refreshLocal: (local) => {
		return {
			type: "GRAPHS_REFRESH_LOCAL",
			local: local
		};
	},
	insertDataset: (graph, dataset) => {
		Graphs.update(graph._id, {
			$push: { datasets: dataset}
		});
		return graphActions.updateList(graph.projectId);
	},

	createFit: (graph, dataIdx, typeFit, degreeFit) => {
		const type = typeFit.toLowerCase();
		let rawData = getRawDataset(graph.datasets[dataIdx]);
		let fit = regression(type, rawData, degreeFit);
		console.log(fit);

		if (checkFitPoints(fit)) {
			return graphActions.insertDataset(graph, {
				origin: "fit",
				label: fit.string,
				data: convertIntoXY(fit),
				borderColor: utilities.randomColor()
			});
		}
		return graphActions.updateList(graph.projectId);
	}
};

function checkFitPoints(fit) {
	if ( fit.points.find(( item ) => isNaN(item[1])) ) {
		return false;
	}
	return true;
}

function convertIntoXY ( fit ) {
	return fit.points.map(( point ) => {
		return {
			x: point[0],
			y: point[1]
		}
	});
}


function getRawDataset( dataset ) {
	return utilities.deepCopy(dataset).data.map(( point ) => {
		return [ point.x, point.y ];
	});
}

function loadGraphList(projectId) {
	const graphs = Graphs.find({
		projectId: projectId
	}).fetch();
	return {
		graphs: graphs,
		locals: initGraphLocals(graphs)
	};
}

function initGraphLocals ( graphs ) {
	return graphs.map(( graph ) => {
		
		const datasets = graph.datasets.map(( item ) => {
			switch ( item.origin ) {
				case "dataset":
					return {
						label: item.label,
						origin: item.origin,
						menu: {
							expanded: 	false
						},
						fitting: {
							type: "POLYNOMIAL",
							degree: 1
						}
					};
				default:
					return {};
			}
		});
		return {
			_id: graph._id,
			name: graph.name,
			datasets: datasets
		};
	});
}


function loadCSV(txt) {
	return txt.split(/\r?\n/)
		.filter((row) => {
			return (row.indexOf(",") !== -1);
		})
		.map((row) => {
			const rowArray = row.split(",");
			return {
				x: rowArray[0],
				y: rowArray[1]
			};
		});
}

export default graphActions;