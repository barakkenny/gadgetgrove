import { useEffect, useState } from 'react';
import useProductDetails from "@/utils/useProductDetails";
import {gadgetData} from '@/utils/data'
import {motion} from 'framer-motion'

const BuyNow = () => { 
  const [displayProduct, setDisplayProduct] = useState([]);
  const productDetails = useProductDetails(gadgetData);  
  const [onLongPress, setOnLongPress] = useState(false)


  console.log(productDetails)
 useEffect(() => {
  if (productDetails && productDetails.productDetailsImages) {
    setDisplayProduct(productDetails.productDetailsImages);
  }
}, [productDetails]);

  // if (!productDetails) return <div>No product here</div>;
  // if (error) return <div>Error: {error.message}</div>;
 

  return (
    <section>
      <img src={displayProduct.image} alt="" />
      {productDetails && productDetails.name}

    
    </section>
  );
};

export default BuyNow;
