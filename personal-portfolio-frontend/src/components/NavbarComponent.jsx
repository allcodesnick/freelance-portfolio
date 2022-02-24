import React, { Component } from 'react';

class NavbarComponent extends Component {
    
    render() {
        return (
            <div>
                <div class="navbar-nav">
                        <a className="nav-item nav-link active" href="/home">Home <span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/#">Projects</a>
                        <a className="nav-item nav-link disabled" href="/#">Services</a>
                </div>
            </div>
        );
    }
}

export default NavbarComponent;