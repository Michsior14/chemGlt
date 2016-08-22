import React, {Component, PropTypes} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import AppNavigation from "./AppNavigation";


const muiTheme = getMuiTheme({});
const propTypes = {
    main: PropTypes.object.isRequired
};

// App component - represents the whole app
class App extends Component {
    constructor(props) {
        injectTapEventPlugin();
        super(props);
        this.state = {
            openedLeft: {
                toggled: false,
                style: {
                    marginLeft: 0
                }
            }
        }
        this.tappedLeftNavHandle = this.tappedLeftNavHandle.bind(this);
    }

    tappedLeftNavHandle() {
        if (!this.state.openedLeft.toggled) {
            this.setState({
                openedLeft: {
                    toggled: true,
                    style: {
                        marginLeft: 256
                    }
                }
            });
        } else {
            this.setState({
                openedLeft: {
                    toggled: false,
                    style: {
                        marginLeft: 0
                    }
                }
            });
        }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={this.state.openedLeft.style}>
                    <AppNavigation tappedLeftNav={this.tappedLeftNavHandle}/>
                    {this.props.main}
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = propTypes;

export default App;