

import React from 'react'
import { AiFillFunnelPlot } from 'react-icons/ai'
import CartDesign from './CartDesign'
import SectionTitle from './SectionTitle'

function FavoriteFruits() {

    let productsImg = [
        './product1.png',
        './/product2.png',
        './product3.png',
        './product4.png',
    ]

  return (
    <section className='favoriteFruits sec-padding'>
        <div className='container'>
            <SectionTitle sectionTitle={'Favorite Fruits'} />
            <div className='row justify-content-between align-items-center row-gap column-gap'>
                {
                    productsImg.map((item,index)=> (
                        <CartDesign productsImg={item} key={index}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default FavoriteFruits
