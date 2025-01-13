import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <div>
            <Navbar bg="light" expand='md' as='header' role='navigation' className="border border-1">
                <Navbar.Brand as={NavLink} to={'/dashboard'} >Task Management Application</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='' />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="align-items-center mr-auto" as='nav' role="menubar">
                        <Nav.Link as={NavLink} to='/dashboard' role='menuitem' >Dashboard</Nav.Link>
                        <Nav.Link as={NavLink} to='/create-task' role='menuitem' >Add a Task</Nav.Link>
                        <Login />
                        <Logout />
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;