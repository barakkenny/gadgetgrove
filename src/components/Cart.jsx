import { useSelector } from "react-redux"
import Products from './Products'

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.item)

  return (
    <div>
      Cart page
      <Products />
    </div>
  )
}

export default Cart
