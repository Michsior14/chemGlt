import React, {Component, PropTypes} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import AppNavigation from "./AppNavigation";


const propTypes = {
    main: PropTypes.object.isRequired
};
const muiTheme = getMuiTheme({});

// App component - represents the whole app
class App extends Component {
    constructor(props) {
        injectTapEventPlugin();
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppNavigation />
                    {this.props.main}
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = propTypes;

export default App;