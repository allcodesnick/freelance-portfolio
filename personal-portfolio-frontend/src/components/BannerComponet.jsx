import React, { Component } from 'react';
import '../Banner.css';
import portfolioImage from '../images/portfolio-image.jpg';


class BannerComponet extends Component {
    render() {
        return (
            <div id='outer-banner'>
                
                
                <div id='banner-card'>
                    <h1>Hello World!</h1>
                    <p>About me: </p>
                </div>
                <div>
                        <img src={portfolioImage} alt="" id='banner-portfolio-image' width="250" height="400"/>
                    </div>
            </div>
            
        );
    }
}

export default BannerComponet;