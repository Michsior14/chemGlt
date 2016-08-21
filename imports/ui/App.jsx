import React, { Component, PropTypes } from 'react';
import MaterialUIHelper from './helpers/MaterialUIHelper';

import AppNavigation from './AppNavigation';

// App component - represents the whole app
export default class App extends Component {
    constructor(props){
        super(props);
        MaterialUIHelper.configure(App);
    }
    
    getChildContext() {
        return { muiTheme: MaterialUIHelper.getBaseTheme()};
    }

    render() {
        return (
            <div>
                <AppNavigation />
                {this.props.main}
            </div>
        );
    }
}

App.propTypes = {
        main:   PropTypes.object.isRequired
};
