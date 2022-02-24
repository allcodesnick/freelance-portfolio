import React, { Component } from 'react';

class NavbarComponent extends Component {
    
    render() {
        return (
            <div>
                <div class="navbar-nav">
                        <a className="nav-item nav-link" href="/">Home</a>
                        <a className="nav-item nav-link" href="/services/view-all">Services</a>
                        <a className="nav-item nav-link disabled" href="/#">Projects</a>
                </div>
            </div>
        );
    }
}

export default NavbarComponent;