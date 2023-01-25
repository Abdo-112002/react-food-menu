import React from 'react'
import CartDesign from './CartDesign';
import SectionTitle from './SectionTitle';

function FruitShop() {
  let productsImg = [
    '../public/product5.png',
    '../public/product6.png',
    '../public/product7.png',
    '../public/product8.png',
    '../public/product9.png',
    '../public/product10.png',
    '../public/product11.png',
    '../public/product12.png',
]

    return (
    <section className='FruitShop sec-padding'>
        <div className='container'>
            <SectionTitle sectionTitle={'Fruit Shop'} />
            <div className='row justify-content-between align-items-center row-gap'>
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

export default FruitShop;
