import { useState, useEffect } from 'react';
import { gadgetData } from '../../utils/data';
import { useParams, Link } from 'react-router-dom';


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


      <div className='routing'>
        <h3>Client Side Routing</h3>
      <Link to='/link'>this is a link tag</Link>

      <h3>Server Side Routing</h3>
      <a href="/link">this is an anchor tag</a>
      </div>
    </div>
  )
}














export default ProductDetails
