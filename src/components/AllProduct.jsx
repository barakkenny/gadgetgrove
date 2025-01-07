/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const AllProduct = ({id, name, image}) => {
  return (
    <section>
      <img className="products__image" src={image} alt="" />
                        <section className="product__content">
                          <Link to={`/products/${id}`}>{name}</Link>
                          </section>
    </section>
  )
}

export default AllProduct
