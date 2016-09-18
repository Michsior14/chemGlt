import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import DropZone from "react-dropzone";

import {Table, TableBody, TableHeader, TableHeaderColumn } from "material-ui/Table";
import { TableRow, TableRowColumn } from "material-ui/Table";
import graphActions from "/lib/actions/graph";
import { subscribeGraphs } from "/imports/helpers/subscribers";


const mapStateToProps = (state, ownProps) => {
    return {
		states: {
			projectId: 	state.graphReducer.projectId,
			graphs: 	state.graphReducer.graphs
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

		return (
			<div>
                <h1>{params.projectId}</h1>
			</div>
		);
	}
	
}


GraphView = connect(
	mapStateToProps,
	mapDispatchToProps
)(GraphView);

export default GraphView;