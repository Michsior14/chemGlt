import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DropZone from 'react-dropzone';

import { Table, TableBody, TableHeader, TableHeaderColumn } from 'material-ui/Table';
import { TableRow, TableRowColumn } from 'material-ui/Table';


const mapStateToProps = (state, ownProps) => {

    return {

    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {
        	onGraphDrop: ( files ) => {
        		console.log('Files:');
        		console.log(files);
        	}
        }
    }
}

let  GraphList = ({ handlers }) => {
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

					</TableRow>
				</TableHeader>
			</Table>
		</div>
	);
}


 GraphList = connect(
	mapStateToProps,
	mapDispatchToProps
)(GraphList);

export default GraphList;