import React, {Component, PropTypes} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import NavigationTop from "/imports/ui/navigation/NavigationTop";
import "flexboxgrid/dist/flexboxgrid.css";


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
                classNames: "navigation-closed"
            }
        };
        this.tappedLeftNavHandle = this.tappedLeftNavHandle.bind(this);
    }

    tappedLeftNavHandle() {
        if (!this.state.openedLeft.toggled) {
            this.setState({
                openedLeft: {
                    toggled: true,
                    classNames: "navigation-open"
                }
            });
        } else {
            this.setState({
                openedLeft: {
                    toggled: false,
                    classNames: "navigation-closed"
                }
            });
        }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className={this.state.openedLeft.classNames}>
                    <NavigationTop tappedLeftNav={this.tappedLeftNavHandle}/>
                    {this.props.main}
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = propTypes;

export default App;