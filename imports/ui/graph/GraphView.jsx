import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import DropZone from "react-dropzone";

import {Table, TableBody, TableHeader, TableHeaderColumn } from "material-ui/Table";
import { TableRow, TableRowColumn } from "material-ui/Table";
import { Line } from "react-chartjs-2";

import graphActions from "/lib/actions/graph";
import { subscribeGraphs } from "/imports/helpers/subscribers";


const mapStateToProps = (state, ownProps) => {
    return {
		states: {
			projectId: 	state.graphReducer.projectId,
			graph: 	state.graphReducer.graphs.find(( item ) => {
                return (item._id === ownProps.params.graphId);
            })
		}
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        handlers: {
        	reloadView: ( projectId ) => {
        		subscribeGraphs(dispatch, projectId);
        	},
        }
    }
}


class GraphView extends Component {

	componentWillMount() {
		const handlers = this.props.handlers;
		const params = this.props.params;
		const states = this.props.states;
		if (params.projectId !== states.projectId){
			handlers.reloadView(params.projectId);
		}
	}
	
	render(){
		const handlers = this.props.handlers;
		const states = this.props.states;
        const params = this.props.params;

		let graphObject = (<h3>Rendering graph..</h3>);
		if (states.graph ) {
			const datasets = states.graph.datasets.map(( item ) => {
				const borderColor = "rgba(" + 
				Math.floor(Math.random() * 255) + ", " + 
				Math.floor(Math.random() * 255) + ", " + 
				Math.floor(Math.random() * 255) + ", 1)";
				return Object.assign({}, item, {
					fill: false
				});
			});
			graphObject = (
				<Line
				data={{
					datasets: datasets
				}} 
				options={{
					scales: {
						xAxes: [{
							type: 'linear',
                			position: 'bottom'							
						}]
					}
				}} 
				redraw />
			);
		} 
        const graphName = states.graph ? states.graph.name : "";
        // let graphDatasets = states.graph ? states.graph.datasets : [];
		return (
			<div>
                <h1>{graphName}</h1>
                <br/>
				<div>
					{graphObject}
				</div>
			</div>
		);
	}
	
}


GraphView = connect(
	mapStateToProps,
	mapDispatchToProps
)(GraphView);

export default GraphView;