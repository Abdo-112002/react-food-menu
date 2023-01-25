

import React , {useRef , useEffect} from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import {AiFillStar} from 'react-icons/ai';
import CustomSliderArrow from './CustomSliderArrow';

function CustomSlider() {

    const ref = useRef(null);
    useEffect(() => {
      console.log(ref.current);
    }, [])

    const SliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // prevArrow : <CustomSliderArrow prev={ref.current.slickPause}/>,
        // nextArrow : <CustomSliderArrow next={ref.current.slickNext}/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ],
        
    };

  return (
    <Slider ref={ref} arrows={false} {...SliderSettings}>
                <div className='slider-item'>
                    <div className='clint-profile d-flex align-items-center column-gap'>
                        <div className='clint-profile--img'>
                            <img src='../public/clint1.png' alt='clint-img'/>
                        </div>
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>
                    </div>
                    <div className='testimonial'>
                        <h3 className='heading'>Maria</h3>
                        <p className='desc'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        </p>
                    </div>
                </div>

                <div className='slider-item'>
                <div className='clint-profile d-flex align-items-center column-gap'>
                        <div className='clint-profile--img'>
                            <img src='../public/clint2.png' alt='clint-img'/>
                        </div>
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>
                    </div>
                    <div className='testimonial'>
                        <h3 className='heading'>Anna</h3>
                        <p className='desc'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        </p>
                    </div>
                </div>
                <div className='slider-item'>
                <div className='clint-profile d-flex align-items-center column-gap'>
                        <div className='clint-profile--img'>
                            <img src='../public/clint3.png' alt='clint-img'/>
                        </div>
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>
                    </div>
                    <div className='testimonial'>
                        <h3 className='heading'>Jessica</h3>
                        <p className='desc'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        </p>
                    </div>
                </div>
                <div className='slider-item'>
                <div className='clint-profile d-flex align-items-center column-gap'>
                        <div className='clint-profile--img'>
                            <img src='../public/clint1.png' alt='clint-img'/>
                        </div>
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>
                    </div>
                    <div className='testimonial'>
                        <h3 className='heading'>Maria</h3>
                        <p className='desc'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        </p>
                    </div>
                </div>
            </Slider>
  )
}

export default CustomSlider
