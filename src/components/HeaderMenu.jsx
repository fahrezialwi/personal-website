import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap'
import '../styles/header.css'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Navbar light expand="md" className="navbar-menu">
        <div className="container">
          <Link className="navbar-logo-menu" to="/">
            {/* <img src='logo.png' width="80" alt="Fahrezi Alwi"/> */}
            <h2>FA</h2>
          </Link>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link mr-3" to="/portfolio">Portfolio</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link mr-3" to="/contact">Contact</Link>
            </NavItem>
          </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}

export default Header