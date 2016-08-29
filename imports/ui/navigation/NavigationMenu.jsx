import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Drawer from "material-ui/Drawer";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import Subheader from "material-ui/Subheader";
import MakeSelectable from "material-ui/List/MakeSelectable";
import Divider from "material-ui/Divider";
import SelectableListWrapper from "/imports/ui/helpers/SelectableListWraper";
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
let NavigationMenu = ({isOpen, path}) => {
    const menuItems = (
        <SelectableList defaultValue={path}>
            {pages.map((page, index) => {
                if (page.subheader) {
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
                open={isOpen}
                children={menuItems}
            />
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        isOpen: state.navigationReducer.isLeftNav,
        path: FlowRouter.current().path
    };
};

NavigationMenu = connect(
    mapStateToProps
)(NavigationMenu);

export default NavigationMenu;