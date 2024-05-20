import React from 'react';
import useProductDetails from '../../utils/useProductDetails';
import "./ProductDetails.css";


function ProductDetails() {
  const ProductDetails = useProductDetails()


  return (
    <>
      { ProductDetails ?
       <section className='products__details__container'>
        <section className='products__details__content'>  
        <section>
          <img src={ProductDetails.image} alt="" />
        </section>
        <section>{ProductDetails.name}</section>
        <section>{ProductDetails.company}</section>
        </section>
        </section>
      : <p>Loading</p>
      
      }
    
    </>
  )
}



export default ProductDetails
