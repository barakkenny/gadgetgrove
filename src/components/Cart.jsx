import { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
import { removeItem, clearCart} from "@/utils/cartSlice"
import Header from "./Header";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items)
  const count = useSelector((store) => store.itemQuantity.value)
  console.log('Cart Items:', cartItems)
  console.log('number of item', count)
  


  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section> 
      {cartItems.length === 0 ? (
        <section>
        <Header />
        <p className='h-screen flex items-center justify-center '>Your cart is empty...</p>
        </section>
      ) : (

        <>
        <Header />
        <section className="px-20 mt-10">
          <ul className=''> 
            <h2>My Cart Content</h2>
          {cartItems.map((item) => {
           const {id, name, price, image} = item
           return (
            <li key={id} className="flex gap-4 shadow-lg p-5">
              <img src={image} className='w-40' alt='product-image' />
              <div>
              <h2>{name}</h2>
              <h3>$ {price * count}</h3>
              <h3>Item Quantity - {count}</h3>
              <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
              </div>            
            </li>
            )
})}
          </ul>
          <button onClick={handleClearCart}>Clear Cart</button> 
          </section>
          
        </>
       )} 
    </section>
  )
}

export default Cart
