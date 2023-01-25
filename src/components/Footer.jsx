

import React from 'react'
import Logo from './Logo'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
           <div className='row justify-content-between align-items-center gap'>
                <Logo/>
                <div className='footer__links'>
                    <a href='#' className='footer__links--item'>Best Fruits</a>
                    <a href='#' className='footer__links--item'>Social Media</a>
                    <a href='#' className='footer__links--item'>More for You</a>
                    <a href='#' className='footer__links--item'>YourShoop</a>
                </div>
                <div className='footer__copyRight'>
                        The Copyright 2022 guide covers 14 jurisdictions. 
                </div>
           </div>
      </div>
    </footer>
  )
}

export default Footer
