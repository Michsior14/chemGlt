import {Meteor} from "meteor/meteor";

import Projects from "/lib/collections/projects";

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
						createdAt: 	Date.now(),
						updatedAt:  Date.now(),
						data: 		graphArray
					}));

				}
				reader.readAsText(file);
			}			
		}
	},

	insertGraph: ( graph, projectId ) => {
		const project = Projects.findOne({ _id: projectId });
		if ( project ){
			Projects.update(project, {
				$push: { graphs: graph }
			});
		}
		return {
			type: ''
			
		}
	},

	// updateGraphsList: ()

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