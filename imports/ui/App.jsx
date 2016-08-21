import React, { Component, PropTypes } from 'react';
import { AppBar, FlatButton } from 'material-ui'; 
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import MaterialUIHelper from './helpers/MaterialUIHelper';

import Task from './Task.jsx';


// App component - represents the whole app
export default class App extends Component {
    constructor(props){
        MaterialUIHelper.configure(App);
        super(props);
    }
    
    handleTouchTap() {
        alert('Test TouchTap');
    }
    
    getTasks() {
        return [
            { _id: 1, text: 'This is task 1' },
            { _id: 2, text: 'This is task 2' },
            { _id: 3, text: 'This is task 3' },
        ];
    }

    renderTasks() {
        return this.getTasks().map((task) => (
            <Task key={task._id} task={task} />
        ));
    }
    
    //Code to run material-ui, to replace by helper somehow
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme)};
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
