import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/images/Banner/banner-11.jpg'
import banner2 from '../../../assets/images/Banner/banner-22.jpg'
import banner3 from '../../../assets/images/Banner/banner-33.jpg'
import banner4 from '../../../assets/images/Banner/banner-44.jpg'
import banner5 from '../../../assets/images/Banner/banner-55.jpg'
import banner6 from '../../../assets/images/Banner/banner-6.jpg'
import banner7 from '../../../assets/images/Banner/banner-77.jpg'
import banner8 from '../../../assets/images/Banner/banner-88.jpg'

const Banner = () => {
    return (
        <div>
          <Carousel >
               
               <div>
                <img src={banner1}/>
               </div>
                <div>
                    <img src={banner2} />
                </div>
               
                <div>
                    <img src={banner3} />
                </div>
                <div>
                    <img src={banner4} />
                </div>
                <div>
                    <img src={banner5} />
                </div>
                <div>
                    <img src={banner6} />
                </div>
                <div>
                    <img src={banner7} />
                </div>
                <div>
                    <img src={banner8} />
                </div>
               
            </Carousel>   
        </div>
    );
};

export default Banner;