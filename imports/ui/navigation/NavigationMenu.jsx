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

import { openDialog } from "/lib/actions/navigation";



const SelectableList = SelectableListWrapper(MakeSelectable(List));
let NavigationMenu = ({states, handlers}) => {
    let pages = null;
    if ( states.isLoggedIn ){
        pages = [
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
                name:           'Add Project',
                handlerTap:   handlers.addProject
            }
        ];
        for (let item of states.projectsList){
            pages.push({
                name: item.name
            });
        }

    }
    else {
        pages = [
            {
                subheader: 'You have to be logged in.'
            }
        ]
    }
    const menuItems = (
        <SelectableList defaultValue={states.path}>
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
                            onTouchTap={page.handlerTap}
                            key={page.name}
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
                open={states.isOpen}
                children={menuItems}
            />
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        states: {
            isLoggedIn:     state.accountReducer.isLoggedIn,
            projectsList:   state.projectsReducer.projectsList,
            isOpen:         state.navigationReducer.isLeftNav,
            path:           FlowRouter.current().path
        }
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlers: {
            addProject: () => {
                dispatch(openDialog('CREATE_PROJECT'))
            }
        }
    }
};

NavigationMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationMenu);

export default NavigationMenu;