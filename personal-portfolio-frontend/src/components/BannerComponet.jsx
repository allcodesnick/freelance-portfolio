import React, { Component } from 'react';
import '../Banner.css'


class BannerComponet extends Component {
    render() {
        return (
            <div className='outer-banner'>
                <div className='banner-card'>
                    <h1>Hello World!</h1>
                    <p>About me: </p>
                </div>
            </div>
        );
    }
}

export default BannerComponet;