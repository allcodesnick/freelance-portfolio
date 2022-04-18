import React, { Component } from 'react';
import '../Banner.css';
import portfolioImage from '../images/my_image.jpeg';


class BannerComponet extends Component {

    render() {
        return (
            <div id='outer-banner'>
                <div id='banner-card'>
                    <h1 id='banner-header'>"Hello World!"</h1>
                    <br />
                    <img src={portfolioImage} alt="profileImage"/>
                    <br />
                    <br />
                    <p>About me:<br /> &emsp; Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.About me: Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
                        </p>
                    
                </div>
            </div>
            
        );
    }
}

export default BannerComponet;