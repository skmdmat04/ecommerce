import React from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../functionality/StateProvider'
const Product = ({id,title,price,rating,image}) => {
   const [{cart},dispatch]=useStateValue();
   const navigate=useNavigate();
    const addToCart=()=>{
     dispatch({
        type:"Add To Cart",
        item:{id,title,price,rating,image}
     })
    }
    const details=()=>{
      dispatch({
        type:"details",
        item:{id,title,price,rating,image}
      })
      navigate('/product-details')
    }
  
  return (
    <div className='product'>
      <img src={image} className="product_image" onClick={details}/>
      <div>
      <button className='product_button' onClick={addToCart}>Add To Cart</button>
      </div>
      
      <div className='product_details'>
        <strong>${price}</strong>
        <p>{title}</p>
        <div className='product_rating'>
        {
            Array(rating).fill().map((val,i)=><span key={i}>*</span>)
        }
        </div>
       
      </div>
    </div>
  )
}

export default Product
