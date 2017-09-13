import React, {Component, PropTypes} from "react";

const propTypes = {
	children: PropTypes.node.isRequired
};

class EditorButtons extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row">
				{this.props.children}
			</div>
		);
	}
}
EditorButtons.propTypes = propTypes;

export default EditorButtons;