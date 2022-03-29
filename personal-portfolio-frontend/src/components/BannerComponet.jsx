import React, { Component } from 'react';
import '../Banner.css';
import portfolioImage from '../images/portfolio-image.jpg';


class BannerComponet extends Component {
    render() {
        /** Grid layout CSS for header and p tag (id) */

        return (
            <div id='outer-banner'>
                
                
                <div id='banner-card'>
                    
                    <h1>Hello World!</h1>
                    <p>About me: Contrary to popular belief, Lorem Ipsum is not simply random text.
                         It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                           </p>
                </div>
                <div>
                        <img src={portfolioImage} alt="profileImage" id='banner-portfolio-image' width="250" height="400"/>
                    </div>
            </div>
            
        );
    }
}

export default BannerComponet;