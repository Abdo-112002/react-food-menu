
import React from 'react'
import Logo from './Logo';

import { CiLogin } from "react-icons/ci";
import { BiShoppingBag } from "react-icons/bi";

function Header({navRef}) {
  return (
    <header className='header'>
        <div className='container'>
            <div className='row justify-content-between align-items-center'>
                <Logo/>
                <nav className='header__nav' ref={navRef}>
                    <a href='#' className='header__nav--item'>favorite fruits</a>
                    <a href='#' className='header__nav--item'>fruit shop</a>
                    <a href='#' className='header__nav--item'>about us</a>
                    <div className='header__nav--icons'>
                        <CiLogin className='logIcon'/>
                        <div className='buy' > <BiShoppingBag /></div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
