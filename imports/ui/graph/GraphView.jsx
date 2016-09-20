import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

import { Line as LineChart } from "react-chartjs-2";

import graphActions from "/lib/actions/graph";
import { subscribeGraphs } from "/imports/helpers/subscribers";

import GraphMenu from "/imports/ui/graph/GraphMenu";

const mapStateToProps = (state, ownProps) => {
	return {
		states: {
			projectId: 	state.graphReducer.projectId,
			graph: 	state.graphReducer.graphs.find(( item ) => {
                return (item._id === ownProps.params.graphId);
            }),
			local: state.graphReducer.locals.find(( item ) => {
                return (item._id === ownProps.params.graphId);
            })
		}
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

	return {
		handlers: {
			reloadView: (projectId) => {
				subscribeGraphs(dispatch, projectId);
			},
		}
	};
};


class GraphView extends Component {

	componentWillMount() {
		const handlers = this.props.handlers;
		const params = this.props.params;
		const states = this.props.states;
		if (params.projectId !== states.projectId) {
			handlers.reloadView(params.projectId);
		}
	}

	render() {
		const handlers = this.props.handlers;
		const states = this.props.states;
		const params = this.props.params;

		let graphObject = (<h3>Rendering graph..</h3>);
		if (states.graph) {
			const datasets = states.graph.datasets.map((item) => {
				return Object.assign({}, item, {
					fill: false
				});
			});
			graphObject = (
				<LineChart
					data={{
						datasets: datasets
					}}
					options={{
						scales: {
							xAxes: [{
								type: "linear",
								position: "bottom"
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
                <h1 className="text-center">{graphName}</h1>
                <br/>
				<div className="row" >
					<div className="col-sm-offset-2 col-sm-6">
							{graphObject}
					</div>
					<div className="col-sm-4">
						<GraphMenu local={states.local} />
					</div>					
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