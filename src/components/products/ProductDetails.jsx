import { useState, useEffect } from 'react';
import { gadgetData } from '../../utils/data';
import { useParams } from 'react-router-dom';


function ProductDetails() {
  const [product, setProduct] = useState(null); 

  const { productId } = useParams(); 

  useEffect(() => {
   
    const selectedProduct = gadgetData.find(item => item.id === parseInt(productId));
    setProduct(selectedProduct);
  }, [productId]);






  return (
    <div>
      {/* this is  product details page
      { product ? <div>{product.id}</div> : <p>Loading</p>} */}
    
    </div>
  )
}














export default ProductDetails
