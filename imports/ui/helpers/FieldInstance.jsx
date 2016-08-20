import React, {Component, PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'


export default class FieldInstance extends Component {
    render() {
        return (
            <FormGroup controlId={this.props.id}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl placeholder={this.props.placeholder} >
                </FormControl>
                <HelpBlock>{this.props.help}</HelpBlock>
            </FormGroup>
        );
    }
};
                    
                    
FieldInstance.propTypes = {
    id:             PropTypes.string.isRequired,
    type:           PropTypes.string.isRequired,
    label:          PropTypes.string,    
    placeholder:    PropTypes.string,
    help:           PropTypes.string
};
                    