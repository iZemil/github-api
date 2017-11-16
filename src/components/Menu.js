import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light>
          <div className="container">
            <NavbarBrand href="https://github.com/iZemil/github-api" className="mr-auto">React+Redux GitHub API example</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <Link to="/" className="nav-link">Главная</Link>
                </NavItem>
                <NavItem>
                  <Link to="/about" className="nav-link">Возможности</Link>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/iZemil/github-api">Посмотреть код</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://developer.github.com/v3/">Github API</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}