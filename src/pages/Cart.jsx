import { AppContext } from '@/context/AppProvider'
import { useContext } from 'react'

const Cart = () => {
    const { cartItems } = useContext(AppContext);
    
  return (
    <div>
      {cartItems.map((cart) => (
        <div key={cart?.id}>
            <img src={cart?.image} />
            <h2>{cart?.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Cart
