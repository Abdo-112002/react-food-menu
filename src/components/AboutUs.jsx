

import React from 'react';
import SectionTitle from './SectionTitle';
import CustomSlider from './CustomSlider';



function AboutUs() {
    
  return (
    <section className='about-us sec-padding'>
      <div className='container'>
            <SectionTitle sectionTitle={'About Us'} type='slider'/>
            <CustomSlider />
        </div>
    </section>
  )
}

export default AboutUs
