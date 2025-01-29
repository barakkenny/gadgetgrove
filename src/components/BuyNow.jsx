import {useEffect, useState} from 'react'
import { useSelector } from "react-redux"
import useProductDetails from "@/utils/useProductDetails"
import { gadgetData } from "@/utils/data"


const BuyNow = () => {
  const [displayProduct, setDisplayProduct] = useState(null)
  // const products = useProductDetails(gadgetData, 'gadget');
  // console.log(products)
  //  useEffect(()=> {
  //     if(products) {
  //       setDisplayProduct(products)
  //     }
  //  },[products])


  return (
    <section>
      
    </section>
  )
}

export default BuyNow
