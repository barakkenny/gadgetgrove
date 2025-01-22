import {useEffect, useState} from 'react'
import { useSelector } from "react-redux"
import useProductDetails from "@/utils/useProductDetails"
import { gadgetData } from "@/utils/data"

const BuyNow = () => {
  const [displayProduct, setDisplayProduct] = useState([])

  const products = useProductDetails(gadgetData, 'gadget');
  console.log(products)
   useEffect(()=> {
      if(products) {
        setDisplayProduct(products)
      }
   },[products])


  return (
    <section>
      
      <section>
        <ul>
              <li>
                <h2>{displayProduct?.name}</h2>
                <p></p>
                <img src={displayProduct?.image} alt='product-image' />
              </li>
        </ul>
      </section>
    </section>
  )
}

export default BuyNow
