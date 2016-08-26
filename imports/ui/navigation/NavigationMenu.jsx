import React, {Component, PropTypes} from "react";
import Drawer from "material-ui/Drawer";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import Subheader from "material-ui/Subheader";
import MakeSelectable from "material-ui/List/MakeSelectable";
import Divider from "material-ui/Divider";
import SelectableListWrapper from "../helpers/SelectableListWraper";
import {FlowRouter} from "meteor/kadira:flow-router";

const pages = [
    {
        subheader: 'Page menu'
    },
    {
        name: 'Home',
        route: '/',
    }, {
        name: 'Second',
        route: '/cos',
    }, {
        divider: true
    }, {
        subheader: 'Projects'
    }, {
        name: 'Word',
        route: '/word',
    }
];

const SelectableList = SelectableListWrapper(MakeSelectable(List));
class NavigationMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.path = FlowRouter.current().route.path;
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        const menuItems = (
            <SelectableList defaultValue={this.path}>
                {pages.map((page, index) => {
                    if(page.subheader){
                        return (
                            <Subheader
                                key={index}
                            >
                                {page.subheader}
                            </Subheader>
                        )
                    }
                    else if (page.divider) {
                        return (
                            <Divider
                                key={index}
                            />
                        )
                    } else {
                        return (
                            <ListItem
                                value={page.route}
                                key={page.name}
                                href={page.route}
                            >
                                {page.name}
                            </ListItem>
                        )
                    }
                })
            }
            </SelectableList>
        );

        return (
            <div>
                <Drawer
                    open={this.state.open}
                    children={menuItems}
                />
            </div>
        );
    }
}

export default NavigationMenu;