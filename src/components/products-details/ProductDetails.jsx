import { useState, useEffect } from "react";
import useProductDetails from "../../utils/useProductDetails";
// import useOnlineStatus from "../../utils/useOnlineStatus";
import "./ProductDetails.css";
import Header from "../Header";
import { MdStarRate } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem } from "@/utils/cartSlice";


function ProductDetails() {
  const [productDetailImageList, setProductDetailsImageList] = useState({});
  const [changeProductScreen, setChangeProductScreen] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)
  const productDetails = useProductDetails();
  const [productsClick, setProductsClick] = useState(null);

  const dispatch = useDispatch()

  useEffect(() => {
    if (productDetails && productDetails.productDetailsImages) {
      setProductDetailsImageList(productDetails.productDetailsImages);
    }
  }, [productDetails]);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setChangeProductScreen(false)
    // setProductsClick(index)
  };

  const handleAddItem = (productDetails) => {
   dispatch(addItem(productDetails))
  }

  // const onlineStatus = useOnlineStatus();
  // if(!onlineStatus) return <div>You are offline</div>

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
              <button className="bg-black text-white" onClick={()=>handleAddItem(productDetails.name)}>add</button>
            </section>
        </section>
      </section>
      </>
   );
}

export default ProductDetails;
