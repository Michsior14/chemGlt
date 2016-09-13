import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import DropZone from "react-dropzone";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from "material-ui/Table";
import graphActions from "/lib/actions/graph";

const mapStateToProps = (state, ownProps) => {

    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {
        	onGraphDrop: ( files ) => {
        		const projectId = ownProps.params.projectId;
        		console.log('Files:');
        		console.log(files);

        		dispatch(graphActions.createMultipleGraphs(files, projectId));
        		

            }
        }
    }
}

let  GraphList = ({ handlers, states, params }) => {
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

				</TableBody>
			</Table>
		</div>
	);
}


 GraphList = connect(
	mapStateToProps,
	mapDispatchToProps
=======
};

let GraphList = ({handlers}) => {
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

                </TableBody>
            </Table>
        </div>
    );
};


GraphList = connect(
    mapStateToProps,
    mapDispatchToProps
>>>>>>> 57cace3bfc8162b0f1f6e488a6009496961451a2
)(GraphList);

export default GraphList;