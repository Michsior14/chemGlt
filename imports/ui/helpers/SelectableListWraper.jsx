import React, {Component, PropTypes} from "react";

function SelectableListWrapper(ComposedComponent) {	
	const propTypes = {
		children: PropTypes.node.isRequired,
		defaultValue: PropTypes.number.isRequired,
	};

	const toReturn = class extends Component {
		constructor(props) {
			super(props);
			this.handleRequestChange = this.handleRequestChange.bind(this);
		}

		componentWillMount() {
			this.setState({
				selectedIndex: this.props.defaultValue,
			});
		}

		handleRequestChange(event, index) {
			if (index) {
				this.setState({
					selectedIndex: index,
				});
			}
		}

		render() {
			return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                    >
                    {this.props.children}
                </ComposedComponent>
            );
		}
    };
	toReturn.PropTypes = propTypes;

	return toReturn;
}

export default SelectableListWrapper;