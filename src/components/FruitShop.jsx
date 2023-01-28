import React from 'react'
import CartDesign from './CartDesign';
import SectionTitle from './SectionTitle';

function FruitShop() {
  let productsImg = [
    './product5.png',
    './product6.png',
    './product7.png',
    './product8.png',
    './product9.png',
    './product10.png',
    './product11.png',
    './product12.png',
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
