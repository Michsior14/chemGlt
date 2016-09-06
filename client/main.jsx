import {Meteor} from "meteor/meteor";
import React from "react";
import { render } from 'react-dom';
import {DocHead} from "meteor/kadira:dochead"

import Root from "/imports/ui/Root"


const metaInfo = {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
};
DocHead.addMeta(metaInfo);

Meteor.startup(() => {
  render(<Root />, document.getElementById('render-target'));
});
