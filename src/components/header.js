import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this
            .toggleNavbar
            .bind(this);
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
                <Navbar color="faded" light>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/src/components/home.js">Home</NavLink>
                                <NavLink href="/src/components/about.js">About</NavLink>
                                <NavLink href="/components/">Life Style</NavLink>
                                <NavLink href="/components/">Projects</NavLink>
                                <NavLink href="/components/">Skills</NavLink>
                                <NavLink href="/components/">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
        );
    }
}
