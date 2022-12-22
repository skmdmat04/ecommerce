import React, { useState } from 'react'
import { useStateValue} from '../functionality/StateProvider'
import { repeatedItem } from '../functionality/reducer';
import './Details.css'
const Details = () => {
    const [show,setShow]=useState(false)
    const [state,dispatch]=useStateValue();
    const {id,title,price,rating,image}=state.product
    const [count,setCount]=useState(repeatedItem(state.cart,id));
    console.log(state.product)
  const add=()=>{
    dispatch({
        type:"Add To Cart",
        item:{id,title,price,rating,image}
    })
    setCount(repeatedItem(state.cart,id))
  }
  const deleteItem=()=>{
    dispatch({
        type:"Remove From cart",
        id:id
    })
    setCount(count-1)
    if(count===1)
    setShow(true)
  }
  return (
    <div className='product'>
      <img src={state.product.image} className="product_image"/>
      <div className='product_details'>
        <strong>${state.product.price}</strong>
        <p>{state.product.title}</p>
        <div className='product_rating'>
        {
            Array(state.product.rating).fill().map((val,i)=><span key={i}>*</span>)
        }
        </div>
    </div>
      <div>
      <button className='product_button' onClick={add}>Add</button>
      <strong>{count}</strong>
      <button className='product_button' onClick={deleteItem} disabled={show}>Delete</button>
      </div>
    </div>
  )
}

export default Details
