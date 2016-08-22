import React, {Component, PropTypes} from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

const pages = [
    {
        name: 'First',
        route: ''
    }, {
        name: 'Second',
        route: ''
    }
]

class NavigationMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                <Drawer
                    open={this.state.open}
                >
                    {pages.map(page => (
                        <MenuItem
                            key={page.name}>
                            {page.name}
                        </MenuItem>
                    ))}
                </Drawer>
            </div>
        );
    }
}

export default NavigationMenu;