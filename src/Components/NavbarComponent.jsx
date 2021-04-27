import React, {Component} from 'react';
import { Nav, NavItem, NavLink, Col } from 'reactstrap';
import { FaBars } from "react-icons/all";

class NavbarComponent extends Component {
  
  // state = { burgerCheckBox: false };
  // onCheckChange = (e) => {
  //   console.log(e.target.checked);
  //   this.setState({ burgerCheckBox: e.target.checked });
  // };
  // closeMenu = () => {
  //   this.setState({ burgerCheckBox: false });
  // };

  render() {
  return (
    <Col md={3}>
      <p>Neha Setty</p>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Moodagent</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Songs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Play List</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Albums</NavLink>
        </NavItem>
      </Nav>
      
      </Col>
   );
  }
}

export default NavbarComponent;