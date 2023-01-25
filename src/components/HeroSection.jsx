
import React , {useRef , useEffect} from 'react'
import Header from './Header';

import mainImg from '../assets/pngwing1.png'
import heroImg1 from '../assets/Rectangle3.png'
import heroImg2 from '../assets/Rectangle4.png'
import SocialLinks from './SocialLinks'
import  Button from './Button';

import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {

    useEffect(() => {
        AOS.init();
    }, [])

    const navRef =  useRef(null);
    const showNavbar = () => {
		navRef.current.classList.toggle("active");
	};

  return (
    <main className='hero'>
        <div className='hero__leftSec'>
            <div  className='hero__leftSec--icon' onClick={showNavbar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className='hero__rightSec'>
            {/* header component */}
            <Header navRef={navRef}/>

            {/* social links  component */}
            <SocialLinks/>

            {/* main hero section content */}
            <div className='container hero-content'>
                <div className='row justify-content-between'>
                    <div className='left-content' data-aos="fade-right">
                        <h3 className='date'><span>01</span>/02</h3>
                        <h3 className='heading'>Ananas</h3>
                        <p className='desc'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        </p>
                    </div>
                    <div className='center-img' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <img src={mainImg} alt='main-img'/>
                    </div>
                    <div className='right-content' data-aos="fade-left">
                        <h3 className='heading'>
                        Fruit
                        Delivery
                        </h3>
                        <p className='desc'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bottom-content row justify-content-between align-items-center '>
                <div className='wrapper' data-aos="fade-left">
                    <div className='img'>
                        <img src={heroImg1} alt='img'/>
                    </div>
                    <div className='info'>
                        <div className='info__item'>
                            <h3 className='heading'>Ananas</h3>
                            <p className='desc'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            </p>
                            <p className='desc'>
                            Amet minim mollit non deserunt ullamco 
                            </p>
                        </div>
                        <div className='info__item'>
                            <div className='price'>
                                <span className='new-price'>39$</span>
                                <span className='old-price'>59$</span>
                            </div>
                            <Button>buy now</Button>
                        </div>
                    </div>
                </div>
                <div className='wrapper' data-aos="fade-right">
                    <div>
                        <img src={heroImg2} alt='img'/>
                    </div>
                    <div className='info'>
                        <div className='info__item'>
                            <h3 className='heading'>Ananas</h3>
                            <p className='desc'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            </p>
                            <p className='desc'>
                            Amet minim mollit non deserunt ullamco 
                            </p>
                        </div>
                        <div className='info__item'>
                            <div className='price'>
                                <span className='new-price'>39$</span>
                                <span className='old-price'>59$</span>
                            </div>
                            <Button>buy now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default HeroSection
