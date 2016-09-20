import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import DropZone from "react-dropzone";
import { push as pushPath } from 'react-router-redux';

import {Table, TableBody, TableHeader, TableHeaderColumn } from "material-ui/Table";
import { TableRow, TableRowColumn } from "material-ui/Table";
import FlatButton from 'material-ui/FlatButton';
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
        	onGraphDrop: ( files ) => {
        		const projectId = ownProps.params.projectId;

        		dispatch(graphActions.createSingleGraph(files, projectId));
            },
			openGraph: ( projectId, graphId ) => {
				console.log("/project/" + projectId + "/graph/" + graphId);
				dispatch(pushPath("/project/" + projectId + "/graph/" + graphId));
			}
        }
    }
}


class GraphList extends Component {

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

		const graphs = states.graphs.map((item) =>
			<TableRow key={item._id} >
				<TableRowColumn>{item.name}</TableRowColumn>
				<TableRowColumn>{item.updatedAt}</TableRowColumn>
				<TableRowColumn>
					<FlatButton label="Open" primary={true} onTouchTap={() => {
						handlers.openGraph(params.projectId, item._id);
					}}  />
				</TableRowColumn>
			</TableRow>	
		);

		return (
			<div>
				<DropZone onDrop={handlers.onGraphDrop}>
					<div>
						Drop your data files to create graphs.
					</div>
				</DropZone>
				<br/>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn>Name</TableHeaderColumn>
							<TableHeaderColumn>Last Modified</TableHeaderColumn>
							<TableHeaderColumn>Actions</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody>
						{graphs}
					</TableBody>
				</Table>
			</div>
		);
	}
	
}


GraphList = connect(
	mapStateToProps,
	mapDispatchToProps
)(GraphList);

export default GraphList;