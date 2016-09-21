import {Meteor} from "meteor/meteor";
import React from "react";
import { render } from 'react-dom';

import Root from "/imports/ui/Root"

Meteor.startup(() => {
  render(<Root />, document.getElementById('render-target'));
});
