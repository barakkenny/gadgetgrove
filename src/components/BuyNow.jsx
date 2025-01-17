import { useSelector } from "react-redux"


const BuyNow = () => {

    const cartItems = useSelector((store) => store.cart.items)


  return (
    <section>
      {/* {cartItems.length === 0 ? 
      <h3>Your cart is empty</h3> :
      cartItems.map((items) => {
        const {id, image, name, price} = items
        return <section key={id}>
            <img src={image} alt="item-image" />
            <h3>{name}</h3>
            <p>{price}</p>
        </section>
      })
      } */}
    </section>
  )
}

export default BuyNow
