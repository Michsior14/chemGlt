import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavbarApp extends Component {
    render() {
        return (
          <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">ChemGit</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">Home</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">Sign in</NavItem>
                <NavItem eventKey={2} href="#">Sign up</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>            
        );
    }
};
