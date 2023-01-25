

import React , {useState} from 'react'
import Button from './Button'

function CartDesign({productsImg}) {
    const [quantity,setQuantity] =  useState(1);
  return (
    <div className='cart'>
        <div className='cart__img'>
            <img src={productsImg} alt='productsImg'/>
        </div>
        <div className='cart__details'>
            <h3 className='heading'>Ananas</h3>
            <p className='desc'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
            <div className='price'>
                <span className='new-price'>39$</span>
                <span className='old-price'>59$</span>
            </div>
            <div className='buttons-control d-flex align-items-center column-gap'>
                <div className='quantity-btn'>
                    <span className='increment' onClick={()=> setQuantity(quantity+1)}>+</span>
                    <span className='quantity'>{quantity}</span>
                    <span className='decrement' onClick={()=> setQuantity((prev)=> prev > 1 ? prev-1 : prev)}>-</span>
                </div>
                <Button>buy now</Button>
            </div>
        </div>
    </div>
  )
}

export default CartDesign
