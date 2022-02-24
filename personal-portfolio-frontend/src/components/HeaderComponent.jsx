import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    render() {
        return (
            <div>
                <nav className="navbar navbar-expend-md navbar-dark bg-dark">
                    <div>
                        <a href="https://github.com/allcodesnick" className="navbar-brand" target="_blank"rel="noreferrer" >Github Link</a>
                    </div>
                    <NavbarComponent />
                </nav>
            </div>
        );
    }
}

export default HeaderComponent;