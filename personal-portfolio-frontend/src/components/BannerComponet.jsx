import React, { Component } from 'react';
import '../Banner.css';
import portfolioImage from '../images/portfolio-image.png';


class BannerComponet extends Component {
    render() {
        return (
            <div className='outer-banner'>
                <div>
                    <img src={portfolioImage} alt="" id='banner-portfolio-image' />

                </div>
                
                <div className='banner-card'>
                    <h1>Hello World!</h1>
                    <p>About me: </p>
                </div>
            </div>
            
        );
    }
}

export default BannerComponet;