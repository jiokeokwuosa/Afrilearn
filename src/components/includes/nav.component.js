import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem	
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./../pages/homepage/homepage.component";

const MyNav = props => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);	
				
	return (
		<Router>				 
			<Navbar color="light" light expand="md">			
				<NavbarBrand tag={Link} to="/">
					Afrilearn
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
                        <NavItem>
							<NavLink tag={Link} to="/">
								About
							</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret tag={Link} to="/">
								Explore
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem tag={Link} to="/">
									WAEC
								</DropdownItem>	
								<DropdownItem tag={Link} to="/">
									NECO
								</DropdownItem>	
								<DropdownItem tag={Link} to="/">
									JAMB
								</DropdownItem>
								<DropdownItem tag={Link} to="/">
									GCE
								</DropdownItem>							
							</DropdownMenu>
						</UncontrolledDropdown>                        		
					    <NavItem>
							<NavLink tag={Link} to="/">
								Blog
							</NavLink>
						</NavItem>
                        <NavItem>
							<NavLink tag={Link} to="/">
								Forum
							</NavLink>
						</NavItem>
                        <NavItem>
							<NavLink tag={Link} to="/">
								Contact
							</NavLink>
						</NavItem>
                        <NavItem>
							<NavLink tag={Link} to="/">
								Login
							</NavLink>
						</NavItem>
                        <NavItem>
							<NavLink className="bigbutton" tag={Link} to="/">
								Register
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>		
			<Switch>
				<Route exact path="/" component={Homepage} />
			</Switch>
		</Router>
	);
};
export default MyNav;