import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
    state = { 
        clicked: false,
        windowExpand: false
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    handleExpand = () => {
        var ww = document.body.clientWidth;
        if (ww > 960) {
            this.setState({ windowExpand: false });
        }
    }
    render() {
        return (
            <>
                <nav className='NavbarItems'>
                    <h1 className='navbar-logo'>Logo</h1>
                    <div className='menu-icon' onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={this.state.clicked ? 'nav-links-expanded': item.cName} href={item.url} >
                                        {item.title}
                                    </a>
                                </li>    
                            )
                        })}
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navbar;
