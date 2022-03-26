import React, { Component } from 'react';
import '../Banner.css'


class BannerComponet extends Component {
    render() {
        return (
            <div className='outer-banner'>
                <div>
                    <h1>This is a Banner</h1>
                    <p>About me: </p>
                </div>
            </div>
        );
    }
}

export default BannerComponet;