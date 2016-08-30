import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn } from 'material-ui/Table';
import { TableRow, TableRowColumn } from 'material-ui/Table';



const mapStateToProps = (state, ownProps) => {

    return {

    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {

        }
    }
}

let  GraphList = ({ handlers }) => {
	return (
		<div>
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