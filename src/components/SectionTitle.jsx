

import React , {useEffect} from 'react';

import {BsArrowRight } from 'react-icons/bs';
import CustomSliderArrow from './CustomSliderArrow';

import AOS from 'aos';
import 'aos/dist/aos.css';

function SectionTitle({sectionTitle,type}) {

    useEffect(() => {
        AOS.init();
    }, [])


  return (
    <div className='sectionTitle' data-aos="fade-up">
        <div className='row align-items-center justify-content-between'>
            <div data-aos="fade-right" data-aos-duration="1500">
                <h2 className='title'>{sectionTitle}</h2>
            </div>
            {
                (type === 'slider') 
                ? (
                    <CustomSliderArrow data-aos="fade-left" data-aos-duration="1500"/>
                )
                : (
                    <div className='read-more' data-aos="fade-left"  data-aos-duration="1500">
                        <span>more</span>
                        <BsArrowRight/>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default SectionTitle
