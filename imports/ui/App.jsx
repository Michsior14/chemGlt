import React, { Component, PropTypes } from 'react';
import { AppBar, FlatButton } from 'material-ui';
import MaterialUIHelper from './helpers/MaterialUIHelper';


// App component - represents the whole app
export default class App extends Component {
    constructor(props){
        MaterialUIHelper.configure(App);
        super(props);
    }
    
    handleTouchTap() {
        alert('Test TouchTap');
    }
    
    getChildContext() {
        return { muiTheme: MaterialUIHelper.getBaseTheme()};
    }

    render() {
        return (
            <div>
                <AppBar
                    title={<span style={this.props.styles.title}>ChemGit</span>}
                    onTouchTap={this.handleTouchTap}
                    />
                    {this.props.main}
            </div>
        );
    }
}

App.propTypes = {
        styles: PropTypes.object.isRequired,
        main: PropTypes.object.isRequired
};
    
App.defaultProps = {
    styles: {
        title: {
            cursor: 'pointer'
        }
    }
};
