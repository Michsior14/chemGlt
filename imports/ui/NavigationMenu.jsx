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
        this.handleChange = this.handleChange.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleChange(open) {
        this.setState({open: open});
    }

    render() {
        return (
            <div>
                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={this.handleChange}
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