import React, { Component } from 'react';
import '../Banner.css';
import portfolioImage from '../images/my_image.jpeg';


class BannerComponet extends Component {
    /** i might hae to change "col-6 col-md-4" for img and create a div to fill the image and resize automatically
     * <p>About me: Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                        <img src={portfolioImage} alt="profileImage" id='profile-image' className='img'/></p>
     */
    render() {
        return (
            <div id='outer-banner'>
                <div id='banner-card'>
                    <h1 id='banner-header'>"Hello World!"</h1>
                    <img src={portfolioImage} alt="profileImage"/>
                    <br />
                    <br />
                    <p>About me:<br /> Contrary to popular belief, Lorem Ipsum is not simply random text.
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