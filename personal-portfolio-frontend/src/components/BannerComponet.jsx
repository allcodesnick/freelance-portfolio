import React, { Component } from 'react';
import '../Banner.css';
import portfolioImage from '../images/my_image.jpeg';


class BannerComponet extends Component {
    render() {
        return (
            <div id='outer-banner'>
                <div id='banner-card'>
                    <div class="row g-0">
                        <div class="col-sm-6 col-md-8">
                            <h1>Hello World!</h1>
                            <p>About me: Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the</p>
                        </div>
                        <br />
                        <div class="col-6 col-md-4">
                            <img src={portfolioImage} alt="profileImage" id='profile-image' className='img'/>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default BannerComponet;