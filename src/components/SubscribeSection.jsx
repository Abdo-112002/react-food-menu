


import React , {useEffect}from 'react';
import {AiFillInstagram ,AiFillFacebook,AiFillTwitterSquare} from 'react-icons/ai'

import AOS from 'aos';
import 'aos/dist/aos.css';

function SubscribeSection() {

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <section className='Subscribe' data-aos="fade-up">
        <div className='Subscribe__info'>
            <div className='container'>
                <div className='row justify-content-between align-items-center column-gap'>
                        <div className='Subscribe__info--title'>
                            <h2>Subscribe to newsletter </h2>
                            {/* <h2>to newsletter</h2> */}
                        </div>
                        <div className='Subscribe__info--input'>
                            <input type='text' placeholder='join'/>
                            <button>Subscribe</button>
                        </div>
                </div>
            </div>
        </div>
        <div className='Subscribe__social' data-aos="fade-right">
                <h3 className='heading'>Social Media</h3>
                <span className='icon'>
                    <AiFillInstagram size={25} color={"#fff"}/>
                </span>
                <span className='icon'> <AiFillFacebook size={25} color={"#fff"}/></span>
                <span className='icon'> <AiFillTwitterSquare size={25} color={"#fff"}/></span>
            
        </div>
    </section>
  )
}

export default SubscribeSection
