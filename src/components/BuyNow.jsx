import { useEffect, useState } from 'react';
import { gadgetData } from '@/utils/data';
import { useParams } from 'react-router-dom';
import useProductDetails from '@/utils/useProductDetails';
import Header from './Header';

const BuyNow = ({selectedProduct}) => { 
  const [displayProduct, setDisplayProduct] = useState(null);
  const {productId} = useParams(); // Get productId from the URL
  const productDetails = useProductDetails(); // Use the custom hook to get product details
  console.log(productId)
  console.log(selectedProduct)

  useEffect(() => { 
    if (productId) {
      console.log("✅ Setting displayProduct:", productId);
      setDisplayProduct(productId);
    }
  },[productId]);   

  // if (!displayProduct) return <div>Loading...</div>; // Handle loading state

  return (
    <section>
      <Header /> 
      <div>
        {productId}
        <h1></h1>
      </div>
    </section>
  )
};

export default BuyNow;
