import React, { Component, PropTypes } from 'react';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class MaterialUIHelper {
    static configure(reactComponent) {
        if(reactComponent.childContextTypes === undefined){
            reactComponent.childContextTypes = {};
        }
        reactComponent.childContextTypes.muiTheme = PropTypes.object.isRequired;
        newGetChildContext = () => {
            if(reactComponent.getChildContext === undefined){
                return { muiTheme: getMuiTheme(baseTheme)};
                alert("bvxcd");
            }
            alert("asdad");
            var superChildContext = reactComponent.getChildContext();
            superChildContext.muiTheme = getMuiTheme(baseTheme);
            return superChildContext;
        };
        reactComponent.getChildContext = newGetChildContext;
        
        injectTapEventPlugin();
    }
    
}

