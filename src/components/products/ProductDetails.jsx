import React, { useState, useEffect } from 'react';
import useProductDetails from '../../utils/useProductDetails';
import "./ProductDetails.css";
import { gadgetData } from '../../utils/data';


function ProductDetails() {
  const [productDetailImageList, setProductDetailsImageList] = useState(gadgetData)
  const productDetails = useProductDetails()

  // const productItemsImage = productDetails.productDetailsImage.map(productDetailImage)

  useEffect(()=> {
    function fetchProductImage(){
      setProductDetailsImageList(gadgetData.productDetailsImages);
    }
    fetchProductImage()
  },[])

return (
    <>
       <section className='products__details__container'>
        <section className='products__details__content'>

        <section>
          {productDetails.productDetailsImages.map(hello => {console.log(hello)})}
        </section>

        <section>
          {productDetails.name}
        </section>

        <section>{productDetails.company}</section>
        </section>
        </section>
      
      
    
    </>
  )
}



export default ProductDetails
