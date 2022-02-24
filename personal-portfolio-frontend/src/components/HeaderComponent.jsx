import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    render() {
        return (
           <div>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div>
                        <a href="https://github.com/allcodesnick" className="navbar-brand" target="_blank"rel="noreferrer" >Github Link</a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a className="nav-item nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-item nav-link" href="/services/view-all">Services</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-item nav-link disabled" href="/#">Projects</a>
                            </li>
                        </ul>
                    </div>
                </nav>
           </div>
        );
    }
}

export default HeaderComponent;