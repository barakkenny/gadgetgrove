import {useState, useEffect} from 'react'
import useProductDetails from "../../utils/useProductDetails";
import "./ProductDetails.css";
import Header from "../Header";
import { MdStarRate } from "react-icons/md";
import { addItem } from "@/utils/cartSlice";
import { samsungTv } from '@/utils/data';
import {incrementItem, decrementItem} from "@/utils/itemSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const SamsungTvDetails = () => {
  const [productDetailImageList, setProductDetailsImageList] = useState({});
  const [changeProductScreen, setChangeProductScreen] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)

    const productDetails = useProductDetails(samsungTv, 'tv');
    const dispatch = useDispatch()

  const cartItems = useSelector((store) => store.cart.items)
  const count = useSelector((store) => store.itemQuantity.value)
  
    useEffect(() => {
      if (productDetails && productDetails.productDetailsImages) {
        setProductDetailsImageList(productDetails.productDetailsImages);
      }
    }, [productDetails]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setChangeProductScreen(false)
        // setProductsClick(index)
      };
    
      // const handleAddItem = (productDetails) => {
      //  dispatch(addItem(productDetails))
      // }

      const isInCart = cartItems.some((item) => item.id === productDetails.id);
      
        const handleAddItem = (productDetails) => {
          
          if (!isInCart && count > 0) {
            dispatch(addItem(productDetails));
          } 
        }
      
        const handleItemIncrement = ()=> {
          if(!isInCart) {
            dispatch(incrementItem())
          }
        }
      
      
        const handleItemDecrement = ()=> {
          if(!isInCart) {
            dispatch(decrementItem())
          }
        }

  return (
    <>
    <Header />
      <section className="products__details__container">
        <section className="products__details__content">
          <section className="product__details__image__container">
            <img
             onClick={() => handleImageClick(productDetailImageList.imageOne)}
              // className="product__details__images"
              className={productDetailImageList.imageOne ? "product__details__images": "border__color"}
              src={`/${productDetailImageList.imageOne}`}
              alt="Product one"
            />
            <img
             onClick={() => handleImageClick(productDetailImageList.imageTwo)}
              className="product__details__images"
              src={`/${productDetailImageList.imageTwo}`}
              alt="Product two"
            />
            <img
            onClick={() => handleImageClick(productDetailImageList.imageThree)}
              className="product__details__images"
              src={`/${productDetailImageList.imageThree}`}
              alt="Product three"
            />
            <img
            onClick={() => handleImageClick(productDetailImageList.imageFour)}
              className={`product__details__images`}
              src={`/${productDetailImageList.imageFour}`}
              alt="Product four"
            />
            
          </section>

          
       <section className="image__screen__container">
          
            {selectedImage && (
              <img
              onClick={() => setSelectedImage(null)}
              className="image__screen"
              src={`/${selectedImage}`}
              alt="Selected Product"
          /> 
            )}
          {changeProductScreen && <img className="product__screen" src={`/${productDetailImageList.imageOne}`}/> }
            
            </section>

            <section>
            <h3>Brand: {productDetails.brand}</h3>
            <h3>Model: {productDetails.name}</h3>
            <h3>Availability: <span>Only {productDetails.countInStock} in Stock</span></h3>
            <h2 className='mt-3 font-bold w-[600px]'>{productDetails.description}</h2>
            <MdStarRate className='mt-2 text-yellow-500' />

            <div className="mt-2">
             <ul>
              <li>This is the best computer you can get</li>
              <li>This is the best computer you can get</li>
              <li>This is the best computer you can get</li>
              <li>This is the best computer you can get</li>
             </ul>
            </div>
            <p className='mt-6'>${productDetails.price}</p>
            <div className="flex items-center gap-6 mt-7">
              <div className="flex gap-4 border-2  py-2">
                <button onClick={handleItemDecrement} className="text-lg font-bold px-4 border-r-2">-</button>
                <h3 className="text-lg font-bold px-4">{count}</h3>
                <button onClick={handleItemIncrement} className="text-lg font-bold px-4 border-l-2">+</button>
              </div>
              <div className='flex gap-6'>
            <Link to='/buy-now'><button disabled={isInCart} className='bg-white text-black px-5 py-2.5 border-2 border-black cursor-pointer' onClick={()=>handleAddItem(productDetails)}>Add to Cart</button></Link>
            </div>
            </div>

            </section>
        </section>
      </section>
      </>
  )
}

export default SamsungTvDetails
