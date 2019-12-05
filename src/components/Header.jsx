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
            <Navbar dark expand="md" className="navbar-main">
                <div className="container">
                    <Link className="navbar-logo" to="/">
                        {/* <img src='logo.png' width="80" alt="Fahrezi Alwi"/> */}
                        FA
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