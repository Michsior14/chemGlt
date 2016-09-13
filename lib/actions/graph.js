import {Meteor} from "meteor/meteor";

import Projects from "/lib/collections/projects";

const graphActions = {

	createGraphs: ( files, projectId ) => {
		let actions = this;

		return ( dispatch ) => {
			for(let file of files){
				let reader = new window.FileReader();
				reader.onloadend = ( e ) => {
					txtFile = e.target.result;
					graphArray = loadCSV(txtFile);
					console.log(graphArray);
				}
				reader.readAsText(file);
			}			
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