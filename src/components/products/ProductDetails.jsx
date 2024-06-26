import React, { useState, useEffect } from "react";
import useProductDetails from "../../utils/useProductDetails";
import useOnlineStatus from "../../utils/useOnlineStatus";
import "./ProductDetails.css";

function ProductDetails() {
  const [productDetailImageList, setProductDetailsImageList] = useState({});
  const [changeProductScreen, setChangeProductScreen] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)
  const productDetails = useProductDetails();

  useEffect(() => {
    if (productDetails && productDetails.productDetailsImages) {
      setProductDetailsImageList(productDetails.productDetailsImages);
    }
  }, [productDetails]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setChangeProductScreen(false)
    setImageBorderColor(true)
  };

  // const onlineStatus = useOnlineStatus();
  // if(!onlineStatus) return <div>You are offline</div>

  return (
    <>
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
              className="product__details__images"
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

          <section>{productDetails.company}</section>
        </section>
      </section>
    </>
  );
}

export default ProductDetails;
