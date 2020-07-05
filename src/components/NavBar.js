import React from 'react'
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap'
import "../stylings/NavBar.css"

const NavBar = () => {
    return (
        <div id="nav-bar">
            <Navbar>
                <NavbarBrand href="#">Garden Planner</NavbarBrand>
            </Navbar>
        </div>
    )
};

export default NavBar;