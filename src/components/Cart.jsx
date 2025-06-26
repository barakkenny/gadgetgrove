import { useState, useEffect} from 'react';
// import { useDispatch, useSelector } from "react-redux"
// import { removeItem, clearCart} from "@/utils/cartSlice"
import Header from "./Header";
import { motion } from 'framer-motion'
import { useCart } from '../custom/useCart';

const Cart = () => {
  const [showAnimation, setShowAnimation] = useState(false)
  const { cartItems, removeFromCart, clearCart, itemCount } = useCart();
  // const dispatch = useDispatch();
  // const cartItems = useSelector((store) => store.cart.items)
  // const count = useSelector((store) => store.itemQuantity.value)
  // const r = count + cartItems.id

  const amountInCart = cartItems.map((item) => item.price)
  const getTotalAmountInCart = amountInCart.reduce((acc, curr) => {
      return  acc + curr
   }, 0)

   const totalAmount = getTotalAmountInCart.toFixed(2)

  const handleRemoveFromCart = (id) => {
    // dispatch(removeItem(id));
  };

  // const clearCart = () => {
  //   // dispatch(clearCart());
  //   setShowAnimation(true)
  // };


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <section> 
      {cartItems.length === 0 ? (
        <section>
        <Header />
        <p className='h-screen flex items-center justify-center'>Your cart is empty...</p>
        </section>
      ) : (

        <>
        <Header />
        <section className="px-20 mt-10" >
          <ul className=''> 
            <h2>My Cart Content</h2>
          {cartItems.map((item) => {
           const {id, name, price, image} = item
           return (
            <motion.li key={id} animate={showAnimation && {x: -100}} transition={{duration: 5}} className="flex gap-4 shadow-lg p-5">
              <img src={image} className='w-40' alt='product-image' />
              <div>
              <h2>{name}</h2>
              <h3>$ {price * itemCount}</h3>
              <h3>Item Quantity - {itemCount}</h3>
              <button onClick={() => removeFromCart(id)}>Remove</button>
              </div>            
            </motion.li>
            )
})}
          </ul>
          <button onClick={clearCart}>Clear Cart</button> 
          <div>
           Total Item - ${totalAmount * itemCount}
          </div>
          </section>
          
        </>
       )} 
    </section>
  )
}

export default Cart
